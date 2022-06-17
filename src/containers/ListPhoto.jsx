import React from "react";
import PhotoItem from '../component/PhotoItem'
import { getPhotos } from "../unsplash";
const ListPhoto = () => { 
console.log(getPhotos());
  return(
    <ul>
        <PhotoItem />
    </ul>
  )

}
export default ListPhoto;