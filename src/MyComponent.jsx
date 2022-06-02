
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    
  },
  section: {
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section: Don</Text>
      </View>
      <View style={styles.section}>
        <Text>Section: One</Text>
      </View>
      <View style={styles.section}>
        <Text>Section: is cool</Text>
      </View>
    </Page>
  </Document>
);

const App = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
);

//ReactDOM.render(<App />);

export default App;
