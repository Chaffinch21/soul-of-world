const BASE_URL = 'https://unsplash.com/oauth/';

const URL = 'https://api.unsplash.com/';

const ACCESS_KEY = 'DvahNraSvUX3Y59qexjWLHircaoLrJ_6uArWOhABpHY';
const SECRET_KEY = '6v4pp6-DSsAvUfcPuoz4pNbaW11QfZV6iycqQJHgOmE';
const REDIRECT_URI = 'http://localhost:3000/auth';
const SCOPE = 'public+write_likes';

const AUTHORIZATION_URL = `${BASE_URL}authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
const POST_TOKEN_URL = `${BASE_URL}token`;

export {
  BASE_URL,
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  SCOPE,
  AUTHORIZATION_URL,
  POST_TOKEN_URL,
  URL
};