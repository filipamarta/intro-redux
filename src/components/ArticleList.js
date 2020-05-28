import React from "react";
import { connect } from "react-redux";

const ArticleList = (props) => {
  return (
    <div>
      {props.articles.map((article) => {
        return <div>{article.title}</div>
      })}
      <button onClick={props.getArticles}>Get Articles</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      articles: state.articles 
  }
};

const mapDispatchToProps = (dispatch) => {
    getArticles: () => dispatch(getArticles)
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
