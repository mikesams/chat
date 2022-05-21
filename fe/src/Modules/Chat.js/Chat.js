import React, { useEffect, useMemo, useState } from 'react'
import { FiChevronDown, FiPaperclip } from 'react-icons/fi'
import { IoSendSharp } from 'react-icons/io5'
import './Chat.css'
import { useLocation } from 'react-router-dom';
import { socket } from '../../App';
import UserService from '../../Services/user.service';

const Chat = () => {
    const location = useLocation();
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState('');
    const [message, setMessage] = useState('');

    const aa = useMemo(() =>  socket.on('message', (obj) => {
        console.log(obj, activeUser)
        setUsers(users.map(u => u?._id === obj?._id ? ({ ...u, messages: [...u?.messages, obj] }) : u));
        if (activeUser?._id === obj?._id) {
            setActiveUser({
                ...activeUser,
                messages: [...activeUser?.messages, obj]
            })
        }
    }),[]);

    useEffect(() => {
        getConvs();
    }, []);
    

    const getConvs = async () => {
        try {
            const res = await UserService.getConvs();
            setUsers(res?.data);
            if (location?.state?.id) {
                const hasUser = res?.data?.find(q => q?.user?.id === location?.state?.id);
                if (hasUser) {
                    setActiveUser(hasUser);
                } else {
                    socket.emit('addUser', { to: location?.state?.id, isCorporate: location?.state?.isCorporate });
                    getConvs();
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const sendMessage = async (e = null) => {
        if (e) {
            e.preventDefault();
        }
        try {
            socket.emit('sendMessage', {
                id: activeUser?._id,
                to: {
                    id: activeUser?.user?._id,
                    isCorporate: !!activeUser?.user?.companyName
                },
                message
            });
            setMessage('');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="chat-ptc no-clip-path chrome">
                <div className="chat-header-ptc  project-online" style={{
                    color: 'rgb(255, 255, 255)',
                    background: 'linear-gradient(135deg, rgb(42, 39, 218) 0%, rgb(0, 204, 255) 100%)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>

                            <div className="avatars-wrapper operators-avatar-4"><div className="header-ava" style={{}}>
                            </div>
                            </div>
                            <h2 className="oneline"><span>Hi there!
                            </span></h2>
                        </div>
                        <p className="exit-chat ripple" style={{ color: 'rgb(255, 255, 255)' }}>
                            <FiChevronDown style={{ fontSize: '28px', cursor: 'pointer' }} />
                        </p>
                    </div>
                    <div className="offline-message" style={{ backgroundImage: 'linear-gradient(135deg, rgba(42, 39, 218, 0.72) 0%, rgba(0, 204, 255, 0.72) 100%)' }}><span className="online"><span>We usually reply within 5 minutes</span></span></div>
                </div><div id="conversation-group-ptc" style={{ marginTop: '20px' }}><div id="-ptc" aria-live="polite" aria-atomic="false" data-testid="messagesLog">

                    <div style={{ float: 'left', clear: 'both', width: '100%' }}></div><div className="message-ptc  message-operator-ptc"><span className="message-content">Hi, I'm </span></div>
                </div><div id="conversation-scroll">
                        <div style={{ top: '49.7862px', height: '235.307px' }}></div></div></div>
                <div className="input-group  ">
                    <div className="drag-active-wrapper"><hr />
                        <textarea id="new-message-textarea" rows="1" placeholder="Hit the buttons to respond" className=" " aria-label="New message" data-testid="newMessageTextarea"></textarea></div>
                    <div className="footer-bottom" style={{ marginTop: '15px' }}>
                        <FiPaperclip style={{ fontSize: '24px', color: 'rgb(136, 148, 171)', cursor: 'pointer' }} />
                        <form>
                            <input type="file" name="attachment" aria-label="Attach file input" style={{ display: 'none' }} /></form>
                        <div></div></div></div></div>
            <div id="button" className="chat-open mobile-size__medium bubbleAnimation-appear-done bubbleAnimation-enter-done clicked">
                <div className="buttonWave"></div><div type="button" id="button-body" className=" chrome">
                    <IoSendSharp style={{ color: '#fff', fontSize: '26px' }} />
                </div></div>
        </>
    )
}

export default Chat