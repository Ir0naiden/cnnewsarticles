const Article = (props) => {
  return (
    <div className="article">
      <img src={props.picture} alt={props.pictureAlt} />
      <h2>{props.headline}</h2>
      <p>{props.story}</p>
    </div>
  );
};

export default Article;