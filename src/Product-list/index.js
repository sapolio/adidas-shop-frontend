import React from  'react';
import Content from '../Content/index';
import Sidebar from '../Sidebar/index';
//import CardsWrapper from '../Cards-wrapper';

export default () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Content>
        {/* <CardsWrapper /> */}
      </Content>
    </div>
  );
};
