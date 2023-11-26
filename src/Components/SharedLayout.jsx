import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers";

const Home = () => {
    return(
        <>
            <Headers/>
            <Outlet/>
        </>
    )
}

export default Home;