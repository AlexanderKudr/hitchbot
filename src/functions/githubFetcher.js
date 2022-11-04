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
}