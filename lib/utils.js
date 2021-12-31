import axios from 'axios';
import { CATEGORIES_API_URL, CATEGORIES_SIMPLE_URL, CATEGORY_URL, POSTS_API_URL, SINGLE_POST_URL } from './constants';

const months = [
  "January", 
  "February",
  "March",
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
]

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

export const getAllPostsFromServer = async () => {
  //   get all posts from Server
  try {
    const { data } = await axios.get(POSTS_API_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesFromServer = async () => {
  try {
    const { data } = await axios.get(CATEGORIES_API_URL);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getSimpleCategories = async() => {
  try {
    const { data } = await axios.get(CATEGORIES_SIMPLE_URL);
    return data;
  } catch(error) {
    console.log(error)
  } 
}


export const getSpecificPost = async(postUrl) => {
  try {
    const { data } = await axios.get(SINGLE_POST_URL[0] + postUrl + SINGLE_POST_URL[1]);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export const getSpecificCategory = async(url) => {
  try {
    const { data } = await axios.get(CATEGORY_URL[0] + url + CATEGORY_URL[1]);

    return data;
  } catch (e) {
    console.error(e);
  }
}

export function formatPostDate(date) {
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}