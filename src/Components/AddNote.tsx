import {
  Button,
  Input,
  Textarea,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const AddNote = () => {
  return (
    <Card className=" shadow-md rounded-lg w-[300px] min-h-[200px] h-fit flex flex-col">
      <CardBody className="flex flex-col gap-4 ">
        {/* <input
        className="w-full font-semibold text-center bg-transparent px-3 py-2"
        type="text"
        maxLength={15}
        id="judul"
        placeholder="Title"
      /> */}
        {/* <textarea
        className="w-full min-h-[150px] h-fit bg-transparent text-justify px-3 py-2 grow  focus:border-blue-500 text-slate-500"
        maxLength={130}
        id="note"
        placeholder="Note..."
      /> */}
        <Input
          label="Title"
          maxLength={18}
          size="md"
          className="font-semibold text-center bg-transparent "
          variant="standard"
        />
        <Textarea
          label="Note . . ."
          maxLength={130}
          variant="standard"
          size="lg"
        />
      </CardBody>
      <CardFooter className="pt-0 my-auto ">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
};

export default AddNote;
