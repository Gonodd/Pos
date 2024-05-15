export default function YouTubeVideo ()  {
    return (
      <div className="iframe-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FnVIen3InUw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };