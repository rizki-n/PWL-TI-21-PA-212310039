import React, { useState } from "react";
import { ContactUI } from "./widgets/contacts";
import { Messegers, MyFriend } from "./widgets/constantas/DataChats";
import MessegersUI from "./widgets/messegers/MessegersUI";

export function ChapterTwo() {
    const myprofile = { id: "0419029203", name: "Febry" };

    // Pada komponen ChapterTwo update-lah kolom layer sebelah kanan yang seblumnya
    // menampilkan tulisan “Messeger disini” menjadi komponen MessegersUI beserta pengiriman
    // data dumy chatnya
    const [selectedUser, setSelectedUser] = useState(0);
    const [selectedChat, setSelectedChat] = useState([]);

    //Pada komponen ChapterTwo kita perlu membuat sebuah action untuk HandlerSelectedChat
    const HandlerSelectedChat = (data) => {
        setSelectedUser(data);
        const the_msg = [...Messegers];
        const findChatByUserID = the_msg.find(item => item.user_id === data.user_id);
        if (findChatByUserID) {
            setSelectedChat(findChatByUserID.messages);
        } else {
            setSelectedChat([]);
        }
    }
    

    return (
        <div id="chapter-2">
            <h1 className="text-white bg-primary rounded-2 p-3 mb-5">
                Chapter two: The Authentications and Messegers
            </h1>
            <div className="px-3">
                <div className="row">
                    <div className="col-2 col-lg-3 col-xxl-4 px-0">
                        {myprofile ? (
                            <ContactUI my_account={myprofile}
                                friends={MyFriend}
                                selectedUser={selectedUser}
                                HandlerSelectedChat={HandlerSelectedChat} />
                        ) : ""}
                    </div>
                    <div className="col-10 col-lg-9 col-xxl-8 px-0">
                        {/* (Messeging disini) */}
                        {myprofile ? (
                            <MessegersUI
                                profile={myprofile}
                                selectedUser={selectedUser}
                                selectedChat={selectedChat}
                            />
                        ) : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}