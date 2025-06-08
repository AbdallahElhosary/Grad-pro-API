import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import DelteMatrialHook from '../hook/matrial/delete-matrial'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const MatrialDeleteItem = ({ id, name, materialCode, instructor, youtube, drive }) => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [onDelete, onUpdate] = DelteMatrialHook(id)


    return (
        <>

            <tr key={id}>
                <td>{name}</td>
                <td>{instructor}</td>
                <td>{materialCode}</td>
                <td>
                    <a href={youtube} target='_blank' className="text-decoration-none me-2" style={{ color: "#FF0000" }} rel="noreferrer">
                        YouTube
                    </a>
                    <a href={drive} target='_blank' className="text-decoration-none" style={{ color: "#4285F4" }} rel="noreferrer">
                        Drive
                    </a>
                </td>
                <td className="text-end gap-2">

                    <Button variant="danger" className='d-inline-flex align-items-center p-1 mr-2' onClick={handleShow}>
                        <Trash2 size={16} className="me-1" />
                        Delete
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Item Deleting</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are You Sure , you want to delete the Item ? </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={() => onDelete(id)}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Button variant="warning" className='d-inline-flex align-items-center px-2 py-1' onClick={handleShowEdit}>
                        <Trash2 size={16} className="me-1" />
                        Edit
                    </Button>

                    <Modal show={showEdit} onHide={handleCloseEdit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Item Editing</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Row className="mb-3">

                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue={name}
                                        />

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>Instructor Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="instractor name"
                                            defaultValue={instructor}
                                        />

                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label>Code</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Enter Code"
                                            defaultValue={materialCode}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Youtube Link</Form.Label>
                                        <Form.Control
                                            required
                                            type="link"
                                            placeholder="Youtube Link"
                                            defaultValue={youtube}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Drive Link</Form.Label>
                                        <Form.Control
                                            required
                                            type="link"
                                            placeholder="Drive Link"
                                            defaultValue={drive}
                                        />
                                    </Form.Group>


                                </Row>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEdit}>
                                Close
                            </Button>
                            <Button variant="warning" onClick={() => onUpdate()}>
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </td>


            </tr>
        </>
    )
}

export default MatrialDeleteItem
