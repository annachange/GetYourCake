import React, {useState, useEffect} from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

import Register from './Register';
import Profile from './Profile';
import VerifyEmail from './VerifyEmail';
import Login from './Login';
import {AuthProvider} from './AuthContext';
import {auth, db} from './firebase';
import {collection, getDocs, addDoc} from "firebase/firestore";

import {onAuthStateChanged} from 'firebase/auth';
import PrivateRoute from './PrivateRoute';






import './App.css';
import Home from "./Home";
import BakerProfilePage from "./components/BakerProfilePage";
import ProductSelectionPage from "./components/ProductSelectionPage";
import {GetYourCakeContext} from './utils/GetYourCakeContext';




function App() {

    const [currentUser, setCurrentUser] = useState(null)
    const [timeActive, setTimeActive] = useState(false)

    const [bakers, setBakers] = useState([]);
    const [cakes, setCakes] = useState([]);

    const GetYourCakeC = {bakers: bakers, cakes: cakes};

    async function fetchBakers() {

        await getDocs(collection(db, "bakers"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setBakers(newData);
            })

    }

    async function fetchCakes() {

        await getDocs(collection(db, "cakes"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setCakes(newData);
            })

    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })

        fetchBakers();
        fetchCakes();
    }, [])


    // console.log(bakers)
    // console.log(cakes)

    return (
        <>
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
            <GetYourCakeContext.Provider value={GetYourCakeC}>
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

                                <Route path="bakerProfilePage/:id" element={ <BakerProfilePage />} />
                                <Route path="productSelectionPage/:cakeid" element={ <ProductSelectionPage />} />

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
            </GetYourCakeContext.Provider>
        </AuthProvider>
        </>
    );

}

export default App;
