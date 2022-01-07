import axios, { AxiosStatic } from "axios";
import { RootObject } from "../interfaces/types";
import { monkeyData } from "./MonkeyService";

const mockedData = {
    return: true,
    monkeys: [
        {
            id: 1,
            name: "George",
            age: 7,
            bananas: 3,
            img: "https://cacloud.ams3.digitaloceanspaces.com/Images/monkey.jpg",
        },
        {
            id: 2,
            name: "Brian",
            age: 4,
            bananas: 13,
            img: "https://cacloud.ams3.digitaloceanspaces.com/Images/monkey.jpg",
        },
        {
            id: 3,
            name: "Franco",
            age: 6,
            bananas: 17,
            img: "https://cacloud.ams3.digitaloceanspaces.com/Images/monkey.jpg",
        },
        {
            id: 4,
            name: "Burns",
            age: 7,
            bananas: 10,
            img: "https://cacloud.ams3.digitaloceanspaces.com/Images/monkey.jpg",
        },
        {
            id: 5,
            name: "Dai",
            age: 6,
            bananas: 3,
            img: "https://cacloud.ams3.digitaloceanspaces.com/Images/monkey.jpg",
        },
    ],
};

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<AxiosStatic>;
const apiLink = "https://dev-cloud.cc/api/";

mockedAxios.get.mockImplementation(
    (url): Promise<{ data: RootObject }> | Promise<void> => {
        if (url === apiLink) {
            return Promise.resolve({ data: mockedData });
        }

        throw new Error();
    },
);

test("Should return correct data", async () => {
    let result: RootObject | undefined;

    await monkeyData.getData().then((data: RootObject) => {
        result = data;
    });

    expect(result as RootObject).toBe(mockedData);
});
