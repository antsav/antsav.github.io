import ru from '../locales/ru'

let H = {
    bytesToSize: bytes => {
        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },

    loc: (lang, val) => {
        if (lang === 'ru') {
            return ru[val]
        }
        return val
    },
}


export default H
