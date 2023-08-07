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
    <Card
      className=" bg-white  rounded-lg min-w-[275px]  min-h-[278px] flex flex-col justify-between"
      shadow
    >
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 ">
          {title}
        </Typography>
        <Typography className="text-gray-500">{note}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Hapus</Button>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
