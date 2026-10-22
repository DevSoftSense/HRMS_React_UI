import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import processArrow from "../../../assets/images/landing/process-arrow-img.png";

const steps = [
    {
        step: "01",
        title: "Onboard",
        description: "Add employees, manage documents, assign roles, and set up departments, shifts and policies.",
        icon: "ri-user-add-line",
    },
    {
        step: "02",
        title: "Manage",
        description: "Track attendance via biometric, mobile GPS, web or kiosk — manage leaves, shifts and performance.",
        icon: "ri-calendar-check-line",
    },
    {
        step: "03",
        title: "Pay & Comply",
        description: "Run payroll, generate payslips, handle PF/ESIC/TDS compliance and produce statutory reports.",
        icon: "ri-wallet-3-line",
    },
];

const WorkProcess = () => {
    return (
        <React.Fragment>
            <section className="section bg-light" id="how-it-works">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">How It Works</h3>
                                <p className="text-muted mb-0 ff-secondary">
                                    Everything organized in 3 simple steps — Onboard → Manage → Pay & Comply
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="text-center">
                        {steps.map((item, index) => (
                            <Col lg={4} key={item.title}>
                                <div className="process-card mt-4">
                                    {index < steps.length - 1 && (
                                        <div className="process-arrow-img d-none d-lg-block">
                                            <img src={processArrow} alt="" className="img-fluid" />
                                        </div>
                                    )}
                                    <div className="avatar-sm icon-effect mx-auto mb-4">
                                        <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                            <i className={item.icon}></i>
                                        </div>
                                    </div>
                                    <p className="text-success fw-semibold mb-2">{item.step}</p>
                                    <h5>{item.title}</h5>
                                    <p className="text-muted ff-secondary mb-0">{item.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default WorkProcess;
