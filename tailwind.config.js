module.exports = {
  content: ["./index.html", "./heating.html", "./dimplex-quantum-storage-heaters.html","./dimplex-quantum-qm150rf-quantum-storage-heater-1-5kw-wifi-enabled.html"],
  theme: {
    extend: {
      fontSize: {
        '2.5xl': '28px',
        '4.5xl': '40px',
        '5.5xl': '52px',
        '1/2vw': '4.7vw',
      },
      colors: {
        'lime-550': '#b2c834',
        'lime-650': '#93b626',
        'lime-620': '#78b344',
        'lime-750': '#94cf13',
        'seal-650': '#3b3b3b',
        'orange-550': '#ed8113',
        'zinc-500': '#6b6a6a',
        'zinc-700': '#474747',
        'zinc-100': '#f0f0f0',
      },
      boxShadow: {
        'r-xl': '3px 0px 4px 0 rgb(0 0 0 / 30%)',
      },
      lineHeight: {
        'tighter': '1.2',
      },
    },
    minWidth: {
      '20': '80px',
    },
    maxWidth: {
      '20': '80px',
    },
    minHeight: {
      '92': '370px',
    },
    maxHeight: {
      '60': '240px',
    },
  },
  variants: {
    extend: {
      grayscale: ['hover', 'focus'],
      appearance: ['hover', 'focus'],
      inset: ['group-hover'],
    }
  },

  plugins: [],
}
