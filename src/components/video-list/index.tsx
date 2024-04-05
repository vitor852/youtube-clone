import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

import Video from "../video";

import { Container } from "./styles";

import { videos as videosData } from "../../data/videos";

const VideoList = () => {
  const [videos] = useState(videosData);
  const [isLoading, setIsLoading] = useState(true);

  function renderVideos() {
    return videos.map((videoData) => (
      <Video key={videoData.id} {...videoData} />
    ));
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) return <Loading />;

  return <Container>{renderVideos()}</Container>;
};

const Loading = () => {
  return (
    <ContentLoader
      speed={2}
      width={1200}
      height={800}
      viewBox="0 0 1200 800"
      backgroundColor="#252525"
      foregroundColor="#252525"
    >
      <rect x="9" y="6" rx="10" ry="10" width="330" height="180" />
      <circle cx="37" cy="219" r="24" />
      <rect x="79" y="199" rx="0" ry="0" width="240" height="17" />
      <rect x="79" y="223" rx="0" ry="0" width="180" height="17" />
    </ContentLoader>
  );
};

export default VideoList;
