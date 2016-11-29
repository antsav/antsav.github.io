// a helper functions to call APIs

// libs
import $ from 'jquery'

// components
import constants from './constants'


let callers = {
    fetchAppStoreData: callback => {
        $.ajax({
            url: 'https://itunes.apple.com/lookup?id=' + constants.appstoreId,
            dataType: 'jsonp',
            success: res => {
                callback(res.results[0]);
            },
        });
    },

    isUserRu: callback => {
        let isKindOfRu = language => {
            let ruUnderstandLangs = [
                'ru', // russian
                'kk', // kazakh
                'be', // belorussian
                'uk', // ukranian
                'uz', // uzbek
                'gl', // galician - georgia
                'ky', // kyrgiz
                'tk', // turkmen
            ]
            let out = false
            ruUnderstandLangs.every(lang => {
                if ( language.indexOf(lang) !== -1 ) out = true
                return true
            })
            // if (language.length !== 2) out = false
            return out
        }

        $.ajax({
            url: 'http://ajaxhttpheaders.appspot.com',
            dataType: 'jsonp',
            success: headers => {
                let language = headers['Accept-Language'].toLowerCase()
                callback(isKindOfRu(language))
            },
            error: err => {
                // if application is over quota
                callback(isKindOfRu( navigator.languages ? navigator.languages.join(' ') : window.navigator.language ))
            },

        });
    },

    fetchInstructionsUtubes: (palylistId, callback) => {
        $.ajax({
            url: ' https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + palylistId + '&key=AIzaSyBx5OV-x_f6n3c2_YXHVVLWTu-ZIVuXpQM&maxResults=50',
            dataType: 'jsonp',
            success: res => {
                callback(res.items);
            },
        });
    },

}


export default callers
