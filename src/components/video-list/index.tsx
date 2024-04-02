import { useState } from "react";

import Video from "../video";

import { Container } from "./styles";

const VideoList = () => {
  const [videos, setVideos] = useState([
    {
      id: 0,
      title:
        "QUANTO GANHA INICIALMENTE UM PROGRAMADOR EM PORTUGAL? REALIDADE DE 2023",
      previewSrc:
        "https://i.ytimg.com/vi/_K-eupuDVEc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKWi2MYNBTmZBjtYarOEQ7u7loKQ",
      videoUrl: "undefined",
      visualizationsQtd: 3000,
      postDate: new Date(),
      channel: {
        avatarSrc:
          "https://yt3.ggpht.com/aZ0SWw_F3uIhBPVHWlXNHvamEQ1y62QiynKcCcFiYr4k_umZNkH5oEDeQVXe0ZDyBbI3DFpc=s68-c-k-c0x00ffffff-no-rj",
        name: "IGotAnOffer: Engineering",
      },
    },
    {
      id: 1,
      title:
        "Google system design interview: Design Spotify (with ex-Google EM)",
      previewSrc:
        "https://i.ytimg.com/vi/_K-eupuDVEc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKWi2MYNBTmZBjtYarOEQ7u7loKQ",
      videoUrl: "undefined",
      visualizationsQtd: 3000,
      postDate: new Date(),
      channel: {
        avatarSrc:
          "https://yt3.ggpht.com/aZ0SWw_F3uIhBPVHWlXNHvamEQ1y62QiynKcCcFiYr4k_umZNkH5oEDeQVXe0ZDyBbI3DFpc=s68-c-k-c0x00ffffff-no-rj",
        name: "CNN Brasil",
      },
    },
    {
      id: 2,
      title: "teste",
      previewSrc:
        "https://i.ytimg.com/vi/_K-eupuDVEc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKWi2MYNBTmZBjtYarOEQ7u7loKQ",
      videoUrl: "undefined",
      visualizationsQtd: 3000,
      postDate: new Date(),
      channel: {
        avatarSrc:
          "https://yt3.ggpht.com/aZ0SWw_F3uIhBPVHWlXNHvamEQ1y62QiynKcCcFiYr4k_umZNkH5oEDeQVXe0ZDyBbI3DFpc=s68-c-k-c0x00ffffff-no-rj",
        name: "Felipe Saoli - Vida de Programador na Europa",
      },
    },
    {
      id: 2,
      title: "teste",
      previewSrc:
        "https://i.ytimg.com/vi/_K-eupuDVEc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKWi2MYNBTmZBjtYarOEQ7u7loKQ",
      videoUrl: "undefined",
      visualizationsQtd: 3000,
      postDate: new Date(),
      channel: {
        avatarSrc:
          "https://yt3.ggpht.com/aZ0SWw_F3uIhBPVHWlXNHvamEQ1y62QiynKcCcFiYr4k_umZNkH5oEDeQVXe0ZDyBbI3DFpc=s68-c-k-c0x00ffffff-no-rj",
        name: "Felipe Saoli - Vida de Programador na Europa",
      },
    },
    {
      id: 2,
      title: "teste",
      previewSrc:
        "https://i.ytimg.com/vi/_K-eupuDVEc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKWi2MYNBTmZBjtYarOEQ7u7loKQ",
      videoUrl: "undefined",
      visualizationsQtd: 3000,
      postDate: new Date(),
      channel: {
        avatarSrc:
          "https://yt3.ggpht.com/aZ0SWw_F3uIhBPVHWlXNHvamEQ1y62QiynKcCcFiYr4k_umZNkH5oEDeQVXe0ZDyBbI3DFpc=s68-c-k-c0x00ffffff-no-rj",
        name: "Felipe Saoli - Vida de Programador na Europa",
      },
    },
    {
      id: 2,
      title: "teste",
      previewSrc:
        "https://i.ytimg.com/vi/_K-eupuDVEc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKWi2MYNBTmZBjtYarOEQ7u7loKQ",
      videoUrl: "undefined",
      visualizationsQtd: 3000,
      postDate: new Date(),
      channel: {
        avatarSrc:
          "https://yt3.ggpht.com/aZ0SWw_F3uIhBPVHWlXNHvamEQ1y62QiynKcCcFiYr4k_umZNkH5oEDeQVXe0ZDyBbI3DFpc=s68-c-k-c0x00ffffff-no-rj",
        name: "Felipe Saoli - Vida de Programador na Europa",
      },
    },
    {
      id: 2,
      title: "teste",
      previewSrc:
        "https://i.ytimg.com/vi/_K-eupuDVEc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKWi2MYNBTmZBjtYarOEQ7u7loKQ",
      videoUrl: "undefined",
      visualizationsQtd: 3000,
      postDate: new Date(),
      channel: {
        avatarSrc:
          "https://yt3.ggpht.com/aZ0SWw_F3uIhBPVHWlXNHvamEQ1y62QiynKcCcFiYr4k_umZNkH5oEDeQVXe0ZDyBbI3DFpc=s68-c-k-c0x00ffffff-no-rj",
        name: "Felipe Saoli - Vida de Programador na Europa",
      },
    },
    {
      id: 2,
      title: "teste",
      previewSrc:
        "https://i.ytimg.com/vi/_K-eupuDVEc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKWi2MYNBTmZBjtYarOEQ7u7loKQ",
      videoUrl: "undefined",
      visualizationsQtd: 3000,
      postDate: new Date(),
      channel: {
        avatarSrc:
          "https://yt3.ggpht.com/aZ0SWw_F3uIhBPVHWlXNHvamEQ1y62QiynKcCcFiYr4k_umZNkH5oEDeQVXe0ZDyBbI3DFpc=s68-c-k-c0x00ffffff-no-rj",
        name: "Felipe Saoli - Vida de Programador na Europa",
      },
    },
  ]);

  return (
    <Container>
      {videos.map((videoData) => (
        <Video key={videoData.id} {...videoData} />
      ))}
    </Container>
  );
};

export default VideoList;
