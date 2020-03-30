import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' ; //Feather icons

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, cadastre seus casos e encontre pessoas que querem ajudar...</p>
            <Link className="back-Link" to="/">
                < FiArrowLeft size={16} color="#E02041" />
                Já possuo cadastro!
              </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG"/>
          <input type="email" placeholder="E-mail"/>
          <input className="whatsapp" placeholder="Whatsapp"/>
          <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="Uf" style={{ width: 80, }} />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
