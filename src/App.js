import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  function handleAcessar() {
    if (email === "diego@gmail.com" && password === "123456") {
      setMessage("Acessado com sucesso");
    } else {
      setMessage("Usuário ou senha incorretos");
    }
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

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <img src={logo} className="react-logo" alt="logo" />
          <p>Login</p>

          <input type="text" name="email" value={email} title="email"
              placeholder="Digite seu email" 
              onChange={handleInput}
              onFocus={handleInputFocus}></input>
          
          <input type="text" name="password" value={password} title="password"
              placeholder="Digite sua senha"  
              onChange={handleInput}
              onFocus={handleInputFocus}></input>

          <button
            className="button"
            onClick={(e) => handleAcessar(e)}
          >
            Acessar
          </button>
          <p>
            <span title="message"></span>{message}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
