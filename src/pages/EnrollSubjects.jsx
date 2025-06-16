"use client"

import { useState, useEffect } from "react"
import { Button, Card, Alert } from "react-bootstrap"
import { PlusCircle, Trash2, AlertCircle } from "lucide-react"
import MainTitle from "../components/MainTitle"
import GetAvailableRecomCoursesHook from "../hook/course/get-available-recom-courses-hook"

export default function EnrollSubjects() {
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const [totalHours, setTotalHours] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const [allAvalibleCourses, allRecomCourses, onEnroll] = GetAvailableRecomCoursesHook()

    useEffect(() => {
        const newTotalHours = selectedSubjects.reduce((sum, subject) => sum + subject.hoursOfCourse, 0)
        setTotalHours(newTotalHours)
        setError(
            newTotalHours > allAvalibleCourses?.maxHours ? `لا يمكن تجاوز ${allAvalibleCourses?.maxHours} ساعة معتمدة` : null,
        )
    }, [selectedSubjects, allAvalibleCourses?.maxHours])

    const addSubject = (subjectId) => {
        const subjectToAdd = allAvalibleCourses?.allAvaliableCourses?.find((s) => s.code === subjectId)
        if (subjectToAdd && !selectedSubjects.some((s) => s.code === subjectId)) {
            if (totalHours + subjectToAdd.hoursOfCourse <= allAvalibleCourses?.maxHours) {
                setSelectedSubjects([...selectedSubjects, subjectToAdd])
            } else {
                setError(`إضافة هذه المادة سيتجاوز الحد الأقصى ${allAvalibleCourses?.maxHours} ساعة`)
            }
        }
    }

    const handleEnroll = async () => {
        if (selectedSubjects.length === 0) {
            setError("الرجاء اختيار مادة واحدة على الأقل")
            return
        }
        setLoading(true)
        try {
            const courseIds = selectedSubjects.map((subject) => subject.code)
            await onEnroll(courseIds)
            setSelectedSubjects([])
            setError(null)
        } catch (err) {
            setError("حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى.")
        }
        setLoading(false)
    }

    const removeSubject = (subjectCode) => {
        setSelectedSubjects(selectedSubjects.filter((subject) => subject.code !== subjectCode))
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-dark">
            <MainTitle title="Enroll Subjects" />
            <main className="flex-grow container mx-auto px-4 py-6">
                <div className="mt-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>available courses</Card.Title>
                            <Card.Text> available hours : {allAvalibleCourses?.maxHours} Hours</Card.Text>
                            {allAvalibleCourses?.allAvaliableCourses.length > 0 ? (
                                <ul className="list-group">
                                    {allAvalibleCourses?.allAvaliableCourses.map((subject) => (
                                        <li key={subject.code} className="list-group-item d-flex justify-content-between">
                                            <span>
                                                {subject.code} - {subject.nameOfCourse} ({subject.hoursOfCourse} ساعات)
                                            </span>
                                            <Button
                                                className="hover:bg-blue-500 d-flex justify-center items-center"
                                                size="sm"
                                                onClick={() => addSubject(subject.code)}
                                                disabled={selectedSubjects.some((s) => s.code === subject.code)}
                                            >
                                                Add
                                                <PlusCircle className="h-4 w-4 mx-2" /> 
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>There is No Courses</p>
                            )}
                        </Card.Body>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Recommedtion Courses</Card.Title>
                            {allRecomCourses?.length > 0 ? (
                                <ul className="list-group">
                                    {allRecomCourses?.map((subject) => (
                                        <li key={subject.code} className="list-group-item d-flex justify-content-between">
                                            <span>
                                                {subject.code} - {subject.nameOfCourse} ({subject.hoursOfCourse} ساعات)
                                            </span>
                                            <Button
                                                className="hover:bg-blue-500 d-flex justify-center items-center"
                                                size="sm"
                                                onClick={() => addSubject(subject.code)}
                                                disabled={selectedSubjects.some((s) => s.code === subject.code)}
                                            >
                                                Add
                                                <PlusCircle className="h-4 w-4 mx-2" /> 
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>لا توجد توصيات متاحة حالياً.</p>
                            )}
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>المواد المختارة</Card.Title>
                            <Card.Text>
                                إجمالي الساعات: {totalHours} / {allAvalibleCourses?.maxHours}
                            </Card.Text>
                            {error && (
                                <Alert variant="danger" className="mb-4">
                                    <AlertCircle className="h-4 w-4 me-2" /> {error}
                                </Alert>
                            )}
                            <ul className="list-group mb-4">
                                {selectedSubjects.map((subject) => (
                                    <li key={subject.code} className="list-group-item d-flex justify-content-between">
                                        <span>
                                            {subject.code} - {subject.nameOfCourse} ({subject.hoursOfCourse} ساعات)
                                        </span>
                                        <Button variant="danger" size="sm" onClick={() => removeSubject(subject.code)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={handleEnroll}
                                disabled={loading || selectedSubjects.length === 0}
                            >
                                {loading ? "جاري التسجيل..." : "تسجيل المواد"}
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </main>
        </div>
    )
}
