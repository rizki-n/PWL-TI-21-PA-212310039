import React from 'react';
import Profile from './Profile';

const MyBio = (props) => {
    return (
        <div>
            <h1>Nama saya {props.name}</h1>
            <h2>Usia : {props.age}</h2>
        </div>
    );
}

export default MyBio;
