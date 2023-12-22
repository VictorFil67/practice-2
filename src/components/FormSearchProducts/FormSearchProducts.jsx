import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FormSearchProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')

  const handleChange = ({ target: { value } }) => {
    setQuery(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    query ? setSearchParams({ search: query }) : setSearchParams({})
  }

  useEffect(() => {
    const searchQuery = searchParams.get('search')
    searchQuery && setQuery(searchQuery)
  }, [searchParams])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchProducts"> Search: </label>
      <input
        type="text"
        name="searchProducts"
        placeholder="Search products..."
        onChange={handleChange}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default FormSearchProducts
