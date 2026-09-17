import { HistoricalEvent } from '../types';

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  // CHAPTER 1 EVENTS
  {
    id: 'evt_treaty_paris',
    chapter: 1,
    checkpoint: 1,
    year: 1763,
    dateString: 'February 1763',
    location: 'London & Philadelphia',
    colonyId: 'PA',
    role: 'A colonial merchant in Philadelphia with trading partners in London.',
    title: 'The War Is Won, The Bill Arrives',
    historicalContext: 'The Treaty of Paris of 1763 has ended the French and Indian War (Seven Years War). France has ceded Canada and all lands east of the Mississippi to Great Britain. However, Britain national debt has doubled to £133 million.',
    narrative: 'Your London trade correspondent writes to celebrate the glorious British triumph over France, but warns: "The British taxpayer is crushed by taxes on beer, cider, and windows. Ministers in Whitehall say the American colonies, which paid little for their own defense, must now contribute."',
    curriculumTags: ['French & Indian War', 'War Debt', 'Treaty of Paris'],
    standardId: 'OH-SS.8.3',
    followUpQuestionId: 'q_french_indian_debt',
    options: [
      {
        id: 'opt_1_a',
        text: 'Argue that colonies supplied thousands of militia and provisioned troops; Parliament should respect local assembly taxation.',
        alignment: 'patriot',
        patriotDelta: 3,
        loyalistDelta: -1,
        neutralDelta: 0,
        statChanges: { colonialSupport: 8, britishRelations: -4, influence: 5 },
        immediateConsequence: 'Colonial assemblymen applaud your defense of local self-government, though British custom officers take note of your vocal stance.'
      },
      {
        id: 'opt_1_b',
        text: 'Acknowledge Britain right to regulate imperial trade and pay standard customs duties for Royal Navy protection.',
        alignment: 'loyalist',
        patriotDelta: -2,
        loyalistDelta: 4,
        neutralDelta: 0,
        statChanges: { colonialSupport: -4, britishRelations: 8, wealth: 5 },
        immediateConsequence: 'British customs agents grant you favorable shipping clearances. Several local merchants grumble that you favor London over your neighbors.'
      },
      {
        id: 'opt_1_c',
        text: 'Propose that colonial assemblies vote voluntary grants of funds directly to the Crown to avoid parliamentary mandates.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 6, britishRelations: 3, colonialSupport: 3 },
        immediateConsequence: 'Moderate leaders praise your conciliatory approach. Both sides recognize you as a thoughtful mediator.'
      },
      {
        id: 'opt_1_d',
        text: 'Keep quiet and focus strictly on securing contracts to supply British frontier garrisons at high profit margins.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { wealth: 10, colonialSupport: -2 },
        immediateConsequence: 'Your ledger books swell with British gold, though some question where your true loyalties lie.'
      }
    ]
  },
  {
    id: 'evt_proclamation_1763',
    chapter: 1,
    checkpoint: 2,
    year: 1763,
    dateString: 'October 1763',
    location: 'Williamsburg & The Appalachian Frontier',
    colonyId: 'VA',
    role: 'A Virginia land speculator and veteran who was promised western bounty land.',
    title: 'The Proclamation Line of 1763',
    historicalContext: 'Following Pontiac War—a united confederation of Native nations attacking British frontier forts—King George III issues the Royal Proclamation of 1763. It forbids all colonial settlement west of the crest of the Appalachian Mountains.',
    narrative: 'You hold colonial land warrants signed by the governor of Virginia for 1,000 fertile acres in the Ohio Valley as reward for your militia service. The King proclamation now declares western lands reserved for Native tribes, and orders existing settlers to vacate immediately.',
    curriculumTags: ['Proclamation of 1763', 'Appalachian Boundary', 'Pontiac War'],
    standardId: 'OH-SS.8.3',
    followUpQuestionId: 'q_proclamation_reasons',
    options: [
      {
        id: 'opt_2_a',
        text: 'Defy the royal surveyor: survey your Ohio land anyway and organize frontier families to resist eviction.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -3,
        neutralDelta: 0,
        statChanges: { colonialSupport: 10, britishRelations: -8, influence: 4 },
        immediateConsequence: 'Frontier families hail you as a champion of colonial liberty, but royal officials flag your name for investigation.'
      },
      {
        id: 'opt_2_b',
        text: 'Support the King decree: peace on the frontier and avoiding costly warfare with Native tribes protects the whole empire.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 0,
        statChanges: { britishRelations: 8, colonialSupport: -6, influence: 2 },
        immediateConsequence: 'The Royal Governor commends your respect for imperial authority, though western veterans call you an accomplice to tyranny.'
      },
      {
        id: 'opt_2_c',
        text: 'Lobby the Virginia House of Burgesses to send a respectful legal petition to London requesting compensation or boundaries revision.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 7, historicalKnowledge: 5 },
        immediateConsequence: 'Burgesses agree to draft an official remonstrance. You gain respect among the legal gentry in Williamsburg.'
      },
      {
        id: 'opt_2_d',
        text: 'Sell your disputed western claims at a steep discount and reinvest in tidewater tobacco farmland.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { wealth: 6, colonialSupport: 0 },
        immediateConsequence: 'You avoid legal entanglements and protect your financial baseline, steering clear of border friction.'
      }
    ]
  },
  {
    id: 'evt_pontiac_rebellion',
    chapter: 1,
    checkpoint: 3,
    year: 1764,
    dateString: 'Summer 1764',
    location: 'Fort Pitt & Backcountry Pennsylvania',
    colonyId: 'PA',
    role: 'A backcountry trading post manager near Fort Pitt.',
    title: 'Western Lands & Native Diplomacy',
    historicalContext: 'British General Jeffrey Amherst cut off traditional diplomatic gift-giving and ammunition supplies to Native nations. Chief Pontiac united Ottawa, Potawatomi, and Huron warriors to drive British garrisons out of the Great Lakes.',
    narrative: 'A party of Shawnee traders enters your post. They explain that under French rule, traders respected their sovereignty and paid annual tribute for trading posts, whereas British settlers clear-cut hunting forests and treat them with contempt.',
    curriculumTags: ['Pontiac Rebellion', 'Native Diplomacy', 'Salutary Neglect'],
    standardId: 'OH-SS.8.1',
    followUpQuestionId: 'q_salutary_neglect',
    options: [
      {
        id: 'opt_3_a',
        text: 'Restore fair gift exchanges and trade rates; advocate that colonial assemblies form direct treaties with tribal leaders.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { wealth: 5, influence: 6, historicalKnowledge: 4 },
        immediateConsequence: 'Trade resumes peacefully at your post. Tribal leaders trust your word, while nearby settlers view your diplomacy with caution.'
      },
      {
        id: 'opt_3_b',
        text: 'Demand that British regulars crush all Native resistance and build permanent royal forts throughout the Ohio territory.',
        alignment: 'loyalist',
        patriotDelta: -2,
        loyalistDelta: 3,
        neutralDelta: 0,
        statChanges: { britishRelations: 6, wealth: -2 },
        immediateConsequence: 'British garrison commanders welcome your call for strong imperial military control in the west.'
      },
      {
        id: 'opt_3_c',
        text: 'Urge colonial backcountry rangers to organize their own independent defense without waiting for slow British commanders.',
        alignment: 'patriot',
        patriotDelta: 3,
        loyalistDelta: -1,
        neutralDelta: 0,
        statChanges: { colonialSupport: 7, britishRelations: -3, influence: 4 },
        immediateConsequence: 'Frontier militias look to local leadership, reinforcing traditions of colonial self-reliance.'
      },
      {
        id: 'opt_3_d',
        text: 'Pack your valuable pelts and retreat eastward to Lancaster until military tensions stabilize.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { wealth: 3, influence: -2 },
        immediateConsequence: 'You preserve your life and inventory, safely watching the frontier contest from afar.'
      }
    ]
  },
  {
    id: 'evt_assemblies_power',
    chapter: 1,
    checkpoint: 4,
    year: 1764,
    dateString: 'Autumn 1764',
    location: 'Boston Town House',
    colonyId: 'MA',
    role: 'A newly elected representative to the Massachusetts General Court.',
    title: 'Colonial Self-Government',
    historicalContext: 'For over a century, Britain practiced "salutary neglect"—rarely enforcing strict trade laws while allowing elected colonial assemblies to vote taxes and pay royal governors salaries.',
    narrative: 'The Royal Governor of Massachusetts demands that the assembly vote a permanent salary for his office, so he does not have to request funds each year. Fellow representative James Otis warns: "If we surrender the power of the purse, the governor will answer only to the King, not to the people who pay him."',
    curriculumTags: ['Colonial Assemblies', 'Power of the Purse', 'Salutary Neglect'],
    standardId: 'OH-SS.8.4',
    followUpQuestionId: 'q_assemblies_role',
    options: [
      {
        id: 'opt_4_a',
        text: 'Refuse the permanent salary: keep annual appropriations to hold the governor accountable to the taxpayers.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 9, britishRelations: -6, influence: 6 },
        immediateConsequence: 'Your vote preserves assembly power. The governor angrily warns London of Massachusetts insolence.'
      },
      {
        id: 'opt_4_b',
        text: 'Vote for the permanent salary: imperial governors should be independent of local political factions.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 0,
        statChanges: { britishRelations: 8, colonialSupport: -7, wealth: 4 },
        immediateConsequence: 'The governor praises your loyalty and invites you to join the advisory Council.'
      },
      {
        id: 'opt_4_c',
        text: 'Offer a two-year compromise salary tied to the governor signing local public works and bridge bills.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 7, colonialSupport: 3, britishRelations: 2 },
        immediateConsequence: 'Legislative pragmatists endorse your maneuver, avoiding an immediate constitutional clash.'
      },
      {
        id: 'opt_4_d',
        text: 'Abstain from the vote to avoid alienating either the governor or Boston town leaders.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { influence: -3, wealth: 2 },
        immediateConsequence: 'You escape direct controversy, though both sides view your reluctance as a lack of conviction.'
      }
    ]
  },
  {
    id: 'evt_ch1_challenge',
    chapter: 1,
    checkpoint: 5,
    year: 1764,
    dateString: 'December 1764',
    location: 'Williamsburg & London',
    colonyId: 'VA',
    role: 'A Virginia planter and magistrate preparing for the new parliamentary session.',
    title: 'Chapter 1 Challenge: The Frontier Dilemma',
    historicalContext: 'Reports arrive that British Chancellor of the Exchequer George Grenville intends to enact a comprehensive scheme to tax colonial commerce and enforce long-dormant Navigation Acts.',
    narrative: 'A circular letter from British authorities warns that imperial troop garrisons will be stationed permanently in colonial towns. Neighbors gather at your tavern asking: "Are we subjects of the British Crown entitled to the rights of free Englishmen, or are we conquered provinces to be taxed at will?"',
    curriculumTags: ['Rights of Englishmen', 'Imperial Garrison', 'Salutary Neglect'],
    standardId: 'OH-SS.8.3',
    followUpQuestionId: 'q_ch1_synthesis',
    options: [
      {
        id: 'opt_ch1_a',
        text: 'Draft a public manifesto declaring that colonists possess all rights of Englishmen, including consent to taxation.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 8, influence: 7, britishRelations: -5 },
        immediateConsequence: 'Copies circulate rapidly through Virginia, establishing you as an intellectual leader of colonial rights.'
      },
      {
        id: 'opt_ch1_b',
        text: 'Remind your neighbors that British military power alone saved the colonies from French and Native defeat.',
        alignment: 'loyalist',
        patriotDelta: -2,
        loyalistDelta: 4,
        neutralDelta: 0,
        statChanges: { britishRelations: 7, colonialSupport: -5, influence: 3 },
        immediateConsequence: 'Crown supporters rally around your words, praising your gratitude to King and Parliament.'
      },
      {
        id: 'opt_ch1_c',
        text: 'Call for an inter-colonial conference to submit a joint financial plan directly to Parliament.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 6 },
        immediateConsequence: 'Your measured leadership gains attention across colonial borders as a unifying voice.'
      },
      {
        id: 'opt_ch1_d',
        text: 'Urge everyone to remain patient and wait to see what specific bills Parliament actually introduces.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { colonialSupport: 1, britishRelations: 2 },
        immediateConsequence: 'Tensions cool momentarily, though the calm will not last as 1765 approaches.'
      }
    ]
  },

  // CHAPTER 2 EVENTS
  {
    id: 'evt_sugar_act',
    chapter: 2,
    checkpoint: 1,
    year: 1764,
    dateString: 'April 1764',
    location: 'Boston Harbor & Newport',
    colonyId: 'RI',
    role: 'A merchant shipping molasses from the West Indies to Rhode Island rum distilleries.',
    title: 'The Sugar Act & Vice-Admiralty Courts',
    historicalContext: 'Parliament passes the Sugar Act (Revenue Act of 1764). It lowers the duty on French foreign molasses from 6 pence to 3 pence per gallon, but implements strict enforcement: customs searches and trials in vice-admiralty courts where judges, not colonial juries, decide guilt.',
    narrative: 'A Royal Navy cutter halts your brigantine off Newport. The customs inspector threatens to confiscate your cargo unless you pay the duty in silver coin. He warns that any appeal must go before the naval vice-admiralty court in Halifax, Nova Scotia, where judges receive 5% of seized cargo value!',
    curriculumTags: ['Sugar Act', 'Vice-Admiralty Courts', 'Trial by Jury'],
    standardId: 'OH-SS.8.4',
    followUpQuestionId: 'q_sugar_act_courts',
    options: [
      {
        id: 'opt_sug_a',
        text: 'Refuse to pay: argue that denying trial by jury violates Magna Carta and fundamental English common law.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 8, britishRelations: -6, wealth: -4 },
        immediateConsequence: 'Your cargo is impounded, but Boston and Newport merchants hail your constitutional defiance.'
      },
      {
        id: 'opt_sug_b',
        text: 'Pay the reduced 3-pence duty quietly in silver: three pence is cheaper than past bribes and avoids naval seizure.',
        alignment: 'loyalist',
        patriotDelta: -2,
        loyalistDelta: 3,
        neutralDelta: 1,
        statChanges: { wealth: 4, britishRelations: 6, colonialSupport: -3 },
        immediateConsequence: 'Your ship unloads quickly and your distillery remains profitable, though radical merchants call you compliant.'
      },
      {
        id: 'opt_sug_c',
        text: 'Organize a merchants league to legally petition Parliament, offering to buy only British Caribbean molasses if court fees are abolished.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 7, historicalKnowledge: 4 },
        immediateConsequence: 'Fellow shipowners elect you treasurer of the merchant committee to draft formal legal protests.'
      },
      {
        id: 'opt_sug_d',
        text: 'Offload your molasses into small dories under the cover of night along a secluded Narragansett Bay cove.',
        alignment: 'patriot',
        patriotDelta: 2,
        loyalistDelta: -1,
        neutralDelta: 1,
        statChanges: { wealth: 8, britishRelations: -3 },
        immediateConsequence: 'You evade the tax collector completely, pocketing high profits while keeping out of open public fights.'
      }
    ]
  },
  {
    id: 'evt_stamp_act_crisis',
    chapter: 2,
    checkpoint: 2,
    year: 1765,
    dateString: 'March 1765',
    location: 'Boston & Philadelphia',
    colonyId: 'MA',
    role: 'You operate a bustling printing press and publishing shop in Boston.',
    title: 'The Stamp Act of 1765',
    historicalContext: 'Parliament passes the Stamp Act: for the first time, an INTERNAL tax is imposed on everyday items used solely within the colonies—newspapers, pamphlets, legal contracts, licenses, wills, and playing cards must bear an embossed tax stamp.',
    narrative: 'A crate of official royal stamped paper arrives at the Boston wharf. Stamp collector Andrew Oliver warns that printing your weekly newspaper or drawing up ship manifests without the royal stamp carries heavy fines and jail. Outside your shop, a crowd gathers around the Liberty Tree.',
    curriculumTags: ['Stamp Act', 'Direct Taxation', 'Sons of Liberty'],
    standardId: 'OH-SS.8.4',
    followUpQuestionId: 'q_stamp_act_objection',
    options: [
      {
        id: 'opt_sta_a',
        text: 'Print your newspaper without the stamp, openly featuring a skull-and-crossbones where the royal stamp belongs!',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -3,
        neutralDelta: -1,
        statChanges: { colonialSupport: 12, britishRelations: -8, influence: 8, wealth: -2 },
        immediateConsequence: 'Your defiant edition sells out instantly; crowds cheer you as a fearless patriot printer.'
      },
      {
        id: 'opt_sta_b',
        text: 'Purchase the stamped paper: defying parliamentary statute will destroy your business and invite legal prosecution.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 8, colonialSupport: -10, wealth: 3 },
        immediateConsequence: 'Royal officials commend your law-abiding stance, but an angry crowd smashes two shop windowpanes.'
      },
      {
        id: 'opt_sta_c',
        text: 'Suspend publishing temporarily, announcing you refuse to pay unconstitutional taxes but will not break statutory law.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { influence: 4, wealth: -5, colonialSupport: 3 },
        immediateConsequence: 'Readers respect your moral integrity, though closing your press costs you significant revenue.'
      },
      {
        id: 'opt_sta_d',
        text: 'Publish anonymous essays presenting both the parliamentary argument for imperial defense and the colonial argument for representation.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 5,
        statChanges: { influence: 7, historicalKnowledge: 7 },
        immediateConsequence: 'Your balanced gazette becomes essential reading for civic leaders seeking deep analysis.'
      }
    ]
  },
  {
    id: 'evt_stamp_boycott',
    chapter: 2,
    checkpoint: 3,
    year: 1765,
    dateString: 'August 1765',
    location: 'New York City & Boston',
    colonyId: 'NY',
    role: 'A major dry goods merchant importing British wool, dishes, and tea.',
    title: 'Boycott or Buy?',
    historicalContext: 'Colonial merchants, shopkeepers, and artisans form Non-Importation Agreements. They pledge not to import or sell any British manufactured goods until the Stamp Act is repealed. The Sons of Liberty enforce the boycott.',
    narrative: 'A delegation from the Sons of Liberty visits your warehouse carrying a Non-Importation Agreement pledge. They say: "If British merchants in London lose their colonial market, they will beg Parliament to repeal the tax. Will you sign your name, or continue selling British goods?"',
    curriculumTags: ['Non-Importation', 'Boycotts', 'Economic Pressure'],
    standardId: 'OH-SS.8.5',
    followUpQuestionId: 'q_sons_daughters_liberty',
    options: [
      {
        id: 'opt_boy_a',
        text: 'Sign the non-importation pledge publicly, lock up your British wool, and promote homespun garments.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 10, wealth: -6, influence: 6 },
        immediateConsequence: 'The Sons of Liberty publish your name on the list of virtuous patriotic merchants.'
      },
      {
        id: 'opt_boy_b',
        text: 'Refuse to sign: private contracts and commerce must remain free from street intimidation and extra-legal coercion.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 7, colonialSupport: -9, wealth: 5 },
        immediateConsequence: 'British officials support your stand, but protesters paint your shop door with warning tar.'
      },
      {
        id: 'opt_boy_c',
        text: 'Sign the agreement on the condition that local artisans agree to fixed fair price ceilings so poor families are not gouged.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { influence: 8, colonialSupport: 5, wealth: -3 },
        immediateConsequence: 'Your thoughtful condition wins broad support among both working artisans and wary shopkeepers.'
      },
      {
        id: 'opt_boy_d',
        text: 'Secretly sell your existing British inventory at discounted rates to friends while claiming your shelves are bare.',
        alignment: 'neutral',
        patriotDelta: -1,
        loyalistDelta: 0,
        neutralDelta: 2,
        statChanges: { wealth: 8, influence: -2 },
        immediateConsequence: 'You clear your stock safely, avoiding both financial disaster and immediate public confrontation.'
      }
    ]
  },
  {
    id: 'evt_stamp_congress',
    chapter: 2,
    checkpoint: 4,
    year: 1765,
    dateString: 'October 1765',
    location: 'Federal Hall, New York City',
    colonyId: 'NY',
    role: 'A colonial delegate attending the Stamp Act Congress.',
    title: 'The Stamp Act Congress in New York',
    historicalContext: 'Twenty-seven delegates from nine colonies meet in New York City—the first unified colonial congress convened at colonial initiative. John Dickinson of Pennsylvania drafts the "Declaration of Rights and Grievances."',
    narrative: 'In the assembly hall, delegates debate how far to challenge British authority. Radical voices propose declaring that Parliament has no authority whatsoever over the colonies, while moderates suggest affirming loyalty to King George while insisting only colonial assemblies can tax colonists.',
    curriculumTags: ['Stamp Act Congress', 'Colonial Unity', 'Rights and Grievances'],
    standardId: 'OH-SS.8.5',
    followUpQuestionId: 'q_stamp_congress_significance',
    options: [
      {
        id: 'opt_sc_a',
        text: 'Champion the moderate resolution: affirm allegiance to the Crown, but insist taxation without colonial representation is unconstitutional.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: 0,
        neutralDelta: 2,
        statChanges: { influence: 9, historicalKnowledge: 7, colonialSupport: 8 },
        immediateConsequence: 'Your balanced phrasing unites nine colonies behind a single dignified petition to King George.'
      },
      {
        id: 'opt_sc_b',
        text: 'Argue that Parliament possesses supreme sovereign power over all subjects throughout the empire; colonies should plead poverty rather than question rights.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 0,
        statChanges: { britishRelations: 8, colonialSupport: -6, influence: 3 },
        immediateConsequence: 'The Royal Governor praises your legal orthodoxy, though fellow delegates reject your language.'
      },
      {
        id: 'opt_sc_c',
        text: 'Propose that the colonies request representation in the British House of Commons by sending elected American MPs to Westminster.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 5, historicalKnowledge: 5 },
        immediateConsequence: 'Delegates discuss imperial representation, though most realize 3,000 miles of ocean makes it impractical.'
      },
      {
        id: 'opt_sc_d',
        text: 'Urge immediate inter-colonial military preparation in case Parliament answers the petition with troops.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -4,
        neutralDelta: -2,
        statChanges: { colonialSupport: 5, britishRelations: -9, influence: 4 },
        immediateConsequence: 'Moderates shudder at talk of war, though fiery delegates applaud your bold foresight.'
      }
    ]
  },
  {
    id: 'evt_ch2_challenge',
    chapter: 2,
    checkpoint: 5,
    year: 1766,
    dateString: 'March 1766',
    location: 'London & Boston',
    colonyId: 'MA',
    role: 'A colonial merchant celebrating news from London.',
    title: 'Chapter 2 Challenge: Parliament Responds & Repeals',
    historicalContext: 'British merchants, facing bankruptcy due to the colonial non-importation boycotts, pressure Parliament. Parliament repeals the Stamp Act! However, on the very same day, Parliament passes the Declaratory Act, asserting that Parliament has "full power and authority to make laws... to bind the colonies and people of America in all cases whatsoever."',
    narrative: 'Church bells ring throughout Boston and bonfires light the hills in celebration of the Stamp Act repeal. But when you read the fine print of the Declaratory Act sent from London, your joy turns to contemplation. What is your response to the empire twin announcements?',
    curriculumTags: ['Stamp Act Repeal', 'Declaratory Act', 'Parliamentary Sovereignty'],
    standardId: 'OH-SS.8.4',
    followUpQuestionId: 'q_ch2_declaratory_act',
    options: [
      {
        id: 'opt_ch2_a',
        text: 'Warn that the Declaratory Act is an ongoing threat: Parliament has not conceded the principle of taxation without representation.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 8, influence: 7, britishRelations: -4 },
        immediateConsequence: 'Thinking colonists heed your warning, remaining vigilant despite the noisy public celebrations.'
      },
      {
        id: 'opt_ch2_b',
        text: 'Celebrate the repeal fully: Parliament heard colonial appeals and showed British justice and constitutional flexibility.',
        alignment: 'loyalist',
        patriotDelta: -2,
        loyalistDelta: 4,
        neutralDelta: 1,
        statChanges: { britishRelations: 7, colonialSupport: 4, wealth: 5 },
        immediateConsequence: 'You restore warm relationships with British business houses, anticipating a new era of trade.'
      },
      {
        id: 'opt_ch2_c',
        text: 'Recommend dismantling the boycotts immediately to show goodwill, but keep the Committees of Correspondence active just in case.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 6 },
        immediateConsequence: 'Town leaders praise your practical strategy: resume trade while maintaining vigilance.'
      },
      {
        id: 'opt_ch2_d',
        text: 'Donate a barrel of celebratory rum to the town green and focus on restocking your warehouse shelves.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { wealth: 4, colonialSupport: 3 },
        immediateConsequence: 'Your neighbors drink to your health and the resumption of peaceful trade.'
      }
    ]
  },

  // CHAPTER 3 EVENTS
  {
    id: 'evt_townshend_duties',
    chapter: 3,
    checkpoint: 1,
    year: 1767,
    dateString: 'June 1767',
    location: 'Boston & New York',
    colonyId: 'MA',
    role: 'A warehouse master in Boston storing imported glass, paint, and paper.',
    title: 'The Townshend Duties & Writs of Assistance',
    historicalContext: 'Chancellor Charles Townshend introduces external import duties on glass, lead, paint, paper, and tea imported into the colonies. To enforce them, customs officials are issued "Writs of Assistance"—broad general search warrants allowing officers to search any ship, store, or home for smuggled goods without naming specific items.',
    narrative: 'Two British customs officers and a royal naval lieutenant appear at your warehouse door flashing a blank Writ of Assistance. They demand unrestricted access to pry open all crates and rummage through your private office drawers without stating what crime they suspect.',
    curriculumTags: ['Townshend Acts', 'Writs of Assistance', 'Search and Seizure'],
    standardId: 'OH-SS.8.4',
    followUpQuestionId: 'q_writs_of_assistance',
    options: [
      {
        id: 'opt_tw_a',
        text: 'Bar the entrance: cite James Otis argument that general warrants violate the sacred English principle that a man home is his castle!',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -3,
        neutralDelta: -1,
        statChanges: { colonialSupport: 10, britishRelations: -7, influence: 6 },
        immediateConsequence: 'A crowd gathers to back you up; the inspectors retreat to file an official obstruction complaint.'
      },
      {
        id: 'opt_tw_b',
        text: 'Open the doors promptly: customs officers carry lawful royal authority and compliance prevents violent confrontation.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 0,
        statChanges: { britishRelations: 8, colonialSupport: -7, wealth: 3 },
        immediateConsequence: 'Inspectors search your crates, find nothing illicit, and certify your warehouse as law-abiding.'
      },
      {
        id: 'opt_tw_c',
        text: 'Demand that a local elected town constable accompany the search to inventory and supervise every broken seal.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 5 },
        immediateConsequence: 'The compromise upholds statutory oversight without causing an uncontrolled street riot.'
      },
      {
        id: 'opt_tw_d',
        text: 'Bribe the junior clerk with two bottles of fine Madeira wine to overlook the back storage alcove.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 2,
        statChanges: { wealth: -2, colonialSupport: 1 },
        immediateConsequence: 'The search concludes quietly, keeping your unmanifested goods safely hidden.'
      }
    ]
  },
  {
    id: 'evt_daughters_of_liberty',
    chapter: 3,
    checkpoint: 2,
    year: 1768,
    dateString: 'October 1768',
    location: 'Hartford & Boston',
    colonyId: 'CT',
    role: 'A household manager coordinating a spinning bee in Connecticut.',
    title: 'Homespun Resistance: Daughters of Liberty',
    historicalContext: 'To sustain boycotts against Townshend goods, colonial women organize as the Daughters of Liberty. They hold public "spinning bees" to produce homemade cloth ("homespun") so colonists do not need to buy British textiles, and brew herbal "liberty tea" made from raspberry leaves.',
    narrative: 'Forty women gather at your home with spinning wheels and flax. A wealthy neighbor remarks that homespun fabric is coarse and scratchy compared to fine English wool, and asks why you would sacrifice comfort for political squabbles.',
    curriculumTags: ['Daughters of Liberty', 'Homespun Movement', 'Economic Resistance'],
    standardId: 'OH-SS.8.5',
    followUpQuestionId: 'q_daughters_liberty_economic',
    options: [
      {
        id: 'opt_dl_a',
        text: 'Proclaim that coarse homespun worn with pride is the true badge of American freedom, far surpassing imported luxuries.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -1,
        neutralDelta: 0,
        statChanges: { colonialSupport: 10, influence: 7, historicalKnowledge: 4 },
        immediateConsequence: 'Your spinning bee produces 120 yards of linen. Local newspapers celebrate the patriotism of Connecticut women.'
      },
      {
        id: 'opt_dl_b',
        text: 'Suggest that boycotting fine British textiles harms the domestic economy and deprives colonial families of quality goods.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 3,
        neutralDelta: 1,
        statChanges: { britishRelations: 6, colonialSupport: -5 },
        immediateConsequence: 'Conservative town leaders agree with you, though younger families embrace homespun.'
      },
      {
        id: 'opt_dl_c',
        text: 'Encourage spinning for practical household self-sufficiency and thrift, avoiding explicit partisan agitation.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { wealth: 4, influence: 5 },
        immediateConsequence: 'Women of all political views join the spinning circle without bitter political quarreling.'
      },
      {
        id: 'opt_dl_d',
        text: 'Produce both homespun cloth for the town market and purchase fine imported cloth for private family weddings.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { wealth: 5, colonialSupport: 2 },
        immediateConsequence: 'You balance domestic necessity and refined comfort with quiet discretion.'
      }
    ]
  },
  {
    id: 'evt_redcoats_boston',
    chapter: 3,
    checkpoint: 3,
    year: 1769,
    dateString: 'November 1769',
    location: 'Boston Common',
    colonyId: 'MA',
    role: 'A ropewalk owner in Boston whose dock workers compete with British soldiers for jobs.',
    title: 'Redcoats Garrison Boston',
    historicalContext: 'To quell ongoing resistance to customs commissioners, Britain dispatches four regiments of soldiers (nearly 2,000 troops) into a town of only 16,000 citizens. Poorly paid British soldiers seek off-duty manual work on the docks, depressing local wages.',
    narrative: 'A redcoat private from the 29th Regiment approaches your ropewalk looking for off-duty work spinning hemp rope at half the wage your regular apprentice rope-spinners earn. Your apprentice ropemaker shouts: "Lobsterbacks take our bread while guarding our tax collectors!"',
    curriculumTags: ['Quartering Troops', 'Economic Friction', 'Redcoats in Boston'],
    standardId: 'OH-SS.8.6',
    followUpQuestionId: 'q_quartering_tensions',
    options: [
      {
        id: 'opt_rc_a',
        text: 'Refuse to hire the soldier: protect colonial workmen wages and tell the redcoat to return to his barracks.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 9, britishRelations: -5, influence: 5 },
        immediateConsequence: 'Boston workingmen cheer your solidarity. The soldier leaves swearing revenge against town ropemakers.'
      },
      {
        id: 'opt_rc_b',
        text: 'Hire the soldier: cheaper labor lowers production costs, and showing kindness to royal troops builds peace.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 0,
        statChanges: { wealth: 7, britishRelations: 6, colonialSupport: -8 },
        immediateConsequence: 'Your profit margins improve, but local dockworkers brand your shop as a friend to redcoats.'
      },
      {
        id: 'opt_rc_c',
        text: 'Decline to hire him politely, explaining that local apprentices have contractual preference, but offer him bread and warm tea.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 6, colonialSupport: 3, britishRelations: 2 },
        immediateConsequence: 'Your humane diplomacy prevents an ugly tavern brawl on your doorstep.'
      },
      {
        id: 'opt_rc_d',
        text: 'Complain directly to the town selectmen demanding regulations forbidding soldiers from taking civilian employment.',
        alignment: 'patriot',
        patriotDelta: 3,
        loyalistDelta: -1,
        neutralDelta: 1,
        statChanges: { influence: 7, historicalKnowledge: 4 },
        immediateConsequence: 'The selectmen take up your petition, channeling street anger into official municipal channels.'
      }
    ]
  },
  {
    id: 'evt_boston_massacre',
    chapter: 3,
    checkpoint: 4,
    year: 1770,
    dateString: 'March 5, 1770',
    location: 'King Street, Boston',
    colonyId: 'MA',
    role: 'An eyewitness standing outside the Custom House on a freezing winter evening.',
    title: 'The 5th of March: The Boston Massacre',
    historicalContext: 'A lone British sentry outside the Custom House is surrounded by an unruly crowd shouting insults and throwing chunks of ice, oyster shells, and clubs. Captain Thomas Preston and seven soldiers march to his defense. In the confusion, someone yells "Fire!" leaving five colonists dead, including Crispus Attucks.',
    narrative: 'Musket smoke drifts through the snowy air. Shouts of "Murder!" echo down King Street. Paul Revere prepares an engraving depicting soldiers firing an orderly volley into a peaceful crowd, while royal authorities insist the troops fired in desperate self-defense against a violent mob. How do you describe the event?',
    curriculumTags: ['Boston Massacre', 'Propaganda', 'Crispus Attucks'],
    standardId: 'OH-SS.8.6',
    followUpQuestionId: 'q_boston_massacre_propaganda',
    options: [
      {
        id: 'opt_bm_a',
        text: 'Publish Paul Revere engraving calling it a "Bloody Massacre" of innocent civilians by tyrannical royal soldiers.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -4,
        neutralDelta: -2,
        statChanges: { colonialSupport: 12, britishRelations: -9, influence: 8 },
        immediateConsequence: 'Outrage spreads like wildfire across all 13 colonies, cementing Boston reputation as a city under siege.'
      },
      {
        id: 'opt_bm_b',
        text: 'Report that the soldiers were trapped, pelted with deadly ice and clubs, and fired in justifiable panic without orders.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 9, colonialSupport: -10, influence: 2 },
        immediateConsequence: 'Royal officials and moderate jurists thank you for speaking the unvarnished truth amidst mob hysteria.'
      },
      {
        id: 'opt_bm_c',
        text: 'Call for a fair judicial trial under English law, insisting that truth and justice must govern, not propaganda.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 2,
        neutralDelta: 5,
        statChanges: { influence: 9, historicalKnowledge: 8 },
        immediateConsequence: 'Your call for calm helps pave the way for John Adams to defend the soldiers in an impartial court.'
      },
      {
        id: 'opt_bm_d',
        text: 'Focus on raising a relief fund for the mourning families of Crispus Attucks, Samuel Gray, and the other victims.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { colonialSupport: 6, influence: 6, wealth: -2 },
        immediateConsequence: 'Your charity comforts grieving widows and orphans, earning broad community respect.'
      }
    ]
  },
  {
    id: 'evt_ch3_challenge',
    chapter: 3,
    checkpoint: 5,
    year: 1770,
    dateString: 'October 1770',
    location: 'Queen Street Courthouse, Boston',
    colonyId: 'MA',
    role: 'A juror in the trial of British Captain Thomas Preston and his soldiers.',
    title: 'Chapter 3 Challenge: The Rule of Law in Boston',
    historicalContext: 'Patriot leader John Adams courageously agrees to defend Captain Preston and the eight soldiers in court, arguing that in a free society, law must be blind to political passion. Six soldiers are acquitted, two convicted of manslaughter.',
    narrative: 'As a juror, you listen to contradictory testimony. Sons of Liberty leaders urge a guilty verdict to avenge colonial blood, while Adams argues: "Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passions, they cannot alter the state of facts and evidence."',
    curriculumTags: ['Rule of Law', 'John Adams', 'Trial of Soldiers'],
    standardId: 'OH-SS.8.1',
    followUpQuestionId: 'q_ch3_committees_correspondence',
    options: [
      {
        id: 'opt_ch3_a',
        text: 'Vote to acquit based on reasonable doubt and lack of proof of a direct firing command, upholding the rule of law.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 2,
        neutralDelta: 5,
        statChanges: { influence: 9, historicalKnowledge: 8, britishRelations: 4 },
        immediateConsequence: 'The fair verdict demonstrates that Massachusetts respects constitutional law above street vengeance.'
      },
      {
        id: 'opt_ch3_b',
        text: 'Vote guilty on all counts of murder: British soldiers had no legal right to garrison Boston or shoot colonists.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -4,
        neutralDelta: -2,
        statChanges: { colonialSupport: 8, britishRelations: -8, influence: 4 },
        immediateConsequence: 'Radical patriots cheer your uncompromising stance, though legal scholars lament the triumph of passion.'
      },
      {
        id: 'opt_ch3_c',
        text: 'Condemn both the rioters for provoking the clash and Parliament for quartering armed troops among civilians.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 6 },
        immediateConsequence: 'Your nuanced analysis becomes the foundation for organizing the Committees of Correspondence.'
      },
      {
        id: 'opt_ch3_d',
        text: 'Support removing all British garrisons from Boston to Castle William in the harbor to restore civic peace.',
        alignment: 'patriot',
        patriotDelta: 3,
        loyalistDelta: -1,
        neutralDelta: 2,
        statChanges: { colonialSupport: 7, britishRelations: -2, influence: 5 },
        immediateConsequence: 'Troop relocation cools immediate tensions, ushering in a temporary two-year lull in overt violence.'
      }
    ]
  },

  // CHAPTER 4 EVENTS
  {
    id: 'evt_tea_act_monopoly',
    chapter: 4,
    checkpoint: 1,
    year: 1773,
    dateString: 'May 1773',
    location: 'Philadelphia & New York',
    colonyId: 'PA',
    role: 'A Philadelphia tea importer receiving shipments from Holland.',
    title: 'The Tea Act & The East India Monopoly',
    historicalContext: 'Parliament passes the Tea Act of 1773 to rescue the financially troubled British East India Company. The act allows the company to sell tea directly to the colonies without paying British export taxes, making its tea CHEAPER than Dutch smuggled tea, even with the 3-pence Townshend tax included!',
    narrative: 'A British consignment agent offers you an exclusive contract to sell East India Company tea. He points out: "The colonists will get the best Bohea tea at half the usual price! What difference does a three-pence duty make when the tea itself is so cheap?" Local leaders argue accepting the cheap tea recognizes Parliament right to tax.',
    curriculumTags: ['Tea Act 1773', 'East India Company', 'Monopoly & Principle'],
    standardId: 'OH-SS.8.4',
    followUpQuestionId: 'q_tea_act_objection',
    options: [
      {
        id: 'opt_tea_a',
        text: 'Reject the consignment: cheap tea is a Trojan horse designed to seduce colonists into surrendering their rights!',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 10, britishRelations: -6, wealth: -4, influence: 6 },
        immediateConsequence: 'Philadelphia town meetings praise your principle; tea consignees in other cities face mounting pressure.'
      },
      {
        id: 'opt_tea_b',
        text: 'Accept the consignment: affordable tea benefits ordinary families, and Parliament had the legal power to grant the corporate charter.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { wealth: 8, britishRelations: 8, colonialSupport: -9 },
        immediateConsequence: 'You secure high-volume profits, but Sons of Liberty mark your warehouse as an enemy of liberty.'
      },
      {
        id: 'opt_tea_c',
        text: 'Refuse to accept the tea, but urge the ships to turn around peacefully and return their cargo to England untouched.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 5 },
        immediateConsequence: 'In Philadelphia and New York, tea ships do turn back peacefully, avoiding the crisis brewing in Boston.'
      },
      {
        id: 'opt_tea_d',
        text: 'Sell local herbal mint and sassafras tea as a patriotic domestic alternative to all imported tea.',
        alignment: 'patriot',
        patriotDelta: 3,
        loyalistDelta: 0,
        neutralDelta: 2,
        statChanges: { wealth: 5, colonialSupport: 6 },
        immediateConsequence: 'Your herbal tea becomes a fashionable staple at town gatherings.'
      }
    ]
  },
  {
    id: 'evt_boston_tea_party',
    chapter: 4,
    checkpoint: 2,
    year: 1773,
    dateString: 'December 16, 1773',
    location: 'Griffin Wharf, Boston',
    colonyId: 'MA',
    role: 'A Boston craftsman gathered at the Old South Meeting House.',
    title: 'Boston Harbor: 342 Chests in the Tide',
    historicalContext: 'Royal Governor Thomas Hutchinson refuses to allow the three tea ships (Dartmouth, Eleanor, Beaver) to leave Boston Harbor without paying the duty. Samuel Adams announces to a packed meeting of 5,000 colonists: "This meeting can do nothing more to save the country!"',
    narrative: 'War whoops sound from the gallery. Scores of men in Mohawks disguise march down to Griffin Wharf. They board the ships, chop open 342 wooden chests with hatchets, and dump 46 tons of tea (worth nearly £10,000) into the chilly harbor waters, harming no crew and damaging no other property.',
    curriculumTags: ['Boston Tea Party', 'Sons of Liberty', 'Civil Disobedience'],
    standardId: 'OH-SS.8.5',
    followUpQuestionId: 'q_tea_party_aftermath',
    options: [
      {
        id: 'opt_btp_a',
        text: 'Join the party at Griffin Wharf: destroy the tea to prevent it from ever being landed and taxed.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -4,
        neutralDelta: -2,
        statChanges: { colonialSupport: 12, britishRelations: -10, influence: 7 },
        immediateConsequence: 'The tea dissolves into Boston mud; the daring act shocks the British ministry into fury.'
      },
      {
        id: 'opt_btp_b',
        text: 'Condemn the destruction as lawless vandalism: private property was destroyed and it invites severe imperial retaliation.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 9, colonialSupport: -8, influence: 3 },
        immediateConsequence: 'Loyalists and even some moderates like George Washington in Virginia criticize the wanton destruction of private property.'
      },
      {
        id: 'opt_btp_c',
        text: 'Help sweep the ships decks clean afterward, ensuring no other cargo or ship fittings were harmed.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { influence: 6, historicalKnowledge: 5 },
        immediateConsequence: 'The strict discipline of the protest proves it was a focused political statement, not a drunken riot.'
      },
      {
        id: 'opt_btp_d',
        text: 'Propose that Massachusetts merchants raise private subscription funds to repay the East India Company for the ruined tea.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 2,
        neutralDelta: 5,
        statChanges: { influence: 7, britishRelations: 4, wealth: -3 },
        immediateConsequence: 'Moderates like Benjamin Franklin applaud the offer to pay, though hardliners in Parliament dismiss it.'
      }
    ]
  },
  {
    id: 'evt_intolerable_acts',
    chapter: 4,
    checkpoint: 3,
    year: 1774,
    dateString: 'Spring 1774',
    location: 'Boston & London',
    colonyId: 'MA',
    role: 'A Boston harbor wharfinger watching royal warships seal the channel.',
    title: 'The Coercive Acts: Boston Closed and Governed',
    historicalContext: 'King George III declares: "The dye is now cast; the colonies must either submit or triumph." Parliament passes the Coercive Acts (dubbed the "Intolerable Acts"): 1. Boston Port Act closes the harbor to all commerce; 2. Massachusetts Government Act suspends elected town meetings; 3. Administration of Justice Act; 4. New Quartering Act. General Thomas Gage is appointed military governor.',
    narrative: 'Royal Navy frigates drop anchor across Boston harbor entrance. Cranes sit silent; thousands of dockworkers, sailmakers, and carters are thrown into immediate destitution. British troops commandeer private warehouses for barracks. How do you respond to the punishment of your home city?',
    curriculumTags: ['Coercive Acts', 'Intolerable Acts', 'Boston Port Act'],
    standardId: 'OH-SS.8.6',
    followUpQuestionId: 'q_intolerable_acts_provisions',
    options: [
      {
        id: 'opt_ia_a',
        text: 'Call on all 13 colonies to treat the attack on Massachusetts as an attack on all; urge an immediate Continental Congress.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -3,
        neutralDelta: -1,
        statChanges: { colonialSupport: 12, britishRelations: -9, influence: 8 },
        immediateConsequence: 'Your appeal resonates from New Hampshire to Georgia, forging unprecedented colonial solidarity.'
      },
      {
        id: 'opt_ia_b',
        text: 'Urge Boston to pay for the destroyed tea so Parliament will reopen the port and restore legal stability.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 8, colonialSupport: -9, wealth: 2 },
        immediateConsequence: 'Loyalist merchants petition General Gage, but the overwhelming majority of citizens refuse to bow to force.'
      },
      {
        id: 'opt_ia_c',
        text: 'Move town meetings outside Boston to Concord and Salem to circumvent the royal ban on municipal democracy.',
        alignment: 'patriot',
        patriotDelta: 3,
        loyalistDelta: -1,
        neutralDelta: 2,
        statChanges: { influence: 8, historicalKnowledge: 6 },
        immediateConsequence: 'Colonial democracy continues in defiance of royal decree as provincial congresses assume de facto power.'
      },
      {
        id: 'opt_ia_d',
        text: 'Organize distribution of food supplies sent by sister colonies to starving Boston working-class families.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { colonialSupport: 8, influence: 7, wealth: -2 },
        immediateConsequence: 'Barrels of Virginia rice and Pennsylvania flour keep Boston alive under the royal blockade.'
      }
    ]
  },
  {
    id: 'evt_colonial_solidarity',
    chapter: 4,
    checkpoint: 4,
    year: 1774,
    dateString: 'September 1774',
    location: 'Carpenters Hall, Philadelphia',
    colonyId: 'PA',
    role: 'A delegate to the First Continental Congress.',
    title: 'The First Continental Congress Meets',
    historicalContext: 'Delegates from 12 colonies (Georgia could not attend) assemble in Philadelphia. Leaders include Patrick Henry, George Washington, John and Samuel Adams, John Jay, and Joseph Galloway.',
    narrative: 'Patrick Henry declares: "The distinctions between Virginians, Pennsylvanians, New Yorkers, and New Englanders are no more. I am not a Virginian, but an American!" Joseph Galloway proposes a moderate "Plan of Union" with a colonial parliament and royal president general.',
    curriculumTags: ['First Continental Congress', 'Suffolk Resolves', 'Continental Association'],
    standardId: 'OH-SS.8.5',
    followUpQuestionId: 'q_first_continental_congress',
    options: [
      {
        id: 'opt_fcc_a',
        text: 'Endorse the Suffolk Resolves: declare the Intolerable Acts void, urge militias to train, and create the Continental Association boycott.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -3,
        neutralDelta: -1,
        statChanges: { colonialSupport: 11, influence: 9, britishRelations: -8 },
        immediateConsequence: 'Congress adopts the Suffolk Resolves, uniting the colonies behind comprehensive economic and defensive measures.'
      },
      {
        id: 'opt_fcc_b',
        text: 'Vote for Galloway Plan of Union: create a permanent federal imperial union keeping the colonies loyal under the Crown.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 2,
        statChanges: { britishRelations: 7, influence: 4 },
        immediateConsequence: 'The Plan of Union is narrowly defeated by one colony vote (6 to 5), showing how deeply divided delegates remain.'
      },
      {
        id: 'opt_fcc_c',
        text: 'Draft a respectful petition to King George III appealing to him to protect his loyal colonial subjects from parliamentary tyranny.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 7 },
        immediateConsequence: 'Congress agrees to send a formal petition to the King alongside the economic boycott.'
      },
      {
        id: 'opt_fcc_d',
        text: 'Advocate for non-exportation alongside non-importation, halting all colonial tobacco and wheat shipments to Britain.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 8, wealth: -6, influence: 6 },
        immediateConsequence: 'Congress delays non-exportation by one year to allow planters time to adjust their crop contracts.'
      }
    ]
  },
  {
    id: 'evt_ch4_challenge',
    chapter: 4,
    checkpoint: 5,
    year: 1774,
    dateString: 'December 1774',
    location: 'County Committee of Safety',
    colonyId: 'VA',
    role: 'Elected chairman of your county Committee of Inspection and Safety.',
    title: 'Chapter 4 Challenge: The Continental Association',
    historicalContext: 'The Continental Association mandates that every county, city, and town elect a Committee of Inspection to inspect merchant books, enforce boycotts, publish names of violators as "enemies of American liberty," and ban extravagant gambling and horse racing.',
    narrative: 'A wealthy local planter and magistrate is caught secretly importing English tea and porcelain for his daughter wedding. He challenges your committee authority: "You are an unconstitutional kangaroo court with no royal charter! Who gave you the right to inspect my household goods?"',
    curriculumTags: ['Committees of Inspection', 'Enforcement of Boycotts', 'Committees of Safety'],
    standardId: 'OH-SS.8.5',
    followUpQuestionId: 'q_ch4_association_enforcement',
    options: [
      {
        id: 'opt_ch4_a',
        text: 'Publish his name in the county gazette as an enemy of American liberty and ban all citizens from trading with him.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -3,
        neutralDelta: 0,
        statChanges: { colonialSupport: 10, influence: 8, britishRelations: -6 },
        immediateConsequence: 'The strict enforcement sends a clear signal across the county that boycotts are universal.'
      },
      {
        id: 'opt_ch4_b',
        text: 'Dismiss the charges: private domestic celebrations should not be policed by revolutionary committees.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 7, colonialSupport: -8, influence: 2 },
        immediateConsequence: 'Gentry leaders applaud your restraint, but local militiamen accuse the committee of favoring the rich.'
      },
      {
        id: 'opt_ch4_c',
        text: 'Allow him to surrender the tea to be locked in public storage until the crisis ends, avoiding public ostracism.',
        alignment: 'neutral',
        patriotDelta: 1,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 6 },
        immediateConsequence: 'The pragmatic compromise secures compliance with the boycott without humiliating an influential citizen.'
      },
      {
        id: 'opt_ch4_d',
        text: 'Demand he pay a fine to the town fund for buying gunpowder and lead for the local county militia.',
        alignment: 'patriot',
        patriotDelta: 3,
        loyalistDelta: -2,
        neutralDelta: 1,
        statChanges: { wealth: 2, colonialSupport: 7, influence: 6 },
        immediateConsequence: 'The militia secures fresh ammunition supplies as war clouds gather on the horizon.'
      }
    ]
  },

  // CHAPTER 5 EVENTS
  {
    id: 'evt_midnight_ride',
    chapter: 5,
    checkpoint: 1,
    year: 1775,
    dateString: 'Night of April 18, 1775',
    location: 'Charlestown & Lexington',
    colonyId: 'MA',
    role: 'A midnight courier riding through Middlesex County.',
    title: 'Lanterns in Old North & The Midnight Alarm',
    historicalContext: 'General Gage orders 700 elite British regulars under Lieutenant Colonel Francis Smith to march under cover of night to Concord to seize stockpiled colonial cannon, gunpowder, and flour, and arrest Samuel Adams and John Hancock.',
    narrative: 'Two lanterns gleam from the belfry of Old North Church ("One if by land, two if by sea"). Paul Revere and William Dawes gallop through the countryside waking village captains. An alarm rider pulls his foaming horse up to your farmhouse: "The regulars are out! Which way shall we send the alarm?"',
    curriculumTags: ['Midnight Ride', 'Paul Revere', 'Minutemen Mobilization'],
    standardId: 'OH-SS.8.6',
    followUpQuestionId: 'q_lexington_concord_shot',
    options: [
      {
        id: 'opt_mr_a',
        text: 'Ring the meetinghouse alarm bell, fire signal guns, and ride west to muster every Minuteman company.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -4,
        neutralDelta: -2,
        statChanges: { colonialSupport: 12, britishRelations: -10, influence: 8 },
        immediateConsequence: 'Within hours, hundreds of armed farmers and mechanics grab powder horns and converge on the Concord road.'
      },
      {
        id: 'opt_mr_b',
        text: 'Advise Adams and Hancock to escape to safety, but urge the local militia not to fire unless fired upon.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 7 },
        immediateConsequence: 'Leaders escape arrest while militia officers instruct men to hold their fire and stand their ground.'
      },
      {
        id: 'opt_mr_c',
        text: 'Try to dissuade your neighbors from taking up arms against the King troops, warning of treason and gallows.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 8, colonialSupport: -10 },
        immediateConsequence: 'Armed neighbors brush past you in the dark; you realize the time for speeches has passed.'
      },
      {
        id: 'opt_mr_d',
        text: 'Help hide the casks of gunpowder in barns and ploughed furrows around Concord before the British arrive.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 1,
        statChanges: { colonialSupport: 9, wealth: -2, influence: 6 },
        immediateConsequence: 'When British troops reach Concord, the majority of munitions have already vanished into hiding.'
      }
    ]
  },
  {
    id: 'evt_lexington_concord_battle',
    chapter: 5,
    checkpoint: 2,
    year: 1775,
    dateString: 'April 19, 1775',
    location: 'Lexington Green & Concord North Bridge',
    colonyId: 'MA',
    role: 'A member of Captain John Parker Lexington militia company.',
    title: 'Lexington & Concord: The First Shot',
    historicalContext: 'At dawn on April 19, 77 Lexington militiamen face 250 British advance regulars on Lexington Green. Captain Parker orders: "Stand your ground. Don\'t fire unless fired upon, but if they mean to have a war, let it begin here." A shot rings out from an unknown weapon—the "shot heard \'round the world."',
    narrative: 'Eight Lexington men lie dead in the morning dew. At Concord North Bridge, hundreds of Minutemen counterattack, driving the British regulars into a desperate 16-mile running retreat back to Boston under relentless flank fire from behind stone walls and apple orchards.',
    curriculumTags: ['Lexington and Concord', 'Shot Heard Round the World', 'Outbreak of War'],
    standardId: 'OH-SS.8.6',
    followUpQuestionId: 'q_minutemen_strategy',
    options: [
      {
        id: 'opt_lc_a',
        text: 'Join the siege of Boston: encircle General Gage army with 15,000 New England militiamen.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -5,
        neutralDelta: -2,
        statChanges: { colonialSupport: 12, britishRelations: -12, influence: 8 },
        immediateConsequence: 'You take your place in the earthen redoubts on Cambridge hills; the imperial crisis is now an active war.'
      },
      {
        id: 'opt_lc_b',
        text: 'Mourn the tragic bloodshed and pray for immediate royal commissioners to arrive with terms of pardon and peace.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 2,
        neutralDelta: 5,
        statChanges: { influence: 5, historicalKnowledge: 6 },
        immediateConsequence: 'Many colonists share your heartbreak at brothers killing brothers in the imperial family.'
      },
      {
        id: 'opt_lc_c',
        text: 'Declare the militia attack on royal troops an act of open rebellion and seek protection behind British lines in Boston.',
        alignment: 'loyalist',
        patriotDelta: -5,
        loyalistDelta: 6,
        neutralDelta: -1,
        statChanges: { britishRelations: 10, colonialSupport: -12 },
        immediateConsequence: 'You join hundreds of Loyalist refugees seeking safety under the guns of the Royal Navy in Boston.'
      },
      {
        id: 'opt_lc_d',
        text: 'Volunteer as a militia medic, tending to wounded British redcoats and American militiamen with equal care.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 8, colonialSupport: 6, wealth: -2 },
        immediateConsequence: 'Your compassion earns profound gratitude from soldiers on both sides of the bloody conflict.'
      }
    ]
  },
  {
    id: 'evt_appoint_washington',
    chapter: 5,
    checkpoint: 3,
    year: 1775,
    dateString: 'June 1775',
    location: 'Philadelphia & Bunker Hill',
    colonyId: 'VA',
    role: 'A Virginia delegate to the Second Continental Congress in Philadelphia.',
    title: 'Second Continental Congress: A Continental Army',
    historicalContext: 'The Second Continental Congress meets in Philadelphia as news arrives of the bloody Battle of Bunker Hill (Breed Hill), where colonists repulsed three British frontal assaults before running out of ammunition. John Adams proposes adopting the New England militia as the "Continental Army" and nominating George Washington of Virginia as Commander-in-Chief.',
    narrative: 'Adams argues that choosing a Virginian will bind the Southern colonies to the defense of New England, demonstrating true continental unity. Washington, wearing his blue Virginia militia uniform, modestly leaves the room as delegates debate his appointment.',
    curriculumTags: ['George Washington', 'Continental Army', 'Second Continental Congress'],
    standardId: 'OH-SS.8.6',
    followUpQuestionId: 'q_second_congress_actions',
    options: [
      {
        id: 'opt_gw_a',
        text: 'Vote enthusiastically for Washington: a unified command under Virginia greatest soldier unites all 13 colonies.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -3,
        neutralDelta: 0,
        statChanges: { colonialSupport: 11, influence: 9, historicalKnowledge: 7 },
        immediateConsequence: 'Washington is unanimously elected Commander-in-Chief and rides to take command of the siege at Boston.'
      },
      {
        id: 'opt_gw_b',
        text: 'Oppose creating a standing army: permanent armies are instruments of tyranny and will guarantee total war with Britain.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 2,
        statChanges: { britishRelations: 6, colonialSupport: -5 },
        immediateConsequence: 'Conservative delegates agree, fearing that an army creates an irreversible step toward revolution.'
      },
      {
        id: 'opt_gw_c',
        text: 'Support Washington appointment, but insist Congress authorize printing Continental currency to pay and supply the troops properly.',
        alignment: 'patriot',
        patriotDelta: 3,
        loyalistDelta: -1,
        neutralDelta: 2,
        statChanges: { influence: 8, wealth: -3, historicalKnowledge: 6 },
        immediateConsequence: 'Congress issues $2 million in paper notes, beginning the immense task of wartime financing.'
      },
      {
        id: 'opt_gw_d',
        text: 'Vote for Washington on the condition that Congress simultaneously drafts a final peace petition directly to the King.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 8 },
        immediateConsequence: 'This dual-track strategy yields both an army and the famous Olive Branch Petition.'
      }
    ]
  },
  {
    id: 'evt_olive_branch_petition',
    chapter: 5,
    checkpoint: 4,
    year: 1775,
    dateString: 'July 1775',
    location: 'Philadelphia & London',
    colonyId: 'PA',
    role: 'A Pennsylvania delegate aligned with John Dickinson moderates.',
    title: 'The Olive Branch & King George Proclamation',
    historicalContext: 'John Dickinson drafts the Olive Branch Petition, affirming loyalty to King George III and begging him to restrain his ministers and Parliament to prevent further civil war. In August 1775, King George refuses even to receive or read the petition, and instead issues the Proclamation of Rebellion, declaring the colonies in open and armed rebellion and outside his protection.',
    narrative: 'A packet ship arrives from London with the King proclamation. In it, the King brands all colonial leaders as traitors subject to execution by hanging, and hires 18,000 German Hessian mercenaries to crush the rebellion. Dickinson looks at the document with tears in his eyes.',
    curriculumTags: ['Olive Branch Petition', 'King George III', 'Proclamation of Rebellion'],
    standardId: 'OH-SS.8.6',
    followUpQuestionId: 'q_olive_branch_rejection',
    options: [
      {
        id: 'opt_ob_a',
        text: 'Conclude that the King has dissolved the social contract: when a monarch hires foreign mercenaries to butcher his people, allegiance is void.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -4,
        neutralDelta: -2,
        statChanges: { colonialSupport: 11, influence: 9, britishRelations: -10 },
        immediateConsequence: 'The King rejection drives thousands of undecided moderates directly into the Patriot camp.'
      },
      {
        id: 'opt_ob_b',
        text: 'Argue that the King is misled by evil ministers; send another emissary through friendly British Whig politicians like William Pitt.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 2,
        statChanges: { britishRelations: 6, colonialSupport: -6, influence: 2 },
        immediateConsequence: 'Staunch Loyalists hold fast to hope, but the arrival of German mercenaries shatters their credibility.'
      },
      {
        id: 'opt_ob_c',
        text: 'Advise colonies to begin drafting state constitutions and forming independent local governments to prevent anarchy.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 1,
        statChanges: { influence: 8, historicalKnowledge: 7 },
        immediateConsequence: 'Congress advises colonies to establish revolutionary state governments based on popular authority.'
      },
      {
        id: 'opt_ob_d',
        text: 'Urge strict secrecy regarding the King proclamation to give peace advocates time to prevent total panic.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 1,
        neutralDelta: 3,
        statChanges: { influence: -2, historicalKnowledge: 4 },
        immediateConsequence: 'News leaks within hours regardless; secrecy proves impossible in the charged atmosphere.'
      }
    ]
  },
  {
    id: 'evt_ch5_challenge',
    chapter: 5,
    checkpoint: 5,
    year: 1776,
    dateString: 'January 1776',
    location: 'Philadelphia & Across the Colonies',
    colonyId: 'PA',
    role: 'A bookseller distributing pamphlets in Philadelphia.',
    title: 'Chapter 5 Challenge: Thomas Paine Common Sense',
    historicalContext: 'An English immigrant artisan named Thomas Paine publishes a 47-page pamphlet titled "Common Sense." Written in plain, vigorous language for ordinary farmers and tradespeople rather than Latin-quoting lawyers, it sells 120,000 copies in three months—proportionally the greatest bestseller in American history.',
    narrative: 'Paine writes: "A government of our own is our natural right... Of more worth is one honest man to society, than all the crowned ruffians that ever lived... There is something very absurd in supposing a continent to be perpetually governed by an island." Customers crowd your bookshop demanding copies.',
    curriculumTags: ['Common Sense', 'Thomas Paine', 'Republicanism'],
    standardId: 'OH-SS.8.7',
    followUpQuestionId: 'q_ch5_common_sense_impact',
    options: [
      {
        id: 'opt_ch5_a',
        text: 'Stock hundreds of copies, read excerpts aloud to illiterate patrons, and advocate for immediate total independence.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -4,
        neutralDelta: -2,
        statChanges: { colonialSupport: 12, influence: 9, wealth: 4, historicalKnowledge: 8 },
        immediateConsequence: 'Common Sense transforms public conversation overnight: ordinary people begin openly talking about independence.'
      },
      {
        id: 'opt_ch5_b',
        text: 'Publish a Loyalist rebuttal pamphlet ("Plain Truth") warning that breaking with the British Empire will bring naval ruin and bloody anarchy.',
        alignment: 'loyalist',
        patriotDelta: -4,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 8, colonialSupport: -7, influence: 4 },
        immediateConsequence: 'Your counter-arguments find an audience among conservative merchants and established royal officeholders.'
      },
      {
        id: 'opt_ch5_c',
        text: 'Host public debate nights in your shop where patrons compare Paine republican arguments against constitutional monarchy.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 1,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 9 },
        immediateConsequence: 'Your bookshop becomes the intellectual crossroads of the city as the colonies approach the threshold of decision.'
      },
      {
        id: 'opt_ch5_d',
        text: 'Price the pamphlet cheaply at two shillings to maximize circulation among working artisans and day laborers.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 1,
        statChanges: { colonialSupport: 10, wealth: 1, influence: 7 },
        immediateConsequence: 'Paine democratic ideas reach the common people in workshops, docks, and country taverns.'
      }
    ]
  },

  // CHAPTER 6 EVENTS
  {
    id: 'evt_lee_resolution',
    chapter: 6,
    checkpoint: 1,
    year: 1776,
    dateString: 'June 7, 1776',
    location: 'Pennsylvania State House, Philadelphia',
    colonyId: 'VA',
    role: 'A Virginia delegate in the Continental Congress.',
    title: 'The Resolution for Independence',
    historicalContext: 'Richard Henry Lee of Virginia rises to present instructions from his colony convention: "Resolved: That these United Colonies are, and of right ought to be, free and independent States, that they are absolved from all allegiance to the British Crown, and that all political connection between them and the State of Great Britain is, and ought to be, totally dissolved."',
    narrative: 'The chamber falls dead silent. Delegates look at each other with racing hearts. Some colonies (like Virginia and Massachusetts) are ready to vote immediately, while others (Pennsylvania, New York, Maryland, South Carolina) warn their constituents have not yet authorized them to vote for independence. What do you urge Congress to do?',
    curriculumTags: ['Richard Henry Lee', 'Independence Resolution', 'Continental Congress'],
    standardId: 'OH-SS.8.7',
    followUpQuestionId: 'q_lee_resolution_debate',
    options: [
      {
        id: 'opt_lee_a',
        text: 'Support the resolution immediately: independence is already a reality on the ground; hesitation shows weakness.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -4,
        neutralDelta: -2,
        statChanges: { colonialSupport: 11, influence: 9, britishRelations: -10 },
        immediateConsequence: 'John Adams seconds the motion with fiery eloquence, demanding that Congress seize the historic hour.'
      },
      {
        id: 'opt_lee_b',
        text: 'Vote against the resolution: declaring independence destroys all hope of reconciliation and guarantees a devastating war with the world greatest empire.',
        alignment: 'loyalist',
        patriotDelta: -5,
        loyalistDelta: 6,
        neutralDelta: 0,
        statChanges: { britishRelations: 9, colonialSupport: -10, influence: 3 },
        immediateConsequence: 'You speak with solemn conviction for the rule of law and the historic protections of the British constitution.'
      },
      {
        id: 'opt_lee_c',
        text: 'Move to postpone the vote for three weeks to allow reluctant colonies time to instruct delegates and appoint a committee to draft a formal declaration.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 1,
        neutralDelta: 5,
        statChanges: { influence: 9, historicalKnowledge: 8 },
        immediateConsequence: 'Congress adopts the three-week postponement and appoints the "Committee of Five" to draft the document.'
      },
      {
        id: 'opt_lee_d',
        text: 'Condition independence on securing an immediate military alliance and treaty with the Kingdom of France.',
        alignment: 'neutral',
        patriotDelta: 3,
        loyalistDelta: -1,
        neutralDelta: 3,
        statChanges: { influence: 7, historicalKnowledge: 7 },
        immediateConsequence: 'Congress simultaneously dispatches secret commissioners to Versailles to negotiate French aid.'
      }
    ]
  },
  {
    id: 'evt_drafting_declaration',
    chapter: 6,
    checkpoint: 2,
    year: 1776,
    dateString: 'June 1776',
    location: 'Graff House, 7th & Market, Philadelphia',
    colonyId: 'PA',
    role: 'A colleague visiting Thomas Jefferson second-floor rented parlor.',
    title: 'Drafting the Declaration: Natural Rights',
    historicalContext: 'The Committee of Five assigns 33-year-old Thomas Jefferson to draft the text. Drawing upon John Locke Enlightenment philosophy and George Mason Virginia Declaration of Rights, Jefferson articulates universal principles of human liberty.',
    narrative: 'Jefferson sits at his portable writing desk, surrounded by ink-stained drafts. He reads aloud his opening words: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed..."',
    curriculumTags: ['Declaration of Independence', 'Natural Rights', 'Social Contract'],
    standardId: 'OH-SS.8.7',
    followUpQuestionId: 'q_natural_rights_locke',
    options: [
      {
        id: 'opt_dec_a',
        text: 'Praise the universal moral claim: basing independence on unalienable human rights elevates the cause for all mankind.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 12, influence: 9, historicalKnowledge: 9 },
        immediateConsequence: 'Jefferson thanks you for recognizing that the revolution is fought for human liberty, not mere trade duties.'
      },
      {
        id: 'opt_dec_b',
        text: 'Warn that claiming "all men are created equal" creates a glaring contradiction while half a million African Americans remain enslaved.',
        alignment: 'neutral',
        patriotDelta: 3,
        loyalistDelta: 0,
        neutralDelta: 4,
        statChanges: { influence: 8, historicalKnowledge: 9 },
        immediateConsequence: 'Jefferson acknowledges the profound paradox; his draft clause condemning the slave trade will be struck out by southern delegates.'
      },
      {
        id: 'opt_dec_c',
        text: 'Argue that rights come from royal charters and centuries of British common law, not abstract philosophical theories of nature.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 4,
        neutralDelta: 1,
        statChanges: { britishRelations: 7, influence: 4 },
        immediateConsequence: 'You voice the classic British legalist perspective that rights exist through established legal institutions.'
      },
      {
        id: 'opt_dec_d',
        text: 'Advise keeping the text concise and focused on practical arguments to convince foreign powers like France and Spain.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { influence: 6, historicalKnowledge: 6 },
        immediateConsequence: 'The committee balances philosophical preamble with a devastating factual indictment of the Crown.'
      }
    ]
  },
  {
    id: 'evt_declaration_grievances',
    chapter: 6,
    checkpoint: 3,
    year: 1776,
    dateString: 'July 1, 1776',
    location: 'Continental Congress, Philadelphia',
    colonyId: 'PA',
    role: 'A delegate reviewing the 27 specific charges against King George III.',
    title: 'The Grievances Against King George III',
    historicalContext: 'Two-thirds of the Declaration of Independence is a detailed legal indictment cataloging 27 specific abuses committed by King George III. These include: suspending colonial assemblies, cutting off trade, imposing taxes without consent, quartering troops, depriving colonists of trial by jury, and waging war against his own people.',
    narrative: 'Delegates spend hours editing the draft with quill pens on parchment, striking out inflammatory language while strengthening the evidentiary foundation. Which grievance do you emphasize as the most legally compelling justification for dissolving political bonds?',
    curriculumTags: ['27 Grievances', 'King George III', 'Abuse of Power'],
    standardId: 'OH-SS.8.7',
    followUpQuestionId: 'q_declaration_grievances_evidence',
    options: [
      {
        id: 'opt_gr_a',
        text: 'Emphasize "For imposing Taxes on us without our Consent"—it encapsulates twelve years of constitutional resistance.',
        alignment: 'patriot',
        patriotDelta: 4,
        loyalistDelta: -2,
        neutralDelta: 0,
        statChanges: { colonialSupport: 10, influence: 8, historicalKnowledge: 8 },
        immediateConsequence: 'The tax grievance remains the clearest proof that Parliament violated fundamental colonial rights.'
      },
      {
        id: 'opt_gr_b',
        text: 'Emphasize "He has abdicated Government here, by declaring us out of his Protection and waging War against us."',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -3,
        neutralDelta: 0,
        statChanges: { colonialSupport: 11, influence: 9, historicalKnowledge: 8 },
        immediateConsequence: 'Lockean philosophy is clear: when a sovereign wages military war on his subjects, the social contract is dissolved.'
      },
      {
        id: 'opt_gr_c',
        text: 'Argue that Parliament, not King George alone, was the primary author of colonial tax laws and trade restrictions.',
        alignment: 'loyalist',
        patriotDelta: -2,
        loyalistDelta: 4,
        neutralDelta: 1,
        statChanges: { britishRelations: 6, influence: 5, historicalKnowledge: 7 },
        immediateConsequence: 'Historical accuracy confirms Parliament enacted the taxes, but the Declaration directs all fire at the King.'
      },
      {
        id: 'opt_gr_d',
        text: 'Highlight "For depriving us in many cases, of the benefits of Trial by Jury" through naval admiralty courts.',
        alignment: 'neutral',
        patriotDelta: 3,
        loyalistDelta: 0,
        neutralDelta: 3,
        statChanges: { influence: 7, historicalKnowledge: 8 },
        immediateConsequence: 'Legal minds agree that stripping colonists of jury trials struck at the heart of Magna Carta liberties.'
      }
    ]
  },
  {
    id: 'evt_july_independence_vote',
    chapter: 6,
    checkpoint: 4,
    year: 1776,
    dateString: 'July 2, 1776',
    location: 'Pennsylvania State House, Philadelphia',
    colonyId: 'DE',
    role: 'A delegate standing in the hall as Caesar Rodney gallops through the rain.',
    title: 'The July Vote: Unanimous Declaration',
    historicalContext: 'On July 2, 1776, Congress votes on the Lee Resolution for independence. Delaware delegation is tied 1-1 until Caesar Rodney, suffering from facial cancer, rides 80 miles through a nighttime thunderstorm to cast Delaware tie-breaking vote for independence. Twelve colonies vote YES; New York abstains (later approving).',
    narrative: 'John Adams writes to his wife Abigail: "The Second Day of July 1776, will be the most memorable Epocha, in the History of America... It ought to be solemnized with Pomp and Parade, with Shews, Games, Sports, Guns, Bells, Bonfires and Illuminations from one End of this Continent to the other from this Time forward forever more." Benjamin Franklin quips: "We must indeed all hang together, or most assuredly we shall all hang separately."',
    curriculumTags: ['July 2 Vote', 'Caesar Rodney', 'Unanimous Declaration'],
    standardId: 'OH-SS.8.7',
    followUpQuestionId: 'q_independence_risks',
    options: [
      {
        id: 'opt_jv_a',
        text: 'Step forward to the table, take the quill, and sign your name boldly under John Hancock giant signature!',
        alignment: 'patriot',
        patriotDelta: 6,
        loyalistDelta: -5,
        neutralDelta: -3,
        statChanges: { colonialSupport: 15, britishRelations: -15, influence: 10 },
        immediateConsequence: 'You pledge your Life, your Fortune, and your Sacred Honor to the birth of a free American republic!'
      },
      {
        id: 'opt_jv_b',
        text: 'Refuse to sign: like John Dickinson, remain true to your principles of peace and imperial union, refusing to sign a death warrant for civil war.',
        alignment: 'loyalist',
        patriotDelta: -5,
        loyalistDelta: 6,
        neutralDelta: 0,
        statChanges: { britishRelations: 10, colonialSupport: -12, influence: 4 },
        immediateConsequence: 'You demonstrate quiet moral courage, accepting political isolation rather than violating your conscience.'
      },
      {
        id: 'opt_jv_c',
        text: 'Abstain like the New York delegation until your colony elected provincial congress provides formal written instructions.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 1,
        neutralDelta: 5,
        statChanges: { influence: 6, historicalKnowledge: 7 },
        immediateConsequence: 'Your strict procedural adherence upholds republican principles of representative mandates.'
      },
      {
        id: 'opt_jv_d',
        text: 'Sign the Declaration, but immediately turn your efforts toward organizing supplies and hospital care for Washington army.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -3,
        neutralDelta: 1,
        statChanges: { colonialSupport: 12, wealth: -4, influence: 9 },
        immediateConsequence: 'You recognize that declaring independence on paper is only the beginning; winning it requires sacrifice.'
      }
    ]
  },
  {
    id: 'evt_ch6_final_simulation',
    chapter: 6,
    checkpoint: 5,
    year: 1776,
    dateString: 'July 4–August 2, 1776',
    location: 'Across the 13 United States',
    colonyId: 'PA',
    role: 'A citizen of the new United States of America looking back across 13 tumultuous years.',
    title: 'Final Simulation: The Continental Congress Decision',
    historicalContext: 'On July 4, 1776, Congress formally approves the finalized text of the Declaration of Independence. On August 2, the parchment copy is signed by 56 delegates. What began in 1763 as a colonial dispute over war debt and trade duties has transformed into a world-historic revolution for human liberty.',
    narrative: 'Across the thirteen new states, crowds gather in town squares to hear the Declaration read publicly from courthouse balconies. Royal coats of arms are pulled down and burned. Families, neighbors, and congregations have been divided by thirteen years of agonizing choices. As you stand before the crowd, how do you reflect upon your personal Road to Revolution?',
    curriculumTags: ['Declaration of Independence', 'Culmination', 'Historical Reflection'],
    standardId: 'OH-SS.8.8',
    followUpQuestionId: 'q_ch6_culmination',
    options: [
      {
        id: 'opt_fs_a',
        text: 'Stand proudly as a PATRIOT: the journey from colonial subject to free citizen was hard, but liberty and self-government are worth every price.',
        alignment: 'patriot',
        patriotDelta: 5,
        loyalistDelta: -3,
        neutralDelta: -1,
        statChanges: { colonialSupport: 12, influence: 10 },
        immediateConsequence: 'You embrace the struggle for independence with resolute commitment to the ideals of 1776.'
      },
      {
        id: 'opt_fs_b',
        text: 'Stand with solemn sorrow as a LOYALIST: the British Empire provided order, law, and prosperity; you fear the chaos and tyranny of unchecked rebellion.',
        alignment: 'loyalist',
        patriotDelta: -3,
        loyalistDelta: 5,
        neutralDelta: 0,
        statChanges: { britishRelations: 10, influence: 5 },
        immediateConsequence: 'You maintain steadfast loyalty to the Crown and the rule of law through the uncertain years ahead.'
      },
      {
        id: 'opt_fs_c',
        text: 'Stand as a NEUTRAL observer: you see valid truths and deep flaws on both sides, and will dedicate your life to preserving your community and peaceful healing.',
        alignment: 'neutral',
        patriotDelta: 0,
        loyalistDelta: 0,
        neutralDelta: 5,
        statChanges: { influence: 8, historicalKnowledge: 10 },
        immediateConsequence: 'You provide a compassionate voice of reason in a divided land, tending to those caught in the crossfire.'
      },
      {
        id: 'opt_fs_d',
        text: 'Reflect that no matter one political stance, understanding the causes and human choices of these 13 years is essential for the future of democracy.',
        alignment: 'neutral',
        patriotDelta: 2,
        loyalistDelta: 2,
        neutralDelta: 4,
        statChanges: { influence: 9, historicalKnowledge: 10 },
        immediateConsequence: 'You achieve the highest ideal of the historical simulation: deep, empathetic historical understanding.'
      }
    ]
  }
];

export function getEventById(id: string): HistoricalEvent | undefined {
  return HISTORICAL_EVENTS.find(e => e.id === id);
}
