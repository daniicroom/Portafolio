import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link
} from "@react-pdf/renderer";
import { RESUME_DATA } from "../data/resume-data";

Font.register({
  family: 'IBM Plex Serif',
  fonts: [
    { src: '/fonts/IBMPlexSerif-Bold.ttf', fontWeight: 700 },
    { src: '/fonts/IBMPlexSerif-Regular.ttf', fontWeight: 400 },
    { src: "/fonts/IBMPlexSerif-Italic.ttf", fontStyle: "italic" }
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 18,
    fontFamily: 'IBM Plex Serif',
    fontSize: 14,
    lineHeight: 1.5,
    backgroundColor: '#ffffff'
  },
  container: {
    marginLeft: 10,
  },
  header: {
    marginBottom: 16,
    textAlign: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headline: {
    fontSize: 10,
    letterSpacing: 4,
    marginBottom: 6,
    textTransform: 'uppercase'
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 4
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#475569',
    borderBottomWidth: 1,
    borderBottomColor: '#475569',
    paddingBottom: 4,
    marginLeft: -10
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  jobCompany: {
    fontWeight: 'bold',
    marginTop: 6
  },
  jobPosition: {
    fontStyle: 'italic'
  },
  jobDate: {
    fontWeight: 'bold'
  },
  jobLink: {
    color: '#475569',
    textDecoration: 'none',
    marginBottom: 4
  },
  educationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
   skillsContainer: {
    marginBottom: 16,
  },
  skillCategory: {
    marginBottom: 12,
  },
  skillCategoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4962b4ff',
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 2
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  skillNameLevel: {
    flexDirection: 'row',
    width: '50%'
  },
  skillName: {
    fontWeight: 'bold',
    color: '#111827',
    marginRight: 4
  },
  skillLevel: {
    color: '#6B7280',
    fontStyle: 'italic'
  },
  skillKeywords: {
    width: '50%',
    color: '#6B7280',
    fontSize: 10,
    textAlign: 'right'
  },
  certification: {
    marginBottom: 8
  }
});

export const CVDocument = () => (
  <Document title={`Resume - ${RESUME_DATA.name}`}>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{RESUME_DATA.name}</Text>
          <Text style={styles.headline}>{RESUME_DATA.specialty}</Text>
          <View style={styles.contact}>
            <Text>{RESUME_DATA.contact.email}</Text>
            <Text>{RESUME_DATA.contact.tel}</Text>
            <Text>{RESUME_DATA.location}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Summary</Text>
        <Text>{RESUME_DATA.summary}</Text>

        <Text style={styles.sectionTitle}>Experience</Text>
        {RESUME_DATA.work.map((job, index) => (
          <View key={index} style={{ marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.boldText}>{job.start} - {job.end}</Text>
            </View>
            <Text style={styles.jobPosition}>{job.title}</Text>
            {job.link && (
              <Link src={job.link} style={styles.jobLink}>
                {job.link.replace('https://', '')}
              </Link>
            )}
            <Text>{job.description.replace(/^-+\s*/gm, '')}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Education</Text>
        {RESUME_DATA.education.map((edu, index) => (
          <View key={index} style={styles.educationRow}>
            <View style={{ width: '70%' }}>
              <Text style={styles.boldText}>{edu.school}</Text>
              <Text>{edu.degree}</Text>
            </View>
            <View style={{ width: '30%', alignItems: 'flex-end' }}>
              <Text style={styles.boldText}>{edu.start} - {edu.end}</Text>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Volunteering</Text>
        {RESUME_DATA.volunteering.map((vol, index) => (
          <View key={index} style={{ marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.boldText}>{vol.organization}</Text>
              <Text style={styles.boldText}>{vol.start} - {vol.end}</Text>
            </View>
            <Text style={styles.jobPosition}>{vol.role}</Text>
            <Text>{vol.description}</Text>
          </View>
        ))}

        {/* Skills Section - Organized by Category */}
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsContainer}>
              {RESUME_DATA.skills.map((skill, skillIndex) => (
                <View key={skillIndex} style={styles.skillItem}>
                  <View style={styles.skillNameLevel}>
                    <Text style={styles.skillName}>{skill.name}</Text>
                    <Text style={styles.skillLevel}>({getSkillLevel(skill.percent)})</Text>
                  </View>
                  <Text style={styles.skillKeywords}>
                    {skill.keywords.join(', ')}
                  </Text>
                </View>
              ))}
        </View>

        <Text style={styles.sectionTitle}>Certifications</Text>
        {RESUME_DATA.certifications.map((cert, index) => (
          <View key={index} style={styles.certification}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.boldText}>{cert.name}</Text>
              <Text style={styles.boldText}>{cert.year}</Text>
            </View>
            <Text>{cert.issuer}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Awards</Text>
        {RESUME_DATA.awards.map((award, index) => (
          <View key={index} style={{ marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.boldText}>{award.title}</Text>
              <Text style={styles.boldText}>{award.year}</Text>
            </View>
            <Text style={styles.jobPosition}>{award.awarder}</Text>
            <Text>{award.description}</Text>
          </View>
        ))}

         {/* Languages */}
        <Text style={styles.sectionTitle}>Languages</Text>
        {RESUME_DATA.languages.map((lang, index) => (
          <View key={index} style={{ marginBottom: 6 }}>
            <Text style={styles.boldText}>{lang.name}</Text>
            <Text>{lang.level}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export const getSkillLevel = (percent: number) => {
  if (percent >= 90) return 'Expert';
  if (percent >= 70) return 'Advanced';
  if (percent >= 50) return 'Intermediate'; 
  return 'Basic';
};