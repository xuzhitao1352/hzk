import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
// 组件
import Home from './pages/Home'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return <Router>
      {/* 不推荐使用 */}
      {/* <Redirect from="/" to="/home" component={Home}/> */}
      <Route path="/"
      render={()=>{
        // 用于做判断
        return <Redirect to="/home"/>
      }}
      ></Route>
      <Route path="/home" component={Home}></Route>
    </Router>
  }
}
export default App