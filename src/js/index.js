import React from 'react'
import {render} from 'react-dom'


let HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello!</h1>
    },
});

render(<HelloMessage message="World" />, document.getElementById('masterContainer'))
