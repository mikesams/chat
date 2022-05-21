import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminService from '../../../../../Services/admin.service';
import './AddPackage.css'

const AddPackage = (props) => {

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const [actions, setActions] = useState([]);
  const [id, setId] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getUserActions();
  }, []);

  useEffect(() => {
    if (location?.state?.id) {
      getPackageById(location?.state?.id);
    }
    console.log(location.state)
  }, [location])

  const getUserActions = async () => {
    try {
      const res = await AdminService.getUserActions();
      console.log(res?.data);
      setActions(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getPackageById = async (id) => {
    try {
      const res = await AdminService.getPackageById(id);
      setId(id);
      setValue('name', res?.data?.name);
      setValue('price', res?.data?.price);
      setValue('actions', res?.data?.actions);
    } catch (error) {
      console.log(error);
    }
  }

  const save = async (data) => {
    try {
      await id ? AdminService.editPackage({ ...data, id }) : AdminService.createPackage(data);
      reset();
      props.showSuccess({ message: 'Successfully Updated', detail: 'Add Package Screen' });
      navigate('/app/packages');
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
            Add Package
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(save)} style={{ marginTop: '30px' }}>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group">
              <label className="form-label">
                Name of the Plan
              </label>
              <input type="text"
                {...register("name", {
                  required: 'Required Input'
                })}
                className="form-control" placeholder="Name of the Plan" />
              {
                errors?.name && (
                  <small className='text-danger mt-3 ms-3'>{errors?.name?.message}</small>
                )
              }

            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <label className="form-label">
                Subscription price for the plan
              </label>
              <input type="number"
                {...register("price", {
                  required: 'Required Input'
                })}
                className="form-control" placeholder="Subscription price for the plan" />
              {
                errors?.price && (
                  <small className='text-danger mt-3 ms-3'>{errors?.price?.message}</small>
                )
              }
            </div>
          </div>
        </div>
        <div className='mt-6' style={{ borderTopLeftRadius: '7px', borderTopRightRadius: '7px', boxShadow: '0 0.75rem 1.5rem rgb(18 38 63 / 3%)', border: '1px solid #edf2f9', backgroundColor: '#fff' }}>
          <div style={{ padding: '12px 24px', borderBottom: '1px solid rgb(237, 242, 249)' }}>
            <p className='m-0' style={{ fontSize: '15px', fontWeight: 500, color: '#000' }}>Features</p>
          </div>
          <div style={{ padding: '1.5rem' }}>
            {
              actions.length > 0 && actions.map(action => (
                <div className="form-check mb-4" key={action}>
                  <input {...register("actions")} className="form-check-input" value={action} type="checkbox" id="checklistOne" />
                  <label className="form-check-label">{action}</label>
                </div>
              ))
            }
          </div>
        </div>
        <button className='btn btn-primary mt-5' type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default AddPackage
