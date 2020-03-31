import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' ; //Feather icons

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() { 
  return (
    <div className="incident-container">
      <div className="content">
        <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastrar Novo Caso</h1>
            <p>Descreva o caso detalhadamente para encontrar o herói que irá resolve-lo.</p>
            <Link className="back-Link" to="/profile">
                < FiArrowLeft color="#E02041" />
                Voltar para Profile
            </Link>
        </section>
        <form>
          <input placeholder="Título do Caso" />
          <textarea placeholder="Descreva o Caso..." />
          <input placeholder="Valor em Reais" />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
