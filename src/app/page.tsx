import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";

export default function Page() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="text-center">
        <Avatar className="mx-auto mb-4 w-32 h-32">
          <AvatarImage
            src={RESUME_DATA.avatarUrl}
            alt={`${RESUME_DATA.name}'s avatar`}
          />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
        <p className="text-lg text-gray-600">{RESUME_DATA.specialty}</p>
        <p className="text-sm text-gray-500">
          <a
            href={RESUME_DATA.locationLink}
            className="hover:underline text-blue-600"
          >
            {RESUME_DATA.location}
          </a>
        </p>
      </header>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">{RESUME_DATA.about}</p>
        <p className="text-gray-700">{RESUME_DATA.summary}</p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-blue-600 hover:underline">{RESUME_DATA.contact.email}</a></p>
        <p>Phone: {RESUME_DATA.contact.tel}</p>
        <div className="flex space-x-4 mt-2">
        {RESUME_DATA.contact.social.map((social) => (
      <a
        key={social.name}
        href={social.url}
        className="text-socialIcon hover:text-link transition-colors"
        aria-label={social.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        {social.icon ? React.createElement(social.icon, { className: "w-6 h-6" }) : null}
      </a>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        {RESUME_DATA.education.map((edu) => (
          <Card key={edu.school} className="mb-4 p-4 shadow-lg">
            <CardHeader>
              <h3 className="text-lg font-medium">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-sm text-gray-500">
                {edu.start} - {edu.end}
              </p>
            </CardHeader>
          </Card>
        ))}
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        {RESUME_DATA.work.map((job) => (
          <div key={job.company} className="mb-4 p-4 border border-gray-300 rounded-lg shadow">
            <h3 className="text-lg font-medium">
              <a href={job.link} className="hover:underline text-blue-600">
                {job.title} at {job.company}
              </a>
            </h3>
            <p className="text-sm text-gray-500">
              {job.start} - {job.end}
            </p>
            <p className="text-gray-700">{job.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.badges?.map((badge) => (
                <span key={badge} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                  {badge}
                </span>
              ))}
            </div>
            <img src={job.logo} alt={`${job.company} logo`} className="mt-4 w-20 h-20 object-contain" />
          </div>
        ))}
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-2">
          {RESUME_DATA.skills.map((skill) => (
            <li key={skill} className="bg-blue-100 text-blue-600 p-2 rounded-md">
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        {RESUME_DATA.projects.map((project) => (
          <div key={project.title} className="mb-4 p-4 border border-gray-300 rounded-lg shadow">
            <h3 className="text-lg font-medium">
              {project.link ? (
                <a href={project.link.href} className="hover:underline text-blue-600">
                  {project.title}
                </a>
              ) : (
                <span>{project.title}</span>
              )}
            </h3>
            <p className="text-gray-700">{project.description}</p>
            <p className="text-sm text-gray-500">Tech Stack: {project.techStack.join(', ')}</p>
            <img src={project.logo} alt={`${project.title} logo`} className="mt-2 w-20 h-20 object-contain" />
          </div>
        ))}
      </Section>
    </div>
  );
}
