import React, { useEffect, useRef, useState, useMemo } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from "./components/ChatBody";
import moment from "moment";

                                    //menambahkan array kosong pada inisialisasi profile
export default function MessegersUI({ profile = {}, selectedChat, selectedUser, HandlerSendChat}) {
// mengubah nilai variable myChat sehingga komunikasi antara layer dapat
// berjalan secara asynchronous dengan memanfaatkan useMemo dan useEffec
    const [myChat, setMyChat] = useState([]);

    // Memasang kondisi jika belum memilih kontak pengguna
    const EmptyChat = () => {
        return (
            <div>
                <div className="info text-center">
                    <h1>No Conversations</h1>
                    <p>You didn't made any conversation yet,
                        please select username</p>
                    <span className="badge badge-primary">Start a chat</span>
                </div>
            </div>
        );
    };
    const StylesMessager = {
        chatBox: {
            minHeight: "200px",
            maxHeight: "45vh",
            overflowY: "auto",
        }
    };

    const [writeChat, setWriteChat] = useState("");
    const [search, setSearch] = useState([]);
    // const [searchMsg, setSearchMsg] = useState("");


    const endOfMessagesRef = useRef(null);
    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const ResultMessageData = useMemo(() => {
        let computedData = myChat.map((msg) => ({
            ...msg,
            date_fmt: moment(msg.date).format("YYYY-MM-DD"),
            isOutgoing: msg.from_id === profile.id
            // isOutgoing: profile && profile.id && msg.from_id === profile.id,
        }));
        // if (search.trim() !== "") {  // Pastikan search tidak hanya whitespace
        //     computedData = computedData.filter(
        //         msg => msg.messages.toLowerCase().includes(search.toLowerCase())
        //     );
        // }

        if (search) {
            computedData = computedData.filter(
                msg => {
                    return Object.keys(msg).some(key =>
                        msg[key].toString().toLowerCase().includes(search)
                    );
                }
            );
        }
        return computedData;
    //}, []);
    }, [myChat, search ,profile.id ? profile.id : undefined ]); // menambahkan ? profile.id : undefined

    const handleSearchChange = (e) => {
        setSearch(e.target.value);  // Update query pencarian
    };

    useEffect(() => {
        console.log('selectedChat:', selectedChat);
        setMyChat(selectedChat);
        scrollToBottom();
    }, [selectedChat]); {/* Passing parameter chat terpilih */}

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <h3 className="card-title align-items-start flex-column">
                    <span className="fw-bold mb-2 text-gray-900">Chats</span>
                </h3>
                <div className="card-toolbar">
                    <input
                        type="text"
                        placeholder="Search messages..."
                        value={search}
                        onChange={handleSearchChange}
                        className="form-control"
                    />

                    {/* <ButtonSecondary items={{
                        title: "Create new chat",
                        btn_class: "btn-icon btn-clear",
                    }} >
                        <i className="bi bi-pencil-square"></i>
                    </ButtonSecondary> */}
                </div>
            </div>
            <div className="card-body p-0">
            
            {/* selanjutnya kita perlu memasang sebuah kondisi
            jika belum ada chat terpilih maka menampilkan komponen EmptyChat pada JSX */}
                
                {ResultMessageData.length > 0 ? (
                    <>
                        <div
                            className="chat-message px-2 bg-light-primary"
                            style={StylesMessager.chatBox}
                        >
                            <ChatBody data={myChat} />
                            <div ref={endOfMessagesRef} />
                        </div>
                        <div className="chat-send bg-light p-3">
                            <form method="post" autoComplete="off" onSubmit={(e) => HandlerSendChat(e)} >
                                <div className="d-flex justify-content-between align-items-center">
                                    <input type="text"
                                        className="form-control me-2"
                                        autoFocus={true}
                                        value={writeChat}
                                        onChange={(e) => setWriteChat(e.target.value)}

                                    />
                                    <ButtonPrimary items={{
                                        title: "Send",
                                        btn_class: "btn-icon btn-success",
                                        type: "submit"

                                    }}
                                    >
                                        <i className="bi bi-send"></i>
                                    </ButtonPrimary>
                                </div>
                            </form>
                        </div></>
                ) : (
                    <EmptyChat />
                )
                }
            </div>
        </div>
    );
}

// const chatArr = [
    //     {
    //         id: 1,
    //         message: "Hi",
    //         from: "Febry",
    //         date: "2024-02-22 10:30:00"
    //     },
    //     {
    //         id: 2,
    //         message: "Iya",
    //         from: "Isnan",
    //         date: "2024-02-22 10:35:00"
    //     },
    //     {
    //         id: 3,
    //         message: "Apakah itu Micro-Frontend ?",
    //         from: "Febry",
    //         date: "2024-02-22 10:50:00"
    //     },
    //     {
    //         id: 4,
    //         message: "Kaga tau",
    //         from: "Isnan",
    //         date: "2024-02-22 10:52:00"
    //     },
    //     {
    //         id: 5,
    //         message: "Apaan dah",
    //         from: "Isnan",
    //         date: "2024-02-22 10:52:00"
    //     },
    //     {
    //         id: 6,
    //         message: "Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya.",
    //         from: "Febry",
    //         date: "2024-02-22 11:00:00"
    //     },
    //     {
    //         id: 7,
    //         message: "Bijiiii",
    //         from: "Isnan",
    //         date: "2024-02-22 12:12:00"
    //     },
    // ]

    // const [myChat, setMyChat] = useState(chatArr);
