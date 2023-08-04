"use client";
import NoteCard from "@/Components/NoteCard";
import useSWR from "swr";
import { readData } from "./config/firebase";
import grid from "./grid.module.css";

export default function Home() {
  const { data, error, isLoading } = useSWR("/notes/uid1", readData);

  if (typeof data !== "undefined") {
    console.log(data);
  }
  const items = [
    { title: "Item 1", note: "This is item 1's note content." },
    { title: "Item 2", note: "This is item 2's note content." },
    { title: "Item 3", note: "This is item 3's note content." },
    // ... tambahkan data item lainnya ...
  ];

  return (
    <div className={grid.gridContainer}>
      {items.map((item, index) => (
        <NoteCard title={item.title} note={item.note} key={index} />
      ))}
    </div>
  );
}
