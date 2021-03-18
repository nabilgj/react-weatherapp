import React, { Fragment } from "react";

const rooms = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 },
];

const Test = () => {
  return (
    <Fragment>
      <ol>
        {rooms.map((room) => (
          <li key={room.room_type}>
            {room.room_type}, ${room.price}
          </li>
        ))}
      </ol>
    </Fragment>
  );
};

// haven't rendered to the DOM
export default Test;
