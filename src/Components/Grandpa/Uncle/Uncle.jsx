import Cousin from "./Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div className="border-2 border-amber-400 p-4 m-4 rounded-xl">
            <h1 className="text-center">Uncle</h1>
            <div className="flex justify-between gap-5">
                <Cousin name={'Rakib'} asset={asset}></Cousin>
                <Cousin name={'Rubina'}></Cousin>
            </div>
        </div>
    )
}

export default Uncle;