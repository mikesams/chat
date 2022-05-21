import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import React, { useEffect, useState } from 'react'
import { BsEmojiSmile, BsThreeDotsVertical } from 'react-icons/bs'
import { FiPaperclip, FiPlusCircle, FiSend } from 'react-icons/fi'
import './ChatContent.css'
import moment from 'moment';

const ChatContent = ({ activeUser, sendMessage, message, setMessage }) => {
    const [showActions, setshowActions] = useState(false);
    const [showEmojis, setShowEmojis] = useState(false);

    useEffect(() => {
        // window.addEventListener('click', (event) => {
        //     if(showEmojis) {
        //         setShowEmojis(false);
        //     }
        // })
    }, []);

    const addEmoji = (emoji) => {
        if ("native" in emoji) {
          setMessage(`${message}${emoji.native}`);
          setShowEmojis(false);
        }
      };

    return (
        <main className="main is-visible" data-dropzone-area="" style={{
            height: 'calc(100vh - 40px)'
        }}>
            <div className="container h-100">

                <div className="d-flex flex-column h-100 position-relative">
                    <div className="chat-header py-4 py-lg-7" style={{
                        borderBottom: '1px solid #ddd'
                    }}>
                        <div className="row align-items-center">

                            <div className="col-2 d-xl-none">
                                <a className="icon icon-lg text-muted" data-toggle-chat="">
                                </a>
                            </div>

                            <div className="col-8 col-xl-12">
                                <div className="row align-items-center text-center text-xl-start">

                                    <div className="col-12 col-xl-6">
                                        <div className="row align-items-center gx-5">
                                            <div className="col-auto">
                                                <div className="avatar avatar-online">
                                                    <span className="avatar-text bg-primary">J</span>

                                                </div>
                                            </div>

                                            <div className="col overflow-hidden">
                                                <h5 className="text-truncate">{activeUser?.user?.name}</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-2 d-xl-none text-end">
                                <a className="icon icon-lg text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more">
                                </a>
                            </div>

                        </div>
                    </div>


                    <div className="chat-body hide-scrollbar flex-1 h-100">
                        <div className="chat-body-inner" style={{ paddingBottom: '87px' }}>
                            <div className="py-6 py-lg-12">
                                {
                                    activeUser?.messages?.length > 0 && (
                                        activeUser?.messages?.map(q => q?.from === activeUser?.user?._id ? (
                                            <div className="message">
                                                <a data-bs-toggle="modal" data-bs-target="#modal-user-profile" className="avatar avatar-responsive">
                                                    <img className="avatar-img" src="assets/img/avatars/2.jpg" alt="" />
                                                </a>

                                                <div className="message-inner">
                                                    <div className="message-body">
                                                        <div className="message-content">
                                                            <div className="message-text">
                                                                <p>{q?.message}</p>
                                                            </div>


                                                        </div>
                                                    </div>

                                                    <div className="message-footer">
                                                        <span className="extra-small text-muted">{moment(q?.date).fromNow()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (<div className="message message-out">
                                            <a data-bs-toggle="modal" data-bs-target="#modal-profile" className="avatar avatar-responsive">
                                                <img className="avatar-img" src="assets/img/avatars/1.jpg" alt="" />
                                            </a>

                                            <div className="message-inner">
                                                <div className="message-body">

                                                    <div className="message-content">
                                                        <div className="message-text">
                                                            <p>{q?.message}</p>
                                                        </div>


                                                    </div>

                                                </div>

                                                <div className="message-footer">
                                                    <span className="extra-small text-muted">{moment(q?.date).fromNow()}</span>
                                                </div>
                                            </div>
                                        </div>))
                                    )
                                }
                                {/* <div className="message-divider">
                                    <small className="text-muted">Monday, Sep 16</small>
                                </div> */}

                            </div>
                        </div>
                    </div>



                    <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">

                        <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
                        </div>



                        <form className="chat-form rounded-pill bg-dark" data-emoji-form="">
                            <div className="row align-items-center gx-0">
                                <div className="col-auto">
                                    <a className="btn btn-icon text-body rounded-circle dz-clickable" id="dz-btn">
                                        <FiPaperclip />
                                    </a>
                                </div>

                                <div className="col">
                                    <div className="input-group">
                                        <textarea className="form-control px-0"
                                        style={{
                                            background: 'transparent',
                                            border: 'none'
                                        }} placeholder="Type your message..." rows="1"
                                         onChange={(e) => setMessage(e?.target?.value)}
                                         onKeyPress={(event) => {
                                           if (event.key === 'Enter') {
                                             // setData([...data, {
                                             //     msg: inputMessage,
                                             //     time: Date.now()
                                             // }]);
                                             sendMessage()
                                           }
                                         }}
                                         value={message} 
                                        ></textarea>

                                        <a className="text-body pe-0 d-flex align-items-center emoji-section-icon" style={{ position: 'relative' }}>
                                            <BsEmojiSmile style={{ fontSize: 20 }} onClick={() => setShowEmojis(!showEmojis)} />
                                            {
                                                showEmojis && (
                                                    <Picker title="Plug To Chat" emoji="" native={true} onSelect={addEmoji} style={{ position: 'absolute', bottom: '35px', right: 0, zIndex: 9999 }} />
                                                )
                                            }
                                        </a>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button className="btn btn-icon btn-primary rounded-circle ms-5" onClick={() => setMessage()}>
                                        <FiSend />
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </main>
    )
}

export default ChatContent
