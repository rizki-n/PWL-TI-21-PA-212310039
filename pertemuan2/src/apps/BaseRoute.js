import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChapterOne from '../modules/widgets/ChapterOne';
import { ChapterTwo } from '../modules/Chapter2';
import Auth from '../modules/Chapter2/widgets/authentifications';

export default function BaseRoute() {
    return (
        <React.Suspense>
            <Routes>
                <Route index element={<ChapterOne/>} />
                <Route path='home' element={<ChapterOne/>} />
                <Route path='Chapter-1' element={<ChapterOne/>} />
                <Route path='Chapter-2' element={<ChapterTwo/>} />
                <Route path='sign-in' element={<Auth/>} />
                <Route path='sign-out' element={<Auth/>} />
                <Route path='home' element={<Home/>} />
            </Routes>
        </React.Suspense>
    );
}

const Home = () => {
    return <h3> aoa coba </h3>;
};
