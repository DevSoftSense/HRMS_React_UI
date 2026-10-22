import React, { useState } from 'react';
import { Col, Container, Row, Collapse } from 'reactstrap';
import classnames from "classnames";

const faqSections = [
    {
        icon: "ri-question-line",
        title: "General Questions",
        id: "general",
        items: [
            {
                question: "What is SoftOnCloud HRMS?",
                answer: "SoftOnCloud HRMS is a cloud-based human resource management platform that helps you manage attendance, leaves, payroll, compliance, performance and employee self-service — all in one place.",
            },
            {
                question: "Can I manage attendance through multiple methods?",
                answer: "Yes. Capture attendance via biometric devices, mobile app with GPS/location check-in, web portal, and kiosk systems — all synced to a single dashboard.",
            },
            {
                question: "Does HRMS support payroll and statutory compliance?",
                answer: "Yes. Automate salary processing with PF, ESIC, TDS, LWF deductions, generate payslips, Form 16, and stay compliant with Indian statutory requirements.",
            },
            {
                question: "Is there an employee self-service portal?",
                answer: "Yes. Employees can apply for leaves, view payslips, update profiles, and access HR information through a dedicated self-service portal.",
            },
            {
                question: "Can I manage multiple locations or companies?",
                answer: "Yes. HRMS supports multi-location and multi-company setups, making it ideal for growing businesses and enterprises.",
            },
        ],
    },
    {
        icon: "ri-calendar-check-line",
        title: "Attendance & Leave",
        id: "attendance",
        items: [
            {
                question: "What attendance tracking options are available?",
                answer: "Track attendance through biometric devices, mobile GPS check-in, web check-in, and kiosk systems with real-time present, late and leave dashboards.",
            },
            {
                question: "Can I configure leave policies and holidays?",
                answer: "Yes. Define leave types, holiday calendars, approval workflows and policies tailored to your organization.",
            },
            {
                question: "Does HRMS show real-time attendance statistics?",
                answer: "Yes. View present today, late arrivals, employees on leave, and attendance percentage on live dashboards.",
            },
            {
                question: "Can managers approve leave requests?",
                answer: "Yes. Leave requests flow through configurable approval chains with full visibility for managers and HR.",
            },
        ],
    },
    {
        icon: "ri-wallet-3-line",
        title: "Payroll & Compliance",
        id: "payroll",
        items: [
            {
                question: "Which statutory deductions are supported?",
                answer: "HRMS handles PF, ESIC, TDS, LWF and other statutory deductions with automated calculations and reporting.",
            },
            {
                question: "Can employees download their payslips?",
                answer: "Yes. Payslips are generated automatically and accessible through the employee self-service portal.",
            },
            {
                question: "Does HRMS support loans and advances?",
                answer: "Yes. Manage employee loans, advances and deductions as part of the payroll processing workflow.",
            },
            {
                question: "Can I generate Form 16 and compliance reports?",
                answer: "Yes. Generate Form 16, statutory reports and payroll summaries for audit and compliance needs.",
            },
        ],
    },
    {
        icon: "ri-shield-keyhole-line",
        title: "Security & Access",
        id: "security",
        items: [
            {
                question: "Does HRMS support role-based access control?",
                answer: "Yes. Granular RBAC ensures admins, managers, HR and employees see only what they need with secure permissions.",
            },
            {
                question: "Is my HR data secure?",
                answer: "SoftOnCloud HRMS is built with security and privacy in mind, including encrypted data, access controls and session management.",
            },
            {
                question: "Does HRMS integrate with other SoftOnCloud apps?",
                answer: "Yes. Seamlessly connect with Book (Accounting), Task (Task Management), Cal (Calendar), Inventory and CRM within the SoftOnCloud ecosystem.",
            },
            {
                question: "Is HRMS cloud-based?",
                answer: "Yes. Access your HRMS from anywhere with a secure, cloud-based platform — no installation required.",
            },
        ],
    },
];

const FaqAccordion = ({ sectionId, items }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div
            className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
            id={`${sectionId}-accordion`}
        >
            {items.map((item, index) => (
                <div className="accordion-item" key={item.question}>
                    <h2 className="accordion-header" id={`${sectionId}-heading-${index}`}>
                        <button
                            className={classnames("accordion-button", "fw-medium", {
                                collapsed: openIndex !== index,
                            })}
                            type="button"
                            onClick={() => toggle(index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item.question}
                        </button>
                    </h2>
                    <Collapse isOpen={openIndex === index} className="accordion-collapse">
                        <div className="accordion-body ff-secondary">{item.answer}</div>
                    </Collapse>
                </div>
            ))}
        </div>
    );
};

const Faqs = () => {
    return (
        <React.Fragment>
            <section className="section" id="faqs">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Frequently Asked Questions</h3>
                                <p className="text-muted mb-4 ff-secondary">
                                    If you can not find answer to your question in our FAQ, you can
                                    always contact us or email us. We will answer you shortly!
                                </p>

                                <div className="hstack gap-2 justify-content-center">
                                    <a
                                        href="mailto:noreply@softoncloud.com"
                                        className="btn btn-success rounded-pill"
                                    >
                                        <i className="ri-mail-line align-middle me-2"></i>
                                        Email Us
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-lg-5 g-4">
                        {faqSections.map((section) => (
                            <Col lg={6} key={section.id}>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="flex-shrink-0 me-1">
                                        <i className={`${section.icon} fs-24 align-middle text-success me-1`}></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="mb-0 fw-semibold">{section.title}</h5>
                                    </div>
                                </div>
                                <FaqAccordion sectionId={section.id} items={section.items} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Faqs;
