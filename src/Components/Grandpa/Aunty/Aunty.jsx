import { useContext } from "react";
import Cousin from "../Uncle/Cousin/Cousin";
import { MoneyContext } from "../../../context/myContext";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div className="border-2 border-amber-400 p-4 m-4 rounded-xl">
            <h1 className="text-center">Aunty</h1>
            <div className="flex gap-5">
                <Cousin name={'Nikita'}></Cousin>
                <Cousin name={'Rubaya'}></Cousin>
            </div>
            <p className="text-center">Money: {money}</p>
            <button
                onClick={() => setMoney(money + 1000)}
                className="mx-auto flex justify-center py-2 px-4 my-3 rounded-md hover:bg-orange-400 bg-orange-300 w-max">
                Add Money
            </button>
        </div>
    )
}

export default Aunty;