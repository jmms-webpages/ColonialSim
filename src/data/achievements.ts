import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach_historian_25',
    title: 'Colonial Historian',
    description: 'Answer 15 or more historical knowledge questions correctly.',
    iconName: 'BookOpen',
    category: 'knowledge'
  },
  {
    id: 'ach_source_detective',
    title: 'Source Detective',
    description: 'Successfully analyze 5 primary and secondary sources.',
    iconName: 'Search',
    category: 'sources'
  },
  {
    id: 'ach_colonial_merchant',
    title: 'Colonial Merchant',
    description: 'Maintain a high wealth rating (70+) while managing wartime disruptions.',
    iconName: 'Coins',
    category: 'influence'
  },
  {
    id: 'ach_community_leader',
    title: 'Community Leader',
    description: 'Attain high influence (75+) across town meetings and county committees.',
    iconName: 'Crown',
    category: 'influence'
  },
  {
    id: 'ach_peacemaker',
    title: 'Peacemaker of the Empire',
    description: 'Pursue diplomatic solutions and maintain balanced relationships across sides.',
    iconName: 'Feather',
    category: 'alignment'
  },
  {
    id: 'ach_patriot_badge',
    title: 'Son / Daughter of Liberty',
    description: 'Develop a firm Patriot alignment through consistent defense of colonial rights.',
    iconName: 'Flame',
    category: 'alignment'
  },
  {
    id: 'ach_loyalist_badge',
    title: 'King & Constitution',
    description: 'Develop a Loyalist alignment advocating for imperial order and the rule of law.',
    iconName: 'Shield',
    category: 'alignment'
  },
  {
    id: 'ach_neutral_badge',
    title: 'Steadfast Neutral',
    description: 'Maintain a Neutral stance, prioritizing community survival and peaceful negotiation.',
    iconName: 'Scale',
    category: 'alignment'
  },
  {
    id: 'ach_revolutionary_scholar',
    title: 'Revolutionary Scholar',
    description: 'Complete all 6 chapters of the Road to Revolution campaign.',
    iconName: 'Award',
    category: 'campaign'
  },
  {
    id: 'ach_first_shot',
    title: 'The Road to Lexington',
    description: 'Mobilize through Chapter 5 and witness the first shots of the American Revolution.',
    iconName: 'Compass',
    category: 'campaign'
  }
];

export function getAchievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find(a => a.id === id);
}
