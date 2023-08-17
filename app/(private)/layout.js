"use client"

import { useRouter } from 'next/navigation';
import { Fragment, useEffect,  } from "react";
import { useSelector } from 'react-redux';

import './admin.css'


import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;

export default function PrivateLayout({ children }) {
  const router = useRouter();
  const { user, isAuth} = useSelector(state => state.auth);
  useEffect(() => {
    if (!(user?.role && isAuth)) {
      router.push('/login');
    }
  })
  console.log(user, isAuth);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Fragment>
      {/* <header>Admin header</header>
      <main>
        {children}</main>



      <footer>Admin footer</footer> */}


<Layout className='admin-layot'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
            {children}
        </Content>
      </Layout>
    </Layout>
    </Fragment>
  );
}
