function ImageComponent() {
  return (
    <div className="image-block">
      <h2>Компонент с изображением</h2>
      <img
        src="https://fastly.picsum.photos/id/456/600/400.jpg?hmac=QDv2J8nOjXDZhK3Lb91DVV56nd9EaxtHEV5cr3Oj2Xc"
        alt="Природа"
        width="600"
        height="400"
      />
    </div>
  );
}

export default ImageComponent;