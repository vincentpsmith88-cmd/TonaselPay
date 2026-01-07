import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationTriangle, faClock, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Button, ProgressBar, Badge } from '@themesberg/react-bootstrap';

const Compliance = () => {
  const complianceItems = [
    {
      title: "Business Registration",
      status: "completed",
      description: "Your business is fully registered and compliant",
      progress: 100,
      icon: faCheckCircle,
      color: "success"
    },
    {
      title: "Tax Compliance",
      status: "pending",
      description: "Tax documents need to be submitted",
      progress: 75,
      icon: faClock,
      color: "warning"
    },
    {
      title: "Regulatory Approvals",
      status: "in-progress",
      description: "Waiting for regulatory approval",
      progress: 50,
      icon: faExclamationTriangle,
      color: "info"
    },
    {
      title: "Insurance Coverage",
      status: "completed",
      description: "All required insurance policies are active",
      progress: 100,
      icon: faCheckCircle,
      color: "success"
    }
  ];

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h1 className="h4">Compliance Dashboard</h1>
          <p className="mb-0">Monitor your business registration and compliance status</p>
        </div>
      </div>

      <Row>
        {complianceItems.map((item, index) => (
          <Col xs={12} md={6} lg={3} key={index} className="mb-4">
            <Card border={item.color} className="shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={item.icon} className={`text-${item.color} me-3`} size="lg" />
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <Badge bg={item.color} className="text-uppercase">
                      {item.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted small mb-3">{item.description}</p>
                <ProgressBar
                  now={item.progress}
                  variant={item.color}
                  className="mb-2"
                  style={{ height: '6px' }}
                />
                <small className="text-muted">{item.progress}% Complete</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                Recent Compliance Activities
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker bg-success"></div>
                  <div className="timeline-content">
                    <h6 className="timeline-title">Business Registration Completed</h6>
                    <p className="timeline-text">Your business registration was successfully completed on March 15, 2024</p>
                    <small className="text-muted">March 15, 2024</small>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker bg-warning"></div>
                  <div className="timeline-content">
                    <h6 className="timeline-title">Tax Documents Submitted</h6>
                    <p className="timeline-text">Quarterly tax documents have been submitted and are under review</p>
                    <small className="text-muted">March 10, 2024</small>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker bg-info"></div>
                  <div className="timeline-content">
                    <h6 className="timeline-title">Regulatory Approval Pending</h6>
                    <p className="timeline-text">Application for regulatory approval is being processed</p>
                    <small className="text-muted">March 5, 2024</small>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Compliance;
