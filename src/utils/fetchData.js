// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//     // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Key':'4d47521877msh15f916183f1d5aep10fd68jsnd4ed6f45976d',
//   },
// };
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '4d47521877msh15f916183f1d5aep10fd68jsnd4ed6f45976d', // Add a space after the colon
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '4d47521877msh15f916183f1d5aep10fd68jsnd4ed6f45976d',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
