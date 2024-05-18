import React from 'react';

class MainContent extends React.Component {
    scrollToPortfolio = () => {
      window.location.href = '#portfolio';
    };
  
    render() {
      return (
        <>
          <section id="about">
            <img src="./photo/photograph.jpg" alt="Фотограф" />
            <h1>БИЛИБЕБРА</h1>
            <p>Я СУПЕР КРУТОЙ ЧЕЧИК</p>
            <button id="view-portfolio" onClick={this.scrollToPortfolio}>Посмотреть примеры работ</button>
          </section>
  
          <section id="portfolio">
          <a href="./photo/1.jpg" target="_blank" rel="noopener noreferrer">
            <img src="./photo/1.jpg" alt="Работа 1" className="portfolio-image" />
          </a>
          <a href="./photo/2.jpg" target="_blank" rel="noopener noreferrer">
            <img src="./photo/2.jpg" alt="Работа 2" className="portfolio-image" />
          </a>
          <a href="./photo/3.jpg" target="_blank" rel="noopener noreferrer">
            <img src="./photo/3.jpg" alt="Работа 3" className="portfolio-image" />
          </a>
          <a href="./photo/4.jpg" target="_blank" rel="noopener noreferrer">
            <img src="./photo/4.jpg" alt="Работа 4" className="portfolio-image" />
          </a>
          <a href="./photo/5.jpg" target="_blank" rel="noopener noreferrer">
            <img src="./photo/5.jpg" alt="Работа 5" className="portfolio-image" />
          </a>
          <a href="./photo/6.jpg" target="_blank" rel="noopener noreferrer">
            <img src="./photo/6.jpg" alt="Работа 6" className="portfolio-image" />
          </a>
          <a href="./photo/7.jpg" target="_blank" rel="noopener noreferrer">
            <img src="./photo/7.jpg" alt="Работа 7" className="portfolio-image" />
          </a>
          <a href="./photo/8.jpg" target="_blank" rel="noopener noreferrer">
            <img src="./photo/8.jpg" alt="Работа 8" className="portfolio-image" />
          </a>
        </section>
        </>
      );
    }
  }
  
  export default MainContent;