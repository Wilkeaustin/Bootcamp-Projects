import { Link, useParams } from 'react-router-dom';
import DestinationList from './DestinationList';

const SpecificDestination = () => {
    const { destinationId } = useParams();

    return (
        <section className='section destination'>
            <h2>{destinationId.value}</h2>
            <p>Are you sure you would like to edit this destination?</p>
            <Link style={{ marginRight: '2px' }} className='btn btn-success' to={"/EditDestination"}>Yes</Link>
            <Link className='btn btn-danger' to='/'>No</Link>
        </section>
    )
}

export default SpecificDestination;