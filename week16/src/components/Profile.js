import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { GlobalContext } from "../context/GlobalState";

function UserBurgers() {

    const {burgers, removeBurger} = useContext(GlobalContext);

    return (
        <div>
          <strong className="pfpHeader">Here you can see the burgers that you have created!</strong>
        <div className="profileCard">
            
        <ListGroup className="mt-4">
            {burgers.map(burger => (
               <ListGroupItem className="">
                    <strong className="burgerName">{burger.name}</strong>
                    <div className="editButtons">
                        <Link className="btn btn-warning mr-1" to={`/edit/${burger.id}`}>Edit</Link>
                        <Button onClick={() => removeBurger(burger.id)} color="danger">Delete</Button>
                    </div>
                </ListGroupItem> 
            ))}            
        </ListGroup>
        </div>  
        </div>
        
        
        
   )      
}

export default UserBurgers;