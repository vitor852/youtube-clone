import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  max-width: 300px;

  flex-grow: 1;
`;

export const PreviewImage = styled.img`
  border-radius: 10px;
`;

export const Details = styled.div`
  display: flex;

  gap: 8px;
`;

export const ChannelAvatar = styled.img`
  height: 30px;
  width: 30px;

  border-radius: 30px;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  padding-right: 10px;

  color: #aaa;
  font-size: 10px;

  gap: 2px;
`;

export const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;

  color: white;

  font-size: 12px;
  font-weight: 500;

  -webkit-line-clamp: 2;
  line-clamp: 2;

  -webkit-box-orient: vertical;
`;

export const ChannelName = styled.span`
  width: 100%;

  color: #aaa;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    color: white;
  }
`;

export const Visualizations = styled.span``;

export const PostDate = styled.span`
  &:before {
    content: "•";

    width: 1px;
    height: 1px;

    margin: 0 3px;

    color: #aaa;
  }
`;
