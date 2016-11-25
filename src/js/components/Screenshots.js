import React from 'react'
import {render} from 'react-dom'

import data from '../helpers/data'

let Screenshots = React.createClass({
    render: function() {
        return(
            <div className="screenshotsComponent narrow">
                <h2>Screenshots</h2>
                <div className="line" />

                <div className="shotsContainer">
                    {data.screenshots.map( (scrUrl, i) => {
                        return (<div key={i} style={{
                            background: 'url(' + scrUrl + ') no-repeat',
                            width: '5rem',
                            height: '10rem',
                            display: 'inline-block',
                        }} />
                        )
                    })}
                </div>

            </div>
        )
    },
});

export default Screenshots
