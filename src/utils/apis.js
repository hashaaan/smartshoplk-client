
import axios from "axios";
import { notification } from "antd";

export async function getCountries(){
    return await axios.get('https://restcountries.eu/rest/v2/all?fields=name')
    .then((res)=>{
        if (res.data) {
            return res.data;
        }
    })
    .catch((err) => {
        if (err.message === "Network Error") {
            notification["error"]({
            message: err.message,
            description: "Try again later ...",
            });
        }
        if (err.response) {
            if (err.response.status === 401) {
                notification["error"]({
                    message: "Somthing went wrong !",
                    description: "Try again later ...",
                });
            }
        }
    });
}

export async function getRates(currency){
    return await axios.get(`${process.env.REACT_APP_CURRENCY_CONVERSION_URL}latest`,{
        params: {
            access_key: `${process.env.REACT_APP_CURRENCY_CONVERSION_ACCESS_KEY}`,
            symbols: currency.join(",")
        }
    })
    .then((res)=>{
        if(!res.data.rates){
            notification["error"]({
                message: "Unsupported Currency",
                description: "This currency is not supported",
            });
            return 0;
        }
        return res.data.rates;
    })
    .catch((err) => {
        if (err.message === "Network Error") {
            notification["error"]({
            message: err.message,
            description: "Try again later ...",
            });
        }
        if (err.response) {
            if (err.response.status === 401) {
                notification["error"]({
                    message: "Somthing went wrong !",
                    description: "Try again later ...",
                });
            }
        }
    });
}
        
export async function getCurrencies(currencies){
    return await axios.get(`${process.env.REACT_APP_CURRENCY_CONVERSION_URL}symbols`
    ,{
        params: {
            access_key: `${process.env.REACT_APP_CURRENCY_CONVERSION_ACCESS_KEY}`,
        }
    }
    )
    .then((res)=>{
        if(!res.data.symbols){
            notification["error"]({
                message: "API Error",
                description: "Weired https encryption error",
            });
            return 0;
        }
        return res.data.symbols;
    })

    // return await axios.get('https://restcountries.eu/rest/v2/all?fields=currencies')
    // .then((res)=>{
    //     if (res.data) {
    //         return res.data;
    //     }
    // })
    .catch((err) => {
        if (err.message === "Network Error") {
            notification["error"]({
            message: err.message,
            description: "Try again later ...",
            });
        }
        if (err.response) {
            if (err.response.status === 401) {
                notification["error"]({
                    message: "Somthing went wrong !",
                    description: "Try again later ...",
                });
            }
        }
    });
}
        