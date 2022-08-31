import React, { useState, useContext, useEffect } from 'react';
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

const EditDestination = (props) => {
  const [selectedDestination, setSelectedDestination] = useState({
    id: '',
    name: ''
  })
  const { destinations, editDestination } = useContext(GlobalContext);
  const navigate = useNavigate();
  const currentDestinationId = props.match.params.id

  useEffect(() => {
    const destinationId = currentDestinationId;
    const selectedDestination = destinations.find(destination => destination.id === Number (destinationId))
    setSelectedDestination(selectedDestination)
  }, [currentDestinationId, destinations])

const onSubmit = () => {
  editDestination(selectedDestination)
  navigate('/');
}

const onChange = (e) => {
  setSelectedDestination({...selectedDestination, [e.target.name]: e.target.value})
}
  return (
    <div>
      <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' name='name' value={selectedDestination.name}  onChange={onChange} placeholder='Enter Destination'></Input>
      </FormGroup>
      <Button type='submit'>Update Destination</Button>
      <Link to={"/"} className="btn btn-danger" style={{ marginLeft: '2px' }}>Cancel</Link>
    </Form>
    </div>
  )
}

export default EditDestination
