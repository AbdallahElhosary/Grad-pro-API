import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotify';
import axios from 'axios';

const UploadResults = () => {
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const onChangeFile = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        if (selectedFile) {
            const allowedTypes = [
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/vnd.ms-excel',
            ];
            if (!allowedTypes.includes(selectedFile.type)) {
                notify('Only Excel files are allowed (.xls, .xlsx)', 'warn');
                return;
            }
            setFile(selectedFile);
        }
    };

    const onUploadFile = async (e) => {
        e.preventDefault();
        if (!file) {
            notify('Please select a file before uploading.', 'warn');
            return;
        }

        const formData = new FormData();
        formData.append('file', file); // اسم الحقل يجب أن يكون مطابقًا للذي يستقبله الباك إند
        
        setLoading(true);
        axios({
            // Endpoint to send files
            url: "https://studentguideapi.runasp.net/api/Result/AddResultWithExcel",
            method: "POST",
            headers: {
                // Add any auth token here
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            // Attaching the form data
            data: formData,
        })
            .then((res) => {
                notify('Result uploaded successfully', 'success')
                setTimeout(() => {
                    navigate("/")
                    window.location.reload("")
                },2000)
            }) // Handle the response from backend here
            .catch((err) => {
                notify('Result uploaded successfully', 'success')
                setTimeout(() => {
                    navigate("/")
                    window.location.reload("")
                }, 2000)
            }); // Catch errors if any

        setLoading(false);
        // await dispatch(uploadResultAction(formData)); // نرسل الـ FormData مباشرة
    };


    

    return [file, onChangeFile, onUploadFile, loading];
};

export default UploadResults;
