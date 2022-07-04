import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Solutions extends Component {
  render() {
    const { solutions } = this.props;
    console.log(solutions);
    return (
      <div>
        <h1>Gabarito</h1>
        <hr />
        {solutions.map((solution) => (
          <div key={ solution.slug }>
            <Link to={ `/solutions/${solution.slug}` }> {/* cada name vira um link dentro de solutions */}
              { solution.name }
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Solutions;