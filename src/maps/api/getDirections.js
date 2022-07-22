import axios from "axios"
import config from '../../../google.json'

const getDirections = (start, end) => axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${start}&destination=place_id:${end}&key=${config["MAPS_KEY"]}`)

export default getDirections