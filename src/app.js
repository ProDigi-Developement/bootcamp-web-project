import React, {Component} from 'react';
import PersonCardComponent from 'components/cards';

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {results:[]}
    }
  }
  componentWillMount() {
    fetch('https://randomuser.me/api/?results=10&seed=bootcamp').then(resp => resp.json()).then(r => {
      this.setState({people: r});
    })
  }
  render() {
    return (
      <div>{this.state.people.results.map( person => <PersonCardComponent person={person}/>)}</div>
    );
  }
}
export default MyApp;
