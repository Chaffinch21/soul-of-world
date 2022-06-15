import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from '../component/header';
import Gl from '../containers/Gl';
import Authorization from '../containers/Authorization';
// import Photos from '../Pages/Photos';
// import PhotoItem from '../Pages/PhotoItem';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import { setTokenSuccess } from '../store/actions/tokenActions';

const Page = () => {

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={'/'} element={<Gl/>}/>
        <Route path={'/auth'} element={<Authorization/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default Page;