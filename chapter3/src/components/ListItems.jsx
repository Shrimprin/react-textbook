import { useState } from "react";

export default function ListItems() {
  const numbers = [2, 4, 6, 8];
  const items = numbers.map((item) => <li key={item.toString()}>{item}</li>);
  console.log(items);
  return <ul>{items}</ul>;
}
