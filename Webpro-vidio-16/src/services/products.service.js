import axios from "axios";

export const getProducts = (calback) => {
    axios
    .get ('https://fakestoreapi.com/products/1')
    .then((ress) => {
       calback(ress.data);
    })
    .catch((error) => {
        console.log(error);
    });
}