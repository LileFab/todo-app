export default interface TaskObject {
  id: string | null;
  title: string;
  comment: string | null;
  done: boolean;
  user_id: string;
  creation_date: Date;
  position: number | null;
}
