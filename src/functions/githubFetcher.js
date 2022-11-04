export const optionsDevsAndRepos = (params, url) => {
  const data = {
    method: "GET",
    url: `https://github-trending.p.rapidapi.com/${url}`,
    params: params,
    headers: {
      "X-RapidAPI-Key": "fb8032f3f6msh70b4ba7315debcep16ca8fjsn88af34360596",
      "X-RapidAPI-Host": "github-trending.p.rapidapi.com",
    },
  };
  return data;
};
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
