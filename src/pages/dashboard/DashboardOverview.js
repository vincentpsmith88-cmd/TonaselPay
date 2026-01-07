import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faDollarSign, faChartLine, faCalendar, faSearch, faCheckCircle, faTimesCircle, faClock, faPlus, faCode, faKey, faPlug, faBook, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Card, Form, InputGroup, Table, Badge, Nav, Tab } from '@themesberg/react-bootstrap';

export default () => {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentEmail, setPaymentEmail] = useState("");

  const recentPayments = [
    { id: "pi_1234", email: "john@example.com", amount: "$125.00", status: "succeeded", date: "2024-01-15" },
    { id: "pi_1235", email: "jane@example.com", amount: "$89.00", status: "succeeded", date: "2024-01-15" },
    { id: "pi_1236", email: "bob@example.com", amount: "$250.00", status: "pending", date: "2024-01-14" },
    { id: "pi_1237", email: "alice@example.com", amount: "$45.00", status: "succeeded", date: "2024-01-14" },
    { id: "pi_1238", email: "charlie@example.com", amount: "$199.00", status: "failed", date: "2024-01-13" },
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Processing payment of ${paymentAmount} from ${paymentEmail}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div>
          <h4 className="mb-0">Dashboard</h4>
          <p className="text-muted mb-0">Welcome back! Here's your payment overview.</p>
        </div>
        <Button variant="secondary" size="sm">
          <FontAwesomeIcon icon={faCalendar} className="me-2" /> Last 30 days
        </Button>
      </div>

      <Row className="mb-4">
        <Col xs={12} md={4}>
          <Card className="bg-white shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="icon-shape bg-primary text-white rounded p-3">
                  <FontAwesomeIcon icon={faDollarSign} size="lg" />
                </div>
                <div className="ms-3">
                  <p className="text-muted mb-0">Total Revenue</p>
                  <h4 className="mb-0">$12,345.00</h4>
                </div>
              </div>
              <div className="mt-3">
                <Badge variant="success" className="me-2">+12.5%</Badge>
                <small className="text-muted">vs last month</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="bg-white shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="icon-shape bg-secondary text-white rounded p-3">
                  <FontAwesomeIcon icon={faCreditCard} size="lg" />
                </div>
                <div className="ms-3">
                  <p className="text-muted mb-0">Successful Payments</p>
                  <h4 className="mb-0">1,234</h4>
                </div>
              </div>
              <div className="mt-3">
                <Badge variant="success" className="me-2">+8.2%</Badge>
                <small className="text-muted">vs last month</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="bg-white shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="icon-shape bg-dark text-white rounded p-3">
                  <FontAwesomeIcon icon={faChartLine} size="lg" />
                </div>
                <div className="ms-3">
                  <p className="text-muted mb-0">Conversion Rate</p>
                  <h4 className="mb-0">3.45%</h4>
                </div>
              </div>
              <div className="mt-3">
                <Badge variant="success" className="me-2">+0.5%</Badge>
                <small className="text-muted">vs last month</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={6} className="mb-4">
          <Card className="bg-white shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Accept a Payment</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handlePayment}>
                <Form.Group className="mb-3">
                  <Form.Label>Customer Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control 
                      type="email" 
                      placeholder="customer@example.com"
                      value={paymentEmail}
                      onChange={(e) => setPaymentEmail(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Amount</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control 
                      type="number" 
                      placeholder="0.00"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Payment description" />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">
                  <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                  Charge Customer
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6} className="mb-4">
          <Card className="bg-white shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Payment Links</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <p className="text-muted mb-2">Create a payment link to share with customers</p>
                <Button variant="outline-primary" className="w-100">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Create Payment Link
                </Button>
              </div>
              <hr />
              <div className="mb-3">
                <p className="text-muted mb-2">Accept payment via link</p>
                <InputGroup>
                  <Form.Control 
                    type="text" 
                    placeholder="https://pay.tonaselpay.com/example"
                    readOnly 
                  />
                  <Button variant="secondary">Copy</Button>
                </InputGroup>
              </div>
              <div className="mt-4">
                <h6>Quick Actions</h6>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <Button variant="outline-secondary" size="sm">Send Invoice</Button>
                  <Button variant="outline-secondary" size="sm">Subscription</Button>
                  <Button variant="outline-secondary" size="sm">Request Payment</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card className="bg-white shadow-sm">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Payments</h5>
              <InputGroup style={{ maxWidth: "250px" }}>
                <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                <Form.Control placeholder="Search payments..." />
              </InputGroup>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive hover className="mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Payment ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td>
                        <code className="small">{payment.id}</code>
                      </td>
                      <td>{payment.email}</td>
                      <td className="fw-bold">{payment.amount}</td>
                      <td>
                        <Badge bg={
                          payment.status === "succeeded" ? "success" :
                          payment.status === "pending" ? "warning" : "danger"
                        }>
                          {payment.status === "succeeded" && <FontAwesomeIcon icon={faCheckCircle} className="me-1" />}
                          {payment.status === "pending" && <FontAwesomeIcon icon={faClock} className="me-1" />}
                          {payment.status === "failed" && <FontAwesomeIcon icon={faTimesCircle} className="me-1" />}
                          {payment.status}
                        </Badge>
                      </td>
                      <td>{payment.date}</td>
                      <td>
                        <Button variant="link" size="sm" className="p-0">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <Card className="bg-white shadow-sm">
            <Card.Header>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faCode} className="me-2" />
                <h5 className="mb-0 d-inline">Developer Tools</h5>
              </div>
              <small className="text-muted">Integrate TonaselPay into your apps and websites</small>
            </Card.Header>
            <Card.Body>
              <Tab.Container defaultActiveKey="apiKeys">
                <Nav variant="tabs" className="mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="apiKeys">
                      <FontAwesomeIcon icon={faKey} className="me-2" />API Keys
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sdks">
                      <FontAwesomeIcon icon={faCode} className="me-2" />SDKs
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="webhooks">
                      <FontAwesomeIcon icon={faPlug} className="me-2" />Webhooks
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="docs">
                      <FontAwesomeIcon icon={faBook} className="me-2" />Documentation
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="apiKeys">
                    <Row>
                      <Col xs={12} lg={6}>
                        <div className="mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="mb-0">Live API Key</h6>
                            <Badge bg="success">Active</Badge>
                          </div>
                          <InputGroup>
                            <Form.Control 
                              type="text" 
                              value="sk_live_51abc123def456ghi789jklmno123pqr456"
                              readOnly 
                              className="font-monospace"
                            />
                            <Button variant="secondary"><FontAwesomeIcon icon={faCopy} /></Button>
                          </InputGroup>
                          <small className="text-muted">Use this key for live transactions</small>
                        </div>
                      </Col>
                      <Col xs={12} lg={6}>
                        <div className="mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="mb-0">Test API Key</h6>
                            <Badge bg="warning" text="dark">Test</Badge>
                          </div>
                          <InputGroup>
                            <Form.Control 
                              type="text" 
                              value="sk_test_51abc123def456ghi789jklmno123pqr456"
                              readOnly 
                              className="font-monospace"
                            />
                            <Button variant="secondary"><FontAwesomeIcon icon={faCopy} /></Button>
                          </InputGroup>
                          <small className="text-muted">Use this key for testing</small>
                        </div>
                      </Col>
                    </Row>
                    <Button variant="outline-primary" size="sm">
                      <FontAwesomeIcon icon={faPlus} className="me-2" />Generate New Key
                    </Button>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sdks">
                    <Row>
                      <Col xs={12} md={4} className="mb-3">
                        <Card className="border h-100">
                          <Card.Body>
                            <h6><FontAwesomeIcon icon={faCode} className="me-2" />JavaScript</h6>
                            <p className="small text-muted">Client-side SDK for web browsers</p>
                            <code className="d-block p-2 bg-light rounded small">npm install @tonaselpay/js</code>
                            <Button variant="link" size="sm" className="p-0 mt-2">View docs</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={12} md={4} className="mb-3">
                        <Card className="border h-100">
                          <Card.Body>
                            <h6><FontAwesomeIcon icon={faCode} className="me-2" />Node.js</h6>
                            <p className="small text-muted">Server-side SDK for Node.js</p>
                            <code className="d-block p-2 bg-light rounded small">npm install @tonaselpay/node</code>
                            <Button variant="link" size="sm" className="p-0 mt-2">View docs</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={12} md={4} className="mb-3">
                        <Card className="border h-100">
                          <Card.Body>
                            <h6><FontAwesomeIcon icon={faCode} className="me-2" />Python</h6>
                            <p className="small text-muted">Python SDK for backend services</p>
                            <code className="d-block p-2 bg-light rounded small">pip install tonaselpay</code>
                            <Button variant="link" size="sm" className="p-0 mt-2">View docs</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="webhooks">
                    <div className="mb-3">
                      <h6>Webhook Endpoint</h6>
                      <InputGroup>
                        <Form.Control 
                          type="text" 
                          value="https://yourdomain.com/api/webhooks/tonaselpay"
                          readOnly 
                        />
                        <Button variant="secondary"><FontAwesomeIcon icon={faCopy} /></Button>
                      </InputGroup>
                    </div>
                    <div className="mb-3">
                      <h6>Webhook Secret</h6>
                      <InputGroup>
                        <Form.Control 
                          type="password" 
                          value="whsec_1234567890abcdef"
                          readOnly 
                          className="font-monospace"
                        />
                        <Button variant="secondary">Reveal</Button>
                      </InputGroup>
                    </div>
                    <Button variant="outline-primary" size="sm">
                      <FontAwesomeIcon icon={faPlus} className="me-2" />Add Webhook Endpoint
                    </Button>
                  </Tab.Pane>
                  <Tab.Pane eventKey="docs">
                    <Row>
                      <Col xs={12} md={6}>
                        <Card className="border bg-light">
                          <Card.Body>
                            <h6><FontAwesomeIcon icon={faBook} className="me-2" />API Reference</h6>
                            <p className="small">Complete API documentation with endpoints, parameters, and examples.</p>
                            <Button variant="primary" size="sm">View API Reference</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card className="border bg-light">
                          <Card.Body>
                            <h6><FontAwesomeIcon icon={faCode} className="me-2" />Integration Guide</h6>
                            <p className="small">Step-by-step guide to integrate TonaselPay into your application.</p>
                            <Button variant="primary" size="sm">View Integration Guide</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

