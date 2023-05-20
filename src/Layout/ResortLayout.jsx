import React from 'react';
import ResortLeftBar from '../Component/Header/ResortLeftBar';
import { Outlet } from 'react-router-dom';
import ResortRightBar from '../Component/Header/ResortRightBar';

const ResortLayout = () => {
    return (
        <div>
          <div style={{ display: "flex" }}>
            <ResortLeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <ResortRightBar />
          </div>
        </div>
    );
};

export default ResortLayout;