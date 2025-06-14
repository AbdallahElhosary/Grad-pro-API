import { motion } from 'framer-motion';
import { Card, Button, Form, FormControl, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import { X } from 'lucide-react';
import MainTitle from '../components/MainTitle';
import AllDepartmentsPageHook from '../hook/department/get-all-departments';
import AddCourseHook from '../hook/course/add-new-course';
import { ToastContainer } from 'react-toastify';
import Multiselect from 'multiselect-react-dropdown';


export default function AddCourseForm() {

  const [courses,courseName, onChangeName, courseCode, onChangeCode, coursePreRequest, onChangePreRequest
    , courseHours, onChangeHours
    , courseSemesters, onChangeSemesters
    , courseDepartments, onChangeDepartments
    , mandatoryCourse, onChangeMandatoryCourse, onAddCourse,  onSelectPreRequest, onSelectSemester, onSelectDepartments] = AddCourseHook()
  
  

  const [departments] = AllDepartmentsPageHook();


  let coursesCodes = []
  if (courses) {
    coursesCodes = courses.map(c => c.code)
  }
  

  let Arr = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
  ]




  
  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <MainTitle title="Add Course" />
      <Card className="max-w-2xl mx-auto bg-white border-gray-300">
        <Card.Header>
          <Card.Title className="text-2xl">Add New Course</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={onAddCourse} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <FormLabel>Course Name</FormLabel>
                <FormControl
                  type="text"
                  value={courseName}
                  onChange={onChangeName}
                  placeholder="Enter course name"
                  required
                />
              </div>

              <div className="space-y-2">
                <FormLabel>Course Code</FormLabel>
                <FormControl
                  type="text"
                  value={courseCode}
                  onChange={onChangeCode}
                  placeholder="Enter course code"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <FormLabel>Number of Hours</FormLabel>
              <FormControl
                type="number"
                min={1}
                max={3}
                value={courseHours}
                onChange={onChangeHours}
                className="w-full md:w-1/4"
                placeholder="Hours"
                required
              />
              {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
            </div>

            <Multiselect
              className="mt-2"
              placeholder="Pre-Required Courses"
              options={courses}
              displayValue="code"
              onKeyPressFn={function noRefCheck() { }}
              onRemove={function noRefCheck() { }}
              onSearch={function noRefCheck() { }}
              onSelect={onSelectPreRequest}
              showArrow={true}
              style={{ color: "red" }}
            />

            <Multiselect
              className="mt-2"
              placeholder="Semesters"
              options={[
                { nameOfSemester: "Semester 1" },
                { nameOfSemester: "Semester 2" },
                { nameOfSemester: "Semester 3" },
                { nameOfSemester: "Semester 4" },
                { nameOfSemester: "Semester 5" },
                { nameOfSemester: "Semester 6" },
                { nameOfSemester: "Semester 7" },
                { nameOfSemester: "Semester 8" },
              ]}
              displayValue="nameOfSemester"
              onKeyPressFn={function noRefCheck() { }}
              onRemove={function noRefCheck() { }}
              onSearch={function noRefCheck() { }}
              onSelect={onSelectSemester}
              showArrow={true}
              style={{ color: "red" }}
            />


            <Multiselect
              className="mt-2"
              placeholder="Departments"
              options={departments}
              displayValue="nameOfDepartment"
              onKeyPressFn={function noRefCheck() { }}
              onRemove={function noRefCheck() { }}
              onSearch={function noRefCheck() { }}
              onSelect={onSelectDepartments}
              showArrow={true}
              style={{ color: "red" }}
            />

            

            

            <div className="flex items-center space-x-2">
              <FormCheck
                id="isImportant"
                checked={mandatoryCourse}
                onChange={onChangeMandatoryCourse}
                className="text-blue-500"
              />
              <FormLabel
                htmlFor="isImportant"
                className="text-sm mb-0 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                This course is important
              </FormLabel>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add Course
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <ToastContainer />
    </div>
  );
}