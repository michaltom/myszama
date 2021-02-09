import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/navigation"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle></GlobalStyle>
    <Navigation></Navigation>
    {children}
  </>
)

export default MainLayout
