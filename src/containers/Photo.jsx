import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { likeAction, dislikeAction} from '../actions';

const Photo = () => {
  const location = useLocation();
  console.log(location.state);
  let id = location.state.id;
  console.log(id);
  const dispatch = useDispatch();
  const likeToggle=(photo)=>{
    try {
      if (!photo.liked_by_user){
        console.log(photo);
        dispatch(likeAction(photo.id));
        document.querySelector('.card-reiting').classList.add('like');
      } 
        else {
          console.log(photo);
          dispatch(dislikeAction(photo.id));
          document.querySelector('.card-reiting').classList.remove('like');
      }
    }
    catch(err) {
      alert('Пройдите авторизацию еще раз, пожалуйста!')
    }
  }

  const photos = useSelector(state => {
    const {loadPhotoReducer} = state;
    console.log(loadPhotoReducer.photos)
    return loadPhotoReducer.photos;
  })

  return(
    <div className="container photo-container">
      {photos.map(res => { if (res.id == id){
        return (
          <div key={res.id}>
            <img src={res.urls.full} alt="" className="photo-big"/>
            <div className="card-wrap">
              <a href={res.user.link} target="_blank" className="card-link">
                {res.user.name}
              </a>

              {res.liked_by_user == true &&
                <button className="btn card-reiting like" onClick={()=>likeToggle(res)}>
                  {res.likes}
                </button>
              }

              {res.liked_by_user == false &&
              <button className="btn card-reiting" onClick={()=>likeToggle(res)}>
                {res.likes}
              </button>
            }
          </div> 

          <p className="card-date">{res.date}</p>
          <Link to="/auth" className="card-link">Назад</Link>
          </div>
          )
      }
      
    })}
    </div>
  )
}

export default Photo;