import React, { useState } from 'react';
import { Layout, Button } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import RouteConfig from '@/routes';//路由配置
import Menus from './menu'
import './index.less'

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(collapsed => !collapsed)
  }
  return (
    <div className="hei-100">
      <Layout>
        <Header><Button type="primary" onClick={changeCollapsed}>
          {!collapsed ? "收起" : "展开"}
        </Button></Header>
        <Layout>
          <Sider collapsible={false} collapsed={collapsed}>
            <Menus collapsed={collapsed}></Menus>
          </Sider>
          <Content><RouteConfig></RouteConfig></Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default Layouts;