import { PLACES } from "../types/index";

const { ADD_PLACE } = PLACES;


export default {
    addPlace: (name) => {
        return {
            type: ADD_PLACE,
            place: {
                name
            }
        }
    }





}