import { getUser } from 'API/user'
import { Loader } from 'components/Loader/Loader'
import { Notify } from 'notiflix'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
    const {id} = useParams()

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(()=>{
        async function fetchUserById(){
            try {
                setIsLoading(true)
                const dataUser = await getUser(id)
                setUser(dataUser)
                setIsLoading(false)

            } catch (error) {
                Notify.failure(error.message)
            }
            
        }
        fetchUserById()

    },[id])
    
  return (
    <>
    {isLoading && <Loader/>}
    {user && 
    <ul>
        <li>Username - {user.username}</li>
        <li>Age - {user.age}</li>
        <li>Email - {user.email}</li>
        <li>Phone -{user.phone}</li>
    </ul>}
    
    </>
  )
}

export default UserDetailsPage