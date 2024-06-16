import moment from "moment";
import React from "react";

export default function ChatBody({ data }) {
    // const listdata = data;
    const itsme = "Febry";
    //hasil debug dari file sebelumnya, 
    //rubah v.from menjadi v.from_id dan v.message menjadi v.messages 
    //agar pesan text dari DataChat bisa tampil
    return (
        <div className="chat-items">
            {data.map((v, index) => (
                <div className="chat-item"
                    style={styleChatItems.chatBubleItems}
                    key={index}>
                    <div className="chat text-white rounded my-2 p-2"
                        style={((v.from_id === itsme) ? //mengambil 'from_id' dari DataChat.js
                            styleChatItems.chatBubleSender : styleChatItems.chatBubleReceiver
                        )}>
                        <span className="me-3">{v.messages}</span>
                        <span className="chat-date"
                            style={{ fontSize: "11px" }}>
                            {moment(v.date).format("HH:mm")}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}


const styleChatItems = {
    chatBubleItems: {
        display: "flex",
        flexDirection: "column",
    },
    chatBubleSender: {
        textAlign: "right",
        backgroundColor: "#a198a7",
        alignSelf: "flex-end"
    },
    chatBubleReceiver: {
        backgroundColor: "#a83aef",
        alignSelf: "flex-start"
    },
};
