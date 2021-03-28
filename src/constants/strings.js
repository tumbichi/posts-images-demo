export const strings = {
  es: {
    login: {
      user: 'Usuario',
      password: 'Contraseña',
      login: 'Iniciar Sesión',
      invalid_password: 'Contraseña incorrecta',
      info: `La contraseña es `,
    },
    info: {
      author: 'Autor: ',
      width: 'Ancho: ',
      height: 'Alto: ',
      download: 'Descargar',
    },
    drawer: {
      darkMode: 'Modo oscuro',
      logout: 'Cerrar Sesión',
      hello: 'Hola',
    },
    languages: {
      es: 'Español',
      en: 'Ingles',
    },
    card: {
      more: 'Ver más',
    },
  },
  en: {
    login: {
      user: 'Username',
      password: 'Password',
      login: 'Login',
      invalid_password: 'Invalid password',
      info: 'The password is ',
    },
    info: {
      author: 'Author: ',
      width: 'Width: ',
      height: 'Height: ',
      download: 'Download',
    },
    drawer: {
      darkMode: 'Dark mode',
      logout: 'Logout',
      hello: 'Hi',
    },
    languages: {
      en: 'English',
      es: 'Spanish',
    },
    card: {
      more: 'More',
    },
  },
};

/* export const getLang = () => {
  let lang = 'es';
  if (typeof navigator !== 'undefined') {
    if (navigator.language.search('es') >= 0) lang = 'es';
    if (navigator.language.search('en') >= 0) lang = 'en';
  }
  return lang;
}; */

export const locale = (language = 'es') => {
  return strings[language];
};
