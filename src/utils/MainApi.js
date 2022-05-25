import { MAIN_API, MOVIES_IMAGE_URL } from "./constants";

class MainApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    register(data) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                name: data.name
            })
        }).then(this._handleResponse)
    }

    authorize(data) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then(this._handleResponse)
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            }
        }).then(this._handleResponse);
    }

    setUserInfo(data, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        }).then(this._handleResponse);
    }

    getUserMovies(token) {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            }
        }).then(this._handleResponse);
    }

    saveMovies(data, token) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                country: data.country || " ",
                director: data.director || ' ',
                duration: data.duration || ' ',
                year: data.year || ' ',
                description: data.description || ' ',
                image: `${MOVIES_IMAGE_URL}${data.image.url}` || ' ',
                trailerLink: data.trailerLink || ' ',
                thumbnail: `${MOVIES_IMAGE_URL}${data.image.formats.thumbnail.url}` || ' ',
                movieId: data.id || ' ',
                nameRU: data.nameRU || ' ',
                nameEN: data.nameEN || ' ',
            })
        }).then(this._handleResponse);
    }

    deleteMovies(id, token) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            }
        }).then(this._handleResponse);
    }

    signOut() {
        return fetch(`${this._url}/signout`, {
            method: "POST",
            credentials: "include",
        }).then(this._handleResponse);
    }

    checkToken(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${token}`
            }
        }).then(this._handleResponse)
    }

    getInitial(token) {
        return Promise.all([this.getUserInfo(token), this.getUserMovies(token)]);
    }
}

const mainApi = new MainApi({
    url: MAIN_API,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default mainApi;