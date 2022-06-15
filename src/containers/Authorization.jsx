import React from 'react';
import { setAccessTokenUnplash } from '../unsplash';

  const Authorization = () => {
    const code = window.location.search.split('code=')[1];
    console.log(code);
  setAccessTokenUnplash(code);
        return (
            <main className="main-wrapper">
                <header className="header">
                    <div className="container-my">
                        <h1> Авторизация</h1>
                    </div>
                </header>
            </main>
        )
        
    }

export default Authorization;