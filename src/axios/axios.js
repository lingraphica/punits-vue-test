//Custom axios instance template
//rename this file to match the API you are going to hit (example: axios-tree.js for tree-editor)
//import this instance in any view/component that needs to hit the API (import axiosTree from "@/axios/axios-tree")
//for more info see https://github.com/axios/axios

import axios from 'axios';

var url = '';
if (process.env.VUE_APP_ENV === 'production') {
  url = '';//production endpoint base url
} else {
  url = '';//staging/development endpoint base url
}

var instance = axios.create({
  baseURL: url
});

export default instance;