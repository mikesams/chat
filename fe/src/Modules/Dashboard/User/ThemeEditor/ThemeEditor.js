import React, { useEffect, useState } from 'react';
import './ThemeEditor.css';
import { BsEmojiSmile, BsThreeDotsVertical } from 'react-icons/bs'
import { FiPaperclip, FiPlusCircle, FiSearch, FiSend } from 'react-icons/fi'
import { Tooltip } from 'primereact/tooltip'
import CodeEditor from './Editor/Editor';
import UserService from '../../../../Services/user.service';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ThemeEditor = () => {

  const [data, setData] = useState('');
  const [activeData, setActiveData] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm();

  const location = useLocation();
  const [id, setId] = useState("");

  useEffect(() => {
    if (location?.state?.id) {
      getThemeById(location?.state?.id);
    }
    console.log(location.state);
  }, [location]);

  const getThemeById = async (id) => {
    try {
      const res = await UserService.getThemeById(id);
      setId(id);
      setValue("name", res?.data?.name);
      setData(res?.data?.editor)
    } catch (error) {
      console.log(error);
    }
  };

  const save = async (d) => {
    try {
      const res = id
        ? await UserService.editTheme({ ...d, id })
        : await UserService.createTheme(d);
      console.log(res)
      if (res && res?.data?.id) {
        getThemeById(res?.data?.id)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    activeData !== '' ? (
      <CodeEditor data={activeData} handleBack={() => setActiveData('')} />
    ) : (
      <div className='container p-0'>
        <div className="header-body mb-2">
          <div>
            <h6 className="header-pretitle">
              Overview
            </h6>
            <h1 className="header-title text-truncate">
              Theme Editor
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(save)} style={{ marginTop: "30px" }}>
          <div className="form-group">
            <label className="form-label">Name of the Theme</label>
            <input
              type="text"
              {...register("name", {
                required: "Required Input",
              })}
              className="form-control"
              placeholder="Name of the Theme"
            />
            {errors?.name && (
              <small className="text-danger mt-3 ms-3">
                {errors?.name?.message}
              </small>
            )}
          </div>
          <button className="btn btn-primary mt-5 mb-5" type="submit">
            Save Changes
          </button>
        </form>
        {
          !!id && (
            <div className='row d-flex m-0'>
              <div className='col-md-4 ps-0 pe-6'>
                <aside className="chat-members bg-light">
                  <div className="tab-content ">
                    <div className="tab-pane fade  show active">
                      <div className="d-flex flex-column  position-relative">
                        <div className="hide-scrollbar">

                          <div className="py-8">
                            <div className="card-list mt-6">
                              <Tooltip target=".conversation-list-item" />
                              <a className="card text-reset conversation-list-item"
                                onClick={() =>  setActiveData({
                                  type: 'Conversation List item', data: data['Conversation List item']  })
                                }
                                data-pr-position="top" data-pr-tooltip="conversation-list-item"
                                style={{ cursor: 'pointer' }}>
                                <div className="card-body">
                                  <div className="row gx-5">
                                    <div className="col-auto">
                                      <div className="avatar avatar-online">
                                        <span className="avatar-text bg-primary">J</span>

                                      </div>
                                    </div>

                                    <div className="col">
                                      <div className="d-flex align-items-center mb-3">
                                        <h5 className="me-auto mb-0">John Clark</h5>
                                        <span className="text-muted extra-small ms-2">12:45 PM</span>
                                      </div>

                                      <div className="d-flex align-items-center">
                                        <div className="line-clamp me-auto">
                                          Hello! Yeah, I'm going to meet my friend of mine at the departments stores now.
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>


                              </a>

                            </div>

                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </aside>
              </div>
              <div className='col-md-8 p-0' style={{ background: '#fff' }}>
                <main className="main is-visible">
                  <div className="container">

                    <div className="d-flex flex-column position-relative">
                      <Tooltip target=".chat-header" />
                      <div className="chat-header border-bottom py-4 py-lg-7"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setActiveData({
                          type: 'Chat Header', data: data['Chat Header']  })}
                          data-pr-position="top" data-pr-tooltip="chat-header">
                        <div className="row align-items-center">

                          <div className="col-2 d-xl-none">
                            <a className="icon icon-lg text-muted">
                            </a>
                          </div>

                          <div className="col-8 col-xl-12">
                            <div className="d-flex justify-content-between align-items-center text-center text-xl-start">

                              <div className='d-flex justify-content-between align-items-center'>
                                <div className="row align-items-center gx-5">
                                  <div className="col-auto">
                                    <div className="avatar avatar-online">
                                      <span className="avatar-text bg-primary">J</span>

                                    </div>
                                  </div>

                                  <div className="col overflow-hidden">
                                    <h5 className="text-truncate">John Clark</h5>

                                  </div>
                                </div>
                              </div>
                              <FiSearch size={22} />

                            </div>
                          </div>
                          <div className="col-2 d-xl-none text-end">
                            <FiSearch />
                          </div>

                        </div>
                      </div>


                      <div className="chat-body mb-6 hide-scrollbar">
                        <div className="chat-body-inner">
                          <div className="py-6 py-lg-12">

                            <div className="message">
                              <Tooltip target=".avatar" />
                              <div className="avatar avatar-online"
                                onClick={() => setActiveData({
                                  type: 'Avatar', data: data['Avatar']  })}
                                  data-pr-position="top" data-pr-tooltip="avator"
                              style={{ cursor: 'pointer' }}>
                                <span className="avatar-text bg-primary">M</span>

                              </div>

                              <div className="message-inner">
                                <div className="message-body">
                                  <Tooltip target=".message-content" />
                                  <div className="message-content"
                                   onClick={() => setActiveData({
                                    type: 'Message Content', data: data['Message Content']  })}
                                    data-pr-position="top" data-pr-tooltip="message-content"
                                  style={{ cursor: 'pointer' }}>
                                    <div className="message-text">
                                      <p>Hey, John! How are you?</p>
                                    </div>
                                    <div className="message-action">
                                      <div className="dropdown">
                                        <BsThreeDotsVertical style={{ cursor: 'pointer' }} />
                                      </div>
                                    </div>
                                  </div>

                                </div>

                                <div className="message-footer">
                                  <span className="extra-small text-muted">08:45 PM</span>
                                </div>
                              </div>
                            </div>


                            <div className="message message-out">
                              <div className="avatar avatar-online" style={{ cursor: 'pointer' }} data-pr-position="top" data-pr-tooltip="Avatar">
                                <span className="avatar-text bg-primary">J</span>

                              </div>

                              <div className="message-inner">
                                <div className="message-body">
                                  <Tooltip target=".message-content" />
                                  <div className="message-content"
                                    onClick={() => setActiveData({
                                      type: 'Message Content', data: data['Message Content']  })}
                                      data-pr-position="top" data-pr-tooltip="message-content"
                                  style={{ cursor: 'pointer' }}>
                                    <div className="message-text">

                                      <p>Hey, Mark! I'm good.</p>
                                    </div>

                                    <div className="message-action">
                                      <div className="dropdown">
                                        <a className="icon text-muted" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="message-footer">
                                  <span className="extra-small text-muted">08:45 PM</span>
                                </div>
                              </div>
                            </div>


                            {/* <div className="message-divider">
                              <small className="text-muted">Monday, Sep 16</small>
                            </div> */}

                          </div>
                        </div>
                      </div>



                      {/* <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">

                        <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
                        </div>



                        <div className="chat-form rounded-pill bg-dark" data-emoji-form="">
                          <div className="row align-items-center gx-0">
                            <div className="col-auto">
                              <a className="btn btn-icon text-body rounded-circle dz-clickable" id="dz-btn">
                                <FiPaperclip />
                              </a>
                            </div>

                            <div className="col">
                              <div className="input-group">
                                <textarea style={{ background: 'transparent', border: 'none' }} className="form-control px-0" placeholder="Type your message..." rows="1" data-emoji-input="" data-autosize="true"></textarea>

                                <a className="text-body pe-0 d-flex align-items-center emoji-section-icon" style={{ position: 'relative' }}>
                                  <BsEmojiSmile style={{ fontSize: 20 }} />
                                </a>
                              </div>
                            </div>

                            <div className="col-auto">
                              <button className="btn btn-icon btn-primary rounded-circle ms-5">
                                <FiSend />
                              </button>
                            </div>
                          </div>
                        </div>

                      </div> */}

                    </div>

                  </div>
                </main>
              </div>
            </div>
          )
        }
      </div>
    )
  );
};

export default ThemeEditor;
