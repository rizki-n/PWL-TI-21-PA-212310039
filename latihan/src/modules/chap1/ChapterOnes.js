import React, {Component} from "react";
import background from '../../assets/gambar.jpg'
import MessegersUI from "./widgets/messegers/components/MessegersUI";

export default class ChapterOnes extends Component {
    render() {
        const backgroundStyle={
            
                backgroundImage: `url(${background})`, /* Pastikan path ke gambar benar */
                backgroundSize: 'cover', /* Untuk memastikan gambar memenuhi kontainer */
                backgroundPosition: 'center', /* Untuk memastikan gambar berada di tengah */
                width: '100vw', /* Lebar penuh view width */
                height: '100vh', /* Tinggi penuh view height */
              
        }

        return(
            <div style={backgroundStyle}>
                <h1 className="text-center text-white fw-bold">Chapter One The Beginning</h1>
                <MessegersUI/>
            </div>
        )
    }
}