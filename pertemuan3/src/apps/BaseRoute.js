import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChapterTwo } from "../modules/chapter-2";
import Auth from "../modules/chapter-2/widgets/authentications/Auth";
import ChapterOne from "../modules/chapter-1/ChapterOne";
import ChapterThree from "../modules/chapter-3";

export default function BaseRoute() {
    return (
        <React.Suspense>
            <Routes>
                <Route index element={<Home />}></Route>
                {/* <Route path="/" element={<ChapterOne />} /> */}
                {/* <Route path="sign-in" element={<Auth />} /> */}
                {/* <Route path="sign-out" element={<Auth />} /> */}
                <Route path="chapter-1" element={<ChapterOne />} />
                <Route path="chapter-2" element={<ChapterTwo />} />
                <Route path="chapter-3" element={<ChapterThree />} />
                {/* <Route path="home" element={<ChapterTwo />} /> */}
                <Route path="*" element={<div>Error 404: Page Not Found</div>} />
            </Routes>
        </React.Suspense>
    );
}

const Home = () => {
    return <h2>Home Page!</h2>;
  };