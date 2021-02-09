import { Link, navigate } from "gatsby"
import React from "react"
import styled from "styled-components"
import { isLoggedIn, logout } from "../utils/auth"
import firebase from "gatsby-plugin-firebase"

const StyledNav = styled.nav`
  position: fixed;
  z-index: 999;
  margin: 5px 100px;
  padding: 20px 100px;
  width: 80%;
  top: 0;
  left: 0;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top: 2px solid rgba(175, 175, 175, 0.8);
  border-bottom: 2px solid rgba(175, 175, 175, 0.8);
  box-shadow: 0 -5px 0px white;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    a {
      letter-spacing: 2.6px;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`

const linkStyles = {
  padding: " 6px 10px",
}

const activeStyles = {
  background: "black",
  color: "white",
  padding: " 6px 10px",
}

const NavLink = ({ children, to }) => (
  <Link to={to} style={linkStyles} activeStyle={activeStyles}>
    {children}
  </Link>
)
const Navigation = () => (
  <StyledNav>
    <ul>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/recipes">recipes</NavLink>
      </li>
      <li>
        <NavLink to="/app/blog">blog</NavLink>
      </li>
      <li>
        <NavLink to="/beer">beer</NavLink>
      </li>
      <li>
        <NavLink to="/shop">shop</NavLink>
      </li>
      {isLoggedIn() ? (
        <li>
          <a
            href="/"
            onClick={event => {
              logout(firebase).then(() => navigate(`/app/login`))
              event.preventDefault()
            }}
          >
            Logout
          </a>
        </li>
      ) : (
        <li>
          <NavLink to="/app/login">Login</NavLink>
        </li>
      )}
    </ul>
  </StyledNav>
)

export default Navigation
