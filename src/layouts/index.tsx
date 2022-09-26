import React, { useEffect } from 'react';
import { Outlet } from 'umi';

// 位于BasicLayout 与children之间的布局 可以自定义一些需要的样式 or 界面初始化的东西在这里
const Layout: React.FC = () => {
  const test = async () => {
    console.log('testtest');
  };

  useEffect(() => {
    test();
  }, []);
  return <Outlet />;
};

export default Layout;
