// checking if number is visible by 2, 7, 14 and prints foo, bar, foobar respectively

import React from "react";

const test2 = () => {
  const nextLogic = (number) => {
    if (number % 2 === 0 && number % 14 !== 0) {
      console.log("foo", number);
    } else if (number % 7 === 0 && number % 14 !== 0) {
      console.log("bar", number);
    } else if (number % 14 === 0) {
      console.log("foobar", number);
    } else {
      console.log("number", number);
    }
  };
  nextLogic(70);

  return <div>This is test 2</div>;
};

export default test2;
