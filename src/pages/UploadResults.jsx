import { Card, Form, Button } from 'react-bootstrap';
import { Upload, FileSpreadsheet } from 'lucide-react';
import MainTitle from '../components/MainTitle';
import UploadResultsHook from '../hook/results/update-results';
import { ToastContainer } from 'react-toastify';

export default function UploadResults() {

    const [file, onChangeFile, onUploadFile, loading] = UploadResultsHook()

    

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <MainTitle title="Upload Results" />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto">
                    <Card.Body>
                        <div className="text-center mb-6">
                            <FileSpreadsheet className="h-16 w-16 mx-auto text-blue-500 mb-2" />
                            <h2 className="text-xl font-semibold mb-2">Upload Results File</h2>
                            <p className="text-gray-600">
                                Upload your results file in Excel format
                            </p>
                        </div>

                        

                        <Form onSubmit={onUploadFile}>
                            <div className="mb-4">
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <Upload className="h-12 w-12 text-gray-400 mb-3" />
                                            <p className="mb-2 text-sm text-gray-500">
                                                <span className="font-semibold">Press To choose a file</span>  Or Drop a file Here
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Excel files only (.xlsx or .xls)
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept=".xlsx,.xls"
                                            onChange={onChangeFile}
                                        />
                                    </label>
                                </div>
                            </div>

                            {file && (
                                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-0">
                                        الملف المختار: {file.name}
                                    </p>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                disabled={!file || loading}
                            >
                                {loading ? 'جاري الرفع...' : 'رفع الملف'}
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </main>
            <ToastContainer />
        </div>
    );
}