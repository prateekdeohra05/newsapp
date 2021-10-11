import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component"; 

export class News extends Component {
    
    constructor(){
        super();
        this.state={
            articles:[],
            page:1,
            totalResults:0
        }
        }
      async componentDidMount(){
        this.props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
            let data = await fetch(url);
            this.props.setProgress(60);
            let parsedData = await data.json();
            this.setState({
              articles : parsedData.articles,
              totalResults: parsedData.totalResults
            })
            this.props.setProgress(100);
        
        }
      fetchMoreData=async()=>{
          this.setState({page:this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : this.state.articles.concat(parsedData.articles),
           totalResults: parsedData.totalResults
        })
      console.log(this.state.articles)
      console.log(this.state.totalResults)
      }
     
      
      
      render() {
       
        return (
            <>
            <h2 className="text-center" style={{marginTop:'80px'}}>Khabri - Top Headlines</h2>
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className='container my-3'>
              <div className="row">
                {this.state.articles.map((element)=>{   
                return <div className="col-md-4" key={element.url}>
               <NewsItem  title={element.title} description ={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/> 
                  </div>
                })}
            </div>
               </div>
               </InfiniteScroll>
</>
        )
    }
}

export default News
