import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' ; //Feather icons
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {

  const history = useHistory();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');


  async function handleRegister(e){
    e.preventDefault();

    const data = {  name,
                    email,
                    whatsapp,
                    city,
                    uf
                 };

    try{
      // Cícero Cruz - 31/03/2020
      // no meu deu erro usando localhost  eu  tive que  ajustar as permições no baseURL para 'http://127.0.0.1:3333' na api e 
      // no cors fazer um ajuste para  autorizar http... direto pelo localhost não funcionou na minha maquina.
      const response = await api.post('ongs', data);
      //console.log(response);
      alert(`Seu ID de acesso: ${response.data}`);
      history.push('/');
    }catch (err) {
      alert('Erro no cadastro, tente novamente!')
    }
    
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, cadastre seus casos e encontre pessoas que querem ajudar...</p>
            <Link className="back-Link" to="/">
                < FiArrowLeft color="#E02041" />
                Já possuo cadastro!
            </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
              placeholder="Nome da ONG"
              value={name}
              onChange={e => setName(e.target.value)} />
         
          <input 
              type="email" 
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)} />

          <input 
              className="whatsapp" 
              placeholder="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)} />

          <div className="input-group">
            <input 
                placeholder="Cidade"
                value={city}
                onChange={e => setCity(e.target.value)} />
  
            <input 
                placeholder="Uf" 
                style={{ width: 80, }} 
                value={uf}
                onChange={e => setUf(e.target.value)} />
  
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
