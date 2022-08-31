import { ReactDOM } from 'react';
import {
  BrowserRouter, 
  Routes, 
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import AddDestination from './components/AddDestination';
import EditDestination from './components/EditDestination';
import { GlobalProvider } from './context/GlobalState';


import 'bootstrap/dist/css/bootstrap.min.css';
import SpecificDestination from './components/SpecificDestination';

function App() {
  return (
    <div style={{maxWidth: '30rem', margin: "4rem auto"}}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AddDestination" element={<AddDestination />} />
            <Route path="EditDestination" element={<EditDestination />} />
            <Route path="EditDestination/:destinationId" element={<SpecificDestination />} /> 
            {/* <Route path='*' element={<Error />} />   */}
          </Routes>
        </BrowserRouter>

      </GlobalProvider>
          
        
    </div>
  );
}

export default App;
