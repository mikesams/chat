import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column';
import './PackageList.css'
import { useNavigate } from 'react-router-dom';
import AdminService from '../../../../Services/admin.service';
import { InputSwitch } from 'primereact/inputswitch';
import moment from 'moment'
import { FiEdit } from 'react-icons/fi';

const PackageList = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = async () => {
    try {
      const res = await AdminService.getPackages();
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const markPackage = async (id) => {
    try {
      const res = await AdminService.markPackageAsDefualt({ id });
      getPackages();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container p-0'>
      <div className="header-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="header-pretitle">
            Overview
          </h6>
          <h1 className="header-title text-truncate">
            Package List
          </h1>
        </div>
        <button className='btn btn-primary' onClick={() => navigate('/app/add-package')}>Add Package</button>
      </div>
      <div className='mt-6' style={{ borderTopLeftRadius: '7px', borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px', borderTopRightRadius: '7px', boxShadow: '0 0.75rem 1.5rem rgb(18 38 63 / 3%)', border: '1px solid #edf2f9', backgroundColor: '#fff' }}>
        <div style={{ padding: '12px 24px', borderBottom: '1px solid rgb(237, 242, 249)' }}>
          <p className='m-0' style={{ fontSize: '15px', fontWeight: 500, color: '#000' }}>Packages</p>
        </div>
        <div>
          <DataTable value={data} paginator responsiveLayout="scroll"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}>
            <Column field="name" header="Package Name" />
            <Column field="price" header="Package Price" />
            <Column body={(dataRow) => moment(dataRow?.createdAt).format('DD MMM YYYY')} header="Created Date" />
            <Column body={(dataRow) => (
              <InputSwitch checked={dataRow?.isDefault} onChange={(e) => markPackage(dataRow?._id)} />
            )} header="Mark As Default" />
            <Column body={(dataRow) => (<div className='d-flex'>
              <FiEdit size={25} color='green' style={{ marginLeft: '15px', cursor: 'pointer' }} onClick={() => navigate('/app/add-package', { state: { id: dataRow?._id } })} />
            </div>)} header="Action" />
          </DataTable>
        </div>
      </div>
    </div>
  )
}

export default PackageList
