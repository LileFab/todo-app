"use client";

import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

function Modal() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      >
        <div className="bg-timberwolf-600 w-2/3 h-2/4 flex flex-col justify-center items-center bg-opacity-100 shadow-lg shadow-timberwolf-100 rounded-lg">
          <h3 className="text-black">Modal content</h3>{" "}
          {/* Utilisation de `text-black` pour meilleure lisibilité sur fond clair */}
          <br />
          <Link href={"/"}>
            <Button text="Close modal" />
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default Modal;
