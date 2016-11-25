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
        $.ajax({
            url: 'http://ajaxhttpheaders.appspot.com',
            dataType: 'jsonp',
            success: function(headers) {
                let language = headers['Accept-Language'].toLowerCase()
                // console.log(language);
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
                if (language.length !== 2) out = false
                callback(out)
            },
        });
    },

}


export default callers
