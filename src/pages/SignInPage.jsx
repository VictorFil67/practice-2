import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInThunk } from 'store/auth/thunks'

const SignInPage = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function submit(data) {
    dispatch(signInThunk(data))
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
        <NavLink to={'/signup'}>Sign Up</NavLink>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">
          Your email
          <input {...register('email')} type="email" name="email" />
        </label>
        <label htmlFor="password">
          Your pass
          <input {...register('password')} type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default SignInPage
