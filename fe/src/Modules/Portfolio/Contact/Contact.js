import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const save = async (data) => {

  }
  return (
    <>
      <section className="main-header-noimage header-subpage">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Schedule a free consultation with our experts</h1>
              <p>Learn how AI-first virtual assistants and process assistants from PlugtoChat can help you optimize end-to-end experiences for business interactions.</p>
            </div>
          </div>
        </div>
      </section>
      <form className='my-6 container' onSubmit={handleSubmit(save)}>
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
        <div className="form-group">
          <label className="form-label">
            Name
          </label>
          <input type="text"
            {...register("name", {
              required: 'Required Input'
            })}
            className="form-control" placeholder="Name" />
          {
            errors?.name && (
              <small className='text-danger mt-3 ms-3'>{errors?.name?.message}</small>
            )
          }
        </div>
        <div className="form-group">
          <label className="form-label">
            Website
          </label>
          <input type="text"
            {...register("website")}
            className="form-control" placeholder="Website" />
        </div>
        <div className="form-group">
          <label className="form-label">
            Tell us more about your business— how are you looking to use PlugToChat?*
          </label>
          <textarea type="text"
            {...register("comments")}
            className="form-control" />
        </div>
        <div>
          <button className='btn btn-success' style={{float: 'right', marginTop: '20px',
            background: '#26272d',
            borderColor: '#26272d',
            color: '#ffffff',
            fontSize: '16px',
            lineHeight: '16px',
            fontFamily: 'Inconsolata',
            padding: '12px 24px',
            borderRadius: '15px'
        }}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Contact