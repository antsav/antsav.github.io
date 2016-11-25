import React, {Component} from 'react'


class Language extends Component {
    render() {
        return(
            <div className="languageComponent narrow"
                 onClick={this.props.toggleLanguage}>
                {this.props.language === 'ru' ?
                    <p>English</p>
                :
                    <p>Русский</p>
                }
            </div>
        )
    }
}

export default Language
