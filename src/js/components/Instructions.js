import React, {Component} from 'react'
import H from '../helpers/helper'

class Instructions extends Component {

    render() {
        return(
            <div>
                <div className="instructionsComponent narrow">
                    <h2>{H.loc(this.props.language, 'Instructions')}</h2>
                    <div className="line" />


                </div>
                <div className="instructionsContainer wide">
                    {this.props.instructionsUtubes.map( (vid, i) => {
                        let title = vid.snippet.title.split(' - ')[1] || '...';
                        let subTitle = vid.snippet.title.split(' - ')[2] || '...';
                        // console.log(vid);
                        return (
                            <iframe key={i} type="text/html" width="90%" height="350"
                            src={'https://www.youtube.com/embed/' + vid.snippet.resourceId.videoId} frameBorder="0" allowFullScreen/>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Instructions
