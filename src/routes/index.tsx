import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/pages/Home'
import About from '@/pages/About'
// 缺少一个路由懒加载
const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '相关',
    }
  },
];
const RouteConfig = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component}/>
        ))
        }
        <Redirect to="/about" from='/' exact />
      </Switch>
    </Router>
  );
}

export default RouteConfig;
