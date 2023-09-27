
import { useState, useEffect } from "react"
import CardCat from "../CardCat/CardCAt";
import './Fetch.css'
const Fetch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div className="contenedor">
        <div className="tarjeta">
            {data.map((cat) => { 
                return (
                    <div key={cat.id}>
                    <CardCat cat={cat}/>
                  </div>
                  ); 
            })}
          
        </div>
        </div>
    );
};

export default Fetch



