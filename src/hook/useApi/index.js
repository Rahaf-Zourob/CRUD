import { useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ApiUrl } from "../../config/StoreUrl";
import { API_ACTIONS } from "../../constants/actions"

const intialState = {
    data: [],
    object: null,
    loading: true
}
const reducer = (state, action) => {
    switch (action.type) {
        case API_ACTIONS.DATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case API_ACTIONS.OBJECT:
            return {
                ...state,
                object: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
const useApi = () => {
    const [state, dispatch] = useReducer(reducer, intialState)
    const { id } = useParams();
    const getData = async () => {
        try {
            const res = await axios.get(ApiUrl);
            dispatch({ type: API_ACTIONS.DATA, payload: res.data });
            console.log(state.data)
        } catch (error) {
            console.log(error);
        }
    };

    const getObject = async () => {
        console.log(id)
        try {
            const res = await axios.get(ApiUrl + "/" + id);
            dispatch({ type: API_ACTIONS.OBJECT, payload: res.data })
        } catch (error) {
            console.log(error);
        }
    };
    const postData = async (body) => {
        try {
            const res = await axios.post(ApiUrl, body);
            dispatch({ type: API_ACTIONS.OBJECT, payload: res.data })
        } catch (error) {
            console.log(error);
        }
    };
    const putData = async (body) => {
        try {
            const res = await axios.put(ApiUrl + "/" + id, body);
            dispatch({ type: API_ACTIONS.OBJECT, payload: [...state.data.filter((item) => item.id !== id), res.data] });
        } catch (error) {
            console.log(error);
        }
    };
    
    const deleteData = async (id) => {
        try {
            const res = await axios.delete(ApiUrl + "/" + id);
            dispatch({ type: API_ACTIONS.DATA, payload: state.data.filter((item) => item.id !== id) });
        } catch (error) {
            console.log(error);
        }
    };
    
    return {
        ...state,
        getData,
        getObject,
        postData,
        putData,
        deleteData,
    };
};
export default useApi;
