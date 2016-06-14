import makeRed from './make-red';
import { fetchUserInfo } from './github-api';
import yo from 'yo-yo';

makeRed();

const renderUser = (user) => {
  if (user) {
    return yo`<p>
      User : ${ user.name } works for ${ user.company }
    </p>`;
  } else {
    return yo`<p>No user</p>`
  }
};

const template = (user, buttonClick) => {
  return yo`<div>
    <input type="text" value="${user && user.login || ''}" data-user-input />
    <button onclick=${buttonClick}>Update!</button>
    ${ renderUser(user) }
  </div>`
};

const update = () => {
  const username = document.querySelector('[data-user-input]').value;
  fetchUserInfo(username).then(d => {
    const newOutput = template(d, update);
    yo.update(outputElement, newOutput);
  });
};

const outputElement = template(undefined, update);
document.body.appendChild(outputElement);


