// a helper functions to call APIs

// libs
import request from 'superagent'

// components
import constants from './helpers/constants'


let callers = {
    fetchAppStoreData: (callback) => {
        request
        .get('http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsLookup?country=ru')
        .query({id: constants.appstoreId})
        .timeout(7000) // error will be triggered if no responce
        .end((err, res) => {
            callback(res)
        })
    },
}


export default callers
