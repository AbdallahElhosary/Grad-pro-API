import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotify";
import { sendMessageAction } from "../../redux/actions/adminAction";

const SendMessageHook = () => {
    const dispatch = useDispatch();

    // States
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(true);

    // Handlers
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    const onChangeBody = (e) => {
        setBody(e.target.value);
    };

    const onSendMessage = async (e) => {
        e.preventDefault();
        if (subject === "" || body === "") {
            notify("Please fill out both subject and body", "warn");
            return;
        }

        setLoading(true);

        await dispatch(sendMessageAction({
            subject,
            body
          }));

        setBody("");
        setSubject("");
        setLoading(false);
    };

    const res = useSelector((state) => state.admins.sendMessage); // تأكد من اسم الـ reducer الصحيح

    useEffect(() => {
        if (!loading) {
            if (res) {
                if (res.status === 200 || res.success) {
                    notify("Message sent successfully", "success");
                } else {
                    notify("Error sending message", "error");
                }
            }
        }
    }, [loading]);

    return [
        subject,
        body,
        onChangeSubject,
        onChangeBody,
        onSendMessage
    ];
};

export default SendMessageHook;
