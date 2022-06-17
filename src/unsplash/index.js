import React from 'react';
import Unsplash from 'unsplash-js';
// import {setCookie, getCookie} from '../cookies';

Unsplash = require('unsplash-js').default;

export const unsplash = new Unsplash({
  accessKey: 'DvahNraSvUX3Y59qexjWLHircaoLrJ_6uArWOhABpHY',
  secret: '6v4pp6-DSsAvUfcPuoz4pNbaW11QfZV6iycqQJHgOmE',
  callbackUrl: 'http://localhost:3000/auth'

})

export const authenticationUnsplash = () => {
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes"
  ]);

  window.location.assign(authenticationUrl);
}

export const getToken = () => {
  // debugger;
unsplash.auth.userAuthentication()
  .then(res => res.text())
  .then(res => {
    localStorage.setItem('tocken', window.location.search.split('code=')[1]);
    unsplash.auth.setBearerToken(JSON.parse(res).access_token);
    });
}

export const getPhotos = () => {
  const fetchAsync = async () => {
   try {
    const response = await unsplash.photos.listPhotos(1, 3, 'latest');
    if (response.ok && response.status >= 200 && response.status < 300) {
     const json = await response.json();
     console.log(json);
     return;
    }
    throw new Error(response.statusText);
   } catch (err) {
    console.error(err);
   }
  };
  return fetchAsync();
 }
  
// export const likePhoto = (unsplash, image) => {
//     if (image.liked_by_user === true) {
//         return (
//             unsplash.photos.unlikePhoto(image.id)
//               .then(res => res.text())
//               .then(res => {
//                   if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res); }
//                   else { console.error("Лимит запросов исчерпан!"); }
//               })
//           )
//     } else if (image.liked_by_user === false) {
//         return (
//             unsplash.photos.likePhoto(image.id)
//               .then(res => res.text())
//               .then(res => {
//                   if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res); }
//                   else { console.error("Лимит запросов исчерпан!"); }
//               })
//           )
//     }
// }