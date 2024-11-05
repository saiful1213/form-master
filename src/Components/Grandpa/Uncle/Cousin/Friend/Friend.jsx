import { useContext } from "react";
import { GiftContext } from "../../../../../context/myContext";

const Friend = () => {
    const gift = useContext(GiftContext);

    return (
        <div className="border-2 border-amber-400 p-4 m-4 rounded-xl">
            <h1 className=''>Friend </h1>
            <p>has: {gift}</p>
        </div>
    )
}

export default Friend;