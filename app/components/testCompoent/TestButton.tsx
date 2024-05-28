"use client";

import { Abril_Fatface } from "next/font/google";
import { insertNewTask } from "@/app/actions/taskActions";

// faire une modal pour la création en use client dans le page.tsx de /

const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

const TestButton = ({
  text,
  type,
  size,
  onClick,
}: {
  text: string;
  type?: "button" | "submit" | "reset";
  size?: "text-sm" | "text-xl" | "text-lg";
  onClick?: () => void;
}) => {
  const addNewTask = async () => {
    if (true) {
      insertNewTask({
        id: null, // Exemple d'ObjectId
        title: "Nouvelle tâche",
        comment: "Commentaire exemple", // Optionnel, peut être null ou omis
        done: false,
        user_id: "user?.id", // Exemple d'ObjectId pour l'utilisateur
        creation_date: new Date(), // Date actuelle
        position: null,
      });
    } else {
      console.log("User non connecté");
    }
  };

  return (
    <>
      <button
        onClick={addNewTask}
        type={type}
        className={`bg-hunter_green-600 rounded-xl ${abril.className} p-2 ${size} shadow-sm shadow-hunter_green-500`}
      >
        {text}
      </button>
    </>
  );
};

export default TestButton;
