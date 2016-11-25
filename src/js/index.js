import React, {Component} from 'react'
import {render} from 'react-dom'
import $ from 'jquery'

import callers from './helpers/caller'


import Language from './components/Language'
import Header from './components/Header'
import Screenshots from './components/Screenshots'

class IndexComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            screenshotUrls: [],
            language: 'en',
        }
        this.displayName = 'IndexComponent';
    }

    componentWillMount() {
        callers.fetchAppStoreData(res => {
            this.setState({
                screenshotUrls: res.screenshotUrls,
                fileSizeBytes: res.fileSizeBytes,
            });
        })
        callers.isUserRu(trueFalse => {
            // console.log('isUserRu - ' + trueFalse);
            if (trueFalse) this.setState({language: 'ru'})
        })
    }

    toggleLanguage() {
        if (this.state.language === 'ru') {
            this.setState({language: 'en'})
        } else {
            this.setState({language: 'ru'})
        }
    }

    render() {
        return (
            <div>
                <Language
                    language={this.state.language}
                    toggleLanguage={this.toggleLanguage.bind(this)} />
                <Header
                    language={this.state.language}
                    iosSize={this.state.fileSizeBytes} />
                <Screenshots
                    language={this.state.language}
                    screenshotUrls={this.state.screenshotUrls} />
            </div>
        )
    }
};

render(<IndexComponent message="World" />, document.getElementById('masterContainer'))
