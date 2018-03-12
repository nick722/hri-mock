import React, { Component } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import EventTypeInput from './EventTypeInput';

class EventForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <h1>Propose Event</h1>

                <section>
                    <Field
                        title="Set event type"
                        name="type"
                        component={ EventTypeInput }
                    />
                </section>

                <button type="submit">
                    Propose Event
                </button>

            </form>
        )
    }
}

export default EventForm;