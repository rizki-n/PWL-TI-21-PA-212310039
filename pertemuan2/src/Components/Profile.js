import React from 'react';
import MyBio from './MyBio';

export default function Profile() {
    const myData = {
    };

    const ClickMe = ({children}) => {
        return <button type='button'>{children}</button>

    }

    const HandlerAlert = () => {
        alert('hayolooo');
    }
    


    return (
        // <div>
        //     <MyBio {...myData}/>      
        // </div>
        
        <div>
            <h1>BIODATA:</h1>
            <MyBio name='rizki' age='80'/>
            <ClickMe onClickBtn={HandlerAlert}>
            CLICK MEEE!!</ClickMe>
        </div>
    );
}


