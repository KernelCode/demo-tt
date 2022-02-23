import "./article.scss";
import Box from "../Box/Box";
import ImageVideoPostion from "./ImageVideoPostion";

export default function Article(props) {
  if (!props.data) return null;

  const { tags, title, body, author, image, rate, video } = props.data;
  const {
    centred = "",
    imagePostion,
    imageStyle,
    blendImage = "",
    contentOpacity = 1,
    tagType = "fill",
    gridStyle = {},
  } = props.config || {
    imagePostion: "bottom",
    centred: "",
  };
  return (
    <div className={`article ${centred} ${blendImage}`} style={props.style}>
      <ImageVideoPostion
        config={{
          rate,
          video,
          image,
          position: imagePostion,
          style: imageStyle,
          gridStyle,
        }}
      >
        <div className="body">
          {tags &&
            tags.map((tag) => (
              <Box key={tag} title={tag} centred={centred} type={tagType} />
            ))}
          <div className="body-text" style={{ opacity: contentOpacity }}>
            {title && <h1>{title}</h1>}
            {body && <p>{body}</p>}
            {author && <span>{author}</span>}
          </div>
        </div>
      </ImageVideoPostion>
    </div>
  );
}
