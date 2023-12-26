import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signUpThunk } from 'store/auth/thunks'

const SignUpPage = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function submit(data) {
    dispatch(signUpThunk(data))
      .unwrap()
      .then(() => {
        navigate('/')
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>Sign In</NavLink>
      </div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="firstName">
          Your name
          <input {...register('firstName')} type="text" name="firstName" />
        </label>
        <label htmlFor="email">
          Your email
          <input {...register('email')} type="email" name="email" />
        </label>
        <label htmlFor="password">
          Your pass
          <input {...register('password')} type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default SignUpPage
