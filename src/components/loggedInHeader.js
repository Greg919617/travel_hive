import React from "react";
import { Layout, Icon, Avatar, Dropdown } from "antd";
import { menu } from "./menu";

const { Header } = Layout;

export const LoggedInHeader = props => (
  <Header className="header-container">
    <div>
      <a href="./">
        <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="logo" className="logo" />
      </a>
    </div>
    <div className="avatar-container">
      <a href ="./profile">
        <Avatar shape="square" size="large" src={props.profileImage} />
      </a>
      <Dropdown overlay={menu}>
        <Icon type="down" />
      </Dropdown>
    </div>
  </Header>
);
