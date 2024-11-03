import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState('Saiful Islam');
    const [email, setEmail] = useState('saifulislamptcbd@gmail.com');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 charecters or longer')
        }
        else {
            setError('');
            console.log(name, email, password);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="border border-red-100 px-10 py-5 rounded-2xl" onSubmit={handleFormSubmit}>
                {/* name field */}
                <input type="text" placeholder="enter your name" name="name" required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-red-400 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                {/* email field */}
                <input type="email" placeholder="enter your email" name="email" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-red-400 mt-3 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                {/* password field */}
                <input type="password" placeholder="enter your password" name="password" required
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-red-400 mt-3 focus:outline-red-500 rounded-lg px-2 py-1" /><br />
                {/* submit btn */}
                <input type="submit" value="Submit" className="border px-4 py-2 rounded-lg bg-amber-300 mt-3" />
                {
                    error && <p className="text-red-500 font-medium">{error}</p>
                }
            </form>
        </div>
    )
}

export default StatefulForm;