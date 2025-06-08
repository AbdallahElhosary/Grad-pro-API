import { useState } from "react"
import { Container, Row, Col, Form, InputGroup, Button, Pagination } from "react-bootstrap"
import { Search,   Filter, SortAsc, SortDesc } from "lucide-react"
import AllCoursesPageHook from "../hook/course/all-courses-hoot"
import CourseCompun from "../components/CourseCompun"
import { ToastContainer } from "react-toastify"


const CourseManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortDirection, setSortDirection] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 3

  // const [departments] = AllDepartmentsPageHook()
  const [courses] = AllCoursesPageHook()

  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")

  // Filter courses based on search term and department
  const filteredCourses = courses?.filter((course) => {
    const matchesSearch =
      course.nameOfCourse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = selectedDepartment === "All Departments" ||
      course.departmentIds?.includes(selectedDepartment)

    return matchesSearch && matchesDepartment
  }) || []

  // Sort courses by name
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.nameOfCourse.localeCompare(b.nameOfCourse)
    } else {
      return b.nameOfCourse.localeCompare(a.nameOfCourse)
    }
  })

  // Pagination
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
      {/* Header Section */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 mb-0">University Courses</h1>
          <p className="lead text-muted">Browse and discover courses for the current semester</p>
        </Col>
      </Row>

      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <InputGroup>
            <InputGroup.Text>
              <Search size={18} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search by course name, code, or instructor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        
        <Col md={2}>
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
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.length > 0 ? (
              currentCourses.map((course) => (
                <CourseCompun key={Math.random()} course={course} />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  <h4>No courses match your search criteria</h4>
                  <p className="mb-0">Try adjusting your search or filters</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {sortedCourses.length > coursesPerPage && (
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />

              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>
      )}

      {/* Summary */}
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
