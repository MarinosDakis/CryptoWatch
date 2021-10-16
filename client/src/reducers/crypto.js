import { FETCH_PRICES } from "../constants/actionsTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (crypto = [], action) => {
    switch (action.type) {
        
        case FETCH_PRICES:
            return action.payload;

        default:
            return crypto;
    }
}