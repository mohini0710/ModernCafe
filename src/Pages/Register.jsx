

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate, Link } from 'react-router-dom'
import './Register.css'

const schema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Must be at least 3 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Min 6 characters'),
}).required()

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  })

  const onSubmit = data => {
    localStorage.setItem('userData', JSON.stringify(data))
    console.log('Form submitted:', data)
    reset()
    navigate('/homepage')
  }

  return (
    <div className="register-page">
      <Link to="/login" className="back-link">← </Link>
      <div className="register">
        <div className="login-img">
          <img
            src="https://media.istockphoto.com/id/1216157391/vector/abstract-letter-e-logo-design.jpg?s=612x612&w=0&k=20&c=CzjMQnjwYDuVuS37UeWIDLsGxB9kRaXt-cNSNasBeNI="
            alt="Logo"
          />
        </div>
        <h1>Create your Account</h1>

        {isSubmitSuccessful && (
          <p className="success-message">Thanks for contacting us!</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              {...register('username')}
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isDirty || !isValid || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
