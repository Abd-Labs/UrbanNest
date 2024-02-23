

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Properties from "./pages/Properties"
import DashBoard from "./pages/DashBoard";
import CreateProperty from "./pages/CreateProperty";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./pages/Layout";
import Agents from "./pages/Agents";
import Profile from "./pages/Profile";
import Property from './pages/Property';
import Protected from "./components/utils/Protected";

function App() {

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected Component={Layout}/>
      ),
      children:[
        {
          path: "/",
          element: (
            <DashBoard/>
          ),
        },
    
        {
          path: "/Properties",
          element: (
            <Properties/>
          ),
        },
        {
          path: "/properties/create",
          element: (
            <CreateProperty/>
          ),
        },
        {
          path: "/property",
          element: (
            <Property/>
          ),
        },
        {
          path: "/agents",
          element: (
            <Agents/>
          ),
        },
        {
          path: "/agents/show",
          element: (
            <Profile/>
          ),
        },
      ]
    },
    {
      path:"/login",
      element:(
        <Login/>
      )
    },
    {
      path:"/signup",
      element:(
        <SignUp/>
      )
    },

  ]);

  return <RouterProvider router={router} />
  
}

export default App;
