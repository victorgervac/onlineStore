import Axios from "axios";
import React, { useEffect, useState } from "react" 
import { Card, Message, Icon, Button} from "semantic-ui-react"


const Items =()=>{
    const [items, setItems] = useState(([]));

    useEffect (()=>{
        Axios.get("/items/index")
        .then((res)=>{
            setItems(res.data);
            console.log("data",res.data);
        })
    
        .catch((err)=>{
            alert("Error: could not find Items")
        })
    },[])

    const renderItems = () => {
        if (items.length <= 0) return <h2>Sold Out</h2>;
            return items.map((item) => (
                <Card>
                    <Card.Content header={item.name} />
                    <Card.Content extra>
                    <Button animated='vertical'>
                        <Button.Content hidden>Add to Cart</Button.Content>
                        <Button.Content visible>
                        <Icon name='shop' />
                        </Button.Content>
                    </Button>
                    <span style={{ marginRight: "10px" }}></span>
                    <Icon name='dollar sign'/>{item.price}
                    
                    </Card.Content>
                </Card>
            ));
    }
    return (
        <div>
            <h1>Disruptor Store</h1>
            <Card.Group>{renderItems()}</Card.Group>
        </div>
    )
}
export default Items 