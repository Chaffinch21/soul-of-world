import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../component/header';
import Gl from '../containers/Gl';
import Authorization from '../containers/Authorization';
import Photo from '../containers/Photo';
const Page = () => {

  return(
    <BrowserRouter>
      <Header />
      <main className="main">
      <Routes>
        <Route exact path={'/'} element={<Gl/>}/>
        <Route path={'/auth'} element={<Authorization/>}/>
        <Route path={'/photo'} element={<Photo/>}/>
      </Routes>
      </main>
    </BrowserRouter>
  )
};

export default Page;