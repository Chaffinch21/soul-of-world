import Unsplash from "unsplash-js";
import { toJson } from "unsplash-js";

Unsplash = require("unsplash-js").default;

export const unsplash = new Unsplash({
  accessKey: "DvahNraSvUX3Y59qexjWLHircaoLrJ_6uArWOhABpHY",
  secret: "6v4pp6-DSsAvUfcPuoz4pNbaW11QfZV6iycqQJHgOmE",
  callbackUrl: "http://localhost:3000/auth",
});

export const authenticationUnsplash = () => {
  console.log(unsplash);
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes",
    "read_user",
    "write_user",
  ]);
  window.location.assign(authenticationUrl);
};

export const getToken = (name) => {
  const code = window.location.search.split("code=")[1];
  unsplash.auth
    .userAuthentication(code)
    .then(toJson)
    .then((json) => {
      unsplash.auth.setBearerToken(json.access_token);
      unsplash.currentUser.updateProfile({
        username: name,
      }).then(toJson)
      .then(json =>{
      return json.name;
    })
})
}