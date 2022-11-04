import { rapidApiKey } from "../config/config.js";

//if you don't need params, just type "" or null;
export const fetchData = (params, url, host) => {
  const data = {
    method: "GET",
    url: url,
    params: params,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": host,
    },
  };
  return data;
};

//good if need to return random 5 things/items
export const fetchResult = (req) => {
  const response = req.data.map((i) => `${i.url} ${i.name}`);
  const result = [];
  for (let i = 0; i < response.length; i++) {
    if (result.length < 5) {
      result.push(response[Math.floor(Math.random() * response.length)]);
    }
  }
  return result;
};
