export const languageToString = (languageKey) => {
  switch (languageKey) {
    case 'es': {
      return 'Español';
    }
    case 'en': {
      return 'English';
    }
    default: {
      return 'Not found';
    }
  }
};
