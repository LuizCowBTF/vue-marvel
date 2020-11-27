import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com/v1/public/'
const apiKey = '8a311fa9918f6d22bef3d25841a95d2e&hash=a428230f2ca61868fa7633d2747b0bf9'

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'comics?ts=1&apikey=' + apiKey + '&limit=' + limit
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}