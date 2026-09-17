import { Question } from '../types';

export const QUESTIONS_BANK: Question[] = [
  // CHAPTER 1 QUESTIONS
  {
    id: 'q_french_indian_debt',
    chapter: 1,
    year: 1763,
    topic: 'French and Indian War Debt',
    standardId: 'OH-SS.8.3',
    difficulty: 2,
    questionType: 'cause_effect',
    prompt: 'How did Great Britain victory in the French and Indian War directly contribute to the later tensions between Parliament and the American colonies?',
    options: [
      'The war forced France to annex all 13 British colonies.',
      'The astronomical war debt caused Parliament to abandon salutary neglect and directly tax the colonies.',
      'British generals surrendered control of the Royal Navy to colonial merchant assemblies.',
      'The war eliminated all Native American trade across the North American continent.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The French and Indian War cost Britain vast sums, doubling its national debt to over £133 million. Because British leaders believed the war had protected the colonies, they concluded the colonies must help pay the debt through new taxes and trade enforcement.',
    hint: 'Think about who paid for the British soldiers and ships, and what happens when an empire runs out of money.'
  },
  {
    id: 'q_proclamation_reasons',
    chapter: 1,
    year: 1763,
    topic: 'Proclamation Line of 1763',
    standardId: 'OH-SS.8.3',
    difficulty: 3,
    questionType: 'multiple_choice',
    prompt: 'Why did the British Crown issue the Proclamation of 1763, and why were many American colonists furious about it?',
    options: [
      'Britain wanted to declare war on Spain; colonists wanted to trade freely with Cuba.',
      'Britain wanted to prevent costly frontier wars with Native tribes; colonists believed they had fought for the right to settle western lands.',
      'Britain wanted to force all colonists to move to Canada; colonists refused to leave the eastern coast.',
      'Britain intended to abolish slavery in Virginia; southern planters threatened to boycott British textiles.'
    ],
    correctAnswerIndex: 1,
    explanation: 'King George III issued the Proclamation to stabilize relations with Native Americans after Pontiac War and avoid costly border garrisons. Colonists and land speculators were outraged because they had shed blood in the war to secure the fertile Ohio Valley.',
    hint: 'Consider the mountain range running down the colonies and the clashes occurring along the frontier.'
  },
  {
    id: 'q_salutary_neglect',
    chapter: 1,
    year: 1764,
    topic: 'Salutary Neglect',
    standardId: 'OH-SS.8.4',
    difficulty: 2,
    questionType: 'multiple_choice',
    prompt: 'The British policy of "salutary neglect" before 1763 meant that the British government had generally:',
    options: [
      'Strictly inspected every colonial warehouse and arrested colonial governors regularly.',
      'Refused to allow colonists to practice Christianity or build churches.',
      'Loosely enforced trade regulations and allowed colonies to govern their own local affairs through elected assemblies.',
      'Forced all colonial children to attend military boarding schools in London.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Under salutary neglect (championed by Prime Minister Robert Walpole), Britain largely turned a blind eye to colonial smuggling as long as raw materials and trade flowed to Britain, allowing colonial assemblies to develop a century of self-governing habits.',
    hint: 'The word "neglect" implies leaving something alone, and "salutary" means beneficial or healthy.'
  },
  {
    id: 'q_assemblies_role',
    chapter: 1,
    year: 1764,
    topic: 'Colonial Self-Government',
    standardId: 'OH-SS.8.4',
    difficulty: 3,
    questionType: 'perspective',
    prompt: 'Why did colonial assemblies place such high value on the "power of the purse" (the power to vote on taxes and government salaries)?',
    options: [
      'It allowed colonial representatives to hold royal governors accountable by withholding salaries if they acted against the public interest.',
      'It permitted assemblies to buy warships directly from France.',
      'It was required by the Catholic Pope in Rome.',
      'It prevented British merchants from opening banks in London.'
    ],
    correctAnswerIndex: 0,
    explanation: 'If a royal governor salary was funded by the local colonial assembly, the governor had to listen to local concerns. When Parliament later attempted to pay royal governors directly out of imperial customs taxes, colonists saw it as destroying their leverage.',
    hint: 'Think about who pays an employee salary and how that influences who the employee listens to.'
  },
  {
    id: 'q_ch1_synthesis',
    chapter: 1,
    year: 1764,
    topic: 'Causes of Imperial Drift',
    standardId: 'OH-SS.8.3',
    difficulty: 4,
    questionType: 'secondary_source',
    prompt: 'Read this passage from historian Fred Anderson:\n\n"The Seven Years\' War had seemed to bind the empire together in triumphant victory. Yet within three short years of the Peace of Paris, ministers in London and legislators in colonial assemblies were speaking fundamentally different political languages."\n\nWhich evidence best supports the historian claim?',
    options: [
      'Colonists joined the French army to invade England.',
      'London viewed the empire as hierarchical with Parliament supreme, while colonists viewed assemblies as equal parliaments under the King.',
      'Both sides immediately signed treaties making King George an absolute monarch.',
      'Colonies voted unanimously to rejoin the Dutch Republic.'
    ],
    correctAnswerIndex: 1,
    explanation: 'British authorities held that Parliament had absolute sovereign authority over all subjects ("virtual representation"), whereas colonists believed their own elected colonial assemblies possessed sole authority over internal legislation and taxation ("actual representation").',
    hint: 'Notice the contrast between London centralized power and the colonies habit of local representation.'
  },

  // CHAPTER 2 QUESTIONS
  {
    id: 'q_sugar_act_courts',
    chapter: 2,
    year: 1764,
    topic: 'Sugar Act & Vice-Admiralty Courts',
    standardId: 'OH-SS.8.4',
    elaStandardId: 'OH-ELA.8.RI.1',
    difficulty: 3,
    questionType: 'primary_source',
    sourceExcerpt: {
      title: 'The Rights of the British Colonies Asserted and Proved',
      author: 'James Otis (Boston, 1764)',
      date: '1764',
      text: 'Can any man say that he is free when he is tried for his property without a jury of his peers, before a crown judge whose salary increases with every vessel he condemns? The supreme power cannot take from any man any part of his property, without his own consent in person, or by representation.'
    },
    prompt: 'According to James Otis, which two fundamental rights of Englishmen were violated by the Sugar Act vice-admiralty court system?',
    options: [
      'Freedom of the press and the right to bear arms.',
      'Trial by a jury of one peers and taxation only with consent through representation.',
      'Universal voting rights for all residents and religious establishment.',
      'The right to trade with pirates and print unlimited paper money.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Otis argued that vice-admiralty courts denied the sacred common-law right to trial by jury (since a single royal judge decided the case) and condemned taxation without representation.',
    hint: 'Look closely at the phrases "without a jury of his peers" and "without his own consent... or by representation."'
  },
  {
    id: 'q_stamp_act_objection',
    chapter: 2,
    year: 1765,
    topic: 'Stamp Act Resistance',
    standardId: 'OH-SS.8.4',
    difficulty: 3,
    questionType: 'multiple_choice',
    prompt: 'Why did the Stamp Act of 1765 provoke far more intense and widespread opposition throughout all 13 colonies than earlier trade acts like the Molasses Act?',
    options: [
      'It only taxed Catholic churches and Quaker meetinghouses.',
      'It was an internal, direct tax that affected nearly every colonist—from lawyers and printers to merchants and card players—not just coastal shippers.',
      'It forced colonists to convert all their gold into Spanish silver coins.',
      'It banned the printing of any books written in the English language.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Previous acts were external duties on overseas shipping that directly affected only wholesale merchants. The Stamp Act was the first direct internal tax affecting wills, marriage licenses, newspapers, diplomas, and contracts across all segments of society.',
    hint: 'Consider who uses legal documents, newspapers, almanacs, and everyday printed paper.'
  },
  {
    id: 'q_sons_daughters_liberty',
    chapter: 2,
    year: 1765,
    topic: 'Sons and Daughters of Liberty',
    standardId: 'OH-SS.8.5',
    difficulty: 2,
    questionType: 'multiple_choice',
    prompt: 'What was the primary method used by the Sons and Daughters of Liberty to force Parliament to reconsider the Stamp Act?',
    options: [
      'Assassinating royal governors and burning London down.',
      'Organizing non-importation agreements (boycotts) that caused British merchants to lose massive profits.',
      'Fleeing across the Mississippi River into Spanish Louisiana.',
      'Refusing to speak English in colonial courts.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Economic pressure was the most effective weapon. When colonial boycotts cut British merchant exports by over 25%, London and Liverpool business owners petitioned Parliament in panic, successfully forcing repeal.',
    hint: 'Hit them in the pocketbook: what happens when British factories have no one to buy their goods?'
  },
  {
    id: 'q_stamp_congress_significance',
    chapter: 2,
    year: 1765,
    topic: 'Stamp Act Congress',
    standardId: 'OH-SS.8.5',
    difficulty: 3,
    questionType: 'perspective',
    prompt: 'Why was the meeting of the Stamp Act Congress in New York City in October 1765 a historic turning point in American history?',
    options: [
      'It was the first time delegates from different colonies met on their own initiative to forge a unified political response to imperial policy.',
      'It declared immediate military war against Great Britain.',
      'It elected George Washington as President of the United States.',
      'It established the first public school system in North America.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Before 1765, the colonies were jealous, isolated rivals who communicated more with London than with each other. The Stamp Act Congress broke this isolation, proving that united colonial action could alter imperial policy.',
    hint: 'Think about inter-colonial unity: colonies that previously operated separately acting as one body.'
  },
  {
    id: 'q_ch2_declaratory_act',
    chapter: 2,
    year: 1766,
    topic: 'Declaratory Act of 1766',
    standardId: 'OH-SS.8.4',
    elaStandardId: 'OH-ELA.8.RI.6',
    difficulty: 4,
    questionType: 'primary_source',
    sourceExcerpt: {
      title: 'The Declaratory Act',
      author: 'The British Parliament',
      date: 'March 18, 1766',
      text: 'Be it declared... That the King\'s Majesty, by and with the advice and consent of the Lords Spiritual and Temporal, and Commons, in Parliament assembled, had, hath, and of right ought to have, full power and authority to make laws and statutes of sufficient force and validity to bind the colonies and people of America, subjects of the Crown of Great Britain, in all cases whatsoever.'
    },
    prompt: 'What was the core message of Parliament Declaratory Act passed on the same day the Stamp Act was repealed?',
    options: [
      'Parliament granted American colonies full independence and self-rule.',
      'Parliament insisted it had total, supreme legislative authority over the colonies "in all cases whatsoever," maintaining its principle of supremacy.',
      'Parliament agreed that it would never tax the colonies again under any circumstances.',
      'Parliament declared that colonial assemblies could veto royal laws.'
    ],
    correctAnswerIndex: 1,
    explanation: 'While Parliament repealed the Stamp Act for practical economic reasons, it refused to surrender the constitutional principle. The Declaratory Act asserted complete parliamentary sovereignty "in all cases whatsoever," setting the stage for future clashes.',
    hint: 'Analyze the phrase "to bind the colonies and people of America... in all cases whatsoever."'
  },

  // CHAPTER 3 QUESTIONS
  {
    id: 'q_writs_of_assistance',
    chapter: 3,
    year: 1767,
    topic: 'Writs of Assistance & Townshend Acts',
    standardId: 'OH-SS.8.4',
    difficulty: 3,
    questionType: 'multiple_choice',
    prompt: 'Why did American colonists vehemently oppose British customs officers using "Writs of Assistance"?',
    options: [
      'They required colonists to pay customs officers a weekly gold salary.',
      'They were general search warrants that did not specify the place to be searched or the specific items sought, violating traditional privacy protections.',
      'They forced all colonial merchants to sell only British ships.',
      'They required every homeowner to house fifty royal soldiers permanently.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A normal common-law search warrant required specific evidence of a crime and named the exact premises. Writs of Assistance were blank, permanent warrants allowing officers to search anywhere on mere suspicion—inspiring the later Fourth Amendment to the U.S. Constitution.',
    hint: 'Think about modern search warrants and what makes an unrestricted, open-ended search dangerous.'
  },
  {
    id: 'q_daughters_liberty_economic',
    chapter: 3,
    year: 1768,
    topic: 'Daughters of Liberty & Homespun',
    standardId: 'OH-SS.8.5',
    difficulty: 2,
    questionType: 'perspective',
    prompt: 'How did colonial women play an indispensable, decisive role in the resistance against the Townshend Acts?',
    options: [
      'By enlisting as cavalry officers in the Royal Navy.',
      'By organizing spinning bees to produce homemade "homespun" cloth and serving herbal teas, making the consumer boycotts economically viable.',
      'By serving as royal judges in vice-admiralty courts.',
      'By traveling to London to vote directly in the House of Commons.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Boycotts could only succeed if colonists had alternatives to British manufactured goods. By producing domestic textiles through public spinning bees and boycotting British tea, colonial women were the backbone of non-consumption movements.',
    hint: 'Who was responsible for purchasing household cloth and food in 18th-century homes?'
  },
  {
    id: 'q_quartering_tensions',
    chapter: 3,
    year: 1769,
    topic: 'Quartering Act & Boston Tensions',
    standardId: 'OH-SS.8.6',
    difficulty: 3,
    questionType: 'cause_effect',
    prompt: 'Why was the permanent stationing of nearly 2,000 British regulars in Boston in 1768 a constant source of violent friction with townspeople?',
    options: [
      'The soldiers spoke French and forced townspeople to eat French food.',
      'British redcoats were viewed as an occupying military force, and poorly paid soldiers competed with local dockworkers and ropemakers for off-duty jobs.',
      'Bostonians wanted the soldiers to leave Massachusetts to defend Georgia.',
      'The soldiers tore down all the churches in Boston.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Bostonians resented armed soldiers policing a civilian city in peacetime. Furthermore, redcoats earned meager army wages and sought off-duty casual labor on the docks for low pay, sparking direct economic fights with Boston workingmen.',
    hint: 'Consider both the political insult of armed occupation and the economic impact on working-class jobs.'
  },
  {
    id: 'q_boston_massacre_propaganda',
    chapter: 3,
    year: 1770,
    topic: 'Boston Massacre & Paul Revere Engraving',
    standardId: 'OH-SS.8.1',
    elaStandardId: 'OH-ELA.8.RI.6',
    difficulty: 4,
    questionType: 'primary_source',
    sourceExcerpt: {
      title: 'The Bloody Massacre in King Street',
      author: 'Paul Revere (Engraving Title & Poem)',
      date: 'March 1770',
      text: 'Unhappy Boston! see thy Sons deplore, / Thy hallow\'d Walks besmear\'d with guiltless Gore: / While faithless P---n and his savage Bands, / With murd\'rous Rancour stretch their bloody Hands; / Like fierce Barbarians grinning o\'er their Prey, / Approve the Carnage and enjoy the Day.'
    },
    prompt: 'How did Paul Revere famous engraving and poem use artistic choices to serve as effective political propaganda for the Patriot cause?',
    options: [
      'It showed the British soldiers firing in self-defense while retreating from a violent armed mob.',
      'It depicted Captain Preston ordering an orderly firing squad into an unarmed, respectable crowd, concealing that colonists had thrown ice chunks and clubs.',
      'It depicted John Adams apologizing to King George III for the disturbance.',
      'It praised the British army for maintaining law and order in Boston.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Revere engraving was masterful propaganda: it showed soldiers standing in a disciplined military line firing simultaneously on command into peaceful gentlemen, omitting the hostile crowd throwing ice, snowballs, and oyster shells.',
    hint: 'Look at how the soldiers are arranged in the engraving versus what eyewitnesses testified actually happened in the street chaos.'
  },
  {
    id: 'q_ch3_committees_correspondence',
    chapter: 3,
    year: 1772,
    topic: 'Committees of Correspondence',
    standardId: 'OH-SS.8.5',
    difficulty: 3,
    questionType: 'multiple_choice',
    prompt: 'What was the primary purpose of the Committees of Correspondence created by Samuel Adams and other leaders?',
    options: [
      'To build a secret tunnel under the Atlantic Ocean to London.',
      'To rapidly share information, coordinate boycotts, and mobilize political action across different towns and colonies.',
      'To write love letters between soldiers and colonial maidens.',
      'To teach British generals how to speak English.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The Committees of Correspondence formed an early communications network via couriers and horse riders. When an event or British policy occurred in one colony, letters were dispatched so all 13 colonies could respond in unison.',
    hint: 'Notice the word "correspondence"—it means exchanging letters and news over distance.'
  },

  // CHAPTER 4 QUESTIONS
  {
    id: 'q_tea_act_objection',
    chapter: 4,
    year: 1773,
    topic: 'Tea Act of 1773',
    standardId: 'OH-SS.8.4',
    difficulty: 3,
    questionType: 'multiple_choice',
    prompt: 'The Tea Act of 1773 actually MADE British tea CHEAPER than smuggled Dutch tea. Why then did colonists fiercely resist it?',
    options: [
      'Colonists preferred drinking hot chocolate and despised the taste of tea.',
      'They recognized that buying the cheap tea meant accepting the principle of Parliament right to tax them, and it granted a monopoly that threatened colonial merchants.',
      'The tea was poisoned with malaria to kill off Bostonians.',
      'Parliament declared that tea drinkers could no longer own land.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Colonists saw the Tea Act as an insidious bribe: Parliament thought colonists would abandon their constitutional principles for bargain tea. Accepting it also acknowledged Parliament power to grant exclusive trade monopolies.',
    hint: 'Principle over price: why would someone refuse a bargain if taking it means giving up a basic right?'
  },
  {
    id: 'q_tea_party_aftermath',
    chapter: 4,
    year: 1773,
    topic: 'Boston Tea Party',
    standardId: 'OH-SS.8.5',
    difficulty: 2,
    questionType: 'multiple_choice',
    prompt: 'During the Boston Tea Party on December 16, 1773, the Sons of Liberty were remarkably disciplined because they:',
    options: [
      'Stole all the silver and personal belongings of the ship captains.',
      'Carefully destroyed only the 342 chests of tea and harmed no crew members or other property.',
      'Burned down all three merchant ships to the waterline.',
      'Forced the British governor to drink 50 gallons of saltwater.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The participants wanted to ensure their action was understood as a principled political protest against unconstitutional taxation, not a drunken robbery. Nothing was looted; a broken padlock was even replaced the following day.',
    hint: 'Consider why the protesters wanted to protect their reputation as defenders of liberty rather than common thieves.'
  },
  {
    id: 'q_intolerable_acts_provisions',
    chapter: 4,
    year: 1774,
    topic: 'Coercive / Intolerable Acts',
    standardId: 'OH-SS.8.6',
    difficulty: 3,
    questionType: 'multiple_choice',
    prompt: 'Which of the following was NOT one of the harsh measures included in the British Coercive (Intolerable) Acts of 1774?',
    options: [
      'The Boston Port Act closed Boston Harbor until the ruined tea was fully paid for.',
      'The Massachusetts Government Act suspended elected town meetings and replaced the civil governor with General Thomas Gage.',
      'A new Quartering Act allowed royal governors to commandeer private unoccupied buildings to house troops.',
      'Parliament expelled all Catholic priests from Maryland and gave the land to Spain.'
    ],
    correctAnswerIndex: 3,
    explanation: 'The four Coercive Acts targeted Massachusetts: closing Boston port, suspending self-government, allowing royal officials accused of crimes to be tried in England, and quartering troops. Parliament also passed the Quebec Act, which colonists grouped with these intolerable laws.',
    hint: 'Three choices directly punished Boston and Massachusetts for the Tea Party; one is completely unrelated.'
  },
  {
    id: 'q_first_continental_congress',
    chapter: 4,
    year: 1774,
    topic: 'First Continental Congress',
    standardId: 'OH-SS.8.5',
    difficulty: 3,
    questionType: 'perspective',
    prompt: 'How did the other 12 colonies respond to Parliament attempt to isolate and punish Massachusetts through the Intolerable Acts?',
    options: [
      'They celebrated Boston punishment and refused to send any assistance.',
      'They rallied in unprecedented solidarity, sending food and supplies to Boston and convening the First Continental Congress.',
      'They immediately surrendered all colonial charters to King George III.',
      'They invited the French army to occupy New York Harbor.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Parliament intended to make an example of Boston to intimidate the other colonies. Instead, the move backfired completely: South Carolina sent rice, Pennsylvania sent flour, and delegates from 12 colonies assembled in Philadelphia to coordinate joint defense.',
    hint: 'Did the harsh punishment divide the colonies or unite them in common sympathy?'
  },
  {
    id: 'q_ch4_association_enforcement',
    chapter: 4,
    year: 1774,
    topic: 'The Continental Association',
    standardId: 'OH-SS.8.5',
    difficulty: 4,
    questionType: 'cause_effect',
    prompt: 'The Continental Association created by the First Continental Congress was historic because it functioned as:',
    options: [
      'A de facto national government with locally elected committees enforcing universal boycotts in every town and county.',
      'A commercial treaty giving Spain control over Caribbean sugar trade.',
      'A royal club for retired British naval officers.',
      'An agreement to ban the use of horses throughout North America.'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Association mandated local Committees of Safety in every town to inspect merchant ledgers and enforce non-importation. This created a grassroots network of revolutionary governance that superseded royal authority months before fighting began.',
    hint: 'Think about how thousands of local committees in small towns enforced the boycott without royal judges.'
  },

  // CHAPTER 5 QUESTIONS
  {
    id: 'q_lexington_concord_shot',
    chapter: 5,
    year: 1775,
    topic: 'Lexington and Concord',
    standardId: 'OH-SS.8.6',
    difficulty: 2,
    questionType: 'multiple_choice',
    prompt: 'Why were British regulars marching toward Concord on the night of April 18–19, 1775?',
    options: [
      'To attend a peaceful tea party with Samuel Adams.',
      'To seize stockpiled colonial military supplies and gunpowder and arrest rebel leaders.',
      'To build a naval lighthouse on Lake Erie.',
      'To recruit Minutemen to fight against Spain in Florida.'
    ],
    correctAnswerIndex: 1,
    explanation: 'General Gage had secret orders to disarm the rebellion before it could organize. His target was the large provincial stockpile of cannon, powder, balls, and provisions stored in barns at Concord, as well as arresting Adams and Hancock.',
    hint: 'Armies march when they know the opposing militia has weapons stored in a specific location.'
  },
  {
    id: 'q_minutemen_strategy',
    chapter: 5,
    year: 1775,
    topic: 'Minutemen Tactics on Battle Road',
    standardId: 'OH-SS.8.6',
    difficulty: 3,
    questionType: 'perspective',
    prompt: 'What military strategy enabled the Massachusetts militia to inflict heavy casualties on the retreating British column between Concord and Boston?',
    options: [
      'Forming open European firing lines in open fields.',
      'Using asymmetrical guerrilla tactics: firing from behind stone fences, trees, and farmhouses along the narrow road.',
      'Dropping dynamite from hot air balloons.',
      'Digging a 20-mile trench line with heavy siege artillery.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The British regulars trained for formal European battlefields where armies stood face-to-face in open fields. Colonial Minutemen used woodland frontier tactics, continuously sniping at the marching column from behind stone walls and apple orchards.',
    hint: 'Think about the Massachusetts countryside: stone walls, woodlots, and farm buildings along a single road.'
  },
  {
    id: 'q_second_congress_actions',
    chapter: 5,
    year: 1775,
    topic: 'Second Continental Congress Decisions',
    standardId: 'OH-SS.8.6',
    difficulty: 3,
    questionType: 'chronology',
    prompt: 'Which of the following major decisions was taken by the Second Continental Congress in June 1775?',
    options: [
      'It voted to adopt the New England militia as the Continental Army and appointed George Washington of Virginia as Commander-in-Chief.',
      'It immediately ratified the United States Constitution.',
      'It surrendered Boston to the British Navy.',
      'It voted to invite King George III to move his palace to Philadelphia.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Meeting in the shadow of war, the Second Continental Congress took command of the military effort by creating the Continental Army and unanimously choosing Washington, ensuring southern colonial commitment to New England defense.',
    hint: 'Who was appointed to lead the army encircling the British in Boston?'
  },
  {
    id: 'q_olive_branch_rejection',
    chapter: 5,
    year: 1775,
    topic: 'The Olive Branch Petition',
    standardId: 'OH-SS.8.6',
    difficulty: 3,
    questionType: 'cause_effect',
    prompt: 'How did King George III response to the moderate Olive Branch Petition in 1775 alter colonial public sentiment?',
    options: [
      'His gracious acceptance of peace restored full harmony between the Crown and colonies.',
      'His refusal to read it and issuance of the Proclamation of Rebellion convinced many fence-sitting colonists that reconciliation was impossible.',
      'It persuaded George Washington to resign from the army.',
      'It convinced Parliament to repeal all trade acts permanently.'
    ],
    correctAnswerIndex: 1,
    explanation: 'By refusing to even look at the Olive Branch Petition and branding all colonists as traitors under penalty of death, King George alienated the very moderates (like John Dickinson) who had fought to keep the colonies loyal.',
    hint: 'When a King calls you an active traitor and hires German mercenaries to shoot you, can you still claim loyalty to him?'
  },
  {
    id: 'q_ch5_common_sense_impact',
    chapter: 5,
    year: 1776,
    topic: 'Thomas Paine Common Sense',
    standardId: 'OH-SS.8.7',
    elaStandardId: 'OH-ELA.8.RI.1',
    difficulty: 4,
    questionType: 'primary_source',
    sourceExcerpt: {
      title: 'Common Sense',
      author: 'Thomas Paine (January 1776)',
      date: '1776',
      text: 'Society in every state is a blessing, but government even in its best state is but a necessary evil; in its worst state an intolerable one... But where says some is the King of America? I\'ll tell you Friend, he reigns above, and doth not make havoc of mankind like the Royal Brute of Britain... in America THE LAW IS KING.'
    },
    prompt: 'Based on this excerpt and historical context, what revolutionary idea did Thomas Paine popularize among ordinary colonists?',
    options: [
      'That America should crown George Washington as King George I of America.',
      'That hereditary monarchy is fundamentally illegitimate, and that free citizens in a republic should be governed only by the rule of law.',
      'That colonists should rejoin the Catholic Church under the Pope.',
      'That Britain should conquer France and Spain to pay colonial debts.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Paine attacked the sacred institution of monarchy itself, arguing that Kings were "crowned ruffians" and that in a true republic, "THE LAW IS KING." His plain language shattered centuries of instinctive colonial reverence for royalty.',
    hint: 'Read the phrase: "in America THE LAW IS KING" versus "the Royal Brute of Britain."'
  },

  // CHAPTER 6 QUESTIONS
  {
    id: 'q_lee_resolution_debate',
    chapter: 6,
    year: 1776,
    topic: 'Richard Henry Lee Resolution',
    standardId: 'OH-SS.8.7',
    difficulty: 3,
    questionType: 'multiple_choice',
    prompt: 'When Richard Henry Lee of Virginia proposed his June 7, 1776 resolution that the colonies "ought to be free and independent States," why did some delegates hesitate?',
    options: [
      'They were terrified that Benjamin Franklin was a British spy.',
      'Delegates from middle colonies like Pennsylvania and New York had not yet received instructions from their local conventions authorizing a vote for independence.',
      'They wanted to wait until winter when the Atlantic Ocean froze over.',
      'They wanted to ask King Louis XVI of France to rule over America.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Congress adhered to republican principles: delegates represented their colony conventions. Several middle colonies had instructed delegates to seek reconciliation. Postponing the vote gave time for provincial congresses to authorize independence.',
    hint: 'Delegates in a representative democracy cannot vote on huge constitutional questions without instructions from their voters back home.'
  },
  {
    id: 'q_natural_rights_locke',
    chapter: 6,
    year: 1776,
    topic: 'Declaration of Independence: Natural Rights',
    standardId: 'OH-SS.8.7',
    difficulty: 3,
    questionType: 'primary_source',
    sourceExcerpt: {
      title: 'Declaration of Independence (Preamble)',
      author: 'Thomas Jefferson',
      date: 'July 4, 1776',
      text: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed...'
    },
    prompt: 'According to Thomas Jefferson and Enlightenment philosopher John Locke, what is the fundamental purpose of government, and when do the people have the right to alter or abolish it?',
    options: [
      'To make the monarch wealthy; the people can never rebel against God anointed king.',
      'To protect the natural, unalienable rights of the people; when a government fails to protect those rights, the people may alter or abolish it.',
      'To collect taxes for the military; only parliament may decide when to change government.',
      'To enforce a single national religion upon all citizens.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Lockean social contract theory holds that people form governments to secure pre-existing natural rights (Life, Liberty, Property/Happiness). Because governments derive just power from the consent of the governed, a government that destroys those rights breaks the contract.',
    hint: 'Look at the cause-and-effect: "That to secure these rights, Governments are instituted... That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it."'
  },
  {
    id: 'q_declaration_grievances_evidence',
    chapter: 6,
    year: 1776,
    topic: 'The 27 Grievances',
    standardId: 'OH-SS.8.7',
    elaStandardId: 'OH-ELA.8.RI.1',
    difficulty: 4,
    questionType: 'multiple_choice',
    prompt: 'Why did the signers of the Declaration of Independence devote two-thirds of the document to listing 27 specific grievances against King George III rather than simply declaring independence?',
    options: [
      'To prove to a "candid world" and potential foreign allies like France that the colonies were acting from legal necessity after years of repeated injuries, not rash rebellion.',
      'To insult the King personal family members and physical appearance.',
      'Because British law required a 50-page legal receipt for cancelled trade contracts.',
      'To fulfill an ancient biblical prophecy.'
    ],
    correctAnswerIndex: 0,
    explanation: 'The list of grievances served as a legal indictment before the court of world opinion. To secure diplomatic recognition, loans, and military alliances from France and Spain, America had to prove that the King had repeatedly violated established legal contracts.',
    hint: 'Consider why a nation declaring independence needs to convince other powerful countries that its cause is just.'
  },
  {
    id: 'q_independence_risks',
    chapter: 6,
    year: 1776,
    topic: 'The Perils of Treason',
    standardId: 'OH-SS.8.8',
    difficulty: 3,
    questionType: 'perspective',
    prompt: 'When delegates signed the Declaration of Independence pledging "our Lives, our Fortunes, and our sacred Honor," what was their legal status under British imperial law?',
    options: [
      'They were recognized as foreign ambassadors with full diplomatic immunity.',
      'They were guilty of high treason against the Crown, punishable by hanging, drawing, and quartering, and total forfeiture of their estates.',
      'They were sentenced to pay a small 5-shilling civil fine.',
      'They were automatically awarded seats in the British House of Lords.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Under British law, signing the Declaration was high treason. If British forces crushed the rebellion, every signer faced public execution and the confiscation of their property, leaving their families destitute. Signing was an act of immense personal courage.',
    hint: 'Benjamin Franklin famously said: "We must indeed all hang together, or most assuredly we shall all hang separately."'
  },
  {
    id: 'q_ch6_culmination',
    chapter: 6,
    year: 1776,
    topic: 'Historical Perspectives: Patriots, Loyalists, & Neutrals',
    standardId: 'OH-SS.8.8',
    difficulty: 4,
    questionType: 'perspective',
    prompt: 'Historians estimate that in 1776, the colonial population was divided roughly into thirds: about 40–45% Patriot, 20–25% Loyalist, and 30–35% Neutral. Which of the following statements best reflects a historically valid reason for remaining LOYAL to the British Crown in 1776?',
    options: [
      'Loyalists all hated freedom and wanted to be whipped by royal officers.',
      'Loyalists believed the British constitution was the freest system of government on earth, that Parliament provided naval protection and stable trade, and that rebellion risked civil anarchy.',
      'Loyalists wanted the King to confiscate all colonial farms and give them to Russia.',
      'Loyalists believed that independence had already been won in 1607.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Loyalists (Tories) were not villains; they were honorable people who believed that law and order under the proven British constitution was superior to mob rule and an uncertain war. Many also feared that independence would replace a distant King with local tyrants.',
    hint: 'Avoid cartoon stereotypes: think about why someone would prefer stability, rule of law, and imperial citizenship over violent war.'
  },

  // REGIONAL GEOGRAPHY & MAP QUESTIONS
  {
    id: 'q_map_regions_economy',
    chapter: 1,
    year: 1763,
    topic: 'Colonial Regions & Geography',
    standardId: 'OH-SS.8.2',
    difficulty: 2,
    questionType: 'map',
    prompt: 'Which colonial region had rocky soil, short growing seasons, and natural deepwater harbors, leading its economy to rely heavily on shipbuilding, commercial fishing, and transatlantic trade?',
    options: [
      'The Southern Colonies (Virginia, Carolinas, Georgia)',
      'The New England Colonies (Massachusetts, New Hampshire, Rhode Island, Connecticut)',
      'The Middle Colonies (New York, Pennsylvania, New Jersey, Delaware)',
      'The Caribbean Sugar Islands'
    ],
    correctAnswerIndex: 1,
    explanation: 'New England rocky glacial soil and long cold winters made cash-crop plantation agriculture impossible. Colonists turned to the sea and dense pine forests, creating a thriving maritime economy of cod fishing, whaling, and shipbuilding.',
    hint: 'Look at the northernmost colonies with long coastlines and famous fishing ports like Boston and Gloucester.'
  },
  {
    id: 'q_map_breadbasket',
    chapter: 2,
    year: 1765,
    topic: 'Middle Colonies Breadbasket',
    standardId: 'OH-SS.8.2',
    difficulty: 2,
    questionType: 'map',
    prompt: 'Why were the Middle Colonies (Pennsylvania, New York, New Jersey, Delaware) famously referred to as the "Breadbasket Colonies"?',
    options: [
      'They invented the mechanical bread toaster.',
      'Their temperate climate and fertile river valleys produced vast agricultural surpluses of wheat, barley, rye, and livestock exported to other colonies and Europe.',
      'They refused to grow any crops except corn.',
      'All bakeries were owned by the British Royal Navy.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The Middle Colonies rich soil along the Hudson, Delaware, and Susquehanna river valleys grew enormous grain harvests. Flour mills along Brandywine Creek and other waterways made flour and wheat the region primary export.',
    hint: 'Bread is made from grains like wheat, rye, and barley.'
  },
  {
    id: 'q_map_southern_cash_crops',
    chapter: 3,
    year: 1768,
    topic: 'Southern Plantation Economy',
    standardId: 'OH-SS.8.2',
    difficulty: 3,
    questionType: 'map',
    prompt: 'How did geographic factors in the Southern Colonies (Maryland, Virginia, North Carolina, South Carolina, Georgia) shape their labor system and social structure?',
    options: [
      'Long hot summers, rich coastal soil, and wide navigable rivers facilitated large cash-crop plantations (tobacco, rice, indigo) that came to depend upon the brutal enslavement of African people.',
      'Cold mountainous terrain forced southern colonists into fur trapping and factory manufacturing.',
      'Lack of rainfall prevented any agriculture, forcing colonists to live solely on wild game.',
      'The Spanish Navy required all southern farmers to grow coffee.'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Southern tidewater plains and humid subtropical climate were ideal for labor-intensive cash crops. Planters relied on chattel slavery, creating a hierarchical society dominated by wealthy landowners and sustained by the forced labor of enslaved people.',
    hint: 'Think about climate, cash crops like tobacco and rice, and the horrific labor system of chattel slavery.'
  },

  // ELA / CHRONOLOGY QUESTIONS
  {
    id: 'q_chronology_acts',
    chapter: 4,
    year: 1774,
    topic: 'Chronology of Resistance',
    standardId: 'OH-SS.8.6',
    difficulty: 3,
    questionType: 'chronology',
    prompt: 'Place the following major events in the correct chronological order from earliest to latest:\n1. Boston Tea Party\n2. Stamp Act passed\n3. Boston Massacre\n4. Battles of Lexington and Concord',
    options: [
      '2 → 3 → 1 → 4 (Stamp Act 1765 → Boston Massacre 1770 → Boston Tea Party 1773 → Lexington & Concord 1775)',
      '1 → 2 → 3 → 4',
      '3 → 1 → 2 → 4',
      '4 → 2 → 1 → 3'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Stamp Act (1765) ignited early constitutional protests; tensions culminated in the Boston Massacre (1770); the Tea Act sparked the Boston Tea Party (1773); and the Intolerable Acts led directly to the outbreak of war at Lexington and Concord (1775).',
    hint: 'Remember: the Stamp Act was in 1765, while the shooting war did not begin until 1775.'
  },
  {
    id: 'q_primary_vs_secondary',
    chapter: 1,
    year: 1763,
    topic: 'Primary and Secondary Sources',
    standardId: 'OH-SS.8.1',
    elaStandardId: 'OH-ELA.8.RI.1',
    difficulty: 2,
    questionType: 'multiple_choice',
    prompt: 'Which of the following historical items is a PRIMARY source regarding the Boston Tea Party?',
    options: [
      'A chapter in a 2024 eighth-grade history textbook written by university professors.',
      'A diary entry written on December 16, 1773 by George Hewes, a Boston shoemaker who boarded the tea ships.',
      'A 1995 documentary film created for the History Channel.',
      'A Wikipedia article summarizing colonial protests.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A primary source is a firsthand, contemporary document or artifact created at the time of the event by an eyewitness or participant. George Hewes diary was written on the very night of the event.',
    hint: 'Primary means created first, by someone who was actually there.'
  }
];

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS_BANK.find(q => q.id === id);
}

export function getQuestionsByChapter(chapterNumber: number): Question[] {
  return QUESTIONS_BANK.filter(q => q.chapter === chapterNumber);
}
