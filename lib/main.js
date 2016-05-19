import NatGeoApi from './natgeo-api'
import DataDisplay from './data-display'

NatGeoApi.load()
    .then(DataDisplay)
export default {}
