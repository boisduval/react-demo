import React from "react";
import {NavLink} from "react-router-dom"
import "../views/styles/nav.css"

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNav: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "数据中心",
          path: "/data"
        }
      ],
      rightNav: [
        {
          name: "基站状态",
          path: "/status"
        },
        {
          name: "系统安全",
          path: "/security"
        }
      ],
      title: "数据监控中心"
    }
  }

  render() {
    return (
      <div id="nav" className="flex-row flex-center">
        <nav className="left flex2">
          <ul className="flex-row flex-end">
            <NavItem arr={this.state.leftNav}/>
          </ul>
        </nav>
        <p title="标题" className="headline flex font-head">
          {this.state.title}
        </p>
        <nav className="right flex2">
          <ul className="flex-row flex-start">
            <NavItem arr={this.state.rightNav}/>
          </ul>
        </nav>
        <Company />
      </div>
    )
  }
}

class NavItem extends React.Component {
  render() {
    const list = this.props.arr
    const listItems = list.map((val) =>
      <li className="font-nav" key={val.path}>
        <NavLink to={val.path} exact activeClassName="active-nav">
          {val.name}
        </NavLink>
      </li>
    )
    return (
      listItems
    )
  }
}

class Company extends React.Component {
  render() {
    return (
      <div id="company" className="flex-row flex-center">
        <img src={require("../img/logo.png")} alt="公司logo"/>
        <p>
          浙江衡睿科技有限公司
        </p>
      </div>
    )
  }
}

export default Nav