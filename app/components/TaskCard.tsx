import CheckBox from "./UI/CheckBox";

function TaskCard({
  title,
  comment,
  done,
}: {
  title: string;
  comment?: string | null;
  done: boolean;
}) {
  return (
    <li className=" bg-sage-900 w-7/12 h-28 shadow-md shadow-timberwolf-400 my-8">
      <p>Titre : {title}</p>
      <p>Commentaire : {comment}</p>
      <CheckBox done={done} />
    </li>
  );
}

export default TaskCard;
