// a helper functions to call APIs

// libs
import request from 'superagent'

// components
import constants from './constants'


let callers = {
    fetchAppStoreData: (callback) => {
        request
            .get('http://itunes.apple.com/lookup')
            .accept('application/json')
            .withCredentials()
            .query({id: constants.appstoreId})
            .timeout(7000) // error will be triggered if no responce
            .end((err, res) => {
                callback(res)
            })
    },
}


export default callers
