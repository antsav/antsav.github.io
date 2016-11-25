import React, {Component} from 'react'
import H from '../helpers/helper'

class Screenshots extends Component {
    render() {
        return(
            <div>
                <div className="screenshotsComponent narrow">
                    <h2>{H.loc(this.props.language, 'Screenshots')}</h2>
                    <div className="line" />


                </div>
                <div className="shotsContainer wide">
                    {this.props.screenshotUrls.map( (scrUrl, i) => {
                        return (<div key={i} style={{
                            background: 'url(' + scrUrl + ') no-repeat',
                            backgroundSize: '100%',
                        }} />
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Screenshots
