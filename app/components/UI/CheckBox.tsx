const CheckBox = ({done, onClick}: {done: boolean, onClick?: () => void;}) => {
  return (
    <>
        <button onClick={onClick} type="button" className={`bg-hunter_green-600 rounded-xl p-2  shadow-sm shadow-hunter_green-500`}>
            {done ? "Annuler" : "Fait"}
        </button>
    </>
  )
}

export default CheckBox