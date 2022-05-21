import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column';
import AdminService from '../../../../Services/admin.service';
import moment from 'moment'
import { InputSwitch } from 'primereact/inputswitch';


const UsersListScreen = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const res = await AdminService.getUsers();
            console.log(res?.data);
            setData(res?.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container p-0'>
            <div className="header-body">
                <div>
                    <h6 className="header-pretitle">
                        Overview
                    </h6>
                    <h1 className="header-title text-truncate">
                        Users List
                    </h1>
                </div>
            </div>
            <div className='mt-6' style={{ borderTopLeftRadius: '7px', borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px', borderTopRightRadius: '7px', boxShadow: '0 0.75rem 1.5rem rgb(18 38 63 / 3%)', border: '1px solid #edf2f9', backgroundColor: '#fff' }}>
                <div style={{ padding: '12px 24px', borderBottom: '1px solid rgb(237, 242, 249)' }}>
                    <p className='m-0' style={{ fontSize: '15px', fontWeight: 500, color: '#000' }}>Users</p>
                </div>
                <div>
                    <DataTable value={data} paginator responsiveLayout="scroll"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}>
                        <Column field="name" header="Name" />
                        <Column field="companyName" header="Company Name" />
                        <Column field="email" header="Email Address" />
                        <Column body={(dataRow) => moment(dataRow?.createdAt).format('DD MMM YYYY') } header="Joined At" />
                        <Column body={(dataRow) => <InputSwitch checked={true} onChange={(e) => {}} />} header="Action"  />
                    </DataTable>
                </div>
            </div>
        </div>
    )
}

export default UsersListScreen
