import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
        description: "One of the most famour sky scrapers in the world!",
    imageUrl: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
        description: "One of the most famour sky scrapers in the world!",
    imageUrl: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u2",
  },
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(p => p.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;