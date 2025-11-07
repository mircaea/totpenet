import { useEffect, useState } from 'react';
import { logAccessedNeuroSection } from 'firebasepackage';
import { useAppContext } from 'store';

const NeuronAnthropomorphic = () => {
  const { currentUser } = useAppContext();
  const [activeSection, setActiveSection] = useState('structura');

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      const request = {
        displayName: currentUser.displayName,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        id: currentUser.email,
      };
      console.log(request);
      logAccessedNeuroSection(request);
    }
  }, []);

  if (!currentUser) return null;

  const sections = {
    structura: {
      title: '🧍 STRUCTURA NEURONULUI-OM',
      content: [
        {
          subtitle: 'Cell Body / Soma (Corpul Celular) = TRUNCHIUL',
          points: [
            'Centrul de comandă al neuronului-om',
            'Conține nucleus (nucleul) - creierul intern',
            'Produce energia necesară funcționării',
          ],
        },
        {
          subtitle: 'Axon (Axonul) = CORPUL ȘI MÂINILE',
          points: [
            'Corpul principal prin care călătorește informația',
            'Collateral branches (ramurile colaterale) = brațele laterale',
            'Terminal buttons (butoni terminali) = degetele care ating alți neuroni',
          ],
        },
        {
          subtitle: 'Dendrites (Dendritele) = PĂRUL DE PE CAP',
          points: [
            'Fire ramificate care primesc mesaje',
            'Acoperite de receptors (receptori) = radăcini senzoriale',
            'Cu cât mai multe dendrites (dendrite), cu atât mai multe "antene"',
          ],
        },
        {
          subtitle: 'Myelin Sheath (Teaca de Mielină) = PIELEA PROTECTOARE',
          points: [
            'Înveliș izolant în jurul axon-ului (axonului-corp)',
            'Nodes of Ranvier (noduri Ranvier) = articulații descoperite',
            'Accelerează transmisia electrical signal-ului (semnalului electric)',
          ],
        },
      ],
    },
    glia: {
      title: '👥 ECHIPA DE SUPORT - GLIA',
      content: [
        {
          subtitle: 'Astrocytes (Astrocitele) = PERSONALUL MEDICAL',
          points: [
            'Star-shaped form (forma stelată) = asistente în jurul neurons (neuronilor)',
            'Curăță neurotransmitters (neurotransmițătorii) după utilizare',
            'Mențin blood-brain barrier (bariera creier-sânge) = sistemul de securitate',
            'Detoxification (detoxifică) și protejează mediul neuronal',
          ],
        },
        {
          subtitle:
            'Oligodendrocytes (Oligodendrocite) în CNS / SNC = CROITORII INTERNI',
          points: [
            'Creează myelin sheath (teaca de mielină) în brain (creier)',
            'Înfășoară axons (axonii) pentru insulation (izolație)',
            'Un oligodendrocyte (oligodendrocit) = mai mulți neurons (neuroni) îmbrăcați',
          ],
        },
        {
          subtitle:
            'Schwann Cells (Celule Schwann) în PNS / SNP = CROITORII EXTERNI',
          points: [
            'Myelinate (mielinizează) axons (axonii) din peripheral nerves (nervii periferici)',
            'O Schwann cell (celulă Schwann) = un singur axon segment (segment de axon)',
            'Permit regeneration (regenerarea) peripheral nerves (nervilor periferici)',
          ],
        },
      ],
    },
    comunicare: {
      title: '⚡ COMUNICAREA ELECTRICĂ',
      content: [
        {
          subtitle:
            'Resting Potential (Potențial de Repaus) = STAREA DE AȘTEPTARE',
          points: [
            'Neuronul-om stă liniștit la resting membrane potential (potențial de membrană de repaus) de -65mV',
            'Na+ (sodiu) vrea să intre (ca fanii înainte de concert)',
            'K+ (potasiu) "picură" afară (ca niște spectatori plictisiți)',
            'Cell membrane (membrana) = ușa cu selective ion channels (portari selectivi / canale ionice selective)',
          ],
        },
        {
          subtitle: 'Action Potential (Potențial de Acțiune) = UNDA DE ENERGIE',
          points: [
            'Stimulus (stimul) ajunge → Se deschid Na+ gates (porțile Na+)',
            'DEPOLARIZATION (DEPOLARIZARE): Na+ intră în avalanșă → membrane (membrana) devine pozitivă',
            'OVERSHOOT: Moment scurt de positivitate (+40mV)',
            'REPOLARIZATION (REPOLARIZARE): K+ iese → revenire la negativ',
            'UNDERSHOOT (HIPERPOLARIZARE): Depășire temporară sub -65mV',
          ],
        },
        {
          subtitle:
            'All-or-None Principle (Principiul "Tot sau Nimic") = ARTIFICIUL',
          points: [
            'Odată aprins, arde până la capăt',
            'Nu există action potential (potențial de acțiune) "slab" sau "puternic"',
            'Duration (durată): ~2 milliseconds (milisecunde)',
            'Speed (viteză): ~10 m/s (mai rapid cu myelin / mielină)',
          ],
        },
        {
          subtitle: 'Information Coding (Codificarea Informației)',
          points: [
            'INTENSITY (INTENSITATE) = frequency (frecvența) potențialelor (max ~1000Hz)',
            'Strong stimulus (stimul puternic) = mai multe action potentials (potențiale)/secundă',
            'Distribution (distribuția) active neurons (neuronilor activi) = message pattern (pattern-ul mesajului)',
          ],
        },
      ],
    },
    sinapsa: {
      title: '🤝 SINAPSELE - PUNCTELE DE CONTACT',
      content: [
        {
          subtitle: 'Synapse (Sinapsa) = STRÂNGEREA DE MÂNĂ',
          points: [
            'Synaptic cleft (fanta sinaptică) = spațiul între două palme',
            'Presynaptic neuron (neuron presinaptic) = cel care întinde mâna',
            'Postsynaptic neuron (neuron postsinaptic) = cel care primește strângerea',
          ],
        },
        {
          subtitle: 'Electrical Synapses (Sinapse Electrice) = ÎMBRĂȚIȘAREA',
          points: [
            'Direct contact (contact direct), fast (rapid), bidirectional (bidirecțional)',
            'Ions (ionii) trec direct între cytoplasm (citoplasmele) celor doi',
            'Role (rol): perfect neuronal synchronization (sincronizare neuronală perfectă)',
          ],
        },
        {
          subtitle: 'Chemical Synapses (Sinapse Chimice) = SCHIMBUL DE MESAJE',
          points: [
            'Axodendritic (axodendritice): Mâna → Păr (cel mai frecvent)',
            'Axosomatic (axosomatice): Mâna → Trunchi',
            'Axoaxonic (axoaxonice): Mâna → Mâna altuia',
            'Dendrodendritic (dendrodendritice): Păr → Păr',
            'Neuromuscular junctions (joncțiuni neuromusculare): Neurons (neuroni) → Muscles (mușchi) (în afara CNS / SNC)',
          ],
        },
      ],
    },
    neurotransmitatori: {
      title: '💊 NEUROTRANSMIȚĂTORII - MESAGERII CHIMICI',
      content: [
        {
          subtitle: 'Amino Acids (Aminoacizi) = Mesagerii de Bază',
          points: [
            'GABA (gamma-aminobutyric acid / acid gamma-aminobutiric): Mesaj de calm ("oprește-te")',
            'Glutamate (glutamat): Mesaj de acțiune ("pornește!")',
            'Glycine (glicină): Inhibitory message (mesaj inhibitor) în spinal cord (măduva spinării)',
          ],
        },
        {
          subtitle: 'Amines (Amine) = Mesagerii Emoționali',
          points: [
            'Acetylcholine (acetilcolină): Mesaj pentru movement (mișcare) și memory (memorie)',
            'Dopamine (dopamină): Mesaj de pleasure (plăcere) și motivation (motivație)',
            'Serotonin (serotonină): Mesaj de happiness (fericire)',
            'Norepinephrine (norepinefrină): Mesaj de alertness (alertă)',
            'Epinephrine (epinefrină): Emergency message (mesaj de urgență)',
          ],
        },
        {
          subtitle: 'Peptides (Peptide) = Mesagerii Complecși',
          points: [
            'Substance P (substanța P): Pain message (mesaj de durere)',
            'Enkephalin/Dynorphin (enkefalină/dinorfină): Anti-pain messages (mesaje anti-durere)',
            'Neuropeptide Y (neuropeptid Y): Hunger message (mesaj de foame)',
            'Somatostatin (somatostatină): Hormonal regulation message (mesaj de reglare hormonală)',
          ],
        },
        {
          subtitle: 'Lock-and-Key Mechanism (Mecanismul Cheie-Lacăt)',
          points: [
            'Neurotransmitter (neurotransmițător) = key (cheia)',
            'Receptor (receptor) = lock (lacătul)',
            'Binding (lipirea) schimbă conformational shape (forma) receptor protein (proteinei receptor)',
            'Shape change (schimbarea formei) → cellular function modification (modificare funcție celulară)',
          ],
        },
      ],
    },
    receptori: {
      title: '🔓 RECEPTORII - LACĂTELE',
      content: [
        {
          subtitle:
            'Ligand-Gated Ion Channels (Canale Ionice cu Transmițător) = Porți Rapide',
          points: [
            'Neurotransmitter (neurotransmițătorul) binds (se leagă) → gate (poarta) se deschide instant',
            'Ions (ionii) intră/ies imediat',
            'Fast response (răspuns rapid) (milliseconds / milisecunde)',
            'Ex: GABA-A receptor, nicotinic receptor (receptor nicotinic)',
          ],
        },
        {
          subtitle:
            'G-Protein Coupled Receptors (Receptori Cuplați cu Proteine G) = Porți Lente',
          points: [
            'Neurotransmitter (neurotransmițătorul) activează o internal cascade (cascadă internă)',
            'Slower but longer-lasting effects (efecte mai lente dar mai durabile)',
            'Can amplify signal (pot amplifica semnalul)',
            'Ex: dopaminergic receptors (receptori dopaminergici), serotonergic receptors (receptori serotoninergici)',
          ],
        },
      ],
    },
  };

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
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#6a1b9a',
      fontWeight: 'bold',
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
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '10px',
    },
    arrow: {
      color: '#7b1fa2',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      flexShrink: 0,
      marginTop: '2px',
    },
    pointText: {
      color: '#333',
      lineHeight: '1.6',
      flex: 1,
    },
    infoBox: {
      background: '#fff3cd',
      borderLeft: '4px solid #ffc107',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '30px',
    },
    infoBoxText: {
      color: '#856404',
      lineHeight: '1.6',
      marginTop: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainCard}>
        <h1 style={styles.title}>🧠 Neuronul Antropomorf</h1>
        <p style={styles.subtitle}>
          Neuroanatomia celulară explicată prin metafora corpului uman
        </p>

        <div style={styles.buttonContainer}>
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              style={
                activeSection === key
                  ? styles.navButtonActive
                  : styles.navButton
              }
            >
              {sections[key as keyof typeof sections].title}
            </button>
          ))}
        </div>

        <div style={styles.contentArea}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              {sections[activeSection as keyof typeof sections].title}
            </h2>
          </div>

          {sections[activeSection as keyof typeof sections].content.map(
            (section, idx) => (
              <div key={idx} style={styles.subsection}>
                <h3 style={styles.subsectionTitle}>{section.subtitle}</h3>
                <div style={styles.contentCard}>
                  {section.points.map((point, pointIdx) => (
                    <div
                      key={pointIdx}
                      style={{
                        ...styles.point,
                        marginBottom:
                          pointIdx === section.points.length - 1 ? 0 : '10px',
                      }}
                    >
                      <span style={styles.arrow}>→</span>
                      <p style={styles.pointText}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <div style={styles.infoBox}>
          <p style={styles.infoBoxText}>
            <strong>💡 Learning Method (Metoda de învățare):</strong>{' '}
            Vizualizează fiecare concept ca pe o parte a corpului uman. Când
            vorbești despre axon, gândește-te la corpul tău și brațele tale care
            transmit actions (acțiuni). Când vorbești despre dendrites
            (dendrite), gândește-te la părul tău care simte surrounding
            environment (mediul înconjurător).
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeuronAnthropomorphic;
