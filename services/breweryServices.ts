import axios from 'axios';
import { API_BASE_URL } from '../Api/apiConstants';

export class BreweryService {
  public async getBreweries() {
    const response = await axios.get(`${API_BASE_URL}/breweries`);
    return response.data;
  }
}
