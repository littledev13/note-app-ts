import { writeData } from "@/app/config/firebase";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const handSave = (e: any) => {
    e.preventDefault();
    writeData(title, note);
    setTitle("");
    setNote("");
  };
  return (
    <Card className=" shadow-md rounded-lg w-[300px] h-[200px]  flex flex-col">
      <form onSubmit={handSave}>
        <CardBody className="flex flex-col gap-4 ">
          <Input
            label="Title"
            maxLength={18}
            value={title}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
            size="md"
            className="font-semibold text-center bg-transparent "
            variant="standard"
            required
          />
          <Textarea
            label="Note . . ."
            value={note}
            maxLength={130}
            onChange={(e) => {
              e.preventDefault();
              setNote(e.target.value);
            }}
            variant="standard"
            size="lg"
            required
          />
        </CardBody>
        <CardFooter className="pt-0 my-auto ">
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AddNote;
