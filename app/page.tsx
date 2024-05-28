import { Abril_Fatface } from "next/font/google";
import { currentUser } from "@clerk/nextjs/server";
import TaskCard from "./components/TaskCard";
import TaskObject from "./interfaces/TaskInterface";
import { getAllTasksByUserId } from "./actions/taskActions";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

// Define the return type explicitly
const getData: () => Promise<[any, TaskObject[]]> = async () => {
  const user = await currentUser();
  const userTasks: TaskObject[] = user
    ? await getAllTasksByUserId(user.id)
    : [];
  console.log(userTasks);
  return [user, userTasks];
};

export default async function Home({ searchParams }: SearchParamProps) {
  const [user, userTasks]: [any, TaskObject[]] = await getData();
  const modalState = searchParams?.show;

  return (
    <div className="pt-36 w-screen text-center z-10">
      {modalState && <Modal />}
      {!user && (
        <h1 className={`${abril.className} text-3xl`}>
          Merci de vous connecter afin d'accéder à vos tâches.
        </h1>
      )}
      {user && (
        <>
          <h1 className={`${abril.className} text-5xl mb-12`}>
            &#9207; Vos tâches {user?.firstName}&#9207;
          </h1>
          {/* // faire une modal pour la création en use client dans le page.tsx de / */}
          <Link href="/?show=true">
            <Button text="Ouvrir la modal" />
          </Link>
          <ul className="flex flex-col items-center">
            {userTasks &&
              userTasks.map((ut) => (
                <TaskCard
                  key={ut.id}
                  title={ut.title}
                  comment={ut.comment}
                  done={ut.done}
                />
              ))}
          </ul>
        </>
      )}
    </div>
  );
}
