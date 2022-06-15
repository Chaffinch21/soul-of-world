import React from 'react';
import setBearerToken from 'unsplash-js/lib/methods/auth';
import Unsplash from 'unsplash-js';

export const unsplash = new Unsplash({
    applicationId: 'DvahNraSvUX3Y59qexjWLHircaoLrJ_6uArWOhABpHY',
    secret: '6v4pp6-DSsAvUfcPuoz4pNbaW11QfZV6iycqQJHgOmE',
    callbackUrl: 'http://localhost:3000/auth'

})

  export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

export const setAccessTokenUnplash = (code) => {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json =>{
          console.log(json, 'Succ')
          unsplash.auch.setBearerToken(json.access_token);
          localStorage.setItem('bearerToken', json.access_token);
          // successfulAuthCallback();
          console.log('bearerToken', 'bearerTocken-222')
        })
      
};
  
// export const getPhotos = (unsplash, start = 1, end = 15) => {
//     return (
//       unsplash.photos.listPhotos(start, end, 'latest')
//         .then(res => res.text())
//         .then(res => {
//             if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res); }
//             else { console.error("Лимит запросов исчерпан!"); }
//         })
//     )
// }
  
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