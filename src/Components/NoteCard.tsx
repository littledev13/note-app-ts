type prop = {
  title: any;
  note: any;
};

const NoteCard: React.FC<prop> = ({ title, note }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-[300px] min-h-[170px] h-fit p-2 flex flex-col">
      <input
        className="w-full font-semibold text-center"
        type="text"
        maxLength={15}
        value={title || null}
        id="judul"
        placeholder="Title"
        disabled
      />
      <textarea
        className="w-full min-h-fit  grow border-none ring-0 text-slate-500"
        maxLength={130}
        value={note || null}
        id="note"
        placeholder="Note..."
        disabled
      />
    </div>
  );
};

export default NoteCard;
