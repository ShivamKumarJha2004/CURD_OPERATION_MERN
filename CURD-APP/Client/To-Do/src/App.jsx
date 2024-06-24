import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Add from './components/addUser/Add';
import User from './components/addUser/User';
import Edit from "./components/addUser/edit"


function App() {
 const route=createBrowserRouter([
  {
    path:"/",
    element:<User></User>
  },
  {
    path:"/add",
    element:
    <>
    <Add></Add>
    
    </>
  },
  {
    path:"/edit/:id",
    element:<Edit/>
  }


 ])
 return(
<div className="appname">
<RouterProvider router={route}>

</RouterProvider>

</div>
);
}

export default App
