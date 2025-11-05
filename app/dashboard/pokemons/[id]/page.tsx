import { Pokemon } from "@/pokemons"

interface PokemonPageProps {
  params: Promise<{ id: string }>;
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  console.log(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json());
  return pokemon;
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  return (
    <div>{ pokemon.name }</div>
  )
}