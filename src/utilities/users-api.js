import { token } from "morgan";

const BASE_URL = '/api/users';

export async function signUp(userData) {
    const res = await fetch(BASE_URL, {// first argument is our endpoint
        method: 'POST', // 2nd argument is an options object
        headers: { 'Content-Type': 'application/json' }, //
        body: JSON.stringify(userData)
    });
    if (res.ok) { // fetch doesn't find routing errors like 404
        // res.json() will resolve to the JwT
        return res.json();
    } else {
        throw new Error('Invalid Sign Up'); // we have to create our own custom error
    }
}