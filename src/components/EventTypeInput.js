import React, { Component } from 'react';
import { Button } from 'reactstrap';

class EventTypeInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idActiveType: 1
        };
    }

   render() {
        return (
            <div>
                <Button>Radio Button 1</Button>
                <Button>Radio Button 2</Button>
            </div>
            )
   }
}

export default EventTypeInput;