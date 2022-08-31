import { render } from "@testing-library/react";
import { GlobalContext } from "../context/GlobalState";
import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
 
export const Creation = () => {

    const { addBurger } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = () => {
        const newBurger = {
            id: 4,
            name: 'Juicy Burger'
        }
        Creation(newBurger);
        history.push('/profile');
    }
    
       return (
        
        <Form onSubmit={onSubmit} style={{ maxWidth: '110rem', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem' }}>
            <FormGroup>
                <Label>Burger Name</Label>
                <Input type="text" placeholder="What is the name of the burger?"></Input>
                <Label>Restaurant Name</Label>
                <Input type="text" placeholder="What is the name of the restaurant?"></Input>
                <Label>Details</Label>
                <Input type="textarea" placeholder="Give a short description of the ingredients of the burger."></Input>
                <Label>Upload a Photo if You'd Like! (Optional)</Label>
                <Input type="file"></Input>                              
            </FormGroup>
            <Button type="submit">Submit</Button> 
        </Form>
    ) 
    }

export default Creation;