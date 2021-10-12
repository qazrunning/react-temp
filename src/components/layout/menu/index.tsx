import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd'
import '../index.less'
const { SubMenu } = Menu

interface MenuInterface {
  id: string;
  title: string;
  path?: string;
  children?: MenuInterface[]
}
const Menus = (porps: any) => {
  const menuList: MenuInterface[] = [
    {
      title: '首页',
      id: "1000",
      path: "/home"
    },
    {
      title: '功能页',
      id: "2000",
      children: [
        {
          title: '功能页1',
          id: "2100",
          path: "/about"
        },
        {
          title: '功能页2',
          id: "2200",
          path: "/home"
        }
      ]
    }
  ]
  // 递归遍历出菜单
  const recursionMenu = (list: MenuInterface[]) => {
    return list.map((item: MenuInterface) => {
      if (item.children && item.children.length > 0) {
        return (<SubMenu key={item.id} title={item.title} > {recursionMenu(item.children)}</SubMenu>)
      }
      return (<Menu.Item key={item.id}>
        <Link to={item.path}>{item.title}</Link>
      </Menu.Item>)
    })
  }
  return (
    <>
      <Menu
        mode="inline"
        theme="dark">
        {
          recursionMenu(menuList)
        }
      </Menu>
    </>
  );
};
export default Menus;