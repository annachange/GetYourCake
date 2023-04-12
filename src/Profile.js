// import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import BakerProfileSection from "./components/BakerProfileSection";
import React from "react";
import BakerViewCards from "./components/BakerViewCards";


function Profile() {
    const {currentUser} = useAuthValue()

    return (
        <div className='center'>
            <div className='profile'>
                <p><strong>Email: </strong>{currentUser?.email}</p>
                <p>
                    <strong>Email verified: </strong>
                    {`${currentUser?.emailVerified}`}
                </p>
                <h1>My profile card</h1>
                <BakerProfileSection />
                <h1>My cakes</h1>
                <BakerViewCards />



                {/*<span onClick={() => signOut(auth)}>Sign Out</span>*/}
            </div>
        </div>
    )
}

export default Profile