import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState();
    const [email, handleEmailChangle] = useInputState();

    const handleForm = e => {
        e.preventDefault();
        console.log(name, email)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="border border-red-100 px-10 py-5 rounded-2xl" onSubmit={handleForm}>
                {/* name field */}
                <input type="text" placeholder="enter your name" name="name" required
                    onChange={handleNameChange}
                    className="border border-red-400 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                {/* email field */}
                <input type="email" placeholder="enter your email" name="email" required
                    onChange={handleEmailChangle}
                    className="border border-red-400 mt-3 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                {/* submit button */}
                <input type="submit" value="Submit" className="border px-4 py-2 rounded-lg bg-amber-300 mt-3" />
            </form>
        </div>
    )
}

export default HookForm;