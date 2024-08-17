# Pokémon Explorer

## PokemonListPage.tsx
State Management: The component manages three pieces of state: pokemonList, currentPage, and totalPages. pokemonList holds the list of Pokémon fetched from the API, currentPage tracks the current page of the list, and totalPages represents the total number of pages available.

Fetching Data: Inside useEffect, an API call is made to fetch Pokémon data whenever currentPage changes. The fetched data includes the list of Pokémon and the total count, which is used to calculate totalPages.

Rendering: The Pokémon are mapped into a list of PokemonListItem components, each of which displays a Pokémon's name and image. The Pagination component is included to provide navigation controls.

## PokemonDetailPage.tsx
Fetching Data: When the component mounts, it fetches detailed data for the Pokémon specified by the name parameter in the URL. The data includes the Pokémon's abilities and sprite (image).

Rendering: The component renders the Pokémon's name, its abilities in a list, and its image. A link is provided at the bottom to navigate back to the Pokémon list.

## Pagination.tsx
Props: The component receives currentPage, totalPages, and onPageChange as props. It renders buttons to navigate between pages and calls onPageChange when a new page is selected.
PokemonListItem.tsx
Props: This component takes name and imageUrl as props. It renders a clickable item displaying the Pokémon's name and image, linking to the corresponding Pokémon detail page.
## types.ts
Interfaces:
Pokemon: Represents a Pokémon in the list, including its name and url (used to fetch detailed data).
PokemonDetail: Represents detailed information about a Pokémon, including its name, abilities, and sprites.
Ability: Represents an ability of a Pokémon, used within the PokemonDetail interface.

