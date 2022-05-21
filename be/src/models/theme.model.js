const mongoose = require('mongoose');
const actions = require('../config/actions');

const themeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    editor: {
        type: Map,
        default: {
            'Conversation List item': `<a className="card text-reset conversation-list-item"
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


          </a>`,
            'Chat Header': `  <div className="chat-header border-bottom py-4 py-lg-7"
          style={{ cursor: 'pointer' }}
         >
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
        </div>`,
            'Avatar': `
        <div className="avatar avatar-online"
       
      style={{ cursor: 'pointer' }}>
        <span className="avatar-text bg-primary">M</span>

      </div>`,
            'Message Content': `     <div className="message-content"
    style={{ cursor: 'pointer' }}>
      <div className="message-text">
        <p>Hey, Mark! I'm good.</p>
      </div>
    </div>`
        }
    },
},
    {
        timestamps: true,
    }
);

const Theme = mongoose.model('theme', themeSchema);

module.exports = Theme;