import 'whatwg-fetch';

export const fetchUserInfo = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(d => d.json());
}
