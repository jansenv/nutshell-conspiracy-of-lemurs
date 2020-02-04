# React Nutshell: The Information Dashboard

![Screencap of the project](src/images/screenshot.png)

## Project Description

Nutshell is a dashboard for lemur lovers across the globe to organize their daily tasks, events, news article, friends, and chat messages.

We were tasked with building this project using React. Previously, we had built a variation of this project in vanilla JavaScript. It can be viewed at this link: https://github.com/nss-cohort-37/nutshell-lamenting-lemmings

## Instructions

1. Clone this repository
1. `cd` into the directory it creates
1. Install the necessary packages with npm install, npm i --save react-router-dom, npm install react-slideshow-image -S
1. Make an `api` directory and touch `database.json`
1. Copy & paste sample api below into database
1. Run `json-server -w database.json -p 8088`
1. In a separate terminal, `cd` into `src` directory
1. npm start

## Sample Api

```
{
  "users": [
    {
      "id": 1,
      "email": "w@m.com",
      "password": "wm",
      "firstName": "Willy",
      "lastName": "Metcalf"
    },
    {
      "id": 2,
      "email": "s@t.com",
      "password": "st",
      "firstName": "Spencer",
      "lastName": "Truett"
    },
    {
      "id": 3,
      "email": "j@v.com",
      "password": "jv",
      "firstName": "Jansen",
      "lastName": "Van der Spuy"
    },
    {
      "id": 4,
      "email": "h@p.com",
      "password": "hp",
      "firstName": "Holden",
      "lastName": "Parker"
    }
  ],
  "news": [
    {
      "id": 1,
      "userId": 2,
      "title": "Exploring the 'Island of Lemurs: Madagascar'",
      "url": "https://www.youtube.com/watch?v=6eaTBoqpNEg",
      "synopsis": "Filmmakers got creative, even used a hot air balloon, to capture incredible footage for IMAX film.",
      "timestamp": 1579312120634
    },
    {
      "id": 2,
      "userId": 4,
      "title": "Lemurs get high | Spy in the Wild - BBC",
      "url": "https://www.youtube.com/watch?v=yYXoCHLqr4o",
      "synopsis": "Lemurs use millipedes as an insecticide and become intoxicated in the process.",
      "timestamp": 1579311555615
    },
    {
      "id": 3,
      "userId": 1,
      "title": "For the Love of Lemurs | Science | Smithsonian Magazine",
      "url": "https://www.smithsonianmag.com/science-nature/for-the-love-of-lemurs-114220002/",
      "synopsis": "A verreaux's sifaka lemur in Madagascar can leap 30 feet...",
      "timestamp": 1579312127928
    },
    {
      "id": 4,
      "userId": 3,
      "title": "Facts About Lemurs | Live Science",
      "url": "https://www.livescience.com/55276-lemurs.html",
      "synopsis": "There are 105 species of lemurs, and nearly all of them are endangered.",
      "timestamp": 1579640715703
    }
  ],
  "messages": [
    {
      "id": 1,
      "userId": 1,
      "message": "Are there lemurs in Runescape?",
      "timestamp": 1579640023071
    },
    {
      "userId": 4,
      "message": "Sort of...in Karamja...",
      "timestamp": 1579640081956,
      "id": 2
    },
    {
      "userId": 2,
      "message": "Where can I adopt a lemur?",
      "timestamp": 1579640168228,
      "id": 3
    },
    {
      "id": 4,
      "userId": 3,
      "message": "LemurMart?",
      "timestamp": 1580779892165
    },
    {
      "userId": 4,
      "message": "IDK, my BFF, Jill...",
      "timestamp": 1579640361505,
      "id": 5
    }
  ],
  "tasks": [
    {
      "userId": 1,
      "name": "Pet a Lemur",
      "task": "at the Nashville Zoo",
      "dueDate": "2021-06-01T13:00",
      "id": 1,
      "isCompleted": false
    },
    {
      "userId": 1,
      "name": "Photograph a Lemur",
      "task": "Snap an excellent photo!",
      "dueDate": "2020-03-01T00:00",
      "id": 2,
      "isCompleted": true
    },
    {
      "userId": 2,
      "name": "Buy a lemur hat",
      "task": "buy a hat, from the GAP",
      "dueDate": "2020-03-14T12:00",
      "id": 3,
      "isCompleted": false
    },
    {
      "userId": 3,
      "name": "Feed a lemur",
      "task": "What do lemurs eat?",
      "dueDate": "2021-03-20T19:00",
      "isCompleted": true,
      "id": 7
    },
    {
      "userId": 4,
      "name": "Put a lemur on my head",
      "task": "Watch out for the claws",
      "dueDate": "2020-01-20T09:00",
      "isCompleted": true,
      "id": 8
    },
    {
      "userId": 4,
      "name": "Collect a bunch of lemur things",
      "task": "BUY ALL THE THINGS",
      "dueDate": "2020-04-01T09:30",
      "isCompleted": false,
      "id": 9
    },
    {
      "userId": 2,
      "name": "LEMUR TIME!",
      "task": "LEMUR TIME",
      "dueDate": "2020-02-01T15:00",
      "isCompleted": true,
      "id": 10
    },
    {
      "userId": 3,
      "name": "I love lemurs!",
      "task": "Lemurs are great!",
      "dueDate": "2020-02-14T14:14",
      "isCompleted": false,
      "id": 11
    }
  ],
  "events": [
    {
      "id": 1,
      "name": "Go to the Zoo to see lemurs",
      "location": "Nashville Zoo",
      "timestamp": "2020-01-22T09:00",
      "userId": 2
    },
    {
      "userId": 2,
      "name": "Book a trip to Madagascar",
      "location": "Madagascar",
      "timestamp": "2020-02-01T14:00",
      "id": 2
    },
    {
      "userId": 3,
      "name": "See more lemurs",
      "location": "???",
      "timestamp": "2020-05-15T16:00",
      "id": 3
    },
    {
      "userId": 3,
      "name": "Pet the lemurs",
      "location": "Madagascar",
      "timestamp": "2020-05-15T16:00",
      "id": 3
    }
  ],
  "friends": [
    {
      "userId": 3,
      "activeUserId": 1,
      "id": 3
    },
    {
      "userId": 1,
      "activeUserId": 4,
      "id": 6
    },
    {
      "userId": 3,
      "activeUserId": 4,
      "id": 7
    },
    {
      "userId": 2,
      "activeUserId": 1,
      "id": 8
    },
    {
      "userId": 2,
      "activeUserId": 3,
      "id": 10
    },
    {
      "userId": 1,
      "activeUserId": 3,
      "id": 14
    },
    {
      "userId": 4,
      "activeUserId": 3,
      "id": 15
    },
    {
      "userId": 4,
      "activeUserId": 1,
      "id": 16
    },
    {
      "userId": 3,
      "activeUserId": 2,
      "id": 20
    },
    {
      "userId": 1,
      "activeUserId": 2,
      "id": 21
    }
  ]
}
```

## Authors

* **Willy Metcalf** - (https://github.com/WilliamMetcalf-37)
* **Holden Parker** - (https://github.com/holdenprkr)
* **Spencer Truett** - (https://github.com/SpencerTruett)
* **Jansen van der Spuy** - (https://github.com/jansenv)