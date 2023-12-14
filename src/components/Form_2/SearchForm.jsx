import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchForm = ({ submit }) => {
  const [serach, setSerach] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('query')
    setSerach(query ?? '')
  }, [searchParams])

  const handelSubmit = event => {
    event.preventDefault()
    submit()
    if (!serach) {
      setSearchParams({})
      return
    }
    setSearchParams({ query: serach })
  }

  const handelChange = ({ target: { value } }) => {
    setSerach(value)
  }

  return (
    <>
      <form className="formSearch" onSubmit={handelSubmit}>
        <input
          className="inputSearh"
          type="text"
          name="search"
          onChange={handelChange}
          value={serach}
        />
        <button className="btnSearch">Search</button>
      </form>
    </>
  )
}

export default SearchForm
