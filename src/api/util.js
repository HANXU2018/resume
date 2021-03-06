import { QUERY_URL_CODE, QUERY_URL_INFO } from './constant';

const axios = require('axios');

export async function getInfo(item) {
  const res = await axios
    .get(QUERY_URL_INFO, { params: { item } })
    .then((response) => response.data);
  return res.reverse();
}

export async function getCode(oj, problem) {
  const res = await axios
    .get(QUERY_URL_CODE, { params: { oj, problem } })
    .then((response) => response.data);
  return res;
}
