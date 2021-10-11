import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let  {title, description, imageUrl,newsUrl, author, time, source}= this.props;
        return (
            <div >
     <div className="card" >
  <img src= {!imageUrl?"https://photo-cdn2.icons8.com/Nx7dzZwQfa2K079AyAPZGpTH1g4jYR-oVJY25TO-7bQ/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNjIxL2QzMWUx/OWZhLTcyOTEtNGU3/Ni1iZmMzLTRhZmE1/NzdiYzliNy5qcGc.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1'}}>
    {source}
  </span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">Published {author===null?"":"by"} {author} {time===null?"":"on"} {time===null?"":`${new Date(time).toGMTString()}`}</small></p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem
