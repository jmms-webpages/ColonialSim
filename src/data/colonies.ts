import { Colony } from '../types';

export const COLONIES: Colony[] = [
  // NEW ENGLAND
  {
    id: 'MA',
    name: 'Massachusetts',
    abbreviation: 'MA',
    region: 'new_england',
    capital: 'Boston',
    keyConcepts: ['Shipbuilding', 'Merchant Trade', 'Puritan Heritage', 'Town Meetings', 'Sons of Liberty'],
    majorFigures: ['Samuel Adams', 'John Adams', 'Paul Revere', 'John Hancock'],
    patriotSupport: 52,
    loyalistSupport: 24,
    neutralSupport: 24,
    economicFocus: 'Commercial maritime trade, cod fishing, rum distilling, and shipbuilding along rocky coasts.',
    description: 'The epicenter of early revolutionary fervor and protests. Home to Boston Harbor, the Liberty Tree, and frequent friction with British customs officers.',
    svgPath: 'M 350,115 L 390,110 L 400,125 L 375,135 L 360,130 Z'
  },
  {
    id: 'NH',
    name: 'New Hampshire',
    abbreviation: 'NH',
    region: 'new_england',
    capital: 'Portsmouth',
    keyConcepts: ['Lumber & Timber', 'Royal Mast Pines', 'Frontier Settlements', 'Small Family Farms'],
    majorFigures: ['John Langdon', 'John Sullivan'],
    patriotSupport: 44,
    loyalistSupport: 26,
    neutralSupport: 30,
    economicFocus: 'White pine timber for the Royal Navy, fur trapping, and subsistence hill farming.',
    description: 'Supplied immense white pines reserved for Royal Navy masts. Frontiersmen resisted imperial logging restrictions.',
    svgPath: 'M 345,70 L 370,65 L 375,110 L 350,115 Z'
  },
  {
    id: 'RI',
    name: 'Rhode Island',
    abbreviation: 'RI',
    region: 'new_england',
    capital: 'Providence / Newport',
    keyConcepts: ['Religious Liberty', 'Atlantic Trade', 'Smuggling', 'Gaspee Affair'],
    majorFigures: ['Nathanael Greene', 'Stephen Hopkins'],
    patriotSupport: 55,
    loyalistSupport: 20,
    neutralSupport: 25,
    economicFocus: 'Molasses trade, distilling, coastal shipping, and defiance of imperial customs duties.',
    description: 'Founded on freedom of conscience; fiercely independent merchants actively defied the Navigation Acts, leading to the burning of the HMS Gaspee.',
    svgPath: 'M 365,135 L 380,135 L 378,145 L 365,145 Z'
  },
  {
    id: 'CT',
    name: 'Connecticut',
    abbreviation: 'CT',
    region: 'new_england',
    capital: 'Hartford / New Haven',
    keyConcepts: ['Fundamental Orders', 'Self-Governing Charter', 'Farming', 'Provisions for Continental Army'],
    majorFigures: ['Jonathan Trumbull', 'Roger Sherman', 'Nathan Hale'],
    patriotSupport: 50,
    loyalistSupport: 22,
    neutralSupport: 28,
    economicFocus: 'Livestock, wheat, dairy, and iron ore; nicknamed the "Provisions State".',
    description: 'Governed almost entirely under its own royal charter with elected governors, creating early precedent for republican administration.',
    svgPath: 'M 340,135 L 365,135 L 365,150 L 335,150 Z'
  },

  // MIDDLE COLONIES
  {
    id: 'NY',
    name: 'New York',
    abbreviation: 'NY',
    region: 'middle',
    capital: 'New York City / Albany',
    keyConcepts: ['Hudson Valley Estates', 'Deepwater Port', 'Ethnic Diversity', 'Loyalist Stronghold'],
    majorFigures: ['John Jay', 'Alexander Hamilton', 'Cadwallader Colden', 'Philip Schuyler'],
    patriotSupport: 36,
    loyalistSupport: 40,
    neutralSupport: 24,
    economicFocus: 'Flour milling, international commerce, fur trading, and tenant agriculture on great manors.',
    description: 'A cosmopolitan hub with a deeply divided population. Elite Loyalist landowners and royal administrators rivaled fiery Sons of Liberty.',
    svgPath: 'M 300,75 L 345,70 L 340,150 L 315,160 L 290,130 Z'
  },
  {
    id: 'NJ',
    name: 'New Jersey',
    abbreviation: 'NJ',
    region: 'middle',
    capital: 'Perth Amboy / Burlington',
    keyConcepts: ['Crossroads of the Revolution', 'Diverse Settlements', 'Iron Forges', 'Divided Allegiances'],
    majorFigures: ['William Livingston', 'William Franklin (Loyalist Governor)'],
    patriotSupport: 38,
    loyalistSupport: 36,
    neutralSupport: 26,
    economicFocus: 'Small grain farming, livestock, bog iron smelting, and crossroads commerce between NY and Philly.',
    description: 'Governor William Franklin (Benjamin Franklin’s son) remained staunchly Loyalist, dividing families throughout the colony.',
    svgPath: 'M 320,155 L 335,150 L 330,190 L 315,185 Z'
  },
  {
    id: 'PA',
    name: 'Pennsylvania',
    abbreviation: 'PA',
    region: 'middle',
    capital: 'Philadelphia',
    keyConcepts: ['Breadbasket Colony', 'Quaker Pacifism', 'Freedom of Religion', 'Continental Congress Host'],
    majorFigures: ['Benjamin Franklin', 'John Dickinson', 'Robert Morris'],
    patriotSupport: 42,
    loyalistSupport: 28,
    neutralSupport: 30,
    economicFocus: 'Vast wheat fields, flour export, printing presses, and iron manufacture in fertile river valleys.',
    description: 'Philadelphia was the largest, wealthiest city in British North America. A large Quaker population championed neutrality and peaceful conciliation.',
    svgPath: 'M 250,140 L 315,140 L 310,185 L 245,180 Z'
  },
  {
    id: 'DE',
    name: 'Delaware',
    abbreviation: 'DE',
    region: 'middle',
    capital: 'New Castle / Dover',
    keyConcepts: ['Lower Counties', 'Grain Trade', 'River Shipping', 'Chesapeake Connection'],
    majorFigures: ['Caesar Rodney', 'George Read'],
    patriotSupport: 40,
    loyalistSupport: 32,
    neutralSupport: 28,
    economicFocus: 'Grain production, merchant flour mills along Brandywine Creek, and bay commerce.',
    description: 'Sharing an executive with Pennsylvania, its delegates cast legendary tie-breaking votes for the Declaration in July 1776.',
    svgPath: 'M 310,185 L 322,185 L 318,210 L 308,205 Z'
  },

  // SOUTHERN COLONIES
  {
    id: 'MD',
    name: 'Maryland',
    abbreviation: 'MD',
    region: 'southern',
    capital: 'Annapolis',
    keyConcepts: ['Toleration Act', 'Tobacco Plantations', 'Enslaved Labor', 'Chesapeake Bay Trade'],
    majorFigures: ['Charles Carroll', 'Samuel Chase'],
    patriotSupport: 45,
    loyalistSupport: 27,
    neutralSupport: 28,
    economicFocus: 'Tobacco farming, wheat transitions, shipbuilding in Baltimore, and reliance on enslaved laborers.',
    description: 'Home to affluent Catholic and Protestant gentry whose tobacco livelihoods were heavily indebted to British merchant banks.',
    svgPath: 'M 245,185 L 305,185 L 305,215 L 255,205 Z'
  },
  {
    id: 'VA',
    name: 'Virginia',
    abbreviation: 'VA',
    region: 'southern',
    capital: 'Williamsburg',
    keyConcepts: ['House of Burgesses', 'Tobacco Gentry', 'Enslaved Labor Force', 'Revolutionary Leadership'],
    majorFigures: ['George Washington', 'Thomas Jefferson', 'Patrick Henry', 'George Mason'],
    patriotSupport: 56,
    loyalistSupport: 22,
    neutralSupport: 22,
    economicFocus: 'Massive tobacco export plantations worked by thousands of enslaved African Americans.',
    description: 'The oldest and most populous colony. Its House of Burgesses provided iconic intellectual and military leaders of the resistance.',
    svgPath: 'M 220,205 L 300,215 L 290,260 L 205,245 Z'
  },
  {
    id: 'NC',
    name: 'North Carolina',
    abbreviation: 'NC',
    region: 'southern',
    capital: 'New Bern',
    keyConcepts: ['Naval Stores (Pitch & Tar)', 'Regulator Movement', 'Highland Scots Loyalists', 'Tobacco & Timber'],
    majorFigures: ['Richard Caswell', 'Cornelius Harnett'],
    patriotSupport: 43,
    loyalistSupport: 35,
    neutralSupport: 22,
    economicFocus: 'Pine tar and pitch for ship sealing, tobacco, and frontier livestock farming.',
    description: 'Recent internal civil conflict (The War of the Regulation) left deep distrust between western backcountry farmers and eastern coastal elites.',
    svgPath: 'M 200,250 L 285,260 L 275,295 L 185,280 Z'
  },
  {
    id: 'SC',
    name: 'South Carolina',
    abbreviation: 'SC',
    region: 'southern',
    capital: 'Charleston',
    keyConcepts: ['Rice & Indigo', 'Wealthy Planter Class', 'Enslaved Majority', 'Charleston Harbor'],
    majorFigures: ['Christopher Gadsden', 'Edward Rutledge', 'William Henry Drayton'],
    patriotSupport: 42,
    loyalistSupport: 38,
    neutralSupport: 20,
    economicFocus: 'High-value rice and indigo plantations fueled by a brutal enslaved labor system with a Black majority population.',
    description: 'Boasted the wealthiest planter aristocracy in British North America, with extreme loyalty to King George among backcountry settlers.',
    svgPath: 'M 185,285 L 265,300 L 245,335 L 175,315 Z'
  },
  {
    id: 'GA',
    name: 'Georgia',
    abbreviation: 'GA',
    region: 'southern',
    capital: 'Savannah',
    keyConcepts: ['Youngest Colony', 'Buffer Against Spanish Florida', 'Crown Subsidies', 'Frontier Defense'],
    majorFigures: ['Lyman Hall', 'Button Gwinnett', 'James Wright (Royal Governor)'],
    patriotSupport: 34,
    loyalistSupport: 44,
    neutralSupport: 22,
    economicFocus: 'Rice, lumber, indigo, and reliance on royal British troops for protection along the Spanish and Native frontier.',
    description: 'Founded only in 1732; as the youngest colony, it heavily relied on royal military defense and was the slowest to embrace open rebellion.',
    svgPath: 'M 170,320 L 235,340 L 220,385 L 155,360 Z'
  }
];

export const REGIONS = {
  new_england: {
    name: 'New England',
    colonies: ['MA', 'NH', 'RI', 'CT'],
    climateGeography: 'Cold winters, short growing season, rocky soil, dense forests, excellent natural harbors.',
    economy: 'Shipbuilding, commercial fishing, whaling, transatlantic merchant shipping, timber, small family subsistence farming.',
    cultureSociety: 'Puritan and Congregational traditions, high literacy, direct democracy through town meetings, dense coastal towns.'
  },
  middle: {
    name: 'Middle Colonies',
    colonies: ['NY', 'NJ', 'PA', 'DE'],
    climateGeography: 'Temperate climate, longer growing season, rich deep soil, navigable rivers (Hudson, Delaware, Susquehanna).',
    economy: 'Known as the "Breadbasket" for surplus wheat, rye, barley, livestock, active flour mills, and bustling port cities (NYC and Philadelphia).',
    cultureSociety: 'Great ethnic and religious diversity (Quakers, Dutch, Germans, Scots-Irish), religious tolerance, commercial tolerance.'
  },
  southern: {
    name: 'Southern Colonies',
    colonies: ['MD', 'VA', 'NC', 'SC', 'GA'],
    climateGeography: 'Warm climate, long hot summers, fertile coastal plains and tidewater rivers.',
    economy: 'Cash-crop agriculture (tobacco in VA/MD; rice and indigo in SC/GA; naval stores in NC). Highly dependent on chattel slavery.',
    cultureSociety: 'Hierarchical planter aristocracy, dispersed rural plantations, county-based government, Anglican church dominance.'
  }
};
