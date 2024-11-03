import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="border border-red-100 px-10 py-5 rounded-2xl" onSubmit={handleFormSubmit}>
                {/* name field */}
                <input type="text" placeholder="enter your name" name="name" required
                    ref={nameRef}
                    className="border border-red-400 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                {/* email field */}
                <input type="email" placeholder="enter your email" name="email" required
                    ref={emailRef} defaultValue={'saifulislamptcbd@gmail.com'}
                    className="border border-red-400 mt-3 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                {/* password field */}
                <input type="password" placeholder="enter your password" name="password" required
                    ref={passwordRef}
                    className="border border-red-400 mt-3 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                {/* submit btn */}
                <input type="submit" value="Submit" className="border px-4 py-2 rounded-lg bg-amber-300 mt-3" />
            </form>
        </div>
    )
}

export default RefForm;