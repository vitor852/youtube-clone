import { Link } from "react-router-dom";

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

interface VideoProps {
  id: number;
  title: string;
  previewSrc: string;
  videoUrl: string;
  visualizationsQtd: number;
  postDate: Date;
  channel: {
    avatarSrc: string;
    name: string;
  };
}

const Video = (props: VideoProps) => {
  const dateToString = (date: Date) => {
    return "há 1 ano";
  };

  return (
    <Container>
      <Link to="/video/">
        <PreviewImage src={props.previewSrc} />
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
              {props.visualizationsQtd} visualizations
            </Visualizations>

            <PostDate>{dateToString(props.postDate)}</PostDate>
          </div>
        </Meta>
      </Details>
    </Container>
  );
};

export default Video;
