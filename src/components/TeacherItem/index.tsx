import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/44823505?s=460&u=c4400c0749fe4ff0195271a1a480a11b045d3977&v=4" alt="Rodrigo Santos"/>
            <div>
              <strong>Rodrigo Santos</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Pseudo criador do hulk o do mr hyde estamos ai para provar que a ciência pode ser maluca... maluca mas fantástica. 
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 100</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
       </article>
  );
}

export default TeacherItem;