import React from "react";
import { useEffect, useState } from "react";
import PhotoItem from '../component/PhotoItem';
import {loadPhotoReducer} from '../reducers/loadPhotoReducer';
import { useDispatch, useSelector } from "react-redux";
import {loadPhotosAction} from '../actions'
let start = 1; 
const ListPhoto = () => { 
  const dispatch = useDispatch();

  const loadHandler =(ev)=>{
    dispatch(loadPhotosAction(start));
    ev.preventDefault();
    start = start + 1;
    document.querySelector('.welcome').classList.add('hidden');
  }

  const photos = useSelector(state => {
    const {loadPhotoReducer} = state;
    return loadPhotoReducer.photos;
  })
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