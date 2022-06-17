import React from 'react';
import { getToken, getPhotos } from '../unsplash';
import ListPhoto from './ListPhoto';

  const Authorization = () => {
    getToken();
        return (
            
            <div className="container">
                <ListPhoto />
            </div>
        )
        
    }

export default Authorization;