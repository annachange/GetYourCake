import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import NavbarFirstPage from './components/NavbarFirstPage';
import MainViewCards from "./components/MainViewCards";
//import UserLogin from './UserLogin';



import './App.css';


function App() {
    return (
        <>
            <div className="App">
                <header>
                    <Navigation/>
                </header>
                <div className="content">
                    {/* Put your page content here */}
                    <div className="content section">
                        <NavbarFirstPage/>
                        <MainViewCards />


                        {/*<UserLogin/>*/}
                        <img src="/gyk_logo.png" className="App-logo" alt="logo"/>
                        <p>Ordering a cake is a piece of cake</p>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );

}

export default App;
