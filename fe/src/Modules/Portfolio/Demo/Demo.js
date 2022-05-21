import React, { useState } from 'react'
import './Demo.css'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputSwitch } from 'primereact/inputswitch';
import { FiChevronDown, FiPaperclip } from 'react-icons/fi';
import { IoSendSharp } from 'react-icons/io5';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { BsEmojiSmile } from 'react-icons/bs';

const themes = [
    {
        label: 'Default Theme',
        value: 'dt'
    },
    {
        label: 'Disable sharing files',
        value: 'dsf'
    },
    {
        label: 'Mask contact info in all messages',
        value: 'mci'
    },
    {
        label: 'Only mask contact info written by others',
        value: 'mcio'
    },
];

const filterMessages = [
    {
        label: 'No filter',
        value: 'nf'
    },
    {
        label: 'Only show messages sent by you',
        value: 'osmy'
    },
    {
        label: "Only show messages of type 'System Message'",
        value: 'osms'
    },
];

const chatTitleModes = [
    {
        label: 'Display participants',
        value: 'dp'
    },
    {
        label: 'Display conversation subject',
        value: 'dcs'
    },
];

const chatSubTitleModes = [
    {
        label: 'Display participants',
        value: 'dp'
    },
    {
        label: 'Display conversation subject',
        value: 'dcs'
    },
    {
        label: 'No subtitle',
        value: 'ns'
    },
];

const messageFieldVisibility = [
    {
        label: 'Visible',
        value: 'visible'
    },
    {
        label: 'Hidden',
        value: 'hidden'
    },
];
const messageFieldAccessPermissions = [
    {
        label: 'Read and Write',
        value: 'raw'
    },
    {
        label: 'Read Only',
        value: 'ro'
    },
];

const Demo = () => {

    const maskInfo = (value) => {
        console.log((/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value))
        return (!isNaN(value) && Number(value) && String(value).length === 10) || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? '(Contact information was hidden)' : value
    }



    const [state, setState] = useState({
        theme: 'dt',
        filterMessage: 'nf',
        showChatHeader: true,
        chatTitleMode: 'dp',
        chatSubTitleMode: 'dcs',
        messageFieldVisibility: 'visible',
        messagePlaceholder: 'Say something...',
        messageSuggestion: '',
        messageFieldAccessPermission: 'raw',
        chatSubject: '',
        welcomeSystemMessage: 'Welcome to the PlugToChat Demo!'
    });
    const [showEmojis, setShowEmojis] = useState(false);
    const [inputMessage, setInputMessage] = useState(state?.messageSuggestion);

    const [data, setData] = useState([]);

    const addEmoji = (emoji) => {
        if ("native" in emoji) {
          setInputMessage(`${inputMessage}${emoji.native}`);
          setShowEmojis(false);
        }
      };

    return (
        <div className='row m-0'>
            <div className='col-md-4' style={{
                minWidth: '400px',
                maxWidth: '400px',
                backgroundColor: '#eaeaea',
                borderRight: '1px solid #ddd',
                minHeight: '80vh',
                maxHeight: '80vh',
                overflow: 'auto',
                padding: '0'
            }}>
                <div className='invitation-button-container'>
                    <button className="invitation-button"><span className="invitation-button__icon">👉</span> <span data-v-59d44e7a="">Invite someone</span></button>
                </div>
                <Accordion multiple>
                    <AccordionTab header="General Settings">
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Theme & Behavior
                            </b>
                            </h6>
                            <div>
                                {
                                    themes.map(t => (
                                        <div className="" key={t.value}>
                                            <input value={t.value} checked={state?.theme == t.value} type="radio" onChange={(e) => setState({ ...state, 'theme': e.target.value })} id={t.label} name="theme" style={{ marginRight: '12px' }} />
                                            <label htmlFor={t.label}>{t.label}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Filter Messages
                            </b>
                            </h6>
                            <div>
                                {
                                    filterMessages.map(t => (
                                        <div className="" key={t.value}>
                                            <input checked={state?.filterMessage == t.value} onChange={(e) => setState({ ...state, 'filterMessage': e.target.value })} value={t.value} type="radio" id={t.label} name="filterMessage" style={{ marginRight: '12px' }} />
                                            <label htmlFor={t.label}>{t.label}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Chat Headers and Title Modes">
                        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                            Show Chat Header <InputSwitch style={{ marginLeft: '12px' }} checked={state?.showChatHeader} onChange={(e) => setState({ ...state, 'showChatHeader': e.value })} />

                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Chat Title Modes
                            </b>
                            </h6>
                            <div>
                                {
                                    chatTitleModes.map(t => (
                                        <div className="" key={t.value}>
                                            <input checked={state?.chatTitleMode == t.value} onChange={(e) => setState({ ...state, 'chatTitleMode': e.target.value })} value={t.value} type="radio" id={t.label} name="chatTitleMode" style={{ marginRight: '12px' }} />
                                            <label htmlFor={t.label}>{t.label}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Chat Subtitle Modes
                            </b>
                            </h6>
                            <div>
                                {
                                    chatSubTitleModes.map(t => (
                                        <div className="" key={t.value}>
                                            <input checked={state?.chatSubTitleMode == t.value} onChange={(e) => setState({ ...state, 'chatSubTitleMode': e.target.value })} value={t.value} type="radio"
                                                id={`subTitle-${t.label}`} name="chatSubTitleMode" style={{ marginRight: '12px' }} />
                                            <label htmlFor={`subTitle-${t.label}`}>{t.label}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Message Field Settings">
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Message Field Visibility
                            </b>
                            </h6>
                            <div>
                                {
                                    messageFieldVisibility.map(t => (
                                        <div className="" key={t.value}>
                                            <input checked={state?.messageFieldVisibility == t.value} onChange={(e) => setState({ ...state, 'messageFieldVisibility': e.target.value })} value={t.value} type="radio" id={t.label} name="messageFieldVisibility" style={{ marginRight: '12px' }} />
                                            <label htmlFor={t.label}>{t.label}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Message Placeholder
                            </b>
                            </h6>
                            <div style={{ display: 'flex' }}>
                                <input onChange={(e) => setState({ ...state, 'messagePlaceholder': e.target.value })} value={state?.messagePlaceholder} className='form-control' style={{ width: '80%', marginRight: '12px' }} placeholder='Say something...' />
                                {/* <button className='btn-s'>Set</button> */}
                            </div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Message Suggestion
                            </b>
                            </h6>
                            <div style={{ display: 'flex' }}>
                                <input className='form-control'
                                    onChange={(e) => setState({ ...state, 'messageSuggestion': e.target.value })} value={state?.messageSuggestion}
                                    style={{ width: '80%', marginRight: '12px' }} placeholder='Hello!' />
                                {/* <button className='btn-s'>Set</button> */}
                            </div>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Conversation Attributes">
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Message Field Access Permissions
                            </b>
                            </h6>
                            <div>
                                {
                                    messageFieldAccessPermissions.map(t => (
                                        <div className="" key={t.value}>
                                            <input value={t.value} type="radio"
                                                checked={state?.messageFieldAccessPermission == t.value}
                                                onChange={(e) => setState({ ...state, 'messageFieldAccessPermission': e.target.value })}
                                                id={t.label} name="messageFieldAccessPermission" style={{ marginRight: '12px' }} />
                                            <label htmlFor={t.label}>{t.label}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Chat Subject
                            </b>
                            </h6>
                            <div style={{ display: 'flex' }}>
                                <input className='form-control'
                                    onChange={(e) => setState({ ...state, 'chatSubject': e.target.value })} value={state?.chatSubject}
                                    style={{ width: '80%', marginRight: '12px' }} placeholder='Subject...' />
                                {/* <button className='btn-s'>Set</button> */}
                            </div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h6 className='h4'><b>
                                Welcome System Message
                            </b>
                            </h6>
                            <div style={{ display: 'flex' }}>
                                <input className='form-control'
                                    onChange={(e) => setState({ ...state, 'welcomeSystemMessage': e.target.value })} value={state?.welcomeSystemMessage}
                                    style={{ width: '80%', marginRight: '12px' }} placeholder='Hi everyone!' />
                                {/* <button className='btn-s'>Set</button> */}
                            </div>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
            <div className='col-md-8' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '25px 0',
            }}>
                <div style={{
                    width: '372px',
                    position: 'relative'
                }}>
                    <div className="chat-ptc-qe no-clip-path chrome">
                        {
                            state?.showChatHeader && (
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

                                                <h2 className="oneline"><span>{
                                                    state?.chatTitleMode === 'dp' ? 'Visitor' : state?.chatSubject}
                                                </span></h2>
                                                {
                                                    state?.chatSubTitleMode != 'ns' && (
                                                        <h6 className="oneline"><span>{
                                                            state?.chatSubTitleMode === 'dp' ? 'Visitor' : state?.chatSubject}
                                                        </span></h6>
                                                    )

                                                }
                                            </div>
                                        </div>
                                        <p className="exit-chat ripple" style={{ color: 'rgb(255, 255, 255)' }}>
                                            <FiChevronDown style={{ fontSize: '28px', cursor: 'pointer' }} />
                                        </p>
                                    </div>
                                    <div className="offline-message" style={{ backgroundImage: 'linear-gradient(135deg, rgba(42, 39, 218, 0.72) 0%, rgba(0, 204, 255, 0.72) 100%)' }}><span className="online"><span>{state?.welcomeSystemMessage}</span></span></div>
                                </div>
                            )
                        }
                        <div id="conversation-group-ptc-qe" style={{ marginTop: '20px' }}><div id="-ptc-qe" aria-live="polite" aria-atomic="false" data-testid="messagesLog">

                            <div style={{ float: 'left', clear: 'both', width: '100%' }}></div>
                            {
                                state?.filterMessage != 'osms' && data.map((d, i) => (
                                    <div key={i} className="message-ptc-qe  message-operator-ptc-qe">
                                        <span className="message-content">{state?.theme === 'mci' || state?.theme === 'mcio' ? maskInfo(d?.msg) : d?.msg}</span>
                                    </div>
                                ))
                            }
                        </div><div id="conversation-scroll">
                                <div style={{ top: '49.7862px', height: '235.307px' }}></div></div></div>
                        <div className="input-group  ">
                            <div className="drag-active-wrapper"><hr />
                                {
                                    state?.messageFieldVisibility === 'visible' && (
                                        <textarea id="new-message-textarea" readOnly={state?.messageFieldAccessPermission == 'ro'} rows="1" placeholder={state.messagePlaceholder}
                                            onChange={(e) => setInputMessage(e?.target?.value)}
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                    setData([...data, {
                                                        msg: inputMessage,
                                                        time: Date.now()
                                                    }]);
                                                    setInputMessage('');
                                                }
                                            }}
                                            value={inputMessage} ></textarea>
                                    )
                                }
                            </div>
                            <div className="footer-bottom" style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
                                {
                                    state?.theme !== 'dsf' && (
                                        <FiPaperclip style={{ fontSize: '24px', color: 'rgb(136, 148, 171)', cursor: 'pointer' }} />
                                    )
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
                                    <input type="file" name="attachment" aria-label="Attach file input" style={{ display: 'none' }} />
                                   
                                        </form>
                                <div></div></div></div>
                    </div>
                    <div id="button" className="chat-open mobile-size__medium bubbleAnimation-appear-done bubbleAnimation-enter-done clicked">
                        <div className="buttonWave"></div>
                        <div type="button" id="button-body" className=" chrome" onClick={() => {
                            setData([...data, {
                                msg: inputMessage,
                                time: Date.now()
                            }])
                            setInputMessage('')
                        }}>
                            <IoSendSharp style={{ color: '#fff', fontSize: '26px' }} />
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Demo