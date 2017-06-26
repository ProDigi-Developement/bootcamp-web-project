import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class PersonCardComponent extends Component {
  render() {
    let person = this.props.person;
    return (
        <Card style={{marginBottom:20}}>
            <CardHeader
            title={`${person.name.title} ${person.name.first} ${person.name.last}`}
            subtitle={person.email}
            avatar={person.picture.thumbnail}
            actAsExpander={true}
            showExpandableButton={true}
            />
            <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
        </Card>
    );
  }
}
export default PersonCardComponent;
