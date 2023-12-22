import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

const FormProductsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = ({ target: { value } }) => {
    if (value) setSearchParams(prev => ({ ...Object.fromEntries(prev.entries()), filter: value }))
    else {
      setSearchParams(prev => {
        const paramsValue = Object.fromEntries(prev.entries())
        delete paramsValue.filter
        return paramsValue
      })
    }
  }

  const filterQuery = useMemo(() => searchParams.get('filter') ?? '', [searchParams])

  return (
    <>
      <label htmlFor="filterProducts"> Filter: </label>
      <input type="text" name="filterProducts" onChange={handleChange} value={filterQuery} />
    </>
  )
}

export default FormProductsFilter
