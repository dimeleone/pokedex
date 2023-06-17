function makeFirstLetterUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function mapStatsTitle(stats) {
  const statsTitle = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD'
  }

  return statsTitle[stats]
}

export default {
  makeFirstLetterUpperCase,
  mapStatsTitle
}