'use client';

import { useState, useEffect } from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { PlusCircle, Trash2, AlertCircle } from 'lucide-react';
import MainTitle from '../components/MainTitle';

const subjectOptions = [
    { id: '1', code: 'MATH101', name: 'Mathematics I', hours: 3, prerequisites: [] },
    { id: '2', code: 'PHYS101', name: 'Physics I', hours: 4, prerequisites: [] },
    { id: '3', code: 'COMP101', name: 'Introduction to Computer Science', hours: 3, prerequisites: [] },
    { id: '4', code: 'ENG101', name: 'English Composition', hours: 2, prerequisites: [] },
    { id: '5', code: 'HIST101', name: 'World History', hours: 3, prerequisites: [] },
    { id: '6', code: 'CHEM101', name: 'Chemistry I', hours: 4, prerequisites: [] },
    { id: '7', code: 'BIO101', name: 'Biology I', hours: 3, prerequisites: [] },
    { id: '8', code: 'ECON101', name: 'Principles of Economics', hours: 3, prerequisites: [] },
    { id: '9', code: 'MATH201', name: 'Mathematics II', hours: 3, prerequisites: ['MATH101'] },
    { id: '10', code: 'PHYS201', name: 'Physics II', hours: 4, prerequisites: ['PHYS101'] },
    { id: '11', code: 'COMP201', name: 'Data Structures', hours: 3, prerequisites: ['COMP101'] },
    { id: '12', code: 'CHEM201', name: 'Chemistry II', hours: 4, prerequisites: ['CHEM101'] },
];

export default function EnrollSubjects() {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [totalHours, setTotalHours] = useState(0);
    const [error, setError] = useState(null);
    const [recommendedSubjects, setRecommendedSubjects] = useState([]);

    useEffect(() => {
        const newTotalHours = selectedSubjects.reduce((sum, subject) => sum + subject.hours, 0);
        setTotalHours(newTotalHours);
        setError(newTotalHours > 18 ? 'Total hours cannot exceed 18' : null);

        const selectedCodes = selectedSubjects.map(s => s.code);
        const newRecommendedSubjects = subjectOptions.filter(subject =>
            !selectedCodes.includes(subject.code) &&
            subject.prerequisites.every(prereq => selectedCodes.includes(prereq))
        );
        setRecommendedSubjects(newRecommendedSubjects);
    }, [selectedSubjects]);

    const addSubject = (subjectId) => {
        const subjectToAdd = subjectOptions.find(s => s.id === subjectId);
        if (subjectToAdd && !selectedSubjects.some(s => s.id === subjectId)) {
            if (totalHours + subjectToAdd.hours <= 18) {
                setSelectedSubjects([...selectedSubjects, subjectToAdd]);
            } else {
                setError('Adding this subject would exceed the 18-hour limit');
            }
        }
    };

    const removeSubject = (subjectId) => {
        setSelectedSubjects(selectedSubjects.filter(subject => subject.id !== subjectId));
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-dark">
            <MainTitle title="Subject Selection" />
            <main className="flex-grow container mx-auto px-4 py-6">
                <div className="mt-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Available Subjects</Card.Title>
                            <Card.Text>Based on your current selection</Card.Text>
                            {recommendedSubjects.length > 0 ? (
                                <ul className="list-group">
                                    {recommendedSubjects.map((subject) => (
                                        <li key={subject.id} className="list-group-item d-flex justify-content-between">
                                            <span>{subject.code} - {subject.name} ({subject.hours} hours)</span>
                                            <Button className='hover:bg-blue-500 d-flex justify-center items-center' size="sm" onClick={() => addSubject(subject.id)}>
                                                <PlusCircle className="h-4 w-4 me-2" /> Add
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No recommendations available based on your current selection.</p>
                            )}
                        </Card.Body>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Recommended Subjects</Card.Title>
                            <Card.Text>Select subjects for your semester (Max 18 hours)</Card.Text>
                            <Form.Select onChange={(e) => addSubject(e.target.value)}>
                                <option>Select a subject</option>
                                {subjectOptions.map((subject) => (
                                    <option key={subject.id} value={subject.id}>
                                        {subject.code} - {subject.name} ({subject.hours} hours)
                                    </option>
                                ))}
                            </Form.Select>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Selected Subjects</Card.Title>
                            <Card.Text>Total Hours: {totalHours} / 18</Card.Text>
                            {error && (
                                <Alert variant="danger" className="mb-4">
                                    <AlertCircle className="h-4 w-4 me-2" /> {error}
                                </Alert>
                            )}
                            <ul className="list-group">
                                {selectedSubjects.map((subject) => (
                                    <li key={subject.id} className="list-group-item d-flex justify-content-between">
                                        <span>{subject.code} - {subject.name} ({subject.hours} hours)</span>
                                        <Button variant="danger" size="sm" onClick={() => removeSubject(subject.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
            </main>
        </div>
    );
}
