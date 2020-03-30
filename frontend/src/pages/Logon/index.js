import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi' ; //Feather icons

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
          <img src={logoImg} alt="Be The Hero" className="src"></img> 
          <form>
              <h1>Faça seu Logon</h1>
              <input placeholder="Sua ID"/>
              <button className="button" type="submit">Entrar</button>
              <Link to="/register">
                < FiLogIn size={16} color="#E02041" />
                Não tenho cadastro!
              </Link>
          </form>
      </section>
      <img src={heroesImg} alt="Heroes" className="src"></img> 
    </div>
  );
}
