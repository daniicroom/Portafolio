import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font
} from "@react-pdf/renderer";
import { RESUME_DATA } from "../data/resume-data";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "/fonts/OpenSans-Regular.ttf",
      fontWeight: 400,
    },
    {
      src: "/fonts/OpenSans-Bold.ttf",
      fontWeight: 700,
    },
    {
      src: "/fonts/OpenSans-Italic.ttf",
      fontWeight: 400,
      fontStyle: "italic"
    }
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Open Sans",
    lineHeight: 1.6,
    color: "#333"
  },
  section: {
    marginBottom: 15
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 700,
    color: "#149ddd"
  },
  subheading: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight: 600
  },
  paragraph: {
    marginBottom: 6
  },
  skillBar: {
    height: 4,
    backgroundColor: "#ddd",
    marginVertical: 2
  },
  skillLevelBase: {
    height: 4,
    backgroundColor: "#149ddd"
  },
  experienceItem: {
    marginBottom: 10
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: 700
  },
  experiencePeriod: {
    fontSize: 10,
    fontStyle: "italic"
  },
  experienceBullet: {
    fontSize: 10,
    marginLeft: 10
  },
  certItem: {
    fontSize: 10,
    marginBottom: 4
  },
  eduItem: {
    marginBottom: 8
  },
  eduTitle: {
    fontSize: 12,
    fontWeight: 700
  },
  eduPeriod: {
    fontSize: 10,
    fontStyle: "italic"
  },
  langItem: {
    fontSize: 10,
    marginBottom: 4
  },
  awardItem: {
    fontSize: 10,
    marginBottom: 4
  },
  projectItem: {
    fontSize: 10,
    marginBottom: 6
  }
});

export const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.paragraph}>{RESUME_DATA.about}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Summary</Text>
        <Text style={styles.paragraph}>{RESUME_DATA.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        {RESUME_DATA.skills?.map((skill, index) => (
          <Text key={index} style={styles.paragraph}>{skill.name}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Professional Experience</Text>
        {RESUME_DATA.work?.map((job, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.experienceTitle}>{job.title} - {job.company}</Text>
            <Text style={styles.experiencePeriod}>{job.start} - {job.end}</Text>
            <Text style={styles.experienceBullet}>{job.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {RESUME_DATA.education?.map((edu, index) => (
          <View key={index} style={styles.eduItem}>
            <Text style={styles.eduTitle}>{edu.degree} - {edu.school}</Text>
            <Text style={styles.eduPeriod}>{edu.start} - {edu.end}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Certifications</Text>
        {RESUME_DATA.certifications?.map((cert, index) => (
          <Text key={index} style={styles.certItem}>{cert.name} - {cert.issuer}, {cert.year}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Awards</Text>
        {RESUME_DATA.awards?.map((award, index) => (
          <Text key={index} style={styles.awardItem}>{award.title} - {award.organization}: {award.description}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Languages</Text>
        {RESUME_DATA.languages?.map((lang, index) => (
          <Text key={index} style={styles.langItem}>{lang.name} - {lang.level}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Stats</Text>
        {RESUME_DATA.stats.map((stat, i) => (
          <Text key={i} style={styles.paragraph}>{stat.label}: {stat.value}+</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        {RESUME_DATA.skills.map((skill) => (
          <View key={skill.name}>
            <Text style={styles.subheading}>{skill.name} - {skill.percent}%</Text>
            <View style={styles.skillBar}>
              <View style={[styles.skillLevelBase, { width: `${skill.percent}%` }]} />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        {RESUME_DATA.projects?.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.subheading}>{project.title}</Text>
            <Text style={styles.paragraph}>{project.description}</Text>
            <Text style={styles.paragraph}>Tech Stack: {project.techStack.join(", ")}</Text>
            <Text style={styles.paragraph}>Link: {project.link.href}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
