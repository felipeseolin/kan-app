import React from 'react'

const Login = () => {

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    //BACKGROUND
    backgroundImage: "url('http://hdqwalls.com/wallpapers/peaceful-blur-background-1x.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  return (
    <div className="container-fluid" style={ containerStyle }>
      <button type="button" className="btn btn-dark btn-lg">
        Entrar
      </button>
    </div>
  )
}

export default Login;
