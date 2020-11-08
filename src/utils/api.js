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
    const {fullName, email, tel, poems, offer} = data;
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        tel: tel,
        poems: poems,
        offer: offer,
      })
    }).then(this._handleOriginalResponse)
  }
}
const api = new Api(apiSettings);

export default api;
