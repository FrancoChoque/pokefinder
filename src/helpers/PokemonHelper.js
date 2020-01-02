export const getColorByType = type => {
  switch (type) {
    case 'normal':
      return '#A8A878';
    case 'flying':
      return '#C6B7F5';
    case 'poison':
      return '#A040A0';
    case 'ground':
      return '#EBD69D';
    case 'rock':
      return '#D1C17D';
    case 'bug':
      return '#C6D16E';
    case 'ghost':
      return '#A292BC';
    case 'steel':
      return '#D1D1E0';
    case 'water':
      return '#9DB7F5';
    case 'grass':
      return '#A7DB8D';
    case 'electric':
      return '#FAE078';
    case 'psychic':
      return '#FA92B2';
    case 'ice':
      return '#BCE6E6';
    case 'dragon':
      return '#A27DFA';
    case 'dark':
      return '#A29288';
    case 'fairy':
      return '#F4BDC9';
    case 'unknown':
      return '#F5AC78';
    case 'shadow':
      return '#F5AC78';
    default:
      return '#F5AC78';
  }
};
