import axios from "axios";
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=37a3fe6b90b313baf3dc9a073da27c36",
});
export { api };