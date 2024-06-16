import React from "react";
import moment from "moment";

export default function ChatBody({ data }) {
    const itsme = "Febry";

    const formatDate = (date) => {
        return moment(date).format("DD MMM YYYY");
    };

    return (
        <div className="chat-items">
            {data.map((v, index) => {
                const showDate = index === 0 || formatDate(data[index].date) !== formatDate(data[index - 1].date);

                return (
                    <React.Fragment key={index}>
                        {showDate && (
                            <div className="chat-date-separator" style={{ textAlign: "center", margin: "10px 0" }}>
                                {formatDate(v.date)}
                            </div>
                        )}
                        <div
                            className="chat-item"
                            style={styleChatItems.chatBubleItems}
                        >
                            <div
                                className="chat text-white rounded my-2 p-2"
                                style={
                                    v.from === itsme
                                    ? styleChatItems.chatBubleSender
                                    : styleChatItems.chatBubleReceiver
                                }
                            >
                                <span className="me-3">{v.message}</span>
                                <span
                                    className="chat-date"
                                    style={{ fontSize: "11px" }}
                                >
                                    {moment(v.date).format("HH:mm")}
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
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
        alignSelf: "flex-end",
    },
    chatBubleReceiver: {
        backgroundColor: "#a83aef",
        alignSelf: "flex-start",
    },
};
