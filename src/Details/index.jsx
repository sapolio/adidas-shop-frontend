import React from 'react';
import Sidebar from '../Sidebar';
import Detail from './Detail';

export default () => (
  <div className="wrapper">
    <Sidebar />
    <div className="content">
      <Detail />
    </div>
  </div>
);
