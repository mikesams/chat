import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import './AddMember.css'
import UserService from '../../../../../Services/user.service';

const AddMember = (props) => {

  const { register, handleSubmit, formState: { errors }, setError, reset, setValue } = useForm();

  const [roles, setRoles] = useState([]);

  const [id, setId] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    if (location?.state?.id) {
      getMemberById(location?.state?.id);
    }
    console.log(location.state)
  }, [location])

  const getRoles = async () => {
    try {
      const res = await UserService.getRoles();
      console.log(res?.data);
      setRoles(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMemberById = async (id) => {
    try {
      const res = await UserService.getMemberById(id);
      setId(id);
      setValue('name', res?.data?.name);
      setValue('email', res?.data?.email);
      setValue('role', res?.data?.role);
    } catch (error) {
      console.log(error);
    }
  }

  const save = async (data) => {
    try {
    id ? await UserService.editMember({ ...data, id }) : await UserService.createMember(data);
      reset();
      navigate('/app/members');
      props.showSuccess({ message: 'Successfully Updated', detail: 'Add Member Screen' });
    } catch (error) {
      console.log(error);
       if (error?.response?.status === 400) {
        setError('email', {
            message: error?.response?.data?.message
        }, {
            shouldFocus: true
        })
    }
    }
  }

  return (
    <div className='container'>
      <div style={{ borderBottom: '1px solid rgb(237, 242, 249)' }} className='d-flex align-items-center my-6'>
        <div style={{ height: '25px', width: '12px', background: '#000', marginRight: '12px', borderRadius: '3px' }}></div>
        <p className='m-0' style={{ fontSize: '15px', fontWeight: 500, color: '#000' }}>Add Member</p>
      </div>
      <form onSubmit={handleSubmit(save)} style={{ marginTop: '30px' }}>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group">
              <label className="form-label">
                Name of the Member
              </label>
              <input type="text"
                {...register("name", {
                  required: 'Required Input'
                })}
                className="form-control" placeholder="Name of the Member" />
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
                errors?.email && (
                  <small className='text-danger mt-3 ms-3'>{errors?.email?.message}</small>
                )
              }

            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <label className="form-label">
                Role
              </label> <br />
              <select className='form-control' {...register("role", {
                required: 'Required Input',
              })}>
                <option value={''}>Select one</option>
                {
                  roles.length > 0 && roles.map(r => (<option key={r._id} value={r._id}>{r.name}</option>))
                }
              </select>
              {
                errors?.role && (
                  <small className='text-danger mt-3 ms-3'>{errors?.role?.message}</small>
                )
              }

            </div>
          </div>
        </div>
        <button className='btn btn-primary mt-5 mb-5' type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default AddMember
