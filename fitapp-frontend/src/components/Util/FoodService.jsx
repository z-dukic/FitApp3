import axios from "axios";

const FOOD_API_BASE_URL = "http://localhost:8080/api/v1/food";

class FoodService{

    getFood(){
        return axios.get(FOOD_API_BASE_URL);
    }
}

export default new FoodService()