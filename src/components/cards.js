import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardComponents extends Component {
  render() {
    return (
        <Card>
            <CardHeader
            title="Expandable Card Component"
            subtitle="Subtitle here"
            actAsExpander={true}
            showExpandableButton={true}
            />
            <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
            </CardActions>
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
export default CardComponents;
