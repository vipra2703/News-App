import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {

  static defaultProps={
    country:"us",
    pageSize:8,
    category:"general"
  }

static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

}
 capitalizer = (str) => {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
   constructor(props){
    console.log("constructer")
    super(props)
    this.state={
        articles:[],
        loding:false,
        page:1
    }
    document.title=`${(this.capitalizer(this.props.category))}-News Monkey`
   }
   async updateNews(){
    this.props.setProgress(10);
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loding:true})
    let data = await fetch(url)
    let parsed_data = await data.json()
    this.setState({
        articles:parsed_data.articles,
        tototalResults:parsed_data.tototalResults,
        loding:false

    })
     this.props.setProgress(100);
   }
  async componentDidMount(){
    console.log("cdm")
    this.updateNews()
   }
   handleNextPage= async()=>{
    console.log("After")
    this.setState({
     page:this.state.page+1,
    })
      this.updateNews()

      
   }
    handlePreviousPage= async()=>{
    console.log("Before")
    this.setState({
      page:this.state.page-1
    })
    this.updateNews()
   }
  render() {
    return (
        
      <div className='container my-3'>
        <h2 className="text-center" style={{margin:'40px 0px'}}>News Monkey Top {(this.capitalizer(this.props.category))} Headlines</h2>
{this.state.loding&&<Spinner/>}
      <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem 
            title={element.title?element.title.slice(0,45):""} 
            description={element.description?element.description.slice(0,88):""}
             imgUrl={element.urlToImage} 
             newsUrl={element.url} 
             author={!element.author?"Unknown":element.author}
              date={element.publishedAt}
              sources={element.source.name}/>
        </div>

        })}
    
      </div>
      <div className=" container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePreviousPage}>Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.tototalResults/this.props.pagesize) }class="btn btn-dark" onClick={this.handleNextPage}>Next</button>

   </div>
      </div>
    )
  }
}

export default News
