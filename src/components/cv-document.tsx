import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet
} from "@react-pdf/renderer";
import { RESUME_DATA } from "../data/resume-data";

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
        <Text style={styles.heading}>Stats</Text>
        {RESUME_DATA.stats.map((stat, i) => (
          <Text key={i} style={styles.paragraph}>
            {stat.label}: {stat.value}+
          </Text>
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
    </Page>
  </Document>
);
