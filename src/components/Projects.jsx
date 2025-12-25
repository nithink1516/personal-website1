import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {[
                        {
                            title: "Product Teardown",
                            link: "https://assets.nextleap.app/submissions/ProductTeardown-fd7865c6-bb46-4637-a41c-d99075d368f4.pdf",
                            tags: ["Product", "Strategy"],
                            summary: "Detailed product teardown of Navi UPI’s Rewards feature, analyzing user experience and proposing a feature improvement.",
                            shortDescription: "Detailed product teardown analysis"
                        },
                        {
                            title: "Swiggy LIP2",
                            link: "https://assets.nextleap.app/submissions/Swiggy-LIP2-f917182b-d0ac-47f1-ac7e-ce58b17b426f.pdf",
                            tags: ["Food Tech", "Growth"],
                            summary: "Product teardown of Swiggy’s Incognito Mode feature, evaluating user experience and proposing a UX improvement.",
                            shortDescription: "Swiggy growth strategy proposal"
                        },
                        {
                            title: "Expense Ease",
                            link: "https://assets.nextleap.app/submissions/NLExpenseEase-2717f0ca-aaae-42bb-8564-f29569b678c8.pdf",
                            tags: ["FinTech", "UX"],
                            summary: "Worked on a product solution to simplify the process of submitting, tracking, and reimbursing work-related expenses. Built an MVP that focused on \"Automated Receipt Capture with AI Policy Check\".",
                            shortDescription: "Expense tracking solution"
                        },
                        {
                            title: "Date Planning Assistant",
                            link: "https://assets.nextleap.app/submissions/LIP3-DatePlanningAssistant-f4390a7a-a0fc-4a2c-84fb-96f0c40940dd.pdf",
                            tags: ["Lifestyle", "Planning"],
                            summary: "Concept and UX design of a Date Planning AI Assistant feature for dating apps, focused on streamlining planning and coordination.",
                            shortDescription: "Smart date planning tool"
                        },
                        {
                            title: "LIP 45",
                            link: "https://assets.nextleap.app/submissions/LIP45-627ba169-13db-46ea-93ed-dd16491da01c.pdf",
                            tags: ["Strategy", "Case Study"],
                            summary: "Heuristic evaluation of Blinkit’s user experience across core flows, identifying usability gaps through Jakob Nielsen’s principles.",
                            shortDescription: "Strategic business case study"
                        },
                        {
                            title: "Credit on UPI Market",
                            link: "https://assets.nextleap.app/submissions/CaseStudyCreditonUPImarketinIndia1-7fc1db7c-830e-480d-a572-1e3da8a3d05f.pdf",
                            tags: ["FinTech", "UPI"],
                            summary: "Case study on the Credit on UPI market in India, analyzing growth, value propositions, and trends in credit services.",
                            shortDescription: "UPI market credit analysis"
                        }
                    ].map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="project-card glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-placeholder item-type-pdf">
                                <div className="project-overlay">
                                    <p>{project.summary}</p>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.shortDescription}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="section-spacer" style={{ height: '4rem' }}></div>

                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    AI Projects
                </motion.h2>

                <div className="projects-grid">
                    {[
                        {
                            title: "CardWise Choose",
                            shortDescription: "Smart credit card selection tool",
                            summary: "Help people choose the best credit card based on personalized inputs. Makes comparing rewards, fees, and benefits simple and tailored to individual spending patterns.",
                            tags: ["Finance", "AI", "Comparison"],
                            link: "https://creditcard-choose.lovable.app/"
                        },
                        {
                            title: "PolicyPal Selector",
                            shortDescription: "Insurance decision helper",
                            summary: "Simplifies choosing health, life, and vehicle insurance by guiding users through personalized questions to find policies that match their needs and budget.",
                            tags: ["Insurance", "Health", "Decision Tool"],
                            link: "https://policypal-selector.lovable.app/"
                        },
                        {
                            title: "Can You Afford It?",
                            shortDescription: "20+ financial calculators",
                            summary: "A lot of people regret making wrong financial decisions. These 20 tools help someone make better financial decisions - from home buying to retirement planning, get instant answers to your money questions.",
                            tags: ["Calculators", "Planning", "Money"],
                            link: "https://finance-tools-livid.vercel.app/"
                        }
                    ].map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="project-card glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-placeholder">
                                <div className="project-overlay">
                                    <p>{project.summary}</p>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.shortDescription}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <p className="projects-note">More details coming soon...</p>
            </div>
        </section >
    );
};

export default Projects;
