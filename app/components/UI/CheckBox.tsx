import { Abril_Fatface } from "next/font/google";
const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });
import { FaCheck } from "react-icons/fa6";


const CheckBox = ({
  done,
  onClick,
}: {
  done: boolean;
  onClick?: () => void;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`bg-hunter_green-600 rounded-xl ${abril.className} px-2 py-1 shadow-sm shadow-hunter_green-500`}
      >
        {done ? "Annuler" : "Fait"}
      </button>
    </>
  );
};

export default CheckBox;
