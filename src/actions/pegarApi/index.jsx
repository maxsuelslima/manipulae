import axios from "axios";

import { ActionTypes } from "../../constants/action-types";


export const fetchData=async ()=>{
    const DeezerApi="https://mocki.io/v1/2d3c9810-469d-4384-b26a-de8b38963f35"
    const response =await axios.get(DeezerApi)
    console.log(response)
    return{
        type:ActionTypes.FETCH_DATA,
        payload:response.data.data
    };
};