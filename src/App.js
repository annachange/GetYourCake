import React, {useState, useEffect} from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

import Register from './Register';
import Profile from './Profile';
import VerifyEmail from './VerifyEmail';
import Login from './Login';
import {AuthProvider} from './AuthContext';
import {auth} from './firebase';

import {onAuthStateChanged} from 'firebase/auth';
import PrivateRoute from './PrivateRoute';


// import FiltersBar from './components/FiltersBar';
// import MainViewCards from "./components/MainViewCards";
//import UserLogin from './UserLogin';



import './App.css';
import Home from "./Home";
import BakerProfilePage from "./components/BakerProfilePage";
import ProductSelectionPage from "./components/ProductSelectionPage";



function App() {

    const [currentUser, setCurrentUser] = useState(null)
    const [timeActive, setTimeActive] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [])


    return (
        <>
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
            <div className="App">
                <header>
                    <Navigation/>
                </header>
                <div className="content">
                    {/* Put your page content here */}
                    {/*<div className="content section">*/}
                    {/*    <FiltersBar/>*/}
                    {/*    <MainViewCards />*/}


                    {/*    /!*<UserLogin/>*!/*/}
                    {/*    <img src="/gyk_logo.png" className="App-logo" alt="logo"/>*/}
                    {/*    <p>Ordering a cake is a piece of cake</p>*/}
                    {/*</div>*/}

                        <Routes>
                            <Route path="/" element={ <Home/> } />

                            <Route path="bakerProfilePage" element={ <BakerProfilePage />} />
                            <Route path="productSelectionPage" element={ <ProductSelectionPage />} />

                            <Route exact path='profile' element={
                                <PrivateRoute>
                                    <Profile/>
                                </PrivateRoute>
                            }/>
                            <Route path="login" element={
                                !currentUser?.emailVerified
                                    ? <Login/>
                                    : <Navigate to='/' replace/>
                            } />
                            <Route path="register" element={
                                !currentUser?.emailVerified
                                    ? <Register/>
                                    : <Navigate to='/' replace/>
                            } />
                            <Route path='verify-email' element={<VerifyEmail/>} />

                        </Routes>



                </div>
                <Footer/>
            </div>
        </AuthProvider>
        </>
    );

}

export default App;
