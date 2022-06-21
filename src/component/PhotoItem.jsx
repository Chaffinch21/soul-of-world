import React, { useState } from "react";
import { Link } from "react-router-dom";
import { likeAction, dislikeAction} from '../actions';
import { useDispatch } from "react-redux";

const PhotoItem = (data, key) => {
  const dispatch = useDispatch();
  const likeToggle=(id)=>{
    try {
      if (!data.data.liked_by_user){
        dispatch(likeAction(id));
        document.querySelector('.card-reiting').classList.add('like');
      } 
        else {dispatch(dislikeAction(id));
          document.querySelector('.card-reiting').classList.remove('like');
      }
    }
    catch(err) {
      alert('Пройдите авторизацию еще раз, пожалуйста!')
    }
  }
  
  return(
    <li className="photos-item">
        <div className="photo-card card">
          <img src={data.data.urls.small}/>
          <div className="card-wrap">
            <a href={data.data.user.link} target="_blank" className="card-link">
              {data.data.user.name}
            </a>
            {data.data.liked_by_user == true &&
              <button className="btn card-reiting like" onClick={()=>likeToggle(data.data.id)}>
              {data.data.likes}
              </button>
            }

            {data.data.liked_by_user == false &&
              <button className="btn card-reiting" onClick={()=>likeToggle(data.data.id)}>
              {data.data.likes}
              </button>
            }
            
          </div> 
          <p className="card-date">{data.data.date}</p>
          <Link to="/photo" state={{id: data.data.id}} className="card-link">Посмотреть</Link>
        </div>
    </li>
  )
  
  
}

export default PhotoItem;