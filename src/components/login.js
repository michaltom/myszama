import React from "react"
import { navigate } from "gatsby"
import { setUser, isLoggedIn } from "../utils/auth"
import firebase from "gatsby-plugin-firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Card from "../components/card"

const Login = () => {
  if (isLoggedIn()) {
    navigate(`/app/blog`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: "popup",
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: result => {
          setUser(result.user)
          navigate("/app/blog")
        },
      },
    }
  }

  return (
    <Card>
      <p>Please sign-in to access to the private route:</p>
      {firebase && (
        <StyledFirebaseAuth
          uiConfig={getUiConfig(firebase.auth)}
          firebaseAuth={firebase.auth()}
        />
      )}
    </Card>
  )
}

export default Login

// class Login extends React.Component {
//   state = {
//     username: ``,
//     password: ``,
//   }
//   handleUpdate = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }
//   handleSubmit = event => {
//     event.preventDefault()
//     handleLogin(this.state)
//   }
//   render() {
//     if (isLoggedIn()) {
//       navigate(`/app/blog`)
//     }
//     return (
//       <>
//         <h1>Log in</h1>
//         <form
//           method="post"
//           onSubmit={event => {
//             this.handleSubmit(event)
//             navigate(`/app/blog`)
//           }}
//         >
//           <label>
//             Username
//             <input type="text" name="username" onChange={this.handleUpdate} />
//           </label>
//           <label>
//             Password
//             <input
//               type="password"
//               name="password"
//               onChange={this.handleUpdate}
//             />
//           </label>
//           <input type="submit" value="Log In" />
//         </form>
//       </>
//     )
//   }
// }
// export default Login
