class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _getResponseData(res) {

        if (!res.ok) {
            Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json()
    }

    getAllCards() {
        return fetch(`${this._url}cards`, {
            headers: this._headers
        })
            .then((res) => {
                return this._getResponseData(res);
            });
    }
    updateUserInfo() {
        return fetch(`${this._url}users/me`, {
            headers: this._headers,
        }).then((res) => {
            return this._getResponseData(res);
        });
    }

    editProfile(data) {
        return fetch(`${this._url}users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(data)
        }).then((res) => {
            return this._getResponseData(res);
        });
    }

    addCard(data) {
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data)
        }).then((res) => {
            return this._getResponseData(res);
        });
    }
    deleteCard(id) {
        return fetch(`${this._url}${'cards/'}${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            return this._getResponseData(res);
        });
    }

    setLike(id) {
        return fetch(`${this._url}${'cards/'}${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        }).then((res) => {

            return this._getResponseData(res);
        });
    }

    deleteLike(id) {
        return fetch(`${this._url}${'cards/'}${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            return this._getResponseData(res);
        });
    }


    changeAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(data)
        }).then((res) => {
            return this._getResponseData(res);
        });
    }
}

const api = new Api(
    {
        url: 'https://mesto.nomoreparties.co/v1/cohort-50/',
        headers: {
            authorization: '6df29fdd-ef30-40f2-9646-a62800cbaefa',
            'content-type': 'application/json',
        },
    }
);

export default api;