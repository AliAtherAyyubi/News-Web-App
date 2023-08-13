import React, { Component } from 'react'
import '../CSS/newsitem.css'
export default class NewsItem extends Component {
  render() {
    let {title,description,imageurl,refurl,author,date}= this.props;

    return (
      <>
        <div className="card" style={{width:"350px"}}>
          <img src={imageurl} className="card-img-top"  alt="No_Image"/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              {/* <p><strong>Author:</strong> {author}</p> */}
              <p className="card-text">{description}...</p>

              <p className="card-text my-4">
                <small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={refurl} target='_blank' rel="noreferrer" className="btn btn-primary readmore">Read More</a>
            </div>
        </div>
      </>
    )
  }
}
