import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const colorTxt = "white";

    return (
      <section
        id="about"
        style={{
          backgroundColor: "#020329",
        }}
      >
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/GabrielSpontoni.jpg"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2 style={{ color: { colorTxt } }}>Sobre</h2>

              <p style={{ color: { colorTxt } }}>
                Estudando engenharia de computação pela Universidade Federal de
                Mato Grosso do Sul, atualmente estou estagiando na empresa
                Eficaci e sou responsável pela manutenção da aplicação Marvin
                feita com ReactJS.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2 style={{ color: { colorTxt } }}>Contato</h2>
                  <p className="address">
                    <span style={{ color: { colorTxt } }}>
                      Gabriel Spontoni
                    </span>
                    <br />
                    <span style={{ color: { colorTxt } }}>
                      Rua dos arquitetos - 79090-150
                      <br style={{ color: { colorTxt } }} />
                      Campo Grande - MS, Brasil
                    </span>
                    <br />
                    <span style={{ color: { colorTxt } }}>(67) 99163-9383</span>
                    <br />
                    <span style={{ color: { colorTxt } }}>
                      spontoni33@gmail.com
                    </span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      className="button"
                      target="_blank"
                      rel="noreferrer"
                      href="https://drive.google.com/file/d/10gKOacrQj5AzJRP0PjlHfBo-MLbUJCNd/view?usp=sharing"
                    >
                      <i className="fa fa-file-text" />
                      Currículo Lattes
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
