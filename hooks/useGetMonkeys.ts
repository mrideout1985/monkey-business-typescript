import { useState, useEffect } from "react";
import axios from "axios";
import { RootObject } from "../interfaces/types";

const useGetMonkeys = () => {
  const [monkeyList, setMonkeyList] = useState<RootObject>();

  useEffect(() => {
    axios
      .get("https://dev-cloud.cc/api/")
      .then((res) => {
        setMonkeyList(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return monkeyList;
};

export { useGetMonkeys };
