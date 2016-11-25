import React, {Component} from 'react'


class Header extends Component {
    iosClick() {
        window.location.href='https://itunes.apple.com/ru/app/id1036264023'
    }

    androidClick() {
        window.location.href='dist/android/Gymap 1.7.apk'
    }

    render() {
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

                <div className="downloadButton ios"
                    onClick={this.iosClick.bind(this)} >
                    <p>Download in AppStore</p>
                </div>

                <div className="downloadButton android"
                     onClick={this.androidClick.bind(this)} >
                        <p>Download for Android</p>
                </div>


            </div>
        )
    }
}

export default Header
