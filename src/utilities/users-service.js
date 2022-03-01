import * as usersAPI from './users-api';

export async function signUp(userData) {
 // Delegate the network request code to the users-api.js 
 // which will ultimately return the JWT
 const token = await usersAPI.signUp(userData);
 // baby step by returning whatever is sent back by the server
 return token;
}