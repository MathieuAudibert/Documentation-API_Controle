import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants';

export class BreweryService {
  public async getBreweries() {
    const response = await axios.get(`${API_BASE_URL}/breweries?by_state=California`);    
    return response.data;
  }
}
