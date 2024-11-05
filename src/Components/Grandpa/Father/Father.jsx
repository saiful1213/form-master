import Brother from "./Brother/Brother";
import MySelf from "./MySelf/MySelf";
import Sister from "./Sister/Sister";

const Father = ({asset}) => {
    return (
        <div className="border-2 border-amber-400 p-4 m-4 rounded-xl">
            <h1 className="text-center">Father</h1>
            <div className="flex justify-between gap-5">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    )
}

export default Father;