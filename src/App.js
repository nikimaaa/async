import './App.css';
import {useCallback, useEffect, useMemo, useState} from "react";
import axios from "axios";
import CoffeeList from "./components/CoffeeList";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    const onQueryChange = useCallback((event) => {
        setQuery(event.target.value);
    }, []);

    const filteredData = useMemo(() => {
        if(!data){
            return null
        }
        return data.filter((coffee) => coffee.title.toLowerCase().includes(query.toLowerCase()))
    }, [data, query]);

    useEffect(() => {
        const getCoffee = async () => {
            try{
                setLoading(true);
                const response = await axios.get("https://api.sampleapis.com/coffee/hot");
                setData(response.data);
            } catch (e){
                console.log(e)
            } finally {
                setLoading(false);
            }
        }
        getCoffee();
    }, []);

    if(loading){
        return <div>Loading...</div>
    }

    if(!filteredData){
        return null
    }

  return (
    <div className="App">
        <input type="text" value={query} onChange={onQueryChange} style={{
            width: "100%",
            fontSize: 30
        }}/>
        <CoffeeList data={filteredData}/>
    </div>
  );
}

export default App;
