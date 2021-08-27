var faker = require('faker');

// populate array with random lorem sentences from faker.js API
export const Friends = [
  {
    id: 1,
    fname: "Sandy",
    lname: "Franklin",
  },

  {
    id: 2,
    fname: "Thornton",
    lname: "Mooney",
  },

  {
    id: 3,
    fname: "Huey",
    lname: "English",
  },

  {
    id: 4,
    fname: "Terry",
    lname: "Weeks",
  },

  {
    id: 5,
    fname: "Mike",
    lname: "Turner",
  },

  {
    id: 6,
    fname: "Irwin",
    lname: "Willis",
  },

  {
    id: 7,
    fname: "Merton",
    lname: "Hughes",
  },

  {
    id: 8,
    fname: "Merrill",
    lname: "Beasley",
  },

  {
    id: 9,
    fname: "Ruby",
    lname: "Bentley",
  },

  {
    id: 10,
    fname: "Robert",
    lname: "Jones",
  },

  {
    id: 11,
    fname: "Alex",
    lname: "Lee",
  },

  {
    id: 12,
    fname: "Allie",
    lname: "Stewart",
  },
];

function populateArray(e) {
  let messages = [];
  // generate between 25 and 50 messages to add
  for (let i = 0; i < Math.floor(Math.random() * (75 - 50 + 1) + 50); i++) {
    // store each message along with an id, either 0 or 1, which represents the user sending the message
    messages.push({
      msg: faker.lorem.sentence(),
      // randomize who sent the message, with the id (either 0 or 1)
      id: Math.random() < 0.5 ? 0 : e.id,
    });
  }
  let str = `msg${e.id}`;
  e[str] = messages;
}
function giveTime(e) {
  let time = Math.floor(Math.random() * (59 - 1) + 1)
  let str = `time${e.id}`;
  e[str] = time;
}
Friends.map((e) => {
  populateArray(e);
  giveTime(e)
  return [];
})

export default {
  Friends
}
