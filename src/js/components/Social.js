import React, {Component} from 'react'
import H from '../helpers/helper'

class Social extends Component {
    instagramClick() {
        window.location.href='https://www.instagram.com/gymapme/'
    }

    render() {
        return(
            <div>
                <div className="socialComponent narrow">
                    <h2>{H.loc(this.props.language, 'Social media')}</h2>
                    <div className="line" />
                    <ul>
                        <li className="instagram" onClick={this.instagramClick}>
                            <div className="logo" />
                            <h2>Instagram</h2>
                            <p>{H.loc(this.props.language, 'all latest and upcoming changes')}</p>
                        </li>
                    </ul>

                </div>

            </div>

        )
    }
}

export default Social
