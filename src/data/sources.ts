import { PrimarySourceDoc } from '../types';

export const PRIMARY_SOURCES: PrimarySourceDoc[] = [
  {
    id: 'src_proclamation_1763',
    title: 'The Royal Proclamation of 1763',
    author: 'King George III',
    date: 'October 7, 1763',
    category: 'law',
    originalText: 'We do hereby strictly forbid, on Pain of our Displeasure, all our loving Subjects from making any Purchases or Settlements whatever, or taking Possession of any of the Lands above reserved, without our especial leave and licence for that Purpose first obtained.',
    simplifiedText: 'King George III strictly forbids any colonial subject from buying or settling on land west of the Appalachian Mountains without special royal permission.',
    historicalSignificance: 'Designed to prevent costly wars with Native American tribes after Pontiac War, it infuriated colonial veterans and land speculators who believed they had fought for the right to move west.'
  },
  {
    id: 'src_patrick_henry_resolves',
    title: 'Virginia Stamp Act Resolves',
    author: 'Patrick Henry (House of Burgesses)',
    date: 'May 29, 1765',
    category: 'speech',
    originalText: 'Resolved, therefore, that the General Assembly of this Colony have the only and exclusive Right and Power to lay Taxes and Impositions upon the Inhabitants of this Colony, and that every Attempt to vest such Power in any Person or Persons whatsoever, other than the General Assembly aforesaid, has a manifest Tendency to destroy British as well as American Freedom.',
    simplifiedText: 'Resolved: Only the elected Virginia General Assembly has the right to tax Virginians. Any outside group (like the British Parliament) attempting to tax them destroys British and American freedom.',
    historicalSignificance: 'Ignited colonial assemblies across the continent to pass matching resolutions asserting that "No Taxation Without Representation" was a sacred constitutional right.'
  },
  {
    id: 'src_boston_gazette_massacre',
    title: 'An Account of the Late Unhappy Disturbance on King Street',
    author: 'The Boston Gazette and Country Journal',
    date: 'March 12, 1770',
    category: 'newspaper',
    originalText: 'A few minutes after nine o\'clock, four or five soldiers came from the guard house with drawn swords and bayonets, abusing and wounding a number of persons... Capt. Preston with a party of men with charged bayonets, came from the main guard to the commissioner\'s house... A general attack was made on the people by a great number of heavy clubs, and snow balls; the soldiers fired, three men were laid dead on the spot, and two more struggling for life.',
    simplifiedText: 'A few minutes after 9 PM, soldiers with bayonets clashed with townspeople. Captain Preston arrived with troops. Snowballs and clubs were thrown; the soldiers fired, killing three on the spot and mortally wounding two others.',
    historicalSignificance: 'Helped frame the event as a deliberate "massacre" of civilians, fueling inter-colonial anger and sympathy for Boston.'
  },
  {
    id: 'src_suffolk_resolves',
    title: 'The Suffolk Resolves',
    author: 'Dr. Joseph Warren (Suffolk County, MA)',
    date: 'September 9, 1774',
    category: 'pamphlet',
    originalText: 'That no obedience is due from this province to either or any part of the said acts, but that they be rejected as the attempts of a wicked administration to enslave America... That during the present hostile appearances on the part of Great Britain, we are advised to arm and use our utmost diligence to acquaint ourselves with the art of war.',
    simplifiedText: 'Massachusetts owes no obedience to the Intolerable Acts; they are rejected as unconstitutional attempts to enslave America. Citizens are urged to arm themselves and train weekly in military tactics.',
    historicalSignificance: 'Carried to Philadelphia by Paul Revere and enthusiastically endorsed by the First Continental Congress, transforming local Massachusetts defiance into official united policy.'
  },
  {
    id: 'src_common_sense',
    title: 'Common Sense (On Monarchy and Hereditary Succession)',
    author: 'Thomas Paine',
    date: 'January 10, 1776',
    category: 'pamphlet',
    originalText: 'To the evil of monarchy we have added that of hereditary succession; and as the first is a degradation and lessening of ourselves, so the second, claimed as a matter of right, is an insult and an imposition on posterity. For all men being originally equals, no one by birth could have a right to set up his own family in perpetual preference to all others for ever.',
    simplifiedText: 'Monarchy degrades human dignity, and hereditary rule is an insult to future generations. Because all humans are created equal, no family can claim a birthright to rule over everyone else forever.',
    historicalSignificance: 'Shattered the mental barrier of reverence for King George III and rallied the masses behind the vision of an independent American republic.'
  },
  {
    id: 'src_declaration_independence',
    title: 'The Declaration of Independence',
    author: 'Thomas Jefferson & Continental Congress',
    date: 'July 4, 1776',
    category: 'declaration',
    originalText: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it...',
    simplifiedText: 'It is obvious that all people are created equal, with God-given rights to Life, Liberty, and the pursuit of Happiness. Governments are created by people only to protect these rights. When a government destroys these rights instead of protecting them, the people have the legal and moral right to change or overthrow it.',
    historicalSignificance: 'The foundational birth certificate of the United States, announcing to the world that government exists by the consent of the governed.'
  }
];

export function getSourceById(id: string): PrimarySourceDoc | undefined {
  return PRIMARY_SOURCES.find(s => s.id === id);
}
