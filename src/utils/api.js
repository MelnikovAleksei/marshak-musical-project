import apiSettings from './apiSettings';

class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleOriginalResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  post(data) {
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        tel: data.tel,
        poems: data.poems,
        offer: data.offer,
      })
    }).then(this._handleOriginalResponse)
  }
}
const api = new Api(apiSettings);

export default api;
