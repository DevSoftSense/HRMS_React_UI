import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import hrmsFeatures1 from "../../../assets/images/landing/features/hrms-features1.png";
import hrmsFeatures2 from "../../../assets/images/landing/features/hrms-features2.png";

const orgTypes = [
    { icon: "ri-rocket-line", label: "Startups" },
    { icon: "ri-building-line", label: "SMEs" },
    { icon: "ri-building-4-line", label: "Enterprises" },
    { icon: "ri-map-pin-line", label: "Multi-Location" },
    { icon: "ri-team-line", label: "Remote Teams" },
    { icon: "ri-briefcase-line", label: "Growing Businesses" },
];

const Features = () => {
    return (
        <React.Fragment>
            <section className="section bg-light py-5" id="features">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} sm={7} className="mx-auto">
                            <div>
                                <img src={hrmsFeatures1} alt="Simplify Payroll and Ensure Compliance" className="img-fluid mx-auto" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-muted">
                                <h3 className="mb-4 fs-20 text-body">Simplify Payroll. Ensure Compliance.</h3>
                                <div className="vstack gap-3">
                                    {[
                                        "Automated salary calculations",
                                        "PF, ESI, TDS & statutory compliance",
                                        "Loans, advances & deductions",
                                        "Payslips & Form 16 generation",
                                        "Multi-location & multi-company support",
                                    ].map((item) => (
                                        <div key={item} className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title bg-success text-white rounded-circle">
                                                        <i className="ri-check-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-0 text-body ff-secondary">{item}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} className="order-2 order-lg-1">
                            <div className="text-muted">
                                <h3 className="mb-4 fs-20 text-body">Built for Every Organization</h3>

                                <Row className="g-3 mb-4">
                                    {orgTypes.map((org) => (
                                        <Col xs={6} sm={4} lg={6} xl={4} key={org.label}>
                                            <div className="text-center p-3 bg-light rounded">
                                                <div className="avatar-sm mx-auto mb-2">
                                                    <div className="avatar-title bg-white text-success rounded">
                                                        <i className={`${org.icon} fs-20`}></i>
                                                    </div>
                                                </div>
                                                <p className="mb-0 fw-medium text-body fs-14">{org.label}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>

                                <p className="mb-0 ff-secondary text-body">
                                    Make HR simple and employees happy — with centralized employee databases, automated workflows, policy management, and secure role-based access for every team size.
                                </p>
                            </div>
                        </Col>

                        <Col lg={6} sm={7} className="col-10 ms-auto order-1 order-lg-2">
                            <div>
                                <img src={hrmsFeatures2} alt="Built for Every Organization" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Features;
