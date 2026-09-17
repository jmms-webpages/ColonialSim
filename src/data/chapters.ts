import { ChapterInfo } from '../types';

export const CHAPTERS: ChapterInfo[] = [
  {
    number: 1,
    title: 'A New Empire',
    timePeriod: '1763–1764',
    summary: 'The French and Indian War concludes in British triumph, but an astronomical war debt and the Proclamation of 1763 fundamentally alter the imperial bond.',
    learningGoals: [
      'Understand how the French and Indian War ended salutary neglect.',
      'Analyze the economic burden of Britain 133-million-pound debt.',
      'Evaluate why the Proclamation of 1763 enraged western settlers and land speculators.',
      'Examine the long tradition of colonial self-government through elected assemblies.'
    ],
    checkpoints: [
      {
        id: 1,
        title: 'The War Is Won, The Bill Arrives',
        description: 'Examine the aftermath of the Treaty of Paris and Britain mounting debt.',
        eventId: 'evt_treaty_paris',
        questionId: 'q_french_indian_debt'
      },
      {
        id: 2,
        title: 'The Proclamation Line of 1763',
        description: 'Encounter King George proclamation forbidding western settlement beyond the Appalachians.',
        eventId: 'evt_proclamation_1763',
        questionId: 'q_proclamation_reasons'
      },
      {
        id: 3,
        title: 'Western Lands & Native Diplomacy',
        description: 'Navigate trade and land claims in the Ohio Country amidst Pontiac War.',
        eventId: 'evt_pontiac_rebellion',
        questionId: 'q_salutary_neglect'
      },
      {
        id: 4,
        title: 'Colonial Self-Government',
        description: 'Defend your elected colonial assembly powers to levy local taxes.',
        eventId: 'evt_assemblies_power',
        questionId: 'q_assemblies_role'
      },
      {
        id: 5,
        title: 'Chapter 1 Challenge: The Frontier Dilemma',
        description: 'Face the royal surveyor as an Ohio valley settler seeking land title.',
        eventId: 'evt_ch1_challenge',
        questionId: 'q_ch1_synthesis'
      }
    ]
  },
  {
    number: 2,
    title: 'Taxation Without Representation',
    timePeriod: '1764–1766',
    summary: 'Parliament passes the Sugar and Stamp Acts to raise colonial revenue directly, triggering widespread boycotts, street riots, and the first united colonial Congress.',
    learningGoals: [
      'Distinguish between external trade duties and direct internal taxes.',
      'Analyze the constitutional argument: "No Taxation Without Representation".',
      'Examine methods of resistance: non-importation agreements, boycotts, and protest societies.',
      'Understand how economic pressure forced Parliament to repeal the Stamp Act while passing the Declaratory Act.'
    ],
    checkpoints: [
      {
        id: 1,
        title: 'The Sugar Act & Vice-Admiralty Courts',
        description: 'Customs enforcement cracks down on molasses trade without jury trials.',
        eventId: 'evt_sugar_act',
        questionId: 'q_sugar_act_courts'
      },
      {
        id: 2,
        title: 'The Stamp Act of 1765',
        description: 'A direct internal tax hits newspapers, legal contracts, and playing cards.',
        eventId: 'evt_stamp_act_crisis',
        questionId: 'q_stamp_act_objection'
      },
      {
        id: 3,
        title: 'Boycott or Comply?',
        description: 'Merchant guilds and household consumers decide whether to sign Non-Importation pacts.',
        eventId: 'evt_stamp_boycott',
        questionId: 'q_sons_daughters_liberty'
      },
      {
        id: 4,
        title: 'The Stamp Act Congress in New York',
        description: 'Nine colonial delegations unite to draft a formal petition to the King and Parliament.',
        eventId: 'evt_stamp_congress',
        questionId: 'q_stamp_congress_significance'
      },
      {
        id: 5,
        title: 'Chapter 2 Challenge: The Boston Printer Crisis',
        description: 'Run your printing shop as stamped paper lands at the Boston wharf.',
        eventId: 'evt_ch2_challenge',
        questionId: 'q_ch2_declaratory_act'
      }
    ]
  },
  {
    number: 3,
    title: 'Tensions Rise',
    timePeriod: '1767–1770',
    summary: 'Townshend import taxes provoke renewed boycotts; redcoats garrison Boston; street tensions boil over into the Boston Massacre and bitter propaganda.',
    learningGoals: [
      'Examine the Townshend Acts on glass, lead, paint, paper, and tea.',
      'Analyze the controversy of Writs of Assistance (blanket search warrants).',
      'Deconstruct the Boston Massacre from multiple perspectives (Patriot, Loyalist, Redcoat).',
      'Explain how Committees of Correspondence coordinated colonial communication.'
    ],
    checkpoints: [
      {
        id: 1,
        title: 'The Townshend Duties & Writs of Assistance',
        description: 'Customs officials arrive armed with general search warrants to inspect warehouses.',
        eventId: 'evt_townshend_duties',
        questionId: 'q_writs_of_assistance'
      },
      {
        id: 2,
        title: 'Homespun Resistance: Daughters of Liberty',
        description: 'Colonial women weave homemade cloth to support the non-importation movement.',
        eventId: 'evt_daughters_of_liberty',
        questionId: 'q_daughters_liberty_economic'
      },
      {
        id: 3,
        title: 'Redcoats Garrison Boston',
        description: 'Two regiments of British regulars pitch tents on Boston Common, competing for dock jobs.',
        eventId: 'evt_redcoats_boston',
        questionId: 'q_quartering_tensions'
      },
      {
        id: 4,
        title: 'The 5th of March: The Boston Massacre',
        description: 'Snowballs, insults, and oyster shells meet musket fire on King Street.',
        eventId: 'evt_boston_massacre',
        questionId: 'q_boston_massacre_propaganda'
      },
      {
        id: 5,
        title: 'Chapter 3 Challenge: The Trial of Captain Preston',
        description: 'Evaluate John Adams defense of the British soldiers to uphold the rule of law.',
        eventId: 'evt_ch3_challenge',
        questionId: 'q_ch3_committees_correspondence'
      }
    ]
  },
  {
    number: 4,
    title: 'Tea & Resistance',
    timePeriod: '1770–1774',
    summary: 'A tea monopoly sparks midnight defiance in Boston Harbor, triggering Britain punitive Intolerable Acts and the First Continental Congress.',
    learningGoals: [
      'Explain the Tea Act of 1773 and why cheap tea was seen as a trap.',
      'Examine the Boston Tea Party as political protest.',
      'Analyze the Coercive / Intolerable Acts designed to isolate and punish Massachusetts.',
      'Assess the First Continental Congress and the creation of the Continental Association.'
    ],
    checkpoints: [
      {
        id: 1,
        title: 'The Tea Act & The East India Monopoly',
        description: 'Parliament grants the struggling British East India Company exclusive distribution rights.',
        eventId: 'evt_tea_act_monopoly',
        questionId: 'q_tea_act_objection'
      },
      {
        id: 2,
        title: 'Boston Harbor: 342 Chests in the Tide',
        description: 'Sons of Liberty disguise themselves and board three merchant ships at Griffin Wharf.',
        eventId: 'evt_boston_tea_party',
        questionId: 'q_tea_party_aftermath'
      },
      {
        id: 3,
        title: 'The Coercive Acts: Boston Closed and Governed',
        description: 'Parliament shuts Boston port and suspends town meetings with the Massachusetts Government Act.',
        eventId: 'evt_intolerable_acts',
        questionId: 'q_intolerable_acts_provisions'
      },
      {
        id: 4,
        title: 'Colonial Relief & The Suffolk Resolves',
        description: 'Sister colonies ship grain, sheep, and flour to blockaded Boston.',
        eventId: 'evt_colonial_solidarity',
        questionId: 'q_first_continental_congress'
      },
      {
        id: 5,
        title: 'Chapter 4 Challenge: The Continental Association',
        description: 'Enforce non-importation, non-exportation, and non-consumption in your local town.',
        eventId: 'evt_ch4_challenge',
        questionId: 'q_ch4_association_enforcement'
      }
    ]
  },
  {
    number: 5,
    title: 'The Road to War',
    timePeriod: '1775',
    summary: 'Gunpowder raids and midnight alarm riders spark the battle on Lexington Green, Bunker Hill, and Thomas Paine incendiary call for Common Sense.',
    learningGoals: [
      'Trace how the Minutemen mobilized on Lexington Green and Concord North Bridge.',
      'Evaluate the Second Continental Congress creation of the Continental Army under Washington.',
      'Analyze the Olive Branch Petition as a final attempt at reconciliation.',
      'Evaluate the explosive impact of Thomas Paine Common Sense in shifting public opinion.'
    ],
    checkpoints: [
      {
        id: 1,
        title: 'Lanterns in Old North & The Midnight Alarm',
        description: 'Paul Revere and William Dawes ride to warn that regulars are marching to seize munitions.',
        eventId: 'evt_midnight_ride',
        questionId: 'q_lexington_concord_shot'
      },
      {
        id: 2,
        title: 'Lexington & Concord: The First Shot',
        description: 'Stand on the morning green at Lexington as Major Pitcairn orders the militia to disperse.',
        eventId: 'evt_lexington_concord_battle',
        questionId: 'q_minutemen_strategy'
      },
      {
        id: 3,
        title: 'Second Continental Congress & General Washington',
        description: 'Delegates in Philadelphia adopt the militia besieging Boston and appoint Washington.',
        eventId: 'evt_appoint_washington',
        questionId: 'q_second_congress_actions'
      },
      {
        id: 4,
        title: 'The Olive Branch & King George Proclamation',
        description: 'Moderates petition the King for peace, only to be declared in open and avowed rebellion.',
        eventId: 'evt_olive_branch_petition',
        questionId: 'q_olive_branch_rejection'
      },
      {
        id: 5,
        title: 'Chapter 5 Challenge: Thomas Paine Common Sense',
        description: 'Distribute Paine plain-language pamphlet calling hereditary monarchy absurdity.',
        eventId: 'evt_ch5_challenge',
        questionId: 'q_ch5_common_sense_impact'
      }
    ]
  },
  {
    number: 6,
    title: 'Independence',
    timePeriod: '1776',
    summary: 'Delegates debate the fateful leap in the sweltering Philadelphia State House: Thomas Jefferson drafts the Declaration of Independence.',
    learningGoals: [
      'Analyze the philosophical concepts of natural rights and the consent of the governed.',
      'Evaluate the 27 grievances against King George III.',
      'Examine the perspectives of Loyalist and Neutral delegates during the independence vote.',
      'Synthesize personal choices made throughout the simulation into a final Road to Revolution profile.'
    ],
    checkpoints: [
      {
        id: 1,
        title: 'The Resolution for Independence',
        description: 'Richard Henry Lee of Virginia resolves that these United Colonies are free and independent states.',
        eventId: 'evt_lee_resolution',
        questionId: 'q_lee_resolution_debate'
      },
      {
        id: 2,
        title: 'Drafting the Declaration: Natural Rights',
        description: 'Jefferson pens the preamble grounded in John Locke philosophy of unalienable rights.',
        eventId: 'evt_drafting_declaration',
        questionId: 'q_natural_rights_locke'
      },
      {
        id: 3,
        title: 'The Grievances Against King George III',
        description: 'Scrutinize the legal list of royal abuses: quartering troops, cutting off trade, taxes without consent.',
        eventId: 'evt_declaration_grievances',
        questionId: 'q_declaration_grievances_evidence'
      },
      {
        id: 4,
        title: 'The July Vote: Unanimous Declaration',
        description: 'New York abstains while Delaware Caesar Rodney gallops through a thunderstorm to break a tie.',
        eventId: 'evt_july_independence_vote',
        questionId: 'q_independence_risks'
      },
      {
        id: 5,
        title: 'Final Simulation: Your Road to Revolution Reflection',
        description: 'Cast your vote in the Continental Congress and write your historical self-reflection.',
        eventId: 'evt_ch6_final_simulation',
        questionId: 'q_ch6_culmination'
      }
    ]
  }
];
