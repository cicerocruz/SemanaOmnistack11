import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'; //Feather icons
import { FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function FunctionX() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Seja Bem vindo(a), APAD.</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower />
        </button>
      </header>

      <h1>CASOS CADASTRADOS</h1>

      <ul> 
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descrição do Caso</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descrição do Caso</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descrição do Caso</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descrição do Caso</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
      </ul>
    </div>
  );
}
