import { faker } from "@faker-js/faker";

export const videos = faker.helpers.multiple(
  () => ({
    id: faker.number.int({ min: 0, max: 10 }),
    title: faker.lorem.sentence({ min: 3, max: 15 }),
    previewSrc: faker.image.url(),
    videoUrl: "undefined",
    visualizationsQtd: faker.number.int({ max: 1000000 }),
    postDate: faker.date.recent(),
    channel: {
      avatarSrc: faker.image.avatar(),
      name: faker.person.fullName(),
    },
  }),
  { count: 10 }
);
