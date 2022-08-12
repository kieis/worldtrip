//Countriesnow.com API

import axios from "axios";

export const countriesNow = axios.create({
    baseURL: "https://countriesnow.space/api/v0.1"
});