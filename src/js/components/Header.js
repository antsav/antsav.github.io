import React, {Component} from 'react'
import constants from '../helpers/constants'
import H from '../helpers/helper'

class Header extends Component {
    iosClick() {
        let country = this.props.language === 'ru' ? 'ru' : 'us'
        window.location.href='https://itunes.apple.com/' + country + '/app/id' + constants.appstoreId
    }

    androidClick() {
        window.location.href = 'dist/android/Gymap 1.7.1.apk';
        // window.location.href='market://details?id=gymap.antsav'
    }

    render() {
        return(
            <div className="headerComponent narrow">
                <div className="logo" />
                <h1>Gymap</h1>
                <div className="line" />
                <div className="subheader">
                    <h2 dangerouslySetInnerHTML ={{__html: H.loc(this.props.language, 'visual workout log<br/>for professionals')}} />
                </div>

                <div className="downloadButton ios"
                    onClick={this.iosClick.bind(this)} >
                    <p>{H.loc(this.props.language, 'Download in AppStore')}</p>
                    {this.props.iosSize &&
                        <div className="fileSize">{H.bytesToSize(this.props.iosSize)}</div>
                    }
                </div>

                <div className="downloadButton android"
                     onClick={this.androidClick.bind(this)} >
                        <p>{H.loc(this.props.language, 'Download for Android')}</p>
                        <div className="fileSize">5 MB</div>
                </div>


            </div>
        )
    }
}

export default Header
