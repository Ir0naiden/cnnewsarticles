const Article = (props) => {
    return (
      <div>
        <img src={props.picture}></img>
        <h2>{props.newsHeadline}</h2>
        <p>{props.newsStory}</p>
      </div>
    );
  };
  
  export default Article;