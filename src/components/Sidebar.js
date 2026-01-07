import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faHandHoldingUsd, faCreditCard, faUsers, faFileInvoice, faCog, faSignOutAlt, faTimes, faArrowRight, faHome, faCode } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Navbar } from '@themesberg/react-bootstrap';
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
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="TonaselPay" link={Routes.Presentation.path} icon={faHome} />

              <NavItem title="Dashboard" link={Routes.DashboardOverview.path} icon={faChartPie} />
              <NavItem title="Payments" link="#" icon={faCreditCard} badgeText="3" badgeBg="success" />
              <NavItem title="Transactions" link={Routes.Transactions.path} icon={faHandHoldingUsd} />
              <NavItem title="Customers" link={Routes.Customers.path} icon={faUsers} />
              <NavItem title="Invoices" link="#" icon={faFileInvoice} />
              <NavItem title="Developer Tools" link="#" icon={faCode} />

              <NavItem title="Settings" link={Routes.Settings.path} icon={faCog} />

              <div className="mt-4 mb-3">
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

