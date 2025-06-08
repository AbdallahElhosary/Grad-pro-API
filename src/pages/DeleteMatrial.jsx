
import { useState } from "react"
import { Container, Form, Table } from "react-bootstrap"
import { Search } from "lucide-react"
import AllMatrialPageHook from "../hook/matrial/all-matrial-data";
import MatrialDeleteItem from "../components/MatrialDeleteItem";
import { ToastContainer } from 'react-toastify'
import MainTitle from "../components/MainTitle"
export default function DeleteMaterial() {
    const [searchTerm, setSearchTerm] = useState("")

    const [allMatrial] = AllMatrialPageHook();
    

    // Filter materials based on search term

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">

            <MainTitle title="Delete Material" />
            <Container className="py-4">
                <div className="mb-4 position-relative">
                    <Form.Control
                        type="text"
                        placeholder="Search by material name, code or doctor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="ps-4"
                    />
                    <Search className="position-absolute" style={{ top: "10px", left: "5px", color: "#6c757d" }} size={18} />
                </div>

                <div className="bg-light rounded p-3">
                    <Table responsive hover className="mb-0" style={{ minWidth: "676px", }}>
                        <thead>
                            <tr>
                                <th>Material Name</th>
                                <th>Doctor Name</th>
                                <th>Code</th>
                                <th>Links</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allMatrial.totalCount > 0 ? allMatrial.materials.map((item) => {
                                    return (
                                        <MatrialDeleteItem

                                            id={item.id}
                                            name={item.name}
                                            materialCode={item.materialCode}
                                            instructor={item.instructor}
                                            youtube={item.youtubeLink && item.youtubeLink}
                                            drive={item.driveLink && item.driveLink}
                                        />
                                    )
                                }) : <tr className="fw-bold fs-5 d-flex justify-center pt-2">No Matrial Founded</tr>
                            }

                        </tbody>
                    </Table>
                </div>

                <ToastContainer />

            </Container>
        </div>
    )
}
