import jsonp from 'jsonp'

class NatGeoApi {
    constructor() {
        this.natGeoApiURL = "https://natgeo-api.herokuapp.com/api/dailyphoto"
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
