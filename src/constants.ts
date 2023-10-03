export const GRAPHQL_LINK = "https://beta.pokeapi.co/graphql/v1beta";
export const POKEMON_LIST_1x = 24;
export const POKEMON_LIST_2x = 48;
export const POKEMON_LIST_3x = 72;
export const POKEMON_LIST_4x = 96;

export const BREAKPOINTS = {
  columns: {
    fullhd: 2, widescreen: 3, desktop: 4, tablet: 6, mobile: 12,
  },
  str(): string {
    return Object
      .entries(this.columns)
      .map(([breakpoint, columns])=>`is-${columns}-${breakpoint}`)
      .join(" ");
  },
};