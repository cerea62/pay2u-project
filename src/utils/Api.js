const config = {
    baseUrl: 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
}

class Api {

    #handleResponse = res => {
       
        if (res.OK) {
            console.log('responce', res);
            return res.json();
        }
        return Promise.reject(res.status);
    }

    constructor(baseUrl, headers) {
        this.baseUrl = config.baseUrl;
        this.headers = config.headers;
    }

    // _checkResponse(res) {
    //     return res.ok ? res.json() : Promise.reject(res.status);
    // }

    // async _request(url, options) {
    //     const res = await fetch(url, options);
    //     return this._checkResponse(res);
    // }

    async getServicesCards() {
        return fetch(`${this.baseUrl}/services`, {
            mode: 'no-cors',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then(this.#handleResponse);
    }
}
const api = new Api(config);

export default api;

// const config = {
//     baseUrl: 'http://localhost:8000/api/v1',
//     mode: 'no-cors',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
// class Api {

//   constructor({ baseUrl }) {
//     this._baseUrl = baseUrl;
//   }

//   async getServicesCards() {
//     const url = `${this._baseUrl}/services`;
//     const res = await fetch(url);

//     if (!res.ok) throw new Error(res.status);

//     const data = await res.json();
//     return data;
//   }
// }

// const api = new Api(config);

// export default api;