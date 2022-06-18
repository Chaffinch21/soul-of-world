import React from "react";
import { Link } from "react-router-dom";
const PhotoItem = (data, key) => {
  return(
    <li className="photos-item">
        <div className="photo-card card">
          <img src={data.data.urls.small}/>
          <div className="card-wrap">
            <a href={data.data.user.link} target="_blank" className="card-link">
              {data.data.user.name}
            </a>
            <div className="card-reiting">
              {data.data.likes}
            </div>
          </div> 
          <p className="card-date">{data.data.date}</p>
          <Link to="/photo" className="card-link">Посмотреть</Link>
        </div>
    </li>
  )
  
  
}

export default PhotoItem;