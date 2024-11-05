import { useContext } from "react";
import { MoneyContext } from "../../../../context/myContext";

const Brother = () => {
    const [money] = useContext(MoneyContext);

    return (
        <div className="border-2 border-amber-400 p-4 m-4 rounded-xl">
            <h1 className=''>Brother </h1>
            <p>Money: {money}</p>
        </div>
    )
}

export default Brother;