import logo from "../../logo.svg";
import '../../App.css'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { login } from "../../services/firebase";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const signupFlag = queryParams.get('p');

  function handleAcessar() {
    login(email, password)
    .then(resp => {
        localStorage.setItem('loggedId', resp?.user?.uid)
        window.location = "/home"
    }).catch(err => {
        setMessage('credenciais inválidas')
    })
  }

  function handleInput(e) {
    const name = e.target.name
    const value = e.target.value
    if (name === "email") {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  function handleInputFocus() {
    setMessage("")
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleAcessar()
    }
  })

  function handleSignupLink(e) {
    e.stopPropagation()
    window.location = "/signup"
  }

  return (
    <>
    <div className="app">
      <header className="header">
        <div className="container">
          <img src={logo} className="react-logo" alt="logo" />
          {signupFlag === 'signup-success' &&
          <p>Conta criada com sucesso, você já pode acessar</p>
          }
          
          <p className="typing-login">Login</p>

          <input type="text" name="email" value={email} title="email"
              placeholder="Digite seu email" 
              onChange={handleInput}
              onFocus={handleInputFocus}></input>
          
          <input type="password" name="password" value={password} title="password"
              placeholder="Digite sua senha"  
              onChange={handleInput}
              onFocus={handleInputFocus}></input>

          <button
            className="button"
            onClick={(e) => handleAcessar(e)}
          >
            Acessar
          </button>
          <a className="link" onClick={handleSignupLink}>Ainda não tem uma conta? cadastre-se aqui</a>
          <p className="error-message">
            <span title="message"></span>{message}
          </p>
        </div>
      </header>
    </div>
    </>
  );
}

export default Login;
