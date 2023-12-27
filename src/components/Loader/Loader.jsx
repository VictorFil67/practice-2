import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoading } from 'store/root/selectors'
import { Spinner } from './Loader.styled'
import { Circles } from 'react-loader-spinner'

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading)
  return isLoading ? (
    <Spinner>
      <Circles
        height="120"
        width="120"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Spinner>
  ) : (
    <></>
  )
}
