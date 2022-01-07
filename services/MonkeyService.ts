import axios from "axios";
import { RootObject } from "../interfaces/types";

class MonkeyService {
    public async getData(): Promise<RootObject> {
        const response = await axios.get("https://dev-cloud.cc/api/");
        return response.data;
    }
}

const monkeyData = new MonkeyService();

export { monkeyData };
