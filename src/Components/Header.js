import React, { Component } from "react";
// import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header
        id="home"
        style={{
          background: "#010114",
        }}
      >
        <nav id="nav-wrap">
          {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a> */}

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Sobre
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resumo
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                trabalhos
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/gabriel.spontoni">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/gabriel-spontoni-4816b519a/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/spontonigabriel/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/GabrieSpontoni">
                    <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
