import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const serviceItems = [
    {
        icon: "ri-calendar-check-line",
        title: "Attendance Management",
        description: "Track attendance in real-time with biometric, mobile, GPS and kiosk integration.",
    },
    {
        icon: "ri-calendar-event-line",
        title: "Leave Management",
        description: "Manage leaves, holidays, approvals and policies with ease.",
    },
    {
        icon: "ri-wallet-3-line",
        title: "Payroll Automation",
        description: "Automate salary, PF, ESIC, TDS, LWF and generate payslips in minutes.",
    },
    {
        icon: "ri-bar-chart-grouped-line",
        title: "Performance & Appraisal",
        description: "Set goals, conduct appraisals and track performance effectively.",
    },
    {
        icon: "ri-user-settings-line",
        title: "Employee Self Service",
        description: "Empower employees to apply leaves, view payslips and update profile.",
    },
    {
        icon: "ri-pie-chart-2-line",
        title: "Reports & Analytics",
        description: "Get real-time insights with powerful reports and custom dashboards.",
    },
    {
        icon: "ri-shield-user-line",
        title: "Compliance & Statutory",
        description: "Stay compliant with PF, ESIC, TDS, Form 16 and statutory reporting built in.",
    },
    {
        icon: "ri-building-2-line",
        title: "Multi-Location Support",
        description: "Manage employees, attendance and payroll across branches and companies.",
    },
];

const Services = () => {
    return (
        <React.Fragment>
            <section className="section" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h5 className="fs-12 text-uppercase text-success mb-2">Powerful Features</h5>
                                <h3 className="mb-3 fw-semibold">Everything You Need to Manage Your Workforce</h3>
                                <p className="text-muted mb-0 ff-secondary">
                                    Powerful features to streamline your HR operations and empower your employees.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        {serviceItems.map((item) => (
                            <Col lg={3} md={6} key={item.title}>
                                <div className="d-flex p-3">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar-sm icon-effect">
                                            <div className="avatar-title bg-transparent text-success rounded-circle">
                                                <i className={`${item.icon} fs-36`}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fs-18">{item.title}</h5>
                                        <p className="text-muted mb-0 ff-secondary">{item.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Services;
