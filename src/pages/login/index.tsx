import { NextPage } from "next"

const LoginPage: NextPage = () => {

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex justify-evenly items-center flex-col h-80 w-80 border rounded">
                <div className="flex flex-col">
                    <label htmlFor="user">Username</label>
                    <input type="text" id="user"className="border rounded"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" className="border rounded"/>
                </div>
                <button className="border rounded">Submit</button>
            </div>
        </div>
    )
}

export default LoginPage;