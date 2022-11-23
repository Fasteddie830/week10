import React, {useEffect, useState, useCallback} from "react";
import MenuItems from "./MenuItems";

const FetchData = () => {
    const [foods, setFoods] = useState([{
        id:"",
        name:"",
        price:"",
        category:"",
        available:"",
    }]);

    const fetchData = useCallback(() => {
        const url = "http://localhost:3001/food";
        fetch(url)
        .then((response)=>response.json())
        .then((incomingData)=>{
            console.log(incomingData)
            setFoods(incomingData);
        })
        .catch((err) => console.error(err));
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return(
        <div>
            <MenuItems items={foods}/>
        </div>
    );
};
export default FetchData;