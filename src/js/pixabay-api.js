import axios from 'axios';

const API_KEY = '43389395-13044f7a31a85be77891b044e';
const url = 'https://pixabay.com/api/';

export async function fetchData(searchTerm, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  });

  const response = await axios.get(`${url}?${params}`);
  if (!response.data || response.data.totalHits === 0) {
    throw new Error('No images found');
  }
  return response.data;
}
