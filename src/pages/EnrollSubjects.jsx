"use client"

import { useState, useEffect } from "react"
import { Button, Card, Alert } from "react-bootstrap"
import { PlusCircle, Trash2, AlertCircle } from "lucide-react"
import MainTitle from "../components/MainTitle"
import GetAvailableRecomCoursesHook from "../hook/course/get-available-recom-courses-hook"
import { ToastContainer } from "react-toastify"

export default function EnrollSubjects() {
    const [totalHours, setTotalHours] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const [allAvalibleCourses, allRecomCourses, onEnroll, selectedSubjects, setSelectedSubjects] = GetAvailableRecomCoursesHook()
    console.log(selectedSubjects)

    useEffect(() => {
        const newTotalHours = selectedSubjects.reduce((sum, subject) => sum + subject.hoursOfCourse, 0)
        setTotalHours(newTotalHours)
        setError(
            newTotalHours > allAvalibleCourses?.maxHours
                ? `You can't exceed ${allAvalibleCourses?.maxHours} credit hours`
                : null,
        )
    }, [selectedSubjects, allAvalibleCourses?.maxHours])

    const addSubject = (subjectId) => {
        const subjectToAdd = allAvalibleCourses?.allAvaliableCourses?.find((s) => s.code === subjectId)
        if (subjectToAdd && !selectedSubjects.some((s) => s.code === subjectId)) {
            if (totalHours + subjectToAdd.hoursOfCourse <= allAvalibleCourses?.maxHours) {
                setSelectedSubjects([...selectedSubjects, subjectToAdd])
            } else {
                setError(`Adding this subject will exceed the limit of ${allAvalibleCourses?.maxHours} credit hours`)
            }
        }
    }

    const handleEnroll = async () => {
        
        try {
            const courseIds = selectedSubjects.map((subject) => subject.code)
            await onEnroll(courseIds)
            setSelectedSubjects([])
            setError(null)
        } catch (err) {
            setError("An error occurred during enrollment. Please try again.")
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
                            <Card.Title>Available Courses</Card.Title>
                            <Card.Text>Available Hours: {allAvalibleCourses?.maxHours} Hours</Card.Text>
                            {allAvalibleCourses?.allAvaliableCourses?.length > 0 ? (
                                <ul className="list-group">
                                    {allAvalibleCourses.allAvaliableCourses.map((subject) => (
                                        <li key={subject.code} className="list-group-item d-flex justify-content-between">
                                            <span>
                                                {subject.code} - {subject.nameOfCourse} ({subject.hoursOfCourse} hours)
                                            </span>
                                            <Button
                                                className="hover:bg-blue-500 d-flex justify-center items-center"
                                                size="sm"
                                                onClick={() => addSubject(subject.code)}
                                                disabled={selectedSubjects.some((s) => s.code === subject.code)}
                                            >
                                                <PlusCircle className="h-4 w-4 me-2" /> Add
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No courses available for enrollment currently.</p>
                            )}
                        </Card.Body>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Recommended Courses</Card.Title>
                            <Card.Text>Based on your academic progress</Card.Text>
                            {allRecomCourses?.allAvaliableCourses?.length > 0 ? (
                                <ul className="list-group">
                                    {allRecomCourses.allAvaliableCourses.map((subject) => (
                                        <li key={subject.code} className="list-group-item d-flex justify-content-between">
                                            <span>
                                                {subject.code} - {subject.nameOfCourse} ({subject.hoursOfCourse} hours)
                                            </span>
                                            <Button
                                                className="hover:bg-blue-500 d-flex justify-center items-center"
                                                size="sm"
                                                onClick={() => addSubject(subject.code)}
                                                disabled={selectedSubjects.some((s) => s.code === subject.code)}
                                            >
                                                <PlusCircle className="h-4 w-4 me-2" /> Add
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No recommended courses available currently.</p>
                            )}
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Selected Courses</Card.Title>
                            <Card.Text>
                                Total Hours: {totalHours} / {allAvalibleCourses?.maxHours}
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
                                            {subject.code} - {subject.nameOfCourse} ({subject.hoursOfCourse} hours)
                                        </span>
                                        <Button variant="danger" size="sm" onClick={() => removeSubject(subject.code)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={onEnroll}
                                disabled={loading || selectedSubjects.length === 0}
                            >
                                {loading ? "Enrolling..." : "Enroll Now"}
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </main>
            <ToastContainer />
        </div>
    )
}
