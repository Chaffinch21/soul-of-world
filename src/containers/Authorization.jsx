import React from 'react';
import ListPhoto from './ListPhoto';
import { getToken } from '../unsplash';

  const Authorization = () => {
    getToken();
        return (
            <div className="container container-Gl">
                <h1 className="title-Gl welcome">Добро пожаловать!</h1>
                <ListPhoto />
            </div>
        )
        
    }

export default Authorization;