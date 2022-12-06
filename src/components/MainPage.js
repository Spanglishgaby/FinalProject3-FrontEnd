import React from "react";
import HeaderPage from "./HeaderPage";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
function MainPage() {
    return( 
        <>
        <Styleddiv>
            <Navbar/>
            <HeaderPage/>
            <Footer/>
        </Styleddiv>
        </>
    )
}
export default MainPage;

const Styleddiv = styled.div`
    
    background: url("https://images.unsplash.com/photo-1572932759882-bb34c848d1b3");
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;
    `