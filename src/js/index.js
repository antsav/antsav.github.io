import React, {Component} from 'react'
import {render} from 'react-dom'

import callers from './helpers/callers'


import Language from './components/Language'
import Header from './components/Header'
import Screenshots from './components/Screenshots'

class IndexComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
        this.displayName = 'IndexComponent';
    }

    componentWillMount() {
        // callers.fetchAppStoreData((res) => {
        //     debugger
        // })
    }

    render() {
        return (
            <div>
                <Language />
                <Header />
                <Screenshots />
            </div>
        )
    }
};

render(<IndexComponent message="World" />, document.getElementById('masterContainer'))
