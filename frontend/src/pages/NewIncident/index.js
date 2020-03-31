import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' ; //Feather icons
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() { 
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
      e.preventDefault();

      const data = {
        title,
        description,
        value,
      };

      try{
        await api.post('incidents', data, {
          headers: {
            Authorization: ongId,
          } 
        });

        alert('Caso Inserido com sucesso!');

        history.push('/profile');
      } catch(err){
        alert('Erro ao cadastrar caso! Verifique os dados e tente novamente...');
      };

    };

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
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do Caso"    
            value={title}
            onChange={e => setTitle(e.target.value)} />
          <textarea 
            placeholder="Descreva o Caso..."
            value={description}
            onChange={e => setDescription(e.target.value)} />
          <input 
            placeholder="Valor em Reais"    
            value={value}
            onChange={e => setValue(e.target.value)} />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
