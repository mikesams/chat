import React, { useEffect, useMemo, useRef, useState } from 'react'
import ChatContent from './ChatContent/ChatContent'
import ChatMembers from './ChatMembers/ChatMembers'
import './Chat.css'
import moment from 'moment';


import { useLocation } from 'react-router-dom';
import UserService from '../../../../Services/user.service';
import { socket } from '../../../../App';

const mesageHandler = (users, setUsers, setActiveUser, activeUser, obj, getConvs) => {
    if(users.some(u => u?._id === obj?._id)) {
        console.log(activeUser)
        setUsers(users.map(u => u?._id === obj?._id ? ({ ...u, messages: [...u?.messages, obj] }) : u));
        if (activeUser != '' && activeUser?._id === obj?._id) {
            setActiveUser({
                ...activeUser,
                messages: [...activeUser?.messages, obj]
            })
        }
    }else {
    //    setUsers([...users, {
    //        _id: obj?._id,
    //        users: [obj?.from, obj?.to],
    //        messages: [obj]
    //    }])
    getConvs();
    }
    console.log(obj, activeUser)
}


const Chat = () => {

    const location = useLocation();
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState('');
    const [message, setMessage] = useState('');
    const getConvs = async () => {
        try {
            const res = await UserService.getConvs();
            setUsers(res?.data);
        } catch (error) {
            console.log(error)
        }
    }

    const activeUserRef = useRef(activeUser);
   useEffect(() => {
        activeUserRef.current = activeUser;
    });
    const usersRef = useRef(users);
    useEffect(() => {
         usersRef.current = users;
     });


    useEffect(() => { 
        getConvs();
        const handler = (obj) => mesageHandler(usersRef.current, setUsers, setActiveUser, activeUserRef.current, obj, getConvs)
        socket.on('message', (obj) => {
            handler(obj)
        });
        return () => {
          socket.off('message', handler);
        }
    }, []);

    



    const sendMessage = async (e = null) => {
        if (e) {
            e.preventDefault();
        }
        if(message) {
        try {
            console.log(activeUser)
            socket.emit('sendMessage', {
                id: activeUser?._id,
                to: activeUser?.user?._id,
                message
            });
            setMessage('');
        } catch (error) {
            console.log(error)
        }
    }
    }
    return (
        <div className='row d-flex m-0'>
            <div className='col-md-4 p-0'>
            <ChatMembers users={users} setActiveUser={setActiveUser} activeUser={activeUser} />
            </div>
            <div className='col-md-8 p-0'>
                {
                    activeUser != '' && (
                        <ChatContent sendMessage={sendMessage} message={message} setMessage={setMessage} activeUser={activeUser} />
                    )
                }
            </div>
        </div>
    )
}

export default Chat
