import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import UserService from '../../../../Services/user.service';
import './Settings.css'

const Settings = () => {

  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
  const [data, setData] = useState('');
  useEffect(() => {
    getSettings();
  }, [])


  const getSettings = async () => {
    try {
      const res = await UserService.getSettings();
      setValue('name', res?.data?.name);
      setData({ 'appId': res?.data?.appId, 'secretKey': res?.data?.secretKey });
    } catch (error) {
      console.log(error);
    }
  }

  const save = async (data) => {
    try {
      const res = await UserService.createSettings({ name: data?.name });
      if (res?.data?.appId && res?.data?.secretKey) {
        setData({ 'appId': res?.data?.appId, 'secretKey': res?.data?.secretKey });
      }
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
            Settings
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(save)} style={{ marginTop: '30px' }}>
        <div className='row'>
          <div className='col-md-12'>
            <div className="form-group mb-4">
              <label className="form-label">
                Name of the App
              </label>
              <input type="text"
                {...register("name", {
                  required: 'Required Input'
                })}
                className="form-control" placeholder="Name of the App" />
              {
                errors?.name && (
                  <small className='text-danger mt-3 ms-3'>{errors?.name?.message}</small>
                )
              }

            </div>
          </div>
          {
            data !== '' && data['appId'] && data['secretKey'] && (
              <>
                <div className='col-md-6 mb-3'>
                  <div className="form-group">
                    <label className="form-label">
                      App ID
                    </label>
                    <h4>{data['appId']}</h4>
                  </div>
                </div>
                <div className='col-md-6 mb-3'>
                  <div className="form-group">
                    <label className="form-label">
                      Secret key (use this for calling the REST API)
                    </label>
                    <h4>{data['secretKey']}</h4>
                  </div>
                </div>
              </>
            )
          }
        </div>
        <button className='btn btn-primary mt-5' type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default Settings
