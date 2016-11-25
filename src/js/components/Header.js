import React from 'react'
import {render} from 'react-dom'


let Header = React.createClass({
    render: function() {
        return(
            <div className="headerComponent narrow">
                <div className="logo" />
                <h1>Gymap</h1>
                <div className="line" />
                <div className="subheader">
                    <h2>
                        visual workout log<br/>
                        for professionals
                    </h2>
                </div>

                <div className="downloadButton ios"><p>Download in AppStore</p></div>
                <div className="downloadButton android"><p>Download for Android</p></div>


            </div>
        )
    },
});

export default Header
