import React from 'react';
import Sidebar from '../../Sidebar';
import Gallery from './Gallery';

export default () => (
  <div className="wrapper">
    <Sidebar />
    <div className="content">
      <Gallery />
    </div>
  </div>
);
