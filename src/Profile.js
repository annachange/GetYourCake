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
                <p><strong>Completed orders: </strong>15</p>
                <p><strong>Generated revenue: </strong>€725</p>
                <p><strong>Average order: </strong>€48</p>
                <p><strong>Unique customers: </strong>10</p>
                <h1>My profile card</h1>

                <h1>My cakes</h1>




                {/*<span onClick={() => signOut(auth)}>Sign Out</span>*/}
            </div>
        </div>
    )
}

export default Profile