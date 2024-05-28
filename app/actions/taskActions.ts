"use server";

import { prisma } from "@/utils/prisma";
import TaskObject from "../interfaces/TaskInterface";

const getLastTaskPositionByUserId = async (_user_id: string) => {
  const lastPosTask: TaskObject | null = await prisma.task.findFirst({
    where: {
      user_id: _user_id,
    },
    orderBy: {
      position: "desc",
    },
  });

  return lastPosTask ? (lastPosTask.position as number) : 0;
};

export async function getAllTasksByUserId(_user_id: string) {
  const userTasks: TaskObject[] = await prisma.task.findMany({
    where: {
      user_id: _user_id,
    },
    orderBy: {
      position: "desc",
    },
  });

  return userTasks.length > 0
    ? (userTasks as TaskObject[])
    : ([] as TaskObject[]);
}

// A modif
export async function insertNewTask(task: TaskObject) {
  const newPos: number = (await getLastTaskPositionByUserId(task.user_id)) + 1;
  await prisma.task.create({
    data: {
      title: task.title,
      comment: task.comment,
      done: false,
      user_id: "user_2h40mbyqQWGB0L0edfBKLb7LAkN",
      position: newPos,
    },
  });
}
