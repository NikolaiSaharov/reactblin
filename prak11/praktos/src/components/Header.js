import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <header>
          <nav>
            <ul>
              <li><a href="#about">Обо мне</a></li>
              <li><a href="#portfolio">Портфолио</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </nav>
        </header>
      );
    }
  }
  
export default Header;