import { Circles } from 'react-loader-spinner'
import styled from 'styled-components'

export const Spinner = styled('div')({
  position: 'absolute !important',
  display: 'flex',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0000001f',
  backdropFilter: 'blur(5px)',
})
