import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './Components/Navbar';
import Destinos from './Pages/Destinos';
import Form from './Pages/Form';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/destinos' element={<Destinos/>} />
        <Route path='/form' element={<Form/>}>
          <Route path=':destinoId' element={<Form/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

