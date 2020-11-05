import React, { useState } from 'react';
import './App.css';
import api from './services/api';
import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState(''); // retorna o valor em tempo real do input email

  function handleSubmit(event) {
    event.preventDefault() /*formulário, evite o seu funcionamento padrão(enviar o usuário para outra tela)*/

    console.log('hello world')
  }
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            id="email" 
            type="text" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)} /*verifica se ocorre mudanças no valor*/
          />

          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
