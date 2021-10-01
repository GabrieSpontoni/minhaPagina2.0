import React, { Component } from "react";
class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" style={{ background: "#050854" }}>
        <div className="row">
          <div className="twenty columns collapse">
            <h1>Confira alguns projetos!</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://omarvin.com.br/" title="Marvin">
                    <img
                      alt="Canadian Wanderlust"
                      src="images/portfolio/marvin.png"
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Marvin</h5>
                        <p>
                          Assistente pessoal de coletas, vistorias, geração de
                          laudos e muito mais!
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="/works" title="Minha Página">
                    <img
                      alt="Minha Página"
                      src="images/portfolio/portfolio.png"
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Minha página</h5>
                        <p>
                          Esta Pagina que você está vendo foi desenvolvida com
                          ReactJS.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a
                    href="https://my-money-app-front.web.app/billingCycles"
                    title="My Money App"
                  >
                    <img
                      alt="My Money App"
                      src="images/portfolio/moneyapp.png"
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>My Money App</h5>
                        <p>
                          Website que eu criei para controlar ciclos de
                          pagamentos em ReactJS.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a
                    href="https://calculadora-react-c3920.web.app/"
                    title="Caluladora"
                  >
                    <img alt="Calculadora" src="images/portfolio/calc.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Calculadora</h5>
                        <p>
                          Meu primeiro projeto em ReactJS, tenho muito carinho
                          por ele.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
