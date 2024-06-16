import React from "react";
import {Routes, Route} from 'react-router-dom';
import ChapterOnes from "../modules/chap1/ChapterOnes";

export default function BaseRoute() {
    return(
        <React.Suspense>
            <Routes>
                <Route index element={<ChapterOnes/>}></Route>
                <Route path="home" element={<Home/>}></Route>
            </Routes>
        </React.Suspense>
    )
}

const Home = () => {
    return(
        <h3>this is Home</h3>
    )
}