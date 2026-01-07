import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faEllipsisV, faEnvelope, faPhone, faMapMarkerAlt, faCreditCard, faCalendar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Card, Form, InputGroup, Table, Badge, Dropdown, Modal } from '@themesberg/react-bootstrap';

export default () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const customers = [
    {
      id: "cus_1234",
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      totalSpent: "$1,245.00",
      orders: 8,
      status: "active",
      created: "2023-06-15",
      lastOrder: "2024-01-10"
    },
    {
      id: "cus_1235",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      totalSpent: "$3,450.00",
      orders: 15,
      status: "active",
      created: "2023-03-22",
      lastOrder: "2024-01-14"
    },
    {
      id: "cus_1236",
      name: "Michael Chen",
      email: "m.chen@example.com",
      phone: "+1 (555) 345-6789",
      location: "Los Angeles, CA",
      totalSpent: "$890.00",
      orders: 4,
      status: "active",
      created: "2023-09-10",
      lastOrder: "2024-01-08"
    },
    {
      id: "cus_1237",
      name: "Emily Davis",
      email: "emily.d@example.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      totalSpent: "$2,100.00",
      orders: 12,
      status: "inactive",
      created: "2022-11-05",
      lastOrder: "2023-12-20"
    },
    {
      id: "cus_1238",
      name: "David Wilson",
      email: "d.wilson@example.com",
      phone: "+1 (555) 567-8901",
      location: "Houston, TX",
      totalSpent: "$567.00",
      orders: 3,
      status: "active",
      created: "2023-12-01",
      lastOrder: "2024-01-12"
    },
    {
      id: "cus_1239",
      name: "Lisa Anderson",
      email: "lisa.a@example.com",
      phone: "+1 (555) 678-9012",
      location: "Seattle, WA",
      totalSpent: "$4,230.00",
      orders: 22,
      status: "active",
      created: "2022-08-18",
      lastOrder: "2024-01-15"
    },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div>
          <h4 className="mb-0">Customers</h4>
          <p className="text-muted mb-0">Manage your customer database and relationships.</p>
        </div>
        <Button variant="primary" size="sm" onClick={() => setShowAddModal(true)}>
          <FontAwesomeIcon icon={faPlus} className="me-2" /> Add Customer
        </Button>
      </div>

      <Row className="mb-4">
        <Col xs={12} md={4}>
          <Card className="bg-white shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="icon-shape bg-primary text-white rounded p-3">
                  <FontAwesomeIcon icon={faCreditCard} size="lg" />
                </div>
                <div className="ms-3">
                  <p className="text-muted mb-0">Total Customers</p>
                  <h4 className="mb-0">1,234</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="bg-white shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="icon-shape bg-secondary text-white rounded p-3">
                  <FontAwesomeIcon icon={faCalendar} size="lg" />
                </div>
                <div className="ms-3">
                  <p className="text-muted mb-0">New This Month</p>
                  <h4 className="mb-0">156</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="bg-white shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="icon-shape bg-dark text-white rounded p-3">
                  <FontAwesomeIcon icon={faCreditCard} size="lg" />
                </div>
                <div className="ms-3">
                  <p className="text-muted mb-0">Avg. Lifetime Value</p>
                  <h4 className="mb-0">$892.00</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="bg-white shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center flex-wrap">
          <h5 className="mb-0">All Customers</h5>
          <InputGroup style={{ maxWidth: "300px" }}>
            <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
            <Form.Control 
              placeholder="Search customers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover className="mb-0">
            <thead className="bg-light">
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Location</th>
                <th>Total Spent</th>
                <th>Orders</th>
                <th>Status</th>
                <th>Last Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-sm bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-3 fw-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <strong>{customer.name}</strong>
                        <br />
                        <code className="small text-muted">{customer.id}</code>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <FontAwesomeIcon icon={faEnvelope} className="me-2 text-muted" />
                      <a href={`mailto:${customer.email}`} className="text-decoration-none">{customer.email}</a>
                    </div>
                    <div className="mt-1">
                      <FontAwesomeIcon icon={faPhone} className="me-2 text-muted" />
                      <small className="text-muted">{customer.phone}</small>
                    </div>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-muted" />
                    {customer.location}
                  </td>
                  <td className="fw-bold">{customer.totalSpent}</td>
                  <td>{customer.orders}</td>
                  <td>
                    <Badge bg={customer.status === "active" ? "success" : "secondary"}>
                      {customer.status}
                    </Badge>
                  </td>
                  <td>{customer.lastOrder}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="link" size="sm" className="text-dark p-0">
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Send Email
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="text-danger">
                          <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="John" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Smith" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="john@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="+1 (555) 123-4567" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="San Francisco, CA" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setShowAddModal(false)}>Add Customer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

