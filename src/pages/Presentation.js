import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCheckCircle, faCode, faBook, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Button, Container, Navbar, Nav } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Routes } from "../routes";

import features from "../data/features";

export default () => {
  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <span className="ms-2 brand-text d-none d-md-inline fw-bold">TonaselPay</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h1 className="fw-bolder display-2 text-white">Accept payments online</h1>
              <p className="text-white-50 fw-light mb-5 h4">Millions of companies of all sizes—from startups to Fortune 500s—use TonaselPay to accept payments, send payouts, and manage their businesses online.</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button as={Link} to={Routes.DashboardOverview.path} variant="primary" size="lg" className="me-3 px-4">
                  Start accepting payments <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
                </Button>
                <Button variant="outline-light" size="lg" className="px-4">
                  Contact sales
                </Button>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                  <p className="text-white-50 font-small m-0">Trusted by developers and businesses worldwide</p>
                </div>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <section className="section section-lg bg-primary text-white">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Everything you need to accept payments</h2>
              <p className="lead px-lg-8">Powerful tools and integrations to help you build and scale your payment processing.</p>
            </Col>
          </Row>
          <Row>
            {features.map(feature => <Feature key={`features-${feature.id}`} {...feature} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-white" id="payments">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Payments</h2>
              <p className="lead px-lg-8">Accept payments from anywhere in the world with our comprehensive payment processing platform.</p>
            </Col>
          </Row>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <h3>Online payments</h3>
              <p className="mb-4">Accept credit cards, debit cards, and digital wallets with our secure payment forms and APIs.</p>
              <ul className="list-unstyled">
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />PCI DSS compliant</li>
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />3D Secure support</li>
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Mobile-optimized checkout</li>
              </ul>
            </Col>
            <Col lg={6}>
              <p className="text-muted">Payment processing visualization</p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2">
              <h3>Recurring billing</h3>
              <p className="mb-4">Set up subscriptions and recurring payments with flexible billing cycles and pricing plans.</p>
              <ul className="list-unstyled">
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Flexible billing cycles</li>
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Prorated upgrades/downgrades</li>
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Dunning management</li>
              </ul>
            </Col>
            <Col lg={6} className="order-lg-1">
              <p className="text-muted">Recurring billing visualization</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-soft" id="billing">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Billing</h2>
              <p className="lead px-lg-8">Comprehensive billing tools to manage invoices, taxes, and financial reporting.</p>
            </Col>
          </Row>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <h3>Invoicing</h3>
              <p className="mb-4">Create and send professional invoices with automated payment collection and reminders.</p>
              <ul className="list-unstyled">
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Customizable invoice templates</li>
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Automated payment reminders</li>
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Multi-currency support</li>
              </ul>
            </Col>
            <Col lg={6}>
              <p className="text-muted">Invoicing visualization</p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2">
              <h3>Financial reporting</h3>
              <p className="mb-4">Get detailed insights into your payment data with comprehensive reporting and analytics.</p>
              <ul className="list-unstyled">
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Real-time transaction data</li>
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Customizable dashboards</li>
                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Export capabilities</li>
              </ul>
            </Col>
            <Col lg={6} className="order-lg-1">
              <p className="text-muted">Financial reporting visualization</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-white" id="integrate">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Built for developers</h2>
              <p className="lead px-lg-8">Integrate TonaselPay into your applications with our powerful APIs and SDKs.</p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} md={4}>
              <Card className="bg-white border h-100">
                <Card.Body className="text-center p-4">
                  <div className="icon-shape bg-primary text-white rounded p-3 mb-3 mx-auto" style={{ width: "60px", height: "60px" }}>
                    <FontAwesomeIcon icon={faCode} size="lg" />
                  </div>
                  <h5>Powerful APIs</h5>
                  <p className="text-muted">RESTful APIs with comprehensive documentation and sandbox testing.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="bg-white border h-100">
                <Card.Body className="text-center p-4">
                  <div className="icon-shape bg-secondary text-white rounded p-3 mb-3 mx-auto" style={{ width: "60px", height: "60px" }}>
                    <FontAwesomeIcon icon={faTerminal} size="lg" />
                  </div>
                  <h5>SDKs</h5>
                  <p className="text-muted">Official SDKs for JavaScript, Node.js, Python, and more platforms.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="bg-white border h-100">
                <Card.Body className="text-center p-4">
                  <div className="icon-shape bg-dark text-white rounded p-3 mb-3 mx-auto" style={{ width: "60px", height: "60px" }}>
                    <FontAwesomeIcon icon={faBook} size="lg" />
                  </div>
                  <h5>Webhooks</h5>
                  <p className="text-muted">Real-time notifications for payment events and status updates.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <div className="bg-dark rounded p-4 text-left">
                <p className="text-white mb-2 small">Installation</p>
                <code className="d-block bg-dark text-secondary p-3 rounded font-monospace" style={{ fontSize: "14px" }}>
                  npm install @tonaselpay/js
                </code>
              </div>
              <div className="mt-3">
                <Button as={Link} to={Routes.DashboardOverview.path} variant="primary" size="lg">
                  Get API Keys <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <span className="ms-2 brand-text fw-bold">TonaselPay</span>
              </Navbar.Brand>
              <p>TonaselPay is a comprehensive payment processing platform that helps businesses accept payments, manage billing, and scale globally.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Company</span>
              <ul className="links-vertical mt-2">
                <li><button type="button" className="btn btn-link p-0 text-reset">About Us</button></li>
                <li><button type="button" className="btn btn-link p-0 text-reset">Careers</button></li>
                <li><button type="button" className="btn btn-link p-0 text-reset">Blog</button></li>
                <li><button type="button" className="btn btn-link p-0 text-reset">Contact</button></li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Resources</span>
              <ul className="links-vertical mt-2">
                <li><button type="button" className="btn btn-link p-0 text-reset">Documentation</button></li>
                <li><button type="button" className="btn btn-link p-0 text-reset">Help Center</button></li>
                <li><button type="button" className="btn btn-link p-0 text-reset">Privacy Policy</button></li>
                <li><button type="button" className="btn btn-link p-0 text-reset">Terms of Service</button></li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">We'll never share your details. See our <button type="button" className="btn btn-link text-white p-0">Privacy Policy</button></p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © TonaselPay 2024. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

