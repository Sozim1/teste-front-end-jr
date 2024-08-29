// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Compra 100% segura</a></li>
          <li><a href="#features">Frete Gratis acima de R$ 200</a></li>
          <li><a href="#contact">Parcele suas compras</a></li>
        </ul>

      </nav>
      
        <div className="App">
            <ul className="posts">
            <input type="text" placeholder='O que esta buscando'></input> 
            </ul>
        </div>
        
        <nav>
            <ul>
                <li><a href="#home">Todas as categorias</a></li>
                <li><a href="#features">Supermercado</a></li>
                <li><a href="#contact">Livros</a></li>
                <li><a href="#contact">Moda</a></li>
                <li><a href="#contact">Lançamento</a></li>
                <li><a href="#contact">Ofertas do dia</a></li>
                <li><a href="#contact">Assinatura</a></li>


            </ul>
        </nav>
    </header>
  );
};

export default Header;
