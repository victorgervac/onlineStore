import Axios from "axios";
import React, { useEffect, useState } from "react" 
import { Card, Message} from "semantic-ui-react"


const Items =()=>{
    const [items, setItems] = useState(([]));

    useEffect (()=>{
        Axios.get("/items/index")
        .then((res)=>{
            setItems(res.data);
        })
    
        .catch((err)=>{
            alert("Error: could not find Items")
        })
    },[])

    const renderItems = () => {
       if(items.length <= 0 ){
           return <Message negative>
                    <Message.Header>We're sorry we are sold out</Message.Header>
                  </Message>;
        return items.map((item)=>(
            <Card></Card>
        ))
       }
    }
    return (
        
        <h1>Items go here</h1>
    )
}
export default Items 