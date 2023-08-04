"use client";
import NoteCard from "@/Components/NoteCard";
import useSWR from "swr";
import { readData } from "./config/firebase";
import grid from "./grid.module.css";
import AddNote from "@/Components/AddNote";

export default function Home() {
  const { data, error, isLoading } = useSWR("/notes/uid1", readData);

  if (typeof data !== "undefined") {
    console.log(data);
  }
  const items = [
    { title: "Item 1", note: "This is item 1's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    {
      title: "Item 3",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In beatae laborum a ipsum maxime hic sda asda ad ad adasd adad asd asdsasd",
    },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    {
      title: "Item 3",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In beatae laborum a ipsum maxime hic sda asda ad ad adasd adad asd asdsasd asd asd as as dwq",
    },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    {
      title: "Item 3",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In beatae laborum a ipsum maxime hic sda asda ad ad adasd adad asd asdsasd asd asd as as dwq ",
    },
    // ... tambahkan data item lainnya ...
  ];

  return (
    <div className={grid.gridContainer}>
      {items.map((item, index) => (
        <NoteCard title={item.title} note={item.note} key={index} />
      ))}
      <AddNote />
    </div>
  );
}
