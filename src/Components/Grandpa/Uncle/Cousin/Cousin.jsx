/* eslint-disable react/prop-types */

import Special from "../../Father/MySelf/Special/Special";
import Friend from "./Friend/Friend";

const Cousin = ({ name, asset }) => {
    return (
        <div className="border-2 border-amber-400 p-4 m-4 rounded-xl">
            <h1 className=''>Cousin {name}</h1>
            {asset && <Special asset={asset}></Special>}
            {name === 'Rubaya' && <Friend></Friend>}
        </div>
    )
}

export default Cousin;