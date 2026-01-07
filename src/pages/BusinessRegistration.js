import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faMapMarkerAlt, faPhone, faEnvelope, faGlobe, faFileAlt, faIdCard, faSave } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';

const BusinessRegistration = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    registrationNumber: "",
    taxId: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Business registration data:", formData);
    // Handle form submission
  };

  const businessTypes = [
    { value: "", label: "Select business type" },
    { value: "sole_proprietorship", label: "Sole Proprietorship" },
    { value: "partnership", label: "Partnership" },
    { value: "llc", label: "Limited Liability Company (LLC)" },
    { value: "corporation", label: "Corporation" },
    { value: "nonprofit", label: "Non-Profit Organization" },
    { value: "cooperative", label: "Cooperative" }
  ];

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h1 className="h4">Business Registration</h1>
          <p className="mb-0">Register your business with TonaselPay</p>
        </div>

      <Row>
        <Col xs={12}>
          <Card border="light" className="shadow-sm mb-4">
            <Card.Header>
              <Row className="align-items-center">
                <Col>
                  <h5 className="mb-0">
                    <FontAwesomeIcon icon={faBuilding} className="me-2" />
                    Business Information
                  </h5>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Business Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Enter business name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Business Type <span className="text-danger">*</span></Form.Label>
                      <Form.Select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                      >
                        {businessTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>
                        <FontAwesomeIcon icon={faIdCard} className="me-1" />
                        Registration Number <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        placeholder="Enter registration number"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>
                        <FontAwesomeIcon icon={faFileAlt} className="me-1" />
                        Tax ID / EIN
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="taxId"
                        value={formData.taxId}
                        onChange={handleChange}
                        placeholder="Enter tax ID"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} className="mb-3">
                    <Form.Group>
                      <Form.Label>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                        Business Address <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street address"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group>
                      <Form.Label>City <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group>
                      <Form.Label>State / Province</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group>
                      <Form.Label>ZIP / Postal Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="ZIP code"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Country <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>
                        <FontAwesomeIcon icon={faPhone} className="me-1" />
                        Phone Number
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text>+1</InputGroup.Text>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>
                        <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                        Email Address <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="business@example.com"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>
                        <FontAwesomeIcon icon={faGlobe} className="me-1" />
                        Website
                      </Form.Label>
                      <Form.Control
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://www.example.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} className="mb-3">
                    <Form.Group>
                      <Form.Label>Business Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your business activities..."
                        rows={4}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="mt-4">
                  <Button type="submit" variant="primary" className="me-2">
                    <FontAwesomeIcon icon={faSave} className="me-2" />
                    Register Business
                  </Button>
                  <Button type="reset" variant="secondary">
                    Reset Form
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card border="light" className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">
                <FontAwesomeIcon icon={faIdCard} className="me-2" />
                Required Documents
              </h5>
            </Card.Header>
            <Card.Body>
              <p className="text-muted mb-3">
                Please upload the following documents to complete your business registration:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <FontAwesomeIcon icon={faFileAlt} className="me-2 text-primary" />
                  Business Registration Certificate
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faFileAlt} className="me-2 text-primary" />
                  Tax Registration Document
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faFileAlt} className="me-2 text-primary" />
                  Proof of Address (utility bill or bank statement)
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faFileAlt} className="me-2 text-primary" />
                  Owner/Representative ID Document
                </li>
              </ul>
              <Button variant="outline-primary" className="mt-3">
                Upload Documents
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BusinessRegistration;
