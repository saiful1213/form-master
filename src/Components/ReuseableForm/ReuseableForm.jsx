/* eslint-disable react/prop-types */

const ReuseableForm = ({ submitBtnText = 'Submit', handleSubmit, children }) => {

    const handleLocalForm = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
        }
        handleSubmit(data);
    }

    return (
        <div className="flex justify-center">
            <div>
                {/* <h1 className="text-center my-3 font-bold text-3xl">{formTitle}</h1> */}
                {children}
                <form className="border border-red-100 px-10 py-5 rounded-2xl" onSubmit={handleLocalForm}>
                    {/* name field */}
                    <input type="text" placeholder="enter your name" name="name" required
                        className="border border-red-400 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                    {/* email field */}
                    <input type="email" placeholder="enter your email" name="email" required
                        className="border border-red-400 mt-3 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                    {/* submit btn */}
                    <input type="submit" value={submitBtnText} className="border px-4 py-2 rounded-lg bg-amber-300 mt-3" />
                </form>
            </div>
        </div>
    )
}

export default ReuseableForm;