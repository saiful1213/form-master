import Special from "./Special/Special";

const MySelf = ({asset}) => {
    return (
        <div className="border-2 border-amber-400 p-4 m-4 rounded-xl">
            <h1 className='text-center'>MySelf </h1>
            <Special asset={asset}></Special>
        </div>
    )
}

export default MySelf;