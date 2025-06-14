import { useState } from "react"
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap"
import { Search, SortAsc, SortDesc } from "lucide-react"
import AllCoursesPageHook from "../hook/course/all-courses-hoot"
import CourseCompun from "../components/CourseCompun"
import { ToastContainer } from "react-toastify"
import Paginate from "../components/utils/Pagenation/Pagenation"

const CourseManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortDirection, setSortDirection] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 10

  // مثال ثابت للأقسام (يفضل لاحقًا تجيبهم من hook أو API)
  const [departments] = useState([
    { departmentCode: "AI", nameOfDepartment: "Artificial Intelligence" },
    { departmentCode: "CS", nameOfDepartment: "Computer Science" },
    { departmentCode: "HM", nameOfDepartment: "Humanities" },
  ])

  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")

  const [courses] = AllCoursesPageHook()

  const filteredCourses = courses?.filter((course) => {
    const matchesSearch =
      course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(course.hoursOfCourse)?.includes(searchTerm)

    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      course.departmentIds?.includes(selectedDepartment)

    return matchesSearch && matchesDepartment
  }) || []

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.nameOfCourse.localeCompare(b.nameOfCourse)
    } else {
      return b.nameOfCourse.localeCompare(a.nameOfCourse)
    }
  })

  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 mb-0">University Courses</h1>
          <p className="lead text-muted">Browse and discover courses for the current semester</p>
        </Col>
      </Row>

      <Row className="mb-4 align-items-center">
        <Col md={4} className="mb-3 mb-md-0">
          <InputGroup>
            <InputGroup.Text>
              <Search size={18} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search by name, code, or hours"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>

        <Col md={4}>
          <Form.Select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="All Departments">All Departments</option>
            {departments.map((dep) => (
              <option key={dep.departmentCode} value={dep.departmentCode}>
                {dep.nameOfDepartment}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={4}>
          <Button
            variant="outline-secondary"
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={toggleSortDirection}
          >
            {sortDirection === "asc" ? (
              <>
                Sort <SortAsc size={18} className="ms-2" />
              </>
            ) : (
              <>
                Sort <SortDesc size={18} className="ms-2" />
              </>
            )}
          </Button>
        </Col>
      </Row>

      {/* Courses Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>Hours</th>
              <th>Departments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses?.length > 0 ? (
              currentCourses.map((course) => (
                <CourseCompun key={course.code} course={course} departments={departments} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  <h4>No courses match your search criteria</h4>
                  <p className="mb-0">Try adjusting your search or filters</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <Paginate pageCount={totalPages} onPress={handlePageChange} />
      )}

      <Row className="mt-4">
        <Col>
          <p className="text-muted">
            Showing {currentCourses.length} of {sortedCourses.length} courses
            {selectedDepartment !== "All Departments" && ` in ${selectedDepartment}`}
          </p>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  )
}

export default CourseManagementPage
