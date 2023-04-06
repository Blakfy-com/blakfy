import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section class="projects-section">
            <div class="projects-companies">
                <div class="projects-company">
                    <li class="companyImage">
                        <img src="/images/CompaniesLogo/Birincioglu.webp" />
                    </li>
                </div>
                <div class="projects-company">
                    <li class="companyImage">
                        <img src="/images/CompaniesLogo/Galatahukuk.webp" />
                    </li>
                </div>
                <div class="projects-company">
                    <li class="companyImage">
                        <img src="/images/CompaniesLogo/Tripslab.webp" />
                    </li>
                </div>
            </div>
        </section>
    );
}

export default Projects;
