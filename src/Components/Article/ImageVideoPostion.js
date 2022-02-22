import Box from "../Box/Box";
import Grid from "../Grid/Grid";

function imageCont(style, config) {
  const { position, image, rate, video } = config;
  return (
    <div
      className="image-cont"
      style={{
        ...style,
        ...(position !== "full" ? { position: "relative" } : {}),
      }}
    >
      {rate && <Box title={"✦ " + rate} className="rate" />}
      {video && <video className="video" src={video} autoPlay loop />}
      {image && <img src={image} alt="" />}
    </div>
  );
}

function ImageVideoPostion(props) {
  const { position, image, style, video, gridStyle } = props.config;
  if (!image && !video) return props.children;

  switch (position) {
    case "left":
      return (
        <Grid style={gridStyle}>
          {imageCont({ width: "50%", ...style }, props.config)}
          {props.children}
        </Grid>
      );

    case "right":
      return (
        <Grid style={gridStyle}>
          {props.children}
          {imageCont({ width: "50%", ...style }, props.config)}
        </Grid>
      );
    case "top":
      return (
        <div>
          {imageCont({ ...style, marginBottom: 15 }, props.config)}
          {props.children}
        </div>
      );
    case "bottom":
      return (
        <div>
          {props.children}
          {imageCont({ ...style, marginTop: 15 }, props.config)}
        </div>
      );
    case "full":
      return (
        <div className="full">
          <div className="over-gradient"></div>
          {props.children}
          {imageCont({ ...style, margin: 0 }, props.config)}
        </div>
      );
    default:
      return (
        <div>
          {imageCont(style, props.config)}

          {props.children}
        </div>
      );
  }
}

export default ImageVideoPostion;
