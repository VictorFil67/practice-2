import { getUsers } from 'API/users';
import SearchForm from '../components/Form_2/SearchForm'
import { Loader } from '../components/Loader/Loader';
import UsersList from '../components/UserList';
import Button from '../components/uiComponents/Button.styled';
import { Notify } from 'notiflix';
import React, { useCallback, useEffect, useState } from 'react'

const LIMIT = 10;
const SearchUsersPage = () => {
  const [queru, setQueru] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState(null)
  const [page, setPage] = useState(1)

  const getDataFromApi = useCallback(
    async (q) => {
      let skip = LIMIT * page - LIMIT
      try {
        setIsLoading(true)
        const { users } = await getUsers(skip, LIMIT,q)
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
    },
    [page]
  )
  // useEffect(() => {
  //   getDataFromApi()
  
    
  // }, [getDataFromApi, page])
  

   useEffect(() => {
    if (queru) {
      getDataFromApi(queru)
    }
  }, [getDataFromApi,queru])

 
  


  function submit(queru){
    setPage(1)
    
    setQueru(queru)
  }
  const incrementPage = () => {
    setPage(prev => prev + 1)
  }

  return (
    <>
    <SearchForm submit={submit}/>
    {isLoading && <Loader />}
      {users && (
        <>
          <UsersList users={users} />
          <Button onClick={incrementPage}>Load more</Button>
        </>
      )}
      </>
  )
}

export default SearchUsersPage