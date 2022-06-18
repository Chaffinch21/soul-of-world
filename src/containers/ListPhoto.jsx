import React from "react";
import { useEffect, useState } from "react";
import PhotoItem from '../component/PhotoItem';
import {loadPhotoReducer} from '../reducers/loadPhotoReducer';
import { useDispatch, useSelector } from "react-redux";
// import { getPhotos } from "../unsplash";
import {loadPhotosAction} from '../actions'
// localStorage.setItem('start', 0);
// localStorage.setItem('end', 5);
let start = 0; let end = 10;
const ListPhoto = () => { 
  const dispatch = useDispatch();
  // let [photos, setListPhotos] = useState('');
  // useEffect(() => {
  //   dispatch(loadPhotosAction());
  // }, []);

  const photos = useSelector(state => {
    const {loadPhotoReducer} = state;
    return loadPhotoReducer.photos;
  })

  const loadHandler =(ev)=>{
    dispatch(loadPhotosAction(start, end));
    ev.preventDefault();
    start = start + 10 ; end = end + 10;
    // dispatch(loadPhotosAction(localStorage.getItem('start'), localStorage.getItem('end')));
    // setListPhotos(photos);
    // localStorage.setItem('start', Number(localStorage.getItem('start'))+Number(localStorage.getItem('end')));
    // localStorage.setItem('end', Number(localStorage.getItem('end'))+Number(localStorage.getItem('end')));
  }
  return(
    <div className="list-container">
      <ul className="photos-list">
          {photos.map(res => {
            return <PhotoItem key={res.id} data={res}/>
          })}
      </ul>
      <button onClick={loadHandler} className="btn-load">Загрузить фотографии</button>
    </div>
  )

}
export default ListPhoto;