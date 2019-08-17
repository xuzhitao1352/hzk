import React from 'react'
import { TabBar } from 'antd-mobile'
import { Route } from 'react-router-dom'
// 组件
import Index from '../Index'
import HouseList from '../HouseList'
import News from '../News'
import Profile from '../Profile'


// 样式文件
import '../../assets/fonts/iconfont.css'

// tabBar数据
const tabItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/list'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: props.location.pathname
    }
  }
  TabBarItem(){
    return tabItems.map((item,index)=>{
      return (
        <TabBar.Item
            title={item.title}
            key={index}
            icon={<i className={`iconfont ${item.icon}`} />}
            selectedIcon={<i className={`iconfont ${item.icon}`} />}
            selected={this.state.selectedTab === item.path}
            onPress={() => {
              this.props.history.push(item.path)
              this.setState({
                selectedTab: item.path,
              });
            }}
          >
              <Route path="/home" exact component={Index}></Route>
              <Route path="/home/list" component={HouseList}></Route>
              <Route path="/home/news" component={News}></Route>
              <Route path="/home/profile" component={Profile}></Route>
          </TabBar.Item>
      )
    })
  }
  render() {
    return <div className="App">
      <TabBar unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom">
          {this.TabBarItem()}
        </TabBar>
    </div>
  }
}
export default App