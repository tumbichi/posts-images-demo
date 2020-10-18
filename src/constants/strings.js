export const strings = {
  es: {
    login: {
      user: 'Usuario',
      password: 'Contraseña',
      login: 'Iniciar Sesión',
      invalid_password: 'Contraseña incorrecta',
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
  },
  en: {
    login: {
      user: 'Username',
      password: 'Password',
      login: 'Login',
      invalid_password: 'Invalid password',
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
  },
};

export const getLang = () => {
  let lang = 'es';
  if (typeof navigator !== 'undefined') {
    if (navigator.language.search('es') >= 0) lang = 'es';
    if (navigator.language.search('en') >= 0) lang = 'en';
  }
  return lang;
};

export const locale = () => {
  return strings[getLang()];
};
