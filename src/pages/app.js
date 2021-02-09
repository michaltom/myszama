import React from "react"
import { Router } from "@reach/router"
import Blog from "./blog"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"
const App = () => (
  <Router basepath="/app">
    <PrivateRoute path="/blog" component={Blog} />
    <Login path="/login" />
  </Router>
)
export default App
