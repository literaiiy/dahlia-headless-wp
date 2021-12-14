import axios from 'axios';
import { POSTS_API_URL, MEDIA_API_URL } from './constants';

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

export function formatPostDate(date) {
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}