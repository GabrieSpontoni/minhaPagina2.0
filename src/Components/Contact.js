import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col"></div>

            <div className="five columns">
              <p className="lead">
                O que achou do meu trabalho? Gostaria de me dar algum feedback
                ou oferecer algum projeto? Eu adoraria ouvir de você, fique a
                vontade para entrar em contato através de qualquer uma de minhas
                redes sociais ou pelo meu telefone.
              </p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide right duration={1000}>
            <aside className="ten columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Endereço e Telefone</h4>
                <p className="address">
                  {name}
                  <br />
                  Rua dos arquitetos - 79090-150 <br />
                  Campo Grande - MS, Brasil
                  <br />
                  <span>(67) 99163-9383</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
