import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';


const AddDestination = () => {
  const [name, setName] = useState('')
  const { addDestination } = useContext(GlobalContext);
  const navigate = useNavigate();

const onSubmit = () => {
  const newDestination = {
    id: uuid(),
    name
  }
  addDestination(newDestination);
  navigate('/');
}

const onChange = (e) => {
  setName(e.target.value)
}

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={onChange} placeholder='Enter Destination'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to={"/"} className="btn btn-danger" style={{ marginLeft: '2px' }}>Cancel</Link>
    </Form>
  )
}

export default AddDestination;
