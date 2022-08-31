import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';


const DestinationList = () => {
  const { destinations, removeDestination } = useContext(GlobalContext);
  
  return (
    <ListGroup style={{ marginTop: '3px' }}>
      {destinations.map(destination => (
        <ListGroupItem style={{ display: 'flex' }}>
            <strong style={{ fontSize: '25px' }}>{destination.name}</strong>
            <div style={{ marginLeft: 'auto' }}>
            <Link className='btn btn-warning' style={{ marginRight: '1px' }} to={`/EditDestination/{destination.id}`}>Edit</Link>
            <Button onClick={() => removeDestination(destination.id)} color='danger'>Delete</Button>
            </div>
        </ListGroupItem>
      ))}
        
        
    </ListGroup>
  )
}

export default DestinationList
