const INTERACTION_IDS = {
  WELCOME_BUTTON: 'we1',
  HELP_SELECTMENU: {
    REPORT_SELECT: 'rp',
    REPORT_WRITE: {
      R_SEND: 'res',
      R_CANCEL: 'rec',
      R_SEND_MODAL: 'rem',
      REPORT_MODAL: {
        TITLE: 'remt',
        DESCRIPT: 'remd',
      },
    },
    SUGEST_SELECT: 'su',
    SUGEST_WRITE: {
      S_SEND: 'sus',
      S_CANCEL: 'suc',
      S_SEND_MODAL: 'sum',
      SUGEST_MODAL: {
        TITLE: 'sumt',
        DESCRIPT: 'sumd',
      },
    },
    COMMANDS_SELECT: 'co',
    COMMANDS_OPTION: 'cop',
    COMMANDS_OPTIONS: {
      ASKCREATE: 'acr',
      ASKADM: 'aac',
      ASKUPRANK: 'aucr',
      ASKLANG: 'alk',
    },
  },
};

const COLORS = {
  EMBEDCOLOR_DEFAULT: 0x2f3136,
  EMBEDCOLOR_GREEN: 0x21900f,
  EMBEDCOLOR_RED: 0xee0000,
  EMBEDCOLOR_YELLOW: 0xfdd528,
  EMBEDCOLOR_WHITE: 0xb2b2b2,
  EMBEDCOLOR_GRAY: 0x202529,
};

const IMAGES = {
  WELCOMEIMG:
    'https://cdn.discordapp.com/attachments/1073238163746717717/1075814642082922577/image.png',
};

module.exports = { INTERACTION_IDS, COLORS, IMAGES };
