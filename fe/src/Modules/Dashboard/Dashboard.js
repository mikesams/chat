import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './Dashboard.css'
import { FiHome, FiChevronDown, FiMessageSquare, FiChevronRight, FiUsers, FiSettings, FiEdit, FiLogOut, FiUser } from 'react-icons/fi'
import { MdSubscriptions } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from '../../Store/features/user.slice'

const menuItems = [
    {
        label: 'Dashboard',
        icon: (<FiHome className="me-3" style={{ fontSize: 20 }} />),
        url: '/app',
    },
    {
        label: 'Settings',
        icon: (<FiSettings className="me-3" style={{ fontSize: 20 }} />),
        url: '/app/settings',
        actionName: 'App Settings'
    }, {
        label: 'Theme Management',
        icon: (<FiEdit className="me-3" style={{ fontSize: 20 }} />),
        url: '/app/themes',
        actionName: 'Customize Widget'
    },
    {
        label: 'Member Management',
        icon: (<FiUsers className="me-3" style={{ fontSize: 20 }} />),
        url: '/app/members',
        actionName: 'Role Management'
    },
    {
        label: 'Chat',
        icon: (<FiMessageSquare className="me-3" style={{ fontSize: 20 }} />),
        url: '/app/chat',
        actionName: 'Chat Accessible'
    },
    {
        label: 'User Management',
        icon: (<FiUsers className="me-3" style={{ fontSize: 20 }} />),
        url: '/app/users',
        actionName: 'User Management'
    },
    {
        label: 'Subscriptions',
        icon: (<MdSubscriptions className="me-3" style={{ fontSize: 20 }} />),
        url: '/app/subscriptions',
        actionName: 'Subscription Management'
    },
    {
        label: 'Package Management',
        icon: (<MdSubscriptions className="me-3" style={{ fontSize: 20 }} />),
        url: '/app/packages',
        actionName: 'Package Management'
    },
    {
        label: 'Role Management',
        icon: (<MdSubscriptions className="me-3" style={{ fontSize: 20 }} />),
        url: '/app/roles',
        actionName: 'Role Management'
    }
];

const Dashboard = () => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const actions = useSelector(state => state?.user?.actions || []);

    const logout = () => {
        localStorage.clear();
        dispatch(resetState());
        history('/');
    }

    const [menu, setMenu] = useState(menuItems.filter(q => actions.includes(q.actionName)));
    return (
        <>
            <div className='sidebar'>
                <div>
                    <div className='d-flx justify-content-center'>
                        <img src='/assets/img/logo.jpeg' style={{
                            width: '100%',
                        }} className='mb-5' />
                    </div>
                    <div style={{ minHeight: '300px', maxHeight: '300px', overflow: 'auto' }}>
                        {
                            menu.length > 0 && menu.map(m => (
                                <div className='nav-link' key={m?.label} onClick={() => history(m?.url)}>
                                    <p style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                                        {m?.icon}
                                        {m?.label}
                                    </p>
                                    <span style={{ margin: 0 }}>
                                        <FiChevronRight style={{ fontSize: 18 }} />
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className='nav-link' onClick={() => logout()}>
                        <p style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                            <FiLogOut className="me-3" style={{ fontSize: 20 }} />
                            Logout
                        </p>
                        <span style={{ margin: 0 }}>
                            <FiChevronRight style={{ fontSize: 18 }} />
                        </span>
                    </div>
                </div>
            </div>

            <div style={{
                marginLeft: '265px',
                backgroundColor: 'rgb(249, 251, 253)',
                minHeight: '100vh',
                maxHeight: '100vh',
                overflow: 'auto',
                paddingTop: '40px'
            }}>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard
