import { Link } from "react-router-dom";
import moment from "moment";

import {
  Container,
  PreviewImage,
  Details,
  ChannelAvatar,
  Meta,
  Title,
  ChannelName,
  Visualizations,
  PostDate,
} from "./styles";

import { Video as VideoProps } from "../../types/video";

const Video = (props: VideoProps) => {
  function dateToElapsedTime(postDate: Date) {
    const elapsedTime = moment(postDate).fromNow();
    return elapsedTime;
  }

  function formatViews(views: number) {
    if (views < 1000) return views;
    if (views < 1000000) return `${(views / 1000).toFixed(1)}K`;
    else return `${(views / 1000000).toFixed(1)}M`;
  }

  return (
    <Container>
      <Link to="/video/">
        <PreviewImage src={props.previewSrc} loading="lazy" />
      </Link>

      <Details>
        <Link to="/channel/">
          <ChannelAvatar src={props.channel.avatarSrc} />
        </Link>

        <Meta>
          <Link to="/video/">
            <Title>{props.title}</Title>
          </Link>

          <Link to="/channel/">
            <ChannelName>{props.channel.name}</ChannelName>
          </Link>

          <div>
            <Visualizations>
              {formatViews(props.visualizationsQtd)} views
            </Visualizations>
            <PostDate>{dateToElapsedTime(props.postDate)}</PostDate>
          </div>
        </Meta>
      </Details>
    </Container>
  );
};

export default Video;
