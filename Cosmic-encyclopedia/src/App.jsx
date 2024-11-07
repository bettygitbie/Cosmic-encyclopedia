import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import NavLayout from './Layout/NavLayout';
import HomePage from './pages/HomePage';
import Planets from './pages/Planets';
import Galaxies from './pages/Galaxies';
import Stars from './pages/Stars';
import Mars from './planets/Mars';
import Venus from './planets/Venus';
import NavigateBack from './Layout/NavigateBack';

const route = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<NavLayout/>}>
    <Route path='/' element={<HomePage />} />
    <Route path='planets' element={<Planets />}>
      <Route path='planets/mars' element={<Mars />} />
      <Route path='planets/venus' element={<Venus />} />
    </Route>
    <Route path='galaxies' element={<Galaxies />} />
    <Route path='stars' element={<Stars />} />
  </Route>
  
))

function App() {
  

  return (
    <div>
      <RouterProvider router={route} />
      
    </div>
    
    
  )
}

export default App
