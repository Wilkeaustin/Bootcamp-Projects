import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { Link } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditUser = () => {
    return (
        <Form style={{ paddingTop: '20px' }} className="container">
            <FormGroup>
                <Label>Burger Name</Label>
                <Input type="text" placeholder="What would you like to change the name to?"></Input>
            </FormGroup>
            <Button type="submit">Submit Change</Button>
            <Link to={'/'} className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default EditUser;