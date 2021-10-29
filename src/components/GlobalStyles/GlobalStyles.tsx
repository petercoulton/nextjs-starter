import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Reset from './reset'
import Vars from './vars'

interface GlobalStyleProps {}

const Wrapper: FC<GlobalStyleProps> = (props) => {
  return <GlobalStyles {...props} />
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  ${Reset}
  ${Vars}
`

export default React.memo(Wrapper)
