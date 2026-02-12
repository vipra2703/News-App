import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date,sources}=this.props;
    return (
      <div className='container my-3'>
       <div className="card" >
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {sources}
  </span>
  <img src={imgUrl} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}...
   
    </h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-muted">By: {author} \n Published On: {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl}  rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
