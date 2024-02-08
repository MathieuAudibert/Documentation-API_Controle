import dotenv from 'dotenv';
dotenv.config();

export const API_KEY = process.env.OPEN_BREWERY_DB_API_KEY || 'default_api_key';
export const OPEN_BREWERY_DB_BASE_URL = 'https://api.openbrewerydb.org/breweries';
