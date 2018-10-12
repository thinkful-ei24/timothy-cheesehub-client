import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

class CheeseList extends Component {

  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }

  render(){
    const cheeses = this.props.cheeses.map(cheese => <li>{cheese}</li>);
    return (
      <ul>
        {cheeses}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);