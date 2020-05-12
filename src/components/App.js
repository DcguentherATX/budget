import React from 'react';
import Form from './Form';
import Entries from './Entries';
import e from 'express';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            description: '',
            credit: '',
            amount: 0,
            entries: []
        }        
    }

    // handleChange (e) {
    //     e.PreventDefault();

    //     console.log(e);
    // }

    render() {
        return (
            <>
                <div><Form /></div>
                <div><Entries /></div>
            </>
        )
    }
}

export default App;