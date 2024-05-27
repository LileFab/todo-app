import { Abril_Fatface } from "next/font/google";
import { currentUser } from "@clerk/nextjs/server";
import TaskCard from "./components/TaskCard";
import TaskObject from "./interfaces/TaskInterface";
import { getAllTasksByUserId, insertNewTask } from "./actions/taskActions";
import TestButton from "./components/testCompoent/TestButton";

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

export default async function Home() {
  const [user, userTasks]: [any, TaskObject[]] = await getData();

  return (
    <div className="pt-36 w-screen text-center">
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
          <TestButton text="Ajouter tâche de test" />
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
