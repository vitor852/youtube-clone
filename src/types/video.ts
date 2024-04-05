import { Channel } from "./channel";

export interface Video {
  id: number;
  title: string;
  previewSrc: string;
  videoUrl: string;
  visualizationsQtd: number;
  postDate: Date;
  channel: Channel;
}
