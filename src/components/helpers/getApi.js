import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

export const getImg = async (search, page = 1) => {
  const PAGE = 12;
  const URL = 'https://pixabay.com/api/';

  const { data } = await axios.get(URL, {
    params: {
      key: REACT_APP_API_KEY,
      page: page,
      q: search,
      image_type: 'photo',
      per_page: PAGE,
    },
  });

  return data;
};
