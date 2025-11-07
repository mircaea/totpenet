import React, { useState } from 'react';
import {
  anatomieContent,
  introContent,
  metode1Content,
  metode2Content,
  neuronSections,
} from './tabs-content';

const NeurostiinteApp = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [activeSection, setActiveSection] = useState('structura');

  const styles: any = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
      padding: '20px',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    },
    mainCard: {
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '40px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '2.5rem',
      color: '#6a1b9a',
      textAlign: 'center',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    subtitle: {
      textAlign: 'center',
      color: '#666',
      marginBottom: '30px',
      fontSize: '1.1rem',
    },
    tabContainer: {
      display: 'flex',
      gap: '5px',
      marginBottom: '30px',
      borderBottom: '2px solid #e0e0e0',
      overflowX: 'auto',
    },
    tab: {
      padding: '12px 20px',
      background: 'transparent',
      border: 'none',
      borderBottom: '3px solid transparent',
      color: '#666',
      cursor: 'pointer',
      fontSize: '0.95rem',
      fontWeight: '600',
      transition: 'all 0.3s',
      whiteSpace: 'nowrap',
    },
    tabActive: {
      padding: '12px 20px',
      background: 'transparent',
      border: 'none',
      borderBottom: '3px solid #7b1fa2',
      color: '#7b1fa2',
      cursor: 'pointer',
      fontSize: '0.95rem',
      fontWeight: '600',
      transition: 'all 0.3s',
      whiteSpace: 'nowrap',
    },
    selectContainer: {
      marginBottom: '30px',
    },
    selectLabel: {
      display: 'block',
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#666',
      marginBottom: '8px',
    },
    select: {
      padding: '14px 16px',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#7b1fa2',
      background: 'white',
      border: '2px solid #7b1fa2',
      borderRadius: '8px',
      cursor: 'pointer',
      outline: 'none',
      transition: 'all 0.3s',
      appearance: 'none',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237b1fa2' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 16px center',
      paddingRight: '45px',
    },
    buttonContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'center',
      marginBottom: '40px',
    },
    navButton: {
      padding: '12px 24px',
      border: '2px solid #7b1fa2',
      background: 'white',
      color: '#7b1fa2',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: '0.95rem',
    },
    navButtonActive: {
      padding: '12px 24px',
      border: '2px solid #7b1fa2',
      background: '#7b1fa2',
      color: 'white',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: '0.95rem',
      boxShadow: '0 4px 8px rgba(123, 31, 162, 0.3)',
    },
    contentArea: {
      background: 'linear-gradient(135deg, #e1bee7 0%, #bbdefb 100%)',
      borderRadius: '12px',
      padding: '30px',
    },
    sectionHeader: {
      fontSize: '2rem',
      color: '#6a1b9a',
      fontWeight: 'bold',
      marginBottom: '30px',
    },
    subsection: {
      marginBottom: '25px',
    },
    subsectionTitle: {
      fontSize: '1.4rem',
      color: '#7b1fa2',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    contentCard: {
      background: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    },
    point: {
      color: '#333',
      lineHeight: '1.8',
      marginBottom: '8px',
    },
    emptyState: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#999',
      fontSize: '1.2rem',
    },
  };

  const renderIntroContent = () => (
    <div style={styles.contentArea}>
      <h2 style={styles.sectionHeader}>📖 Introducere în Neuropsihologie</h2>
      {Object.values(introContent).map((section, idx) => (
        <div key={idx} style={styles.subsection}>
          <h3 style={styles.subsectionTitle}>{section.title}</h3>
          <div style={styles.contentCard}>
            {section.points.map((point, pointIdx) => (
              <p key={pointIdx} style={styles.point}>
                {point}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  const renderNeuronContent = () => (
    <>
      <div style={styles.buttonContainer}>
        {Object.keys(neuronSections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            style={
              activeSection === key ? styles.navButtonActive : styles.navButton
            }
          >
            {neuronSections[key as keyof typeof neuronSections].title}
          </button>
        ))}
      </div>

      <div style={styles.contentArea}>
        <h2 style={styles.sectionHeader}>
          {neuronSections[activeSection as keyof typeof neuronSections].title}
        </h2>
        {neuronSections[
          activeSection as keyof typeof neuronSections
        ].content.map((section, idx) => (
          <div key={idx} style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>{section.subtitle}</h3>
            <div style={styles.contentCard}>
              {section.points.map((point, pointIdx) => (
                <p key={pointIdx} style={styles.point}>
                  {point}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
  const renderAnatomieContent = () => (
    <div style={styles.contentArea}>
      <h2 style={styles.sectionHeader}>🏗️ Neuroanatomie Structurală</h2>
      {Object.values(anatomieContent as typeof anatomieContent).map(
        (section, idx) => (
          <div key={idx} style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>{section.title}</h3>
            <div style={styles.contentCard}>
              {section.points.map((point, pointIdx) => (
                <p key={pointIdx} style={styles.point}>
                  {point}
                </p>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
  const renderMetode1Content = () => (
    <div style={styles.contentArea}>
      <h2 style={styles.sectionHeader}>🔬 Metode Neuroștiințifice I</h2>
      {Object.values(metode1Content as typeof metode1Content).map(
        (section, idx) => (
          <div key={idx} style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>{section.title}</h3>
            <div style={styles.contentCard}>
              {section.points.map((point, pointIdx) => (
                <p key={pointIdx} style={styles.point}>
                  {point}
                </p>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
  const renderMetode2Content = () => (
    <div style={styles.contentArea}>
      <h2 style={styles.sectionHeader}>🔭 Metode Neuroștiințifice II</h2>
      {Object.values(metode2Content as typeof metode2Content).map(
        (section, idx) => (
          <div key={idx} style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>{section.title}</h3>
            <div style={styles.contentCard}>
              {section.points.map((point, pointIdx) => (
                <p key={pointIdx} style={styles.point}>
                  {point}
                </p>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.mainCard}>
        <h1 style={styles.title}>🧠 Neuroștiințe - Ghid Complet</h1>
        <p style={styles.subtitle}>
          Material educațional structurat pentru neuroanatomie și
          neuropsihologie
        </p>

        <div style={styles.selectContainer}>
          <label htmlFor='section-select' style={styles.selectLabel}>
            Selectează secțiunea:
          </label>
          <select
            id='section-select'
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            style={styles.select}
          >
            <option value='intro'>📖 Introducere în Neuropsihologie</option>
            <option value='neuron'>🧍 Neuronul Antropomorf</option>
            <option value='anatomie'>🏗️ Neuroanatomie Structurală</option>
            <option value='metode1'>🔬 Metode Neuroștiințifice 1</option>
            <option value='metode2'>🔭 Metode Neuroștiințifice 2</option>
          </select>
        </div>

        {activeTab === 'intro' && renderIntroContent()}
        {activeTab === 'neuron' && renderNeuronContent()}
        {activeTab === 'anatomie' && renderAnatomieContent()}
        {activeTab === 'metode1' && renderMetode1Content()}
        {activeTab === 'metode2' && renderMetode2Content()}
      </div>
    </div>
  );
};

export default NeurostiinteApp;
