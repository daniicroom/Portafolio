import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <div>
      <header>
        <h1>{RESUME_DATA.name}</h1>
        <p>{RESUME_DATA.specialty}</p>
        <p>
          <a href={RESUME_DATA.locationLink}>{RESUME_DATA.location}</a>
        </p>
        <img src={RESUME_DATA.avatarUrl} alt={`${RESUME_DATA.name}'s avatar`} />
      </header>

      <section>
        <h2>About</h2>
        <p>{RESUME_DATA.about}</p>
        <p>{RESUME_DATA.summary}</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: {RESUME_DATA.contact.email}</p>
        <p>Phone: {RESUME_DATA.contact.tel}</p>
        <div>
          {RESUME_DATA.contact.social.map((social) => (
            <a key={social.name} href={social.url}>
              <social.icon />
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2>Education</h2>
        {RESUME_DATA.education.map((edu) => (
          <div key={edu.school}>
            <h3>{edu.degree}</h3>
            <p>{edu.school}</p>
            <p>{edu.start} - {edu.end}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Work Experience</h2>
        {RESUME_DATA.work.map((job) => (
          <div key={job.company}>
            <h3>
              <a href={job.link}>{job.title} at {job.company}</a>
            </h3>
            <p>{job.start} - {job.end}</p>
            <p>{job.description}</p>
            {job.badges?.map((badge) => (
              <span key={badge} className="badge">{badge}</span>
            ))}
            <img src={job.logo} alt={`${job.company} logo`} />
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          {RESUME_DATA.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        {RESUME_DATA.projects.map((project) => (
          <div key={project.title}>
            <h3>
              {project.link ? (
                <a href={project.link.href}>{project.title}</a>
              ) : (
               <span>{project.title}</span>
             )}
            </h3>
            <p>{project.description}</p>
            <p>Tech Stack: {project.techStack.join(', ')}</p>
            <img src={project.logo} alt={`${project.title} logo`} />
          </div>
        ))}
      </section>
    </div>
  );
}