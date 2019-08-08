export const THEME = {
  // Colors
  background: '#fff',
  textColor: '#001420',
  codeColor: '#025d97',
  linkColor: '#0391ec',

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: '#deebf4',

  // Used in PageHeader
  pageHeadingBackground: '#fff',
  pageHeadingTextColor: '#001420',

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 150,

  // Used for navigation bar
  navBarBackground: '#fff',
  navBarTextColor: '#36546d',

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: '#1d3344',

  sidebarColor: '#f7fcff',
  sidebarColorText: '#001420',
  sidebarColorTextActive: '#0391ec',
  sidebarColorLine: '#f7fcff',
  sidebarColorHeading: '#f7fcff',

  // Used in the html, react, and image specimens.
  bgLight: '#f7fcff',
  bgDark: '#1d3344',

  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: {
      color: '#025d97',
    },
    punctuation: {
      color: '#00c9bd',
    },
    script: {
      color: '#025d97',
    },
    function: {
      color: '#00c9bd',
    },
    keyword: {
      color: '#025d97',
    },
    string: {
      color: '#394e5c',
    },
  },

  // Patterns
  checkerboardPatternLight:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=',
  checkerboardPatternDark:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==',

  // Fonts
  fontFamily: "'Montserrat', sans-serif",
  fontHeading: "'Montserrat', sans-serif",
  fontMono: "'Fira Code', monospace",

  // Base font size in pixels.
  baseFontSize: 14,

  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.2,
};
