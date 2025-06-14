import React from 'react'
import { Container, Row, Col, Form, InputGroup, Button, Badge, Pagination } from "react-bootstrap"
import { Search, Clock, Filter, SortAsc, SortDesc, CircleAlert } from "lucide-react"
import DeleteUpdateCourseHook from '../hook/course/delete-update-hook'
const CourseCompun = ({ course }) => {
    

    const [onDelete, onUpdate] = DeleteUpdateCourseHook()
  return (
      <tr key={course.id}>
          <td className="fw-bold">{course.code}</td>
          <td>{course.nameOfCourse}</td>
          <td>
              <div className="d-flex align-items-center">
                  <Clock size={16} className="me-2 text-primary" />
                  {course.hoursOfCourse}
              </div>
          </td>

          
          <td>
              <div className="d-flex align-items-center">
                  <CircleAlert size={16} className="me-2 text-primary" />
                  {course.mandatoryCourse ? "Mandatory" : "Optional"}
              </div>
          </td>
          <td>
              <Button variant="danger" size="sm" className="me-2" onClick={() => onDelete(course.code)}>Delete</Button>
              <Button variant="warning" size="sm">Edit</Button>
          </td>
      </tr>
  )
}

export default CourseCompun

