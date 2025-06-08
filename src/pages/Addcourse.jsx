import { motion } from 'framer-motion';
import { Card, Button, Form, FormControl, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import { X } from 'lucide-react';
import MainTitle from '../components/MainTitle';
import AllDepartmentsPageHook from '../hook/department/get-all-departments';
import AddCourseHook from '../hook/course/add-new-course';
import { ToastContainer } from 'react-toastify';


export default function AddCourseForm() {

  const [courseName, onChangeName, courseCode, onChangeCode, coursePreRequest, onChangePreRequest
    , courseHours, onChangeHours
    , courseSemesters, onChangeSemesters
    , courseDepartments, onChangeDepartments
    , mandatoryCourse, onChangeMandatoryCourse, onAddCourse] = AddCourseHook()
  
  

  const [departments] = AllDepartmentsPageHook();

  console.log('====================================');
  console.log(departments);
  console.log('====================================');




  
  

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

            <div className="space-y-2">
              <FormLabel>Semesters</FormLabel>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((semester) => (
                  <motion.button
                    key={semester}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={onChangeSemesters}
                    value={semester}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors has-checked:bg-indigo-50 `}
                  >
                    Semester {semester}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <FormLabel>Prerequisites</FormLabel>
              <FormSelect
                onChange={onChangePreRequest}
              >
                <option value="">Select prerequisites</option>
                {coursePreRequest.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.code} - {course.name}
                  </option>
                ))}
              </FormSelect>
              <div className="flex flex-wrap gap-2 mt-2">
                {coursePreRequest.map((id) => {
                  const course = coursePreRequest.find(c => c.id === id);
                  return course ? (
                    <motion.div
                      key={id}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white"
                      whileTap={{ scale: 0.95 }}
                    >
                      {course.code}
                      <button
                        type="button"
                        onClick={onChangePreRequest}
                        className="ml-2 focus:outline-none"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  ) : null;
                })}
              </div>
            </div>

            <div className="space-y-2">
              <FormLabel>Departments</FormLabel>
              <div className="flex flex-wrap gap-2">
                {departments?.map((dept , index) => (
                  <motion.button
                    key={index}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={onChangeDepartments}
                    value={dept.nameOfDepartment}
                    className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${courseDepartments.includes(dept.nameOfDepartment)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                  >
                      {dept.nameOfDepartment }

                  </motion.button>
                ))}
              </div>
            </div>

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