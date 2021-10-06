import axios from "axios";
import { ActionTypes } from "../../constants/action-types";

export const fetchData=async ()=>{
    const response =await axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/")
    console.log(response);
    return{
        type:ActionTypes.FETCH_DATA,
        payload:response,
    };
};