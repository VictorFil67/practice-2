import React from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { setFilterQuery } from 'store/users/usersSlice'

const FormUser = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  function handleChange({ target: { value } }) {
    if (value) {
      setSearchParams({ filter: value })
    } else {
      setSearchParams({})
    }
    dispatch(setFilterQuery(value))
  }
  return (
    <input
      type="text"
      name="searchUser"
      onChange={handleChange}
      value={searchParams.get('filter') ?? ''}
    />
  )
}

export default FormUser
