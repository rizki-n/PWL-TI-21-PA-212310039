import { type } from '@testing-library/user-event/dist/type';
import { ButtonPrimary, ButtonSecondary } from './ButtonUI';
import React, { useState } from 'react';

export default function MesseggersUI () {

const chatArr=[
    {
        id:1,
        message: 'Hi',
        from:'Febry',
        date:'2024-1-1 10:30:00'
    },
    {
        id:2,
        message: 'Ya',
        from:'Isnan',
        date:'2024-1-1 10:35:00'
    },
    {
        id:3,
        message:'Apa itu microFront End?',
        from:'Febry',
        date:'2024-1-1 10:40:00'
    },
    {
        id:4,
        message:'Kaga tau',
        from:'Isnan',
        date:'2024-1-1 10:50:00'
    },
    {
        id:5,
        message:'apaan dah',
        from:'Isnan',
        date:'2024-1-1 10:55:00'
    },
    {
        id:6,
        message:'Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya',
        from:'Febry',
        date:'2024-1-1 11:00:00'
    },
    {
        id:7,
        message:'bijiii',
        from:'Isnan',
        date:'2024-1-1 12:20:00'
    }
]

const [myChat, setMyChat] = useState(chatArr);

    return(
        <div className='card'>
            <div className='card-header'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='fw-bold mb-2 text-gray-900'>Chats</span>
                </h3>
                <div className='card-toolbar'>
                    <ButtonSecondary items={{ 
                        title: 'create new chat',
                        btn_class: 'btn-icon btn-clear'  
                    }}>
                    <i className='bi bi-pencil-square'></i>
                    </ButtonSecondary>
                </div>
            </div>

            <div className='card-body p-0'>
                <div className='chat-message px-2 bg-light-primary'
                style={StyleSheetMMessager.chatBox}>
                    ...
                </div>
                <div className='chat-send bg-light p-3'>
                    <form method='post' autoComplete='off'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <input type='text' className='form-control me-2' autoFocus={true}/>
                            <ButtonPrimary items={{ 
                                title: 'send',
                                btn_class: 'btn-icon btn-success',
                                type: 'submit'
                             }}>
                                <i className='bi bi-send'></i>
                            </ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const StyleSheetMMessager = {
    chatBox:{
        minHeight: '200px',
        maxHeight: '45vh',
        overFlowY: 'auto'
    }
};

