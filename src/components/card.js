import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  box-shadow: 0px 2px 4px hsla(0, 0%, 50%, 0.6);
  width: 100%;
  margin: auto;
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const Card = ({ children }) => (
  <CardWrapper>
    <StyledCard>{children}</StyledCard>
  </CardWrapper>
)

export default Card
