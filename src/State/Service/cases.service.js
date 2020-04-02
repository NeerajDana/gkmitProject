import axios from "axios";

import { API_URL } from "../../constants";

export const FetchcasesData = async (filter) => {
  
  var queryString = Object.keys(filter)
  .filter(a=>filter[a])
  .map(key => key + '=' + filter[key]).join('&');
  return axios.get(`${API_URL}/incidents?${queryString}`);
};