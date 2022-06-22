import React from 'react';
import ListPhoto from './ListPhoto';
import { getToken } from '../unsplash';

  const Authorization = () => {
    const saveMe=()=>{
        getToken();
    }
    
        return (
            <div className="container container-Gl scroll-unload">
                {/* <h1 className="title-Gl welcome">Добро пожаловать!</h1> */}
                <button className='saveMe-btn' onClick={saveMe}>
                    Запомнить меня
                </button>
                <ListPhoto />
            </div>
        )
        
    }

export default Authorization;