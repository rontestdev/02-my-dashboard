import { Pokemon } from "@/pokemons"
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

interface PokemonPageProps {
  params: Promise<{ id: string }>;
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json());
  return pokemon;
}

export async function generateMetadata({ params }: PokemonPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  return {
    title: `#${id} ${pokemon.name}`,
    description: `Page for ${pokemon.name} pokemon`
  }
}


export default async function PokemonPage({ params }: PokemonPageProps) {
  const { id } = await params;
  const pokemon = await getPokemon(id);  

  return (
    <div className="flex mt-5 flex-col items-center">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ''}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />


            <div className="flex flex-wrap">
              {
                pokemon.moves.map(move => (
                  <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                ))
              }
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">

          <div className="flex flex-col items-start justify-center rounded-2xl bg-neutral-800 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm">Types</p>
            <div className="text-base font-medium flex">
              {
                pokemon.types.map(type => (
                  <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                ))
              }
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-neutral-800 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm">Peso</p>
            <span className="text-base font-medium flex">
              {
                pokemon.weight
              }
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-neutral-800 bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm">Regular Sprites</p>
            <div className="flex justify-center">

              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-clip-border px-3 py-4 bg-neutral-800 drop-shadow-lg">
            <p className="text-sm ">Shiny Sprites</p>
            <div className="flex justify-center">

              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}