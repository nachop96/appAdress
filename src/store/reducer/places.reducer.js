import { PLACES } from "../types/index";
import Place from "../../models/places";

const { ADD_PLACE} = PLACES;

const initialState = {
    places: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:    
                const newPlace = new Place(Date.now(), action.place.name);
                return {
                    ...state,
                    places: state.places.concat(newPlace),
                }
        default:
            return state;
            }
};