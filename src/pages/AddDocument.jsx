import { FaYoutubeSquare, FaGoogleDrive } from "react-icons/fa";
import MainTitle from "../components/MainTitle";
import AddMatrialsHook from "../hook/matrial/add-matrial-hook";
import { ToastContainer } from "react-toastify";
import AddDocumentHook from "../hook/documents/add-document";



function AddDocument() {

    const [documentName, onChangeName, documentLink, onChangeCode, onAddDocument] = AddDocumentHook()




    return (
        <div className="min-h-screen  flex-col bg-gray-100">
            <MainTitle title="Add Document" />

            <div className="flex justify-center items-center  bg-gray-100 w-5/6 m-auto py-4">
                <div className=" mx-auto bg-white p-6 rounded-2xl shadow-md w-5/6 ">
                    <form onSubmit={onAddDocument}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Document Name</label>
                            <input
                                type="text"
                                name="materialName"
                                value={documentName}
                                onChange={onChangeName}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter material name"
                            />
                        </div>
                        
                        
                        <div className="mb-4">
                            <label className="block text-gray-700"> Link</label>
                            <div className="relative">
                                <FaYoutubeSquare className="absolute left-1 top-3 text-gray-500" />
                                <input
                                    type="url"
                                    name="youtubeLink"
                                    value={documentLink}
                                    onChange={onChangeCode}
                                    className="w-full p-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="https://www.youtube.com/..."
                                />
                            </div>
                        </div>
                        
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                            Add Docuemnt
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer />

        </div>

    );
}

export default AddDocument;