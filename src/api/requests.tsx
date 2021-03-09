import { API_URL } from './constants';

export const getData = async (amount: number) => {
    try {
      const response = await fetch(`${API_URL}${amount}`);
      const json = response.json();
      const {data} = await json;
      return data;
    } catch(e) {
      console.log('error: ', e);
    }
    return [];
};
