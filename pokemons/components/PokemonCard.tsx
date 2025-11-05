import Image from 'next/image';
import { SimplePokemon } from "../interfaces/simple-pokemon"
import Link from 'next/link';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <article key={pokemon.id} className="border rounded-md border-neutral-500 p-2 grid grid-cols-1 grid-rows-[100px_20px_20px] gap-2 hover:scale-105 transition-transform hover:bg-teal-800/50">
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={80}
        height={80}
        alt="pokemon"
        priority={false}
      />
      <h2>{pokemon.name}</h2>
      <Link href={`/dashboard/pokemons/${pokemon.id}`}>Más información</Link>
    </article>
  )
}