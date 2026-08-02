function VideoComponent() {
  return (
    <div className="video-block">
      <h2>Компонент с видео</h2>
      <video width="600" controls>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoComponent;