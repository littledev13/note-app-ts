"use client";
import NoteCard from "@/Components/NoteCard";
import useSWR from "swr";
import { readData } from "./config/firebase";
import grid from "./grid.module.css";
import AddNote from "@/Components/AddNote";

export default function Home() {
  const { data, error, isLoading } = useSWR("/notes/", readData);

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const item = data[key];
      console.log("Key:", key);
      console.log("Title:", item.title);
      console.log("Note:", item.note);
      console.log("------------");
    }
  }
  return (
    <div className={grid.gridContainer}>
      {typeof data !== "undefined"
        ? Object.values(data).map((item: any, index: any) => (
            <NoteCard key={index} title={item.title} note={item.note} />
          ))
        : null}
      <AddNote />
    </div>
  );
}
