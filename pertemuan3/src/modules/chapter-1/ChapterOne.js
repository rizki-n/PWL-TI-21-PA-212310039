import React, { Component } from "react";
import background from "../../assets/gambar.jpg"; 
import MessegersUI from "../chapter-2/widgets/messegers/MessegersUI";


export default class ChapterOne extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${background})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      width: "100%" ,
      height: "85vh", 
      
    };

    return (
      <div style={backgroundStyle}> {/* Menambahkan style ke div */}
        <br/>
        <h1 className="text-center text-white fw-bold">
          Chapter One: The Beginning
        </h1>
        <MessegersUI 
            // profile={myprofile}
            // selectedUser={selectedUser}
            // selectedChat={selectedChat}
        />
      </div>
    );
  }
}
