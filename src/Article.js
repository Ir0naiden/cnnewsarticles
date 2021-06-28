const Article = (props) => {
    return (
      <div className="article">
        <img src={props.picture} alt={props.pictureAlt}/>
        <h2>{props.newsHeadline}</h2>
        <p>{props.newsStory}</p>
      </div>
    );
  };
  
  export default Article;