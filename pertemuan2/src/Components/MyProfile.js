import React, { Component } from 'react';
import MyName from './MyName';


class MyProfile extends Component {
    
    render() {
        return (
            <div>
                <h1>Biodata:</h1>
                <MyName/>
            </div>
        );
    }
}

export default MyProfile;
