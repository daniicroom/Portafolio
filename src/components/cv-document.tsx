import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link
} from "@react-pdf/renderer";
import { getResumeData, type Locale } from "../data";

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
    padding: 12,
    fontFamily: 'IBM Plex Serif',
    fontSize: 11,
    lineHeight: 1.3,
    backgroundColor: '#ffffff'
  },
  container: {
    marginLeft: 5,
  },
  header: {
    marginBottom: 10,
    textAlign: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headline: {
    fontSize: 10,
    letterSpacing: 0.5,
    marginBottom: 3,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 2,
    fontSize: 9
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 4,
    color: '#475569',
    borderBottomWidth: 1,
    borderBottomColor: '#475569',
    paddingBottom: 2,
    marginLeft: -5
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 2
  },
  jobCompany: {
    fontWeight: 'bold',
    marginTop: 3,
    fontSize: 11
  },
  jobPosition: {
    fontStyle: 'italic',
    fontSize: 10
  },
  jobDate: {
    fontWeight: 'bold',
    fontSize: 10
  },
  jobLink: {
    color: '#475569',
    textDecoration: 'none',
    marginBottom: 2
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

export const CVDocument = ({ locale = "en" }: { locale?: Locale }) => {
  const RESUME_DATA = getResumeData(locale);
  const translations = {
    summary: locale === "es" ? "Resumen" : "Summary",
    experience: locale === "es" ? "Experiencia" : "Experience",
    education: locale === "es" ? "Educación" : "Education",
    volunteering: locale === "es" ? "Voluntariado" : "Volunteering",
    technicalSkills: locale === "es" ? "Habilidades Técnicas" : "Technical Skills",
    certifications: locale === "es" ? "Certificaciones" : "Certifications",
    awards: locale === "es" ? "Premios" : "Awards",
    languages: locale === "es" ? "Idiomas" : "Languages",
  };

  return (
  <Document title={`Resume - ${RESUME_DATA.personal.name}`}>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{RESUME_DATA.personal.name}</Text>
          <Text style={styles.headline}>{RESUME_DATA.personal.title}</Text>
          <View style={styles.contact}>
            <Text>{RESUME_DATA.contact.email}</Text>
            <Text>{RESUME_DATA.contact.tel}</Text>
            <Text>{RESUME_DATA.personal.location}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>{translations.summary}</Text>
        <Text>{RESUME_DATA.summary.full}</Text>

        <Text style={styles.sectionTitle}>{translations.experience}</Text>
        {RESUME_DATA.work.map((job, index) => (
          <View key={index} style={{ marginBottom: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 }}>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.jobDate}>{job.start} - {job.end}</Text>
            </View>
            <Text style={styles.jobPosition}>{job.title}</Text>
            {job.link && (
              <Link src={job.link} style={styles.jobLink}>
                {job.link.replace('https://', '')}
              </Link>
            )}
            {Array.isArray((job as any).technologies) && (job as any).technologies.length > 0 && (
              <Text style={{ fontSize: 8, marginBottom: 2, marginTop: 2 }}>
                Tech: {(job as any).technologies.join(', ')}
              </Text>
            )}
            {Array.isArray(job.achievements) && job.achievements.length > 0 && (
              <View style={{ marginTop: 2 }}>
                {job.achievements.slice(0, 3).map((achievement, i) => (
                  <Text key={i} style={{ fontSize: 8, marginBottom: 1 }}>
                    • {achievement}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}

        <Text style={styles.sectionTitle}>{translations.education}</Text>
        {RESUME_DATA.education.map((edu, index) => (
          <View key={index} style={{ marginBottom: 4, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{edu.school}</Text>
              <Text style={{ fontSize: 9 }}>{edu.degree}</Text>
            </View>
            <Text style={{ fontSize: 9, fontWeight: 'bold', marginLeft: 8 }}>{edu.start} - {edu.end}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{translations.volunteering}</Text>
        {RESUME_DATA.volunteering.map((vol, index) => (
          <View key={index} style={{ marginBottom: 6 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.boldText}>{vol.organization}</Text>
              <Text style={styles.boldText}>{vol.start} - {vol.end}</Text>
            </View>
            <Text style={styles.jobPosition}>{vol.role}</Text>
            <Text>{vol.description}</Text>
          </View>
        ))}

        {/* Skills Section - Organized by Category (2 Columns) */}
        <Text style={styles.sectionTitle}>{translations.technicalSkills}</Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <View style={{ flex: 1 }}>
            {RESUME_DATA.skills.slice(0, Math.ceil(RESUME_DATA.skills.length / 2)).map((skillCategory, skillIndex) => (
              <View key={skillIndex} style={{ marginBottom: 6 }}>
                <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 2, color: '#1f2937' }}>
                  {skillCategory.category}
                </Text>
                <Text style={{ fontSize: 8, marginBottom: 4 }}>
                  {skillCategory.skills.join(', ')}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            {RESUME_DATA.skills.slice(Math.ceil(RESUME_DATA.skills.length / 2)).map((skillCategory, skillIndex) => (
              <View key={skillIndex} style={{ marginBottom: 6 }}>
                <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 2, color: '#1f2937' }}>
                  {skillCategory.category}
                </Text>
                <Text style={{ fontSize: 8, marginBottom: 4 }}>
                  {skillCategory.skills.join(', ')}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>{translations.certifications}</Text>
        {RESUME_DATA.certifications.map((cert, index) => (
          <View key={index} style={{ marginBottom: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{cert.name}</Text>
              <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{cert.year}</Text>
            </View>
            <Text style={{ fontSize: 8 }}>{cert.issuer}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{translations.awards}</Text>
        {RESUME_DATA.awards.map((award, index) => (
          <View key={index} style={{ marginBottom: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{award.title}</Text>
              <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{award.year}</Text>
            </View>
            <Text style={{ fontSize: 9, fontStyle: 'italic' }}>{award.awarder}</Text>
            <Text style={{ fontSize: 8 }}>{award.description}</Text>
          </View>
        ))}

         {/* Languages */}
        <Text style={styles.sectionTitle}>{translations.languages}</Text>
        {RESUME_DATA.languages.map((lang, index) => (
          <View key={index} style={{ marginBottom: 2 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{lang.name}</Text>
            <Text style={{ fontSize: 9 }}>{lang.level}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
  );
};