import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login"
import Forgot from "./pages/auth/Forgot"
import Register from "./pages/auth/Register"
import Reset from "./pages/auth/Reset"
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";

import EditClient from "./pages/editClient/EditClient";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Contact from "./pages/contact/Contact";
import AddClient from "./pages/addClient/AddClient";
import ClientDetail from "./components/client/clientDetail/ClientDetail";






axios.defaults.withCredentials = true;
function App() {
  //para ver si esta logueado el usuario
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
   <BrowserRouter>
    <ToastContainer />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/forgot" element={<Forgot/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/resetpassword/:resetToken" element={<Reset/>}/>

    <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />
         <Route
          path="/add-client"
          element={
            <Sidebar>
              <Layout>
                <AddClient />
              </Layout>
            </Sidebar>
          }
        />
        {/* <Route
          path="/add-client"
          element={
            <Sidebar>
              <Layout>
                <AddClient />
              </Layout>
            </Sidebar>
          }
        /> */}
          <Route
          path="/product-detail/:id"
          element={
            <Sidebar>
              <Layout>
                <ClientDetail />
              </Layout>
            </Sidebar>
          }
        />
           <Route
          path="/edit-product/:id"
          element={
            <Sidebar>
              <Layout>
                <EditClient />
              </Layout>
            </Sidebar>
          }
        />
         <Route
          path="/profile"
          element={
            <Sidebar>
              <Layout>
                <Profile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <Sidebar>
              <Layout>
                <EditProfile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Sidebar>
              <Layout>
                <Contact />
              </Layout>
            </Sidebar>
          }
        />

   </Routes>
   </BrowserRouter>
  );
}

export default App;