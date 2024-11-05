import {  useState } from "react";
import Aunty from "./Aunty/Aunty";
import Father from "./Father/Father";
import Uncle from "./Uncle/Uncle";
import { GiftContext, MoneyContext } from "../../context/myContext";

const Grandpa = () => {
    const [money, setMoney] = useState(1000);

    const asset = 'diamond';
    const gift = 'gold';

    return (
        <div className="border-2 border-amber-400 p-4 rounded-xl">
            <h1 className="text-center">Grandpa</h1>
            <p className="text-center">Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <GiftContext.Provider value={gift}>
                    <div className="flex justify-between">
                        <Father asset={asset}></Father>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </div>
                </GiftContext.Provider>
            </MoneyContext.Provider>
        </div>
    )
}

export default Grandpa;