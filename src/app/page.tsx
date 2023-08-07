"use client";
import NoteCard from "@/Components/NoteCard";
import useSWR from "swr";
import { readData } from "./config/firebase";
import grid from "./grid.module.css";
import AddNote from "@/Components/AddNote";

export default function Home() {
  const { data, error, isLoading } = useSWR("/notes/", readData);

  typeof data !== "undefined"
    ? Object.values(data).map((item: any, index: any) =>
        console.log("page: ", index)
      )
    : null;

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
