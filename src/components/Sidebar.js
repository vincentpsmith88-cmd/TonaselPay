import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faHandHoldingUsd, faCreditCard, faUsers, faFileInvoice, faCog, faSignOutAlt, faTimes, faArrowRight, faHome, faCode, faBuilding, faPlus, faFilter, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Button, Navbar, Dropdown } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const NavItem = (props) => {
    const { title, link, external, target, icon, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
          <span className="fw-bold">TonaselPay</span>
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="d-block">
                  <h6>Welcome!</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              {/* Brand */}
              <div className="sidebar-brand mb-4">
                <NavItem title="TonaselPay" link={Routes.Presentation.path} icon={faHome} />
              </div>

              {/* Business Selector */}
              <div className="sidebar-section mb-3">
                <h6 className="sidebar-heading text-muted mb-2 px-2">Business</h6>
                <div className="px-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-light" size="sm" className="w-100 text-start">
                      <FontAwesomeIcon icon={faBuilding} className="me-2" />
                      Select Business
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      <Dropdown.Item active>
                        <FontAwesomeIcon icon={faBuilding} className="me-2" />
                        My Business
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <FontAwesomeIcon icon={faBuilding} className="me-2" />
                        Business 2
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <FontAwesomeIcon icon={faBuilding} className="me-2" />
                        Business 3
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>
                        <FontAwesomeIcon icon={faFilter} className="me-2" />
                        Filter All
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
                <div className="px-2">
                  <Button variant="success" size="sm" className="w-100" as={Link} to={Routes.BusinessRegistration.path}>
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    New Business
                  </Button>
                </div>

              {/* Main Dashboard */}
              <div className="sidebar-section mb-3">
                <h6 className="sidebar-heading text-muted mb-2 px-2">Dashboard</h6>
                <NavItem title="Overview" link={Routes.DashboardOverview.path} icon={faChartPie} />
              </div>

              {/* Financial Management */}
              <div className="sidebar-section mb-3">
                <h6 className="sidebar-heading text-muted mb-2 px-2">Financial Management</h6>
                <NavItem title="Payments" link="#" icon={faCreditCard} badgeText="3" badgeBg="success" />
                <NavItem title="Transactions" link={Routes.Transactions.path} icon={faHandHoldingUsd} />
                <NavItem title="Customers" link={Routes.Customers.path} icon={faUsers} />
                <NavItem title="Invoices" link="#" icon={faFileInvoice} />
              </div>

              {/* Tools & Settings */}
              <div className="sidebar-section mb-3">
                <h6 className="sidebar-heading text-muted mb-2 px-2">Tools & Settings</h6>
                <NavItem title="Developer Tools" link="#" icon={faCode} />
                <NavItem title="Compliance" link={Routes.Compliance.path} icon={faShieldAlt} />
                <NavItem title="Settings" link={Routes.Settings.path} icon={faCog} />
              </div>

              {/* Quick Actions */}
              <div className="sidebar-section mt-4">
                <Button as={Link} to={Routes.Presentation.path} variant="secondary" className="w-100 text-dark">
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" /> Back to Home
                </Button>
              </div>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
