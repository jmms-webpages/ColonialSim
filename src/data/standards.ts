import { OhioStandard } from '../types';

export const OHIO_STANDARDS: OhioStandard[] = [
  {
    id: 'OH-SS.8.1',
    code: 'OH-SS.8.1',
    title: 'Primary & Secondary Historical Sources',
    description: 'Primary and secondary sources are used to examine events from multiple perspectives and evaluate historical claims and evidence.',
    strand: 'History / Historical Thinking',
    testedInChapters: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'OH-SS.8.2',
    code: 'OH-SS.8.2',
    title: 'Colonial Regions & Geography',
    description: 'North American colonization resulted in distinct regional cultures, economies, and labor systems in New England, Middle, and Southern colonies.',
    strand: 'Geography / Regional Economies',
    testedInChapters: [1, 2, 3]
  },
  {
    id: 'OH-SS.8.3',
    code: 'OH-SS.8.3',
    title: 'French & Indian War & Imperial Debt',
    description: 'The French and Indian War (1754–1763) shifted the balance of power in North America, resulting in British imperial debt and the Proclamation of 1763.',
    strand: 'History / Causes of Revolution',
    testedInChapters: [1]
  },
  {
    id: 'OH-SS.8.4',
    code: 'OH-SS.8.4',
    title: 'Taxation Without Representation',
    description: 'British parliamentary taxation policies (Sugar Act, Stamp Act, Townshend Acts, Tea Act) ended salutary neglect and sparked colonial constitutional arguments.',
    strand: 'Government & History / Taxation',
    testedInChapters: [2, 3, 4]
  },
  {
    id: 'OH-SS.8.5',
    code: 'OH-SS.8.5',
    title: 'Colonial Resistance & Unity',
    description: 'Colonists organized resistance through non-importation agreements, boycotts, the Sons and Daughters of Liberty, Committees of Correspondence, and Congresses.',
    strand: 'Government & History / Resistance',
    testedInChapters: [2, 3, 4]
  },
  {
    id: 'OH-SS.8.6',
    code: 'OH-SS.8.6',
    title: 'Escalation to Armed Conflict',
    description: 'Events including the Boston Massacre, Intolerable Acts, and military expeditions to Lexington and Concord escalated political disputes into armed rebellion.',
    strand: 'History / Outbreak of War',
    testedInChapters: [3, 4, 5]
  },
  {
    id: 'OH-SS.8.7',
    code: 'OH-SS.8.7',
    title: 'The Declaration of Independence',
    description: 'The Declaration of Independence articulated ideas of natural rights, the social contract, consent of the governed, and grievances against the Crown.',
    strand: 'Government / Founding Documents',
    testedInChapters: [5, 6]
  },
  {
    id: 'OH-SS.8.8',
    code: 'OH-SS.8.8',
    title: 'Conflicting Loyalties: Patriots, Loyalists, & Neutrals',
    description: 'Colonists held diverse political opinions; the decision to support the rebellion, stay loyal to the Crown, or remain neutral reflected complex social, economic, and moral factors.',
    strand: 'History / Perspectives',
    testedInChapters: [1, 2, 3, 4, 5, 6]
  }
];

export const ELA_STANDARDS: OhioStandard[] = [
  {
    id: 'OH-ELA.8.RI.1',
    code: 'OH-ELA.8.RI.1',
    title: 'Citing Textual Evidence',
    description: 'Cite textual evidence that most strongly supports an analysis of what the text says explicitly as well as inferences drawn from the text.',
    strand: 'ELA / Informational Text',
    testedInChapters: [2, 3, 5, 6]
  },
  {
    id: 'OH-ELA.8.RI.6',
    code: 'OH-ELA.8.RI.6',
    title: 'Author Point of View & Purpose',
    description: 'Determine an author point of view or purpose in a text and analyze how the author acknowledges and responds to conflicting evidence or viewpoints.',
    strand: 'ELA / Point of View',
    testedInChapters: [2, 3, 4]
  }
];

export function getStandardById(id: string): OhioStandard | undefined {
  return [...OHIO_STANDARDS, ...ELA_STANDARDS].find(s => s.id === id);
}
