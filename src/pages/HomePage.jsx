import { useState, useEffect, useCallback } from 'react'
import Section from '../components/uiComponents/Section'
import UsersList from '../components/UserList'

import { Loader } from '../components/Loader/Loader'

import { useSelector, useDispatch } from 'react-redux'
import { getAllUsersThunc } from 'store/users/usersThunk'
import FormUser from 'components/FormUser/FormUser'
import { selectError, selectLoading, selectUsers } from 'store/users/selectors'

const LIMIT = 10

const HomePage = () => {
  const [counter, setCounter] = useState(0)
  const users = useSelector(selectUsers)
  const isLoading = useSelector(selectLoading)
  // const error = useSelector(selectError)
  const [page] = useState(1)

  const dispatch = useDispatch()
  useEffect(() => {
    let skip = LIMIT * page - LIMIT
    dispatch(getAllUsersThunc({ skip, LIMIT }))
  }, [dispatch, page])

  return (
    <Section title={'Users List'}>
      <button
        onClick={() => {
          setCounter(prev => prev + 1)
        }}
      >
        {counter}
      </button>
      {isLoading && <Loader />}
      <FormUser />
      {users && (
        <>
          <UsersList users={users} />
        </>
      )}
    </Section>
  )
}

export default HomePage
