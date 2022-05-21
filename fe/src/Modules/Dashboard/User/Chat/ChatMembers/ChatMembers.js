import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './ChatMembers.css'
import moment from 'moment';


const ChatMembers = ({ users, setActiveUser, activeUser }) => {
  return (
    <aside className="chat-members bg-light">
      <div className="tab-content h-100">
        <div className="tab-pane fade h-100 show active">
          <div className="d-flex flex-column h-100 position-relative">
            <div className="hide-scrollbar">

              <div className="container py-8">

                <div className="mb-4">
                  <h2 className="fw-bold m-0">Chats</h2>
                </div>


                <div className="mb-6">
                  <form action="#">
                    <div className="input-group">
                      <div className="input-group-text">
                        <FiSearch style={{ fontSize: 20 }} />
                      </div>

                      <input type="text" className="form-control form-control-lg ps-4" placeholder="Search messages or users" aria-label="Search for messages or users..." />
                    </div>
                  </form>
                </div>


                <div className="card-list">

                  {
                    users.length > 0 && users.map(q => (
                      <a className="card border-0 text-reset" key={q?._id} onClick={() => setActiveUser(q)}
                        style={{cursor: 'pointer', backgroundColor: activeUser?._id === q?._id ? '#f6f6f6' : '#fff' }}>
                        <div className="card-body">
                          <div className="row gx-5">
                            <div className="col-auto">
                              <div className="avatar avatar-online">
                                <span className="avatar-text bg-primary">J</span>

                              </div>
                            </div>

                            <div className="col">
                              <div className="d-flex align-items-center mb-3">
                                <h5 className="me-auto mb-0">{q?.user?.name}</h5>
                                <span className="text-muted extra-small ms-2">{q?.messages?.length > 0 ? moment(q?.messages[0]?.date).fromNow() : ''}</span>
                              </div>

                              <div className="d-flex align-items-center">
                                <div className="line-clamp me-auto">
                                  {q?.messages?.length > 0 ? q?.messages[0]?.message : ''}
                                </div>

                                {/* <div className="badge badge-circle bg-primary ms-5">
                              <span>3</span>
                            </div> */}
                              </div>
                            </div>
                          </div>
                        </div>


                      </a>
                    ))
                  }

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </aside>
  )
}

export default ChatMembers
