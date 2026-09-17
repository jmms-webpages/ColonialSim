import { NewspaperArticle } from '../types';

export const NEWSPAPER_ARTICLES: NewspaperArticle[] = [
  {
    id: 'paper_boston_evening_post_1763',
    paperName: 'THE BOSTON EVENING-POST',
    editionDate: 'Monday, December 19, 1763',
    location: 'Boston, Province of Massachusetts-Bay',
    headline: 'THE ROYAL PROCLAMATION OF 1763: WESTERN FRONTIER SEALED TO COLONISTS',
    subtitle: 'His Majesty Forbids Settlement Beyond the Alleghenies—Ohio Pioneers Commanded to Forthwith Vacate',
    articleText: 'By His Majesty\'s Royal Proclamation given at the Court of St. James\'s, all colonial governors and subjects are strictly forbidden from making grants of lands, or settling beyond the heads of rivers flowing into the Atlantic ocean. All persons who have inadvertently seated themselves upon lands reserved to the Indian nations are enjoined forthwith to remove themselves from such settlements. This sudden decree hath cast a severe damp upon our bold adventurers and provincials who endured the late bloody war in hopes of peaceful estates in the Ohio Country. While the Crown professeth hereby to pacify Pontiac\'s tumults and maintain an Indian barrier, our merchants and veteran soldiers lament the sacrifice of rich western territories purchased with colonial blood and treasure.',
    perspective: 'Patriot',
    analysisQuestions: [
      {
        id: 'q_news_ch1_proclamation',
        chapter: 1,
        year: 1763,
        topic: 'Newspaper Analysis: Proclamation of 1763',
        standardId: 'OH-SS.8.3',
        elaStandardId: 'OH-ELA.8.RI.1',
        difficulty: 2,
        questionType: 'primary_source',
        prompt: 'According to this contemporary 1763 report, why did colonial settlers and veterans view the Royal Proclamation as an injustice?',
        options: [
          'Because it imposed an immediate direct stamp tax on newsprint and paper.',
          'Because colonists had sacrificed during the French and Indian War expecting to settle fertile western Ohio lands now forbidden to them.',
          'Because King George III ordered all Boston churches to toll their bells in mourning.',
          'Because Parliament decided to return Canada back to the King of France.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Colonial soldiers and settlers felt deeply betrayed because they had fought in the French and Indian War largely to secure access to the Ohio Valley, only to find the Crown abruptly forbidding all settlement beyond the Appalachian Mountains.',
        hint: 'Look at what the article says about "provincials who endured the late bloody war in hopes of peaceful estates in the Ohio Country".'
      }
    ]
  },
  {
    id: 'paper_london_chronicle_1763',
    paperName: 'THE LONDON CHRONICLE & ADVERTISER',
    editionDate: 'Tuesday, October 11, 1763',
    location: 'London, Great Britain',
    headline: 'HIS MAJESTY’S EXPEDIENT MEASURES FOR RESTORING PEACE ON THE AMERICAN FRONTIER',
    subtitle: 'The Indispensable Necessity of Restraining Lawless Speculators and Guarding Indian Lands',
    articleText: 'It is the unquestioned duty of a wise sovereign to preserve the peace of his dominions and check the unbridled rapacity of borderers and land-jobbers. The Indian nations, alarmed by the unauthorized intrusion of colonists upon their hunting grounds, have taken up the hatchet in Pontiac\'s destructive war. By establishing a fixed boundary line along the Appalachian heights, His Majesty hath wisely provided security for trade, restrained unruly settlers from provoking further ruinous wars, and protected the native inhabitants under Royal guardianship. Great Britain, already burdened with £133 million of war debt, cannot squander additional treasury to defend reckless frontier encroachers.',
    perspective: 'Loyalist',
    analysisQuestions: [
      {
        id: 'q_news_ch1_loyalist',
        chapter: 1,
        year: 1763,
        topic: 'Newspaper Analysis: Imperial Frontier Policy',
        standardId: 'OH-SS.8.3',
        elaStandardId: 'OH-ELA.8.RI.6',
        difficulty: 2,
        questionType: 'primary_source',
        prompt: 'From the British imperial perspective in London, why was establishing the Proclamation boundary line deemed essential?',
        options: [
          'To encourage American colonists to conquer Spanish Louisiana immediately.',
          'To prevent costly frontier wars with Native tribes and avoid adding to Britain already crushing £133 million debt.',
          'To force colonial merchants to trade exclusively with French Canada.',
          'To permanently dissolve all colonial elected assemblies.'
        ],
        correctAnswerIndex: 1,
        explanation: 'From the Crown\'s perspective, Britain\'s national debt had doubled during the French and Indian War. The Proclamation boundary sought to avert costly conflicts like Pontiac\'s Rebellion caused by aggressive colonial expansion onto tribal lands.',
        hint: 'Notice the author\'s argument: Great Britain cannot afford to squander additional treasury to defend reckless frontier encroachers.'
      }
    ]
  },
  {
    id: 'paper_boston_gazette_1765',
    paperName: 'THE BOSTON GAZETTE',
    editionDate: 'Monday, November 4, 1765',
    location: 'Boston, Province of Massachusetts-Bay',
    headline: 'STAMP ACT ENTERS INTO FORCE! MERCHANTS SUSPEND BUSINESS',
    subtitle: 'Not a Sheet of Stamped Paper to be Found in all the Town—Distress & Resolution',
    articleText: 'Friday last, the first of November, the fatal day commenced on which the Stamp Act was appointed to take place. Early in the morning, the bells of all the churches in town began to toll, and continued till evening, as at the funeral of Liberty. The merchants of this metropolis have unanimously resolved to shut up their warehouses, rather than consent to take stamps. No vessels are cleared at the Custom-House; no courts of justice sit; no business is transacted. The people seem determined to sacrifice everything rather than their freedom.',
    perspective: 'Patriot',
    analysisQuestions: [
      {
        id: 'q_news_1',
        chapter: 2,
        year: 1765,
        topic: 'Newspaper Analysis: Boston Gazette 1765',
        standardId: 'OH-SS.8.1',
        elaStandardId: 'OH-ELA.8.RI.6',
        difficulty: 3,
        questionType: 'primary_source',
        prompt: 'What was the author purpose in comparing the tolling church bells to "the funeral of Liberty"?',
        options: [
          'To celebrate the arrival of the stamped paper.',
          'To dramatize the death of traditional colonial self-rule and rally community opposition against compliance.',
          'To inform readers of an actual epidemic of yellow fever.',
          'To praise the British governor for his generosity.'
        ],
        correctAnswerIndex: 1,
        explanation: 'The writer used vivid figurative language ("funeral of Liberty") to frame compliance with the Stamp Act as the death of constitutional rights.',
        hint: 'Consider the emotional imagery of a funeral and mourning bells.'
      }
    ]
  },
  {
    id: 'paper_rivington_gazette_1774',
    paperName: 'RIVINGTON’S NEW-YORK GAZETEER',
    editionDate: 'Thursday, June 9, 1774',
    location: 'New York City',
    headline: 'THE CONSEQUENCES OF THE BOSTON RIOT: ORDER MUST BE RESTORED',
    subtitle: 'Can Any Civil Society Tolerate the Midnight Destruction of Private Property?',
    articleText: 'We lament the unhappy measures now operating upon the port of Boston, but let cool and thinking minds inquire who brought this calamity upon their city? Was it Parliament, or was it a lawless faction who, disguised as savages, boarded peaceful vessels and cast near £10,000 of private merchandise into the ocean? Can any kingdom endure when mobs supersede magistracy? If Parliament yields to violent tumult, all law is dissolved, and anarchy will reign throughout these provinces.',
    perspective: 'Loyalist',
    analysisQuestions: [
      {
        id: 'q_news_2',
        chapter: 4,
        year: 1774,
        topic: 'Newspaper Analysis: Loyalist Perspective',
        standardId: 'OH-SS.8.8',
        elaStandardId: 'OH-ELA.8.RI.6',
        difficulty: 3,
        questionType: 'primary_source',
        prompt: 'What is the central argument presented by the Loyalist editor of Rivington Gazette regarding the Boston Port Act?',
        options: [
          'The British government was trying to destroy the tea trade entirely.',
          'The punishment of Boston was the natural and lawful consequence of mob violence and the destruction of private property.',
          'Colonists should burn New York City down as well.',
          'All taxes should be doubled immediately.'
        ],
        correctAnswerIndex: 1,
        explanation: 'The Loyalist perspective argued that civilized society requires respect for private property and the rule of law. If governments permit mobs to destroy property with impunity, anarchy results.',
        hint: 'Notice who the author blames: "who brought this calamity upon their city? Was it Parliament, or was it a lawless faction...?"'
      }
    ]
  },
  {
    id: 'paper_pennsylvania_gazette_1776',
    paperName: 'THE PENNSYLVANIA GAZETTE',
    editionDate: 'Wednesday, July 10, 1776',
    location: 'Philadelphia',
    headline: 'A DECLARATION BY THE REPRESENTATIVES OF THE UNITED STATES',
    subtitle: 'Solemnly Published on the State-House Yard Before Thousands of Citizens',
    articleText: 'On Monday last, at twelve o\'clock, the Declaration of Independence was read aloud from the observatory in the State-House yard to a great concourse of people, who received it with heart-felt satisfaction and three general huzzas. The King\'s coat of arms was immediately taken down from the courthouse and burned in a great bonfire, amidst the joyful acclamations of the spectators. Thus has dissolved that connection which once bound us to a corrupt and tyrannical monarchy.',
    perspective: 'Patriot',
    analysisQuestions: [
      {
        id: 'q_news_3',
        chapter: 6,
        year: 1776,
        topic: 'Newspaper Analysis: July 1776',
        standardId: 'OH-SS.8.7',
        difficulty: 2,
        questionType: 'multiple_choice',
        prompt: 'What symbolic action did the citizens of Philadelphia take immediately following the public reading of the Declaration?',
        options: [
          'They invited the British fleet to anchor on the Delaware River.',
          'They took down the King coat of arms and burned it in a public bonfire.',
          'They elected King George grandson to govern Pennsylvania.',
          'They closed all schools and churches permanently.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Burning the royal coat of arms was a symbolic destruction of royal authority, marking the end of imperial allegiance.',
        hint: 'Look for what happened in the public yard after the reading.'
      }
    ]
  }
];
