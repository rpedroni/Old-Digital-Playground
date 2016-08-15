import React, { PropTypes } from 'react'

class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <h2>Bem-vindos ao fabuloso e mágico <span style={{ textDecoration: 'underline' }}>Playground Digital</span>!</h2>

        <blockquote style={{ backgroundColor: 'rgb(208,208,208)', padding: 10 }}>
          <p style={{ marginTop: 0 }}>O que você pode fazer aqui?</p>
          <p><strong>--- TUDO</strong></p>
          <small>
            Pelo menos tudo que diz respeito ao mundo digital.<br /> Esse site <span style={{ textDecoration: 'line-through' }}>ainda</span> não é um PokéStop.</small>
        </blockquote>

        <p>Então sejam bem-vindos! Cliquem nas coisas ao lado esquerdo e divirtam-se.</p>

        <small>
          Interessado em expandir esse projeto ou usar para fins próprios (não-maléficos)?
          <br /><a href="https://github.com/rpedroni/Digital-Playground">Veja o repositório aqui</a>
        </small>

      </div>
    )
  }
}

export default HomeScreen
