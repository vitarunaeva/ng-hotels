import { Observable, of } from "rxjs";

const HOTELS = [
  {
    "img": "..",
    "address": "Boston",
    "phone":  555501,
    "weather": {
      "title": "Weather",
      "icon": "Boston-1.jpg",
      "water": 17,
      "temperature": 24
    },
    "social_info":{
      "title": "Facebook",
      "img": "Boston-2.jpg",
      "followers": 506,
      "following": 98
    },
    "type": "1"
  },
  {
  "img": "..",
    "address": "Montenegro",
    "phone":  777701,   // дополнительно задание pipe для форматирования
    "weather": {
    "title": "Weather",
      "icon": "Montenegro-1.jpg",
      "water": 25,
      "temperature": 33
  },
  "social_info":{
    "title": "Twitter",
      "img": "Montenegro-2.jpg",
      "followers": 770,
      "following": 10
  },
  "type": "2"
},
  {
    "img": "..",
    "address": "Prague",
    "phone":  999901,   // дополнительно задание pipe для форматирования
    "weather": {
      "title": "Weather",
      "icon": "Prague-1.jpg",
      "water": 18,
      "temperature": 24
    },
    "social_info":{
      "title": "Instagram",
      "img": "Prague-2.jpg",
      "followers": 150,
      "following": 109
    },
    "type": "3"
  },
  {
    "img": "..",
    "address": "Paris",
    "phone":  444401,   // дополнительно задание pipe для форматирования
    "weather": {
      "title": "Weather",
      "icon": "Paris-1.jpg",
      "water": 21,
      "temperature": 27
    },
    "social_info":{
      "title": "Vkontakte",
      "img": "Paris-2.jpg",
      "followers": 1002,
      "following": 88
    },
    "type": "1"
  },
  {
    "img": "..",
    "address": "Singapore",
    "phone":  111101,
    "weather": {
      "title": "Weather",
      "icon": "Singapore-1.jpg",
      "water": 25,
      "temperature": 35
    },
    "social_info":{
      "title": "Facebook",
      "img": "Singapore-2.jpg",
      "followers": 980,
      "following": 214
    },
    "type": "3"
  }
];

const FILTERS = [
  "All",
  "1",
  "2",
  "3"
]

export const HOTELS$ = of(HOTELS);
export const FILTERS$ = of(FILTERS);
