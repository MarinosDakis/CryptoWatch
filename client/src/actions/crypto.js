import { FETCH_PRICES } from "../constants/actionsTypes";
import * as api from "../api/index.js"

// dispatching actions
export const getPrices = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPrices();
        dispatch({ type: FETCH_PRICES, payload: data });
    } catch (error) {
        console.log(error);
    }

}