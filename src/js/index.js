import React, {Component} from 'react'
import {render} from 'react-dom'
import $ from 'jquery'

import callers from './helpers/caller'


import Language from './components/Language'
import Header from './components/Header'
import Screenshots from './components/Screenshots'
import Instructions from './components/Instructions'
import Social from './components/Social'


class IndexComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            language: 'en',
            screenshotUrls: [],
            instructionsUtubes: [],
        }
        this.displayName = 'IndexComponent';
    }

    componentWillMount() {
        callers.isUserRu(trueFalse => {
            if (trueFalse) this.setState({language: 'ru'})
            setTimeout(()=>{
                this.fetchInstructions()
            }, 100)
        })

        callers.fetchAppStoreData(res => {
            this.setState({
                screenshotUrls: res.screenshotUrls,
                fileSizeBytes: res.fileSizeBytes,
            });
        })
    }

    fetchInstructions() {
        let palylistId = this.state.language === 'ru' ? 'PLnEHdoruK8DJvpUsv82VyncnXy7oXr79W' : 'PLnEHdoruK8DJ3Cn15-fHbz9ZLF9LmzBwU';

        // console.log(palylistId);
        callers.fetchInstructionsUtubes(palylistId, instructionsUtubes => {
            // console.log(instructionsUtubes);
            this.setState({instructionsUtubes: instructionsUtubes})
        })
    }

    fetchInstagram() {}

    toggleLanguage() {
        if (this.state.language === 'ru') {
            this.setState({language: 'en', instructionsUtubes: []}, ()=>{
                this.fetchInstructions()
            })
        } else {
            this.setState({language: 'ru', instructionsUtubes: []}, ()=>{
                this.fetchInstructions()
            })
        }
    }

    render() {
        return (
            <div>

                <Language
                    language={this.state.language}
                    toggleLanguage={this.toggleLanguage.bind(this)} />

                <div className="lifter" />

                <Header
                    language={this.state.language}
                    iosSize={this.state.fileSizeBytes} />

                <Screenshots
                    language={this.state.language}
                    screenshotUrls={this.state.screenshotUrls} />

                <Instructions
                    language={this.state.language}
                    instructionsUtubes={this.state.instructionsUtubes} />

                <Social
                    language={this.state.language}/>

            </div>
        )
    }
};

render(<IndexComponent message="World" />, document.getElementById('masterContainer'))
