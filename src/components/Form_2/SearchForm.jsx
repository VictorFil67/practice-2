import { useState } from 'react'

const SearchForm = ({ submit }) => {
  const [serach, setSerach] = useState('')

  const handelSubmit = event => {
    event.preventDefault()
    submit(serach)
  }
  const handelChange = ({ target: { value } }) => {
    setSerach(value)
  }
  return (
    <>
      <form className="formSearch" onSubmit={handelSubmit}>
        <input className="inputSearh" type="text" name="search" onChange={handelChange} />
        <button className="btnSearch">Search</button>
      </form>
    </>
  )
}

export default SearchForm
