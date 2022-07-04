import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <>
        <section className="Sidebar">
          <h4>Cursos</h4>
          <nav>
            <Link to="/calendar">Agenda</Link>
            <Link to="/live-lectures">Aulas ao Vivo</Link>
            <Link to="/trybe-talks">Trybe Talks</Link>
            <Link to="/solutions">Gabarito</Link>
          </nav>
        </section>
      </>
    );
  }
}

export default Sidebar;