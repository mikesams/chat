import React, { useState, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';
import { FiChevronDown, FiPaperclip } from 'react-icons/fi';
import { IoSendSharp } from 'react-icons/io5';
import axios from 'axios';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { BsEmojiSmile } from 'react-icons/bs';

import './Chat.css';
import { socket } from "../../App";

const handleMessages = (data, setData, obj) => {
  console.log(obj)
  setData([
    ...data,
    obj]
  )
}

const Chat = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const [showChat, setToShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [data, setData] = useState([]);
  const [activeUser, setActiveUser] = useState('');

  const [inputMessage, setInputMessage] = useState();

  const [details, setDetails] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);

  const docRef = useRef(null);

  const save = async (fd) => {
    try {
      const res = await axios.post('http://localhost:8080/user/create-guest', fd);
      console.log(res, socket);
      socket.emit('user', { id: res.data?._id, userType: 'guest', accessToken: 'Gl1hbh_Y9W' });
      setShowForm(false);
    } catch (e) {
      console.log(e)
    }
    // console.log(fd);
    // setData(fd);
  }

  const addEmoji = (emoji) => {
    if ("native" in emoji) {
      setInputMessage(`${inputMessage}${emoji.native}`);
      setShowEmojis(false);
    }
  };
  const handleDocs = (e) => {
    if(e.target.files && e.target.files.length) {
      socket.emit('sendMessage', {
        id: details?.id,
        to: details?.to,
        type: 'file',
        file: e?.target?.files[0]
      });
    }
  }

  const dataRef = useRef(data);
  useEffect(() => {
    dataRef.current = data;
  });

  useEffect(() => {
    const handler = (obj) => {
      console.log(obj)
      handleMessages(dataRef.current, setData, obj)
    }
    socket.on('message', handler);
    socket.on('details', (obj) => {
      console.log(obj)
      setDetails(obj)
    })
    return () => {
      socket.off('message', handler);
      socket.off('details', (obj) => {
        console.log(obj)
        setDetails(obj)
      })
    }
  }, [])

  const sendMessage = async (e = null) => {
    if (e) {
      e.preventDefault();
    }
    if (inputMessage) {
      try {
        console.log('dhbrd')
        socket.emit('sendMessage', {
          id: details?.id,
          to: details?.to,
          message: inputMessage
        });
        setInputMessage('');
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="outerContainer">
      {
        showChat ? (
          <>
            <div style={{
              width: '372px',
              position: 'relative',
              marginRight: '50px',
              marginBottom: 20

            }}>
              <div className="chat-ptc-qe no-clip-path chrome">

                <div className="chat-header-ptc-qe  project-online" style={{
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
                      <div >

                        <h2 className="oneline"><span>
                          Visitor
                        </span></h2>
                        {/* {
                                                    state?.chatSubTitleMode != 'ns' && (
                                                        <h6 className="oneline"><span> Visitor
                                                        </span></h6>
                                                    )

                                                } */}
                      </div>
                    </div>
                    <p className="exit-chat ripple" style={{ color: 'rgb(255, 255, 255)' }} onClick={() => setToShowChat(false)}>
                      <FiChevronDown style={{ fontSize: '28px', cursor: 'pointer' }} />
                    </p>
                  </div>
                  <div className="offline-message" style={{ backgroundImage: 'linear-gradient(135deg, rgba(42, 39, 218, 0.72) 0%, rgba(0, 204, 255, 0.72) 100%)' }}><span className="online"><span>{'Welcome to the PlugToChat Demo!'}</span></span></div>
                </div>

                {
                  showForm ?
                    (
                      <form onSubmit={handleSubmit(save)} className="form-handler" style={{
                        background: '#fff',
                        height: '320px'
                      }}>

                        <div className="form-group">

                          <label className="form-label">
                            Name
                          </label>
                          <input type="text"
                            {...register("name", {
                              required: 'Required Input'
                            })}
                            className="form-control" placeholder="Name" />
                          {
                            errors['name'] && (
                              <small className='text-danger mt-3 ms-3'>{errors['name'].message}</small>
                            )
                          }
                        </div>
                        <div className="form-group" style={{ marginTop: '10px' }}>
                          <label className="form-label">
                            Email Address
                          </label>
                          <input type="text"
                            {...register("email", {
                              required: 'Required Input', pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Invalid Email'
                              }
                            })}
                            className="form-control" placeholder="name@address.com" />
                          {
                            errors['email'] && (
                              <small className='text-danger mt-3 ms-3'>{errors['email'].message}</small>
                            )
                          }

                        </div>
                        <button className="btn btn-lg w-100 btn-primary mb-3"
                          style={{ cursor: 'pointer' }}>Start</button>
                      </form>
                    ) : (
                      <>

                        <div id="conversation-group-ptc-qe" ><div id="-ptc-qe" aria-live="polite" aria-atomic="false" data-testid="messagesLog">

                          <div style={{ float: 'left', clear: 'both', width: '100%' }}></div>
                          {
                            data.map((d, i) => d?.from === details?.from ? (
                              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <div key={i} className={`message-ptc-qe  message-operator-ptc-qe`}>
                                  <span className="message-content">{d?.message}</span>
                                </div>
                              </div>
                            ) : (<div style={{ display: 'flex', justifyContent: 'flex-end' }}>  <div key={i} className={`message-visitor-ptc-qe`}>
                              <span className="message-content">{d?.message}</span>
                            </div></div>))
                          }
                        </div><div id="conversation-scroll">
                            <div style={{ top: '49.7862px', height: '235.307px' }}></div></div></div>
                        <div className="input-group  ">
                          <div className="drag-active-wrapper"><hr />

                            <textarea id="new-message-textarea" rows="1" placeholder="Type Message..."
                              onChange={(e) => setInputMessage(e?.target?.value)}
                              onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                  // setData([...data, {
                                  //     msg: inputMessage,
                                  //     time: Date.now()
                                  // }]);
                                  sendMessage()
                                }
                              }}
                              value={inputMessage} ></textarea>

                          </div>
                          <div className="footer-bottom" style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
                                {
                                   
                                        <FiPaperclip onClick={() => docRef.current.click()} style={{ fontSize: '24px', color: 'rgb(136, 148, 171)', cursor: 'pointer' }} />
                                    
                                }
                                 <a className="text-body pe-0 d-flex align-items-center emoji-section-icon" style={{ position: 'relative', marginLeft: 20 }}>
                                            <BsEmojiSmile style={{ fontSize: 24 }} onClick={() => setShowEmojis(!showEmojis)} />
                                            {
                                                showEmojis && (
                                                    <Picker title="Plug To Chat" emoji="" native={true} onSelect={addEmoji} style={{ position: 'absolute', bottom: '35px', right: 0, zIndex: 9999 }} />
                                                )
                                            }
                                        </a>
                                <form>
                                    <input type="file"  ref={docRef} onChange={(e) => handleDocs(e)} name="attachment" aria-label="Attach file input" style={{ display: 'none' }} />
                                   
                                        </form>
                                <div></div></div></div>
                      </>
                    )
                }

              </div>
              {
                !showForm && (
                  <div id="button" className="chat-open mobile-size__medium bubbleAnimation-appear-done bubbleAnimation-enter-done clicked">
                    <div className="buttonWave"></div>
                    <div type="button" id="button-body" className=" chrome" onClick={() => {
                      sendMessage()
                    }}>
                      <IoSendSharp style={{ color: '#fff', fontSize: '26px' }} />
                    </div></div>
                )
              }
            </div>
          </>
        ) : (
          <div className="app-icon" onClick={() => setToShowChat(!showChat)}>
           <img src="/Final-Logo-Plugtochat-blue-02.png" style={{width: '80px'}} />
          </div>
        )
      }

      {/* {
        showChat ? (
          <div className="container">
             <InfoBar room={state['toName']} closeChat={() => setToShowChat(false)} />
            {
              showForm ?
                (
                  <form onSubmit={handleSubmit(save)} className="form-handler">

                    <div className="form-group">

                      <label className="form-label">
                        Name
                      </label>
                      <input type="text"
                        {...register("name", {
                          required: 'Required Input'
                        })}
                        className="form-control" placeholder="Name" />
                      {
                        errors['name'] && (
                          <small className='text-danger mt-3 ms-3'>{errors['name'].message}</small>
                        )
                      }
                    </div>
                    <div className="form-group" style={{ marginTop: '10px' }}>
                      <label className="form-label">
                        Email Address
                      </label>
                      <input type="text"
                        {...register("email", {
                          required: 'Required Input', pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid Email'
                          }
                        })}
                        className="form-control" placeholder="name@address.com" />
                      {
                        errors['email'] && (
                          <small className='text-danger mt-3 ms-3'>{errors['email'].message}</small>
                        )
                      }

                    </div>
                    <button className="btn btn-lg w-100 btn-primary mb-3"
                    style={{ cursor: 'pointer' }}>Start</button>
                  </form>
                ) : (
                  <>
                   
                    <Messages messages={messages} name={''} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                  </>
                )
            }
          </div>
        ) : (
          <div className="app-icon" onClick={() => setToShowChat(!showChat)}>
            <svg width="100%" height="100%" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.333 26.324l6.449 6.376a.752.752 0 001.28-.535V21.44l-7.729 4.884z" fill="#ffffff"></path> <path d="M3.946 0h22.109a3.008 3.008 0 013.008 3.008V21.44l-7.624 5.004H3.945a3.008 3.008 0 01-3.007-3.008V3.008A3.008 3.008 0 013.946 0z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.439 26.444L.937 4.981v21.463H21.44z" fill="url(#gradient)"></path> <defs><linearGradient id="gradient" x1="13.451" y1="12.325" x2="5.559" y2="22.297" gradientUnits="userSpaceOnUse"><stop stop-color="#000000" stop-opacity=".2"></stop> <stop offset="1" stop-color="transparent" stop-opacity="0"></stop></linearGradient></defs></svg>
          </div>
        )
      } */}
    </div>
  );
}

export default Chat;
