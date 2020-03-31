import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi' ; //Feather icons
import api from '../../services/api';
 
import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [ id, setId ] = useState('');

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      // Cícero Cruz - 31/03/2020
      // no meu deu erro usando localhost  eu  tive que  ajustar as permições no baseURL para 'http://127.0.0.1:3333' na api e 
      // no cors fazer um ajuste para  autorizar http... direto pelo localhost não funcionou na minha maquina.
      const response = await api.post('sessions', { id });
      //console.log(response);
      //alert(`Seu ID de acesso: ${response.data.name}`);
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');

    }catch (err) {
      alert('Erro ONG não Encontrada! Verifique seu código e tente Novamente!')
    }
    
  }


  return (
    <div className="logon-container">
      <section className="form">
          <img src={logoImg} alt="Be The Hero" className="src"></img> 
          <form onSubmit={handleLogin}>
              <h1>Faça seu Logon</h1>
              <input 
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)} />
              <button className="button" type="submit">Entrar</button>
              <Link className="back-Link" to="/register">
                < FiLogIn size={16} color="#E02041" />
                Não tenho cadastro!
              </Link>
          </form>
      </section>
      <img src={heroesImg} alt="Heroes" className="src"></img> 
    </div>
  );
}
