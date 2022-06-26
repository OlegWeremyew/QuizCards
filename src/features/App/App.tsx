import React, { FC, useEffect } from 'react';

import './App.scss';
import { useDispatch, useSelector } from 'react-redux';

import { initializeAppTC } from '../../Redux/appReducer';
import { getInitializedAppSelector } from '../../selectors';
import { Preloader, RoutesComponent } from '../../ui';

export const App: FC = () => {
  const dispatch = useDispatch();

  const isInitialized = useSelector(getInitializedAppSelector);

  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  if (!isInitialized) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <RoutesComponent />
    </div>
  );
};
