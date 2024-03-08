import './App.css'
import { Outlet, RouterProvider } from "react-router-dom"
import { RozmatAka } from './RozmatAka';

function App() {
  return (
    <>
      <RouterProvider router={RozmatAka}/>
      <Outlet/>
    </>
  );
}


export default App;

