import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
                constructor(){
                    super();
                    console.log("Hello I am a constructor");
                    this.state = {
                        articles : [],
                        loading: false,
                        page: 1,

                    }
                }
                async componentDidMount(){
                  let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-07-09&sortBy=publishedAt&apiKey=eee1ac308d5e4cd5a80d02ef7d4fb497&page=1&pageSize=20"
                  let data = await fetch(url)
                  let parseData = await data.json()
                  console.log(parseData)
                  this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
                }
                handleNextclick = async ()=> {
                 console.log("next")
                 if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

                 }
                 else{
                   let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-07-09&sortBy=publishedAt&apiKey=eee1ac308d5e4cd5a80d02ef7d4fb497&page=1${this.state.page + 1}&pageSize=20`
                   let data = await fetch(url)
                   let parseData = await data.json()
                   console.log(parseData)
                   this.setState({
                     page: this.state.page + 1,
                     articles: parseData.articles
                    })
                  }
                }
                handleprevclick= async ()=> {
                 console.log("previous")
                 let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-07-09&sortBy=publishedAt&apiKey=eee1ac308d5e4cd5a80d02ef7d4fb497&page=1${this.state.page - 1}&pageSize=20`
                  let data = await fetch(url)
                  let parseData = await data.json()
                  console.log(parseData)
                  this.setState({
                    page: this.state.page - 1,
                    articles: parseData.articles
                  })
                }
                render() 
                {
                return (
    <div>
        <div className='container my-3'>
        <h2>Top News Headlines</h2>
        <div className='row mx-3 my-3'>
        {this.state.articles.map((element)=> {
            return   <div className='col-md-4 my-3' key={element.url}>
            <NewsItem  title = {element.title.slice(0, 45)?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
     </div>
        })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
        </div>
    </div>
    )
}
  }


