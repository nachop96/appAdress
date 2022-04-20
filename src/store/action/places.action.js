import { PLACES } from "../types/index";

const { ADD_PLACES } = PLACES;

export const addPlace = (name) => {
    return {
        type: ADD_PLACES,
        place: {name}
    }


};