import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
	 function ColorList() {
    "hotpink"
    }];

  //with objects
  const users = [
    {id: 1, firstName: "Duane", lastName: "Watson"},
    {id: 2, firstName: "Dwayne", lastName: "Johnson"},
  ];

  // with non-unique arrays
  const fib = [0, 1, 1, 3, 5];

  const userHeadings = users.map((user) => {
    return <h1 key={user.id}>{user.firstName} {user.lastName}</h1>
  })

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color = {color} />
  })

  const fibList = fib.map((number, index) => {

    // not the best approach to assigning kays
    return <div key={index}>{number}</div>
  })

  console.log(colorElements)

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
        {userHeadings}
        {fibList}
      </ol>
    </div>
  );
}
export default ColorList;