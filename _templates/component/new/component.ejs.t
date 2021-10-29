---
to: src/components/<%= Name %>/<%= Name %>.tsx
---
import { FC } from 'react'
import styled from 'styled-components'

interface <%= Name %>Props {
}

const <%= Name %>: FC<<%= Name %>Props> = () => {
  return <Title>It Works!</Title>
}

const Title = styled.h1``

export default <%= Name %>

