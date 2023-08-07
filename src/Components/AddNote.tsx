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
  const handSave = () => {
    writeData(title, note);
    setTitle("");
    setNote("");
  };
  return (
    <Card className=" shadow-md rounded-lg w-[300px] min-h-[200px] h-fit flex flex-col">
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
        />
      </CardBody>
      <CardFooter className="pt-0 my-auto ">
        <Button onClick={handSave}>Save</Button>
      </CardFooter>
    </Card>
  );
};

export default AddNote;
