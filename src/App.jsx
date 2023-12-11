import { useState, useEffect } from 'react'
import Section from 'components/uiComponents/Section'
import UsersList from 'components/UserList'
import Button from 'components/uiComponents/Button.styled'
import Form from 'components/Form/Form'
import { nanoid } from 'nanoid'
import { getUsers } from 'API/users'
import { Loader } from 'components/Loader/Loader'
import { Notify } from 'notiflix'

const LIMIT = 10

const App = () => {

  const [users, setUsers] = useState(null);
const [isShowForm, setIsShowForm] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [page, setPage] = useState(1);

useEffect(() => {

  async function  getDataFromApi() {
    let skip = LIMIT * page - LIMIT
    try {
      setIsLoading(true)
      const { users } = await getUsers(skip, LIMIT)
      if (page > 1) {
        setUsers(prev => [...prev, ...users])
      } else {
        setUsers(users)
      }
    } catch (error) {
      Notify.failure(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  getDataFromApi()
}, [page])

 const deleteUsers = userId => {
  setUsers(prev => prev.filter(({ id }) => id !== userId))
  }

 const changeJobStatus = userId => {
  setUsers(prev => prev.map(user =>
    user.id === userId ? { ...user, hasJob: !user.hasJob } : user))
  }

 const handleClick = () => {
  setIsShowForm(true)
  }

 const createUser = user => {
    const newUser = {
      ...user,
      id: nanoid(),
      hasJob: false,
    }
    setUsers(prev=> [...prev.users, newUser]);
    setIsShowForm(false);
  }

const  incrementPage = () => {
  setPage(prev => prev +1)
  }

    return (
      <Section title={'Users List'}>
        {isLoading && <Loader />}
        {users && (
          <>
            <UsersList
              users={users}
              deleteUsers={deleteUsers}
              changeJobStatus={changeJobStatus}
            />
            <Button onClick={incrementPage}>Load more</Button>
          </>
        )}
        {isShowForm ? (
          <Form createUser={createUser} />
        ) : (
          <Button onClick={handleClick} $bgColor="grey">
            Show form
          </Button>
        )}
      </Section>
    )
}

export default App
