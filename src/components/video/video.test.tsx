import { render, screen } from "@testing-library/react";
import * as moment from "moment";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router-dom";

import Video from "@/components/video";

import { Video as VideoProps } from "@/types/video";
import { faker } from "@faker-js/faker";

describe("Video", () => {
  const props: VideoProps = {
    id: 0,
    title: faker.lorem.sentence({ min: 3, max: 20 }),
    previewSrc: faker.image.url(),
    videoUrl: "",
    postDate: moment().subtract(1, "day").toDate(),
    visualizationsQtd: 3000,
    channel: {
      avatarSrc: faker.image.avatar(),
      name: faker.person.fullName(),
    },
  };

  it("should render the views formatted.", async () => {
    render(<Video {...props} />, { wrapper: BrowserRouter });
    screen.getByText(/3.0K views/i);
  });

  it("should render the elapsed time.", async () => {
    render(<Video {...props} />, { wrapper: BrowserRouter });
    screen.getByText(/a day ago/i);
  });
});
