import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
type prop = {
  title: any;
  note: any;
};

const NoteCard: React.FC<prop> = ({ title, note }) => {
  return (
    // <div className="bg-white shadow-md rounded-lg w-[300px] min-h-[170px] h-fit px-4 py-2 flex flex-col">
    //   <input
    //     className="w-full font-semibold text-center bg-transparent"
    //     type="text"
    //     maxLength={15}
    //     value={title || null}
    //     id="judul"
    //     placeholder="Title"
    //     disabled
    //   />
    //   <p className="w-full min-h-[150px] h-fit  grow border-none ring-0 text-slate-500 text-justify">
    //     {note}
    //   </p>
    // </div>
    <Card
      className=" bg-white  rounded-lg min-w-[275px]  min-h-[278px] flex flex-col justify-between"
      shadow
    >
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{note}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Hapus</Button>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
