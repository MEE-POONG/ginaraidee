import Navbar from "../components/Navbar";

function Login() {
    const router = useRouter();
}

export default function Signin() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto max-w-lg py-5">
                <div className="px-4 flex-auto">

                    <div className="py-5 block">
                        <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white">
                            <form className="w-full max-w-lg">
                                <div className="py-5 text-center">
                                    <h1 className="text-2xl bg-shadow block uppercase tracking-wide font-bold">Signin admin</h1>
                                </div>
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                        Username
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                                </div>
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                        Password
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                                </div>
                                <div className="py-5 text-center my-4">
                                    <button
                                        className="bg-yellow-400 uppercase tracking-wide hover:shadow-lg text-white font-bold py-2 px-4 rounded">
                                        signin
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

