import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((test) => (
          <div key={test.id} id="slider">
            <div className="video-carousel_container">Test</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
