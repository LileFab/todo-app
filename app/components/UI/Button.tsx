import { Abril_Fatface} from "next/font/google";

const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] })

const Button = ({text, type, size, onClick}: {text: string, type?: "button" | "submit" | "reset", size?: "text-sm" | "text-xl" | "text-lg", onClick?: () => void;}) => {
  return (
    <>
        <button onClick={onClick} type={type} className={`bg-hunter_green-600 rounded-xl ${abril.className} p-2 ${size} shadow-sm shadow-hunter_green-500`}>
            {text}
        </button>
    </>
  )
}

export default Button