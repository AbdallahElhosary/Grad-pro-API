import { FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import MainTitle from "../components/MainTitle";

const studentActivities = [
    {
        name: "GDG Benha",
        links: [
            "https://web.facebook.com/GDGonCampusBenhaUniversity",
            "https://gdg.community.dev/gdg-on-campus-benha-university-benha-egypt/"
        ]
    },
    {
        name: "IEEE",
        links: [
            "https://web.facebook.com/IEEE.BUB.SB",
            "https://www.ieee-bub.org/who-are-we"
        ]
    },
    {
        name: "Student Union - Faculty of Computers and Artificial Intelligence",
        links: [
            "https://web.facebook.com/search/top?q=%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%20%D8%B7%D9%84%D8%A7%D8%A8%20%D9%83%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%89%20%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A8%D9%86%D9%87%D8%A7-bfcai"
        ]
    },
    {
        name: "Creativa Hub Benha",
        links: [
            "https://web.facebook.com/creativabenha"
        ]
    }
];

export default function StudentActivities() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-12">
            <MainTitle title="Student Activities" />

            <div className="flex flex-wrap justify-center gap-6 py-6 px-4">
                {studentActivities.map((activity, index) => (
                    <div key={index} className="w-80 p-6 text-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{activity.name}</h3>

                        <div className="flex justify-center flex-wrap gap-3 mb-4">
                            {activity.links.map((link, idx) => {
                                const getIcon = (url) => {
                                    if (url.includes("facebook.com")) return <FaFacebook />;
                                    if (url.includes("twitter.com")) return <FaTwitter />;
                                    if (url.includes("instagram.com")) return <FaInstagram />;
                                    if (url.includes("linkedin.com")) return <FaLinkedin />;
                                    if (url.includes("youtube.com")) return <FaYoutube />;
                                    return <FaGlobe />;
                                };

                                return (
                                    <a
                                        key={idx}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-600 p-3 rounded-full transition duration-200"
                                    >
                                        {getIcon(link)}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Only show Visit Website if activity.website exists */}
                        {activity.website && (
                            <a
                                href={activity.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
                            >
                                <FaGlobe className="w-5 h-5" />
                                Visit Website
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
