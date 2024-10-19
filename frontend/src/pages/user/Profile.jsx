import { useAuth } from "../../contexts/AuthContext";

function Profile() {
    const { profile } = useAuth();
    console.log(profile); // For debugging

    return (
        <section className="text-gray-600 body-font bg-gray-100 overflow-hidden">
            <div className="container mx-auto px-5 py-24">
                <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
                    <img
                        alt="Profile"
                        className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded-full border-4 border-blue-500 shadow-lg"
                        src={profile?.profilePhoto || "/path/to/default/profile.jpg"}
                    />
                    <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-blue-600 text-5xl title-font font-bold mb-4 text-center">Profile</h1>
                        <div className="mt-6 p-6 rounded-lg bg-white border border-blue-200 shadow-md mb-5">
                            <h2 className="text-xl mb-2 text-blue-600 font-semibold">Username: <span className="text-gray-700">{profile?.username}</span></h2>
                            <h2 className="text-xl mb-2 text-blue-600 font-semibold">Email: <span className="text-gray-700">{profile?.email}</span></h2>
                            <h2 className="text-xl mb-2 text-blue-600 font-semibold">Address: <span className="text-gray-700">{profile?.address}</span></h2>
                            <h2 className="text-xl mb-2 text-blue-600 font-semibold">Contact: <span className="text-gray-700">{profile?.contact}</span></h2>
                            <h2 className="text-xl mb-2 text-blue-600 font-semibold">Role: <span className="text-gray-700">{profile?.role}</span></h2>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-white bg-blue-600 hover:bg-blue-700 text-2xl border border-blue-600 py-2 px-6 focus:outline-none hover:text-blue-200 rounded shadow">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
