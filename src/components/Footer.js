import React from "react";
import moment from "moment-timezone";
import { Row, Col, Card, OverlayTrigger, Tooltip, Image, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default (props) => {
  const currentYear = moment().get("year");
  const showSettings = props.showSettings;

  const toggleSettings = (toggle) => {
    props.toggleSettings(toggle);
  }

  return (
    <div>
      {showSettings ? (
        <Card className="theme-settings">
          <Card.Body className="pt-4">
            <Button className="theme-settings-close" variant="close" size="sm" aria-label="Close" onClick={() => { toggleSettings(false) }} />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="m-0 mb-1 me-3 fs-7">Made with open source <span role="img" aria-label="gratitude">💙</span></p>
            </div>
            <p className="fs-7 text-gray-700 text-center">TonaselPay - Payment Processing Platform</p>
          </Card.Body>
        </Card>
      ) : (
        <Card className="theme-settings theme-settings-expand" onClick={() => { toggleSettings(true) }}>
          <Card.Body className="p-3 py-2">
            <span className="fw-bold h6"><FontAwesomeIcon icon={faCogs} className="me-1 fs-7" /> Settings</span>
          </Card.Body>
        </Card>
      )}
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © 2019-{`${currentYear} `}
              <Card.Link href="#" target="_blank" className="text-blue text-decoration-none fw-normal">
                TonaselPay{' '}
              </Card.Link>
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Link href="#">
                  About
                </Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Link href="#">
                  Privacy
                </Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Link href="#">
                  Terms
                </Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Link href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

