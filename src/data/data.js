export const users = [
  {
    id: 1,
    firstName: "Gizella",
    lastName: "Gazella",
    email: "gizellagazella@email.com",
    password: "1234",
  },
];

export const goals = [
  {
    id: 1,
    question:
      "Mit tehetek, hogy emelkedjen a fizetésem 40%-kal 6 hónapon belül?",
    startAt: new Date(2022, 9, 3, 12, 10),
    finishAt: null,
    rating: null,
    userId: 1,
  },
  {
    id: 2,
    question:
      "Mit tehetek, hogy emelkedjen a fizetésem 40%-kal 6 hónapon belül?",
    startAt: new Date(2022, 9, 3, 12, 10),
    finishAt: null,
    rating: null,
    userId: 1,
  },
];

export const tasks = [
  {
    id: 1,
    description: "Typescript gyakorlása",
    startAt: null,
    finishAt: null,
    rating: null,
    goalId: 2,
  },
  {
    id: 2,
    description: "Még több gyakorlás",
    startAt: null,
    finishAt: null,
    rating: null,
    goalId: 2,
  },
  {
    id: 3,
    description: "Typescript gyakorlása",
    startAt: null,
    finishAt: null,
    rating: null,
    goalId: 1,
  },
];

export const turns = [
  {
    id: 1,
    focusTime: 40,
    shift: 5,
    finishAt: null,
    taskId: 1,
  },
  {
    id: 2,
    focusTime: 40,
    shift: 5,
    finishAt: null,
    taskId: 1,
  },
  {
    id: 3,
    focusTime: 40,
    shift: 20,
    finishAt: null,
    taskId: 1,
  },
  {
    id: 4,
    focusTime: 40,
    shift: 20,
    finishAt: null,
    taskId: 2,
  },
];
