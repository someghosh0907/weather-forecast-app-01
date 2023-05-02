import React from "react";
import { FetchData } from "../components/FetchData";
import { Hero } from "../components/Hero";

export const Home = () => {
    return <div>
        <Hero />
        <FetchData/>
    </div>
};