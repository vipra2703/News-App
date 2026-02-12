
import './App.css';
import Navbar from './components/Navbar';
// render compiles jsx into html and then renders html
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News';


export default class App extends Component {
  pageSize=15
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
  {/* Wrap each component in the element prop and add a unique key */}
            <Route path='/' element={<News setProgress={this.setProgress} key="general" pagesize={this.pageSize} country="us" category="general"/>} />
            <Route path='/business' element={<News setProgress={this.setProgress} key="business" pagesize={this.pageSize} country="us" category="business"/>} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pageSize} country="us" category="entertainment"/>} />
            <Route path='/health' element={<News setProgress={this.setProgress} key="health" pagesize={this.pageSize} country="us" category="health"/>} />
            <Route path='/science' element={<News setProgress={this.setProgress} key="science" pagesize={this.pageSize} country="us" category="science"/>} />
            <Route path='/sports' element={<News setProgress={this.setProgress} key="sports" pagesize={this.pageSize} country="us" category="sports"/>} />
            <Route path='/technology' element={<News setProgress={this.setProgress} key="technology" pagesize={this.pageSize} country="us" category="technology"/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

