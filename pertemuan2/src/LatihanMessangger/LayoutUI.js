import React, { Component } from 'react';
import Headers from './Headers';
import Footer from './Footer';

class LayoutUI extends Component {
    render() {
        return (
            //bungkus keseluruhan
            <div className="p-2 g-col-6">
                {/*bungkus Navbar*/}
                <div className=''>
                    <Headers/>
                </div>
                <div>
                    
                </div>
                <div>
                    <Footer/>
                </div>
                
            </div>
            
        );
    }
}

export default LayoutUI;
