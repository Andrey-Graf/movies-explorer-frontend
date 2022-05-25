import { MOVIES_API } from "./constants";

class MoviesApi {
    constructor(config) {
        this._url = config.url;
        this._header = config.header;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: this._header,
        }).then(this._handleResponse);
    }

};

const moviesApi = new MoviesApi({
    url: MOVIES_API,
    header: {
        Accept: 'application/json',
    },
});

export default moviesApi;