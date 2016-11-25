import React from 'react'
import {render} from 'react-dom'

import data from '../helpers/data'

let Screenshots = React.createClass({
    render: function() {
        return(
            <div>
                <div className="screenshotsComponent narrow">
                    <h2>Screenshots</h2>
                    <div className="line" />


                </div>
                <div className="shotsContainer wide">
                    {data.screenshots.map( (scrUrl, i) => {
                        return (<div key={i} style={{
                            background: 'url(' + scrUrl + ') no-repeat',
                            backgroundSize: '100%',
                        }} />
                        )
                    })}
                </div>
            </div>

        )
    },
});

export default Screenshots
