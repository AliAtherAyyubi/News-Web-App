import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
// import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: true,
      totalResult: 0,
      pageSize: 50,
      page: 1,
    };
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.props.setProgress(10);

    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    document.title = "GlobalNews- " + this.props.category;
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResult: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  // PrevNewsClick = async () => {
  //   window.scrollTo(0, 0);
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };
  // NextNewsClick = async () => {
  //   window.scrollTo(0, 0);

  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };
  // //

  // async fechMoreData() {
  //   console.log("Fetch");
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //     this.props.category
  //   }&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${
  //     this.state.pageSize
  //   }`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // document.title = "GlobalNews- " + this.props.category;
  //   // console.log(this.state.page)
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     loading: false,
  //     // totalResult: parsedData.totalResults,
  //   });
  //   this.setState({ page: this.state.page + 1 });
  // }
    convertToUpper(str){
      str=str.toString();
      var newVar= str[0].toUpperCase()+str.slice(1)
      return newVar
    }
  render() {
    return (
      <>
        <h1 className="text-center" style={{marginTop:"1cm"}}>
          Global News - Top - {this.convertToUpper(this.props.category)}
        </h1>
        {/* <h1 className="text-center">
          Total Results: {this.state.totalResult}
        </h1> */}
        {/* <h2 className="mx-4">Page No.{this.state.page}</h2> */}
        {this.state.loading && <Loading />}

        <div className="container">
          <div className="row">
            {this.state.articles.map((element, index) => {
              return (
                <div className="col-md-4 my-3 d-flex justify-content-center" key={index}>
                  <NewsItem
                    title={element.title.slice(0, 40)}
                    description={element.description}
                    author={element.author}
                    date={element.publishedAt}
                    totalResult={element.totalResult}
                    imageurl={element.urlToImage}
                    refurl={element.url}
                  />
                </div>
              );
            })}
          </div>
          {/* <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fechMoreData}
          hasMore={this.state.articles.length!==this.state.totalResult}
          loader={<Loading/>} style={{overflow:'hidden'}}
        >
        

        </InfiniteScroll> */}
        </div>
      </>
    );
  }
}
