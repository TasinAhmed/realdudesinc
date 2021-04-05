const customMediaQuery = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  xl: customMediaQuery(1400),
  lg: customMediaQuery(1200),
  md: customMediaQuery(922),
  sm: customMediaQuery(768),
  xs: customMediaQuery(576),
};

export default media;
