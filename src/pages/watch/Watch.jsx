import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.shutterstock.com/shutterstock/videos/1058426884/preview/stock-footage-aerial-drone-view-of-sunrise-over-misty-river-calmness-relaxation-meditation-solitude-beauty.webm"
      />
    </div>
  );
}