import React from 'react';
import { Outlet } from 'react-router-dom';
import RightBar from '../Component/RightBar/RightBar';

const Layout = () => {
    return (
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      );
    };

export default Layout;