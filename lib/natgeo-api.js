import jsonp from 'jsonp'

class NatGeoApi {
    constructor() {
        this.natGeoApiURL = "http://127.0.0.1:8000/api/dailyphoto"
    }

    load() {
        return new Promise((resolve, reject) => {
            jsonp(this.natGeoApiURL, (err, data) => {
                err ? reject(err) : resolve(data)
            })
        })
    }
}

export default new NatGeoApi();
