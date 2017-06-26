import React, {Component} from 'react';
import PersonCardComponent from 'components/cards';

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {results:[]}
    };
  }
  componentDidMount() {
    this.state = {people:[]};
    let api = fetch('https://randomuser.me/api/?seed=bootcamp&results=10').then(resp => {
      return resp.json()
    }).then(resp => {
      this.setState({people:resp});
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>{this.state.people.results.map(person => <PersonCardComponent person={person} key={person.email}/>)}</div>
    );
  }
}
export default MyApp;
