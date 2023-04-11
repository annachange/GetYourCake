import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Register from './Register';
import Profile from './Profile';
import VerifyEmail from './VerifyEmail';
import Login from './Login';
import {useState, useEffect} from 'react';
import {AuthProvider} from './AuthContext';
import {auth} from './firebase';
import {onAuthStateChanged} from 'firebase/auth';
import PrivateRoute from './PrivateRoute';
import {Navigate} from 'react-router-dom';
import './App.css';

function UserLogin() {

    const [currentUser, setCurrentUser] = useState(null)
    const [timeActive, setTimeActive] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [])

    return (
        <Router>
            <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
                <Routes>
                    <Route exact path='/' element={
                        <PrivateRoute>
                            <Profile/>
                        </PrivateRoute>
                    }/>
                    <Route path="/login" element={
                        !currentUser?.emailVerified
                            ? <Login/>
                            : <Navigate to='/' replace/>
                    } />
                    <Route path="/register" element={
                        !currentUser?.emailVerified
                            ? <Register/>
                            : <Navigate to='/' replace/>
                    } />
                    <Route path='/verify-email' element={<VerifyEmail/>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default UserLogin;