import styled from 'styled-components'

export const Container = styled('div')(({ $isDetails }) => ({
  border: '2px solid black',
  borderRadius: '16px',
  marginBottom: '12px',
  padding: '24px',
  ...(!$isDetails && { cursor: 'pointer' }),
}))
