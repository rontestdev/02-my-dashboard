import { Pokemon } from "@/pokemons"
import { PokemonDetail } from "@/pokemons/components/PokemonDetail";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface PokemonPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

const getPokemon = async (slug: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
    .then(res => res.json());
    return pokemon;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }: PokemonPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;
  try {
    const pokemon = await getPokemon(slug);
    return {
      title: `#${slug} ${pokemon.name}`,
      description: `Page for ${pokemon.name} pokemon`
    }
  } catch (err) {
     return {
      title: 'Página del pokémon',
      description: 'Culpa cupidatat ipsum magna reprehenderit ex tempor sint ad minim reprehenderit consequat sit.'
    }
  }
}


export default async function PokemonPage({ params }: PokemonPageProps) {
  const { slug } = await params;
  const pokemon = await getPokemon(slug);  

  return <PokemonDetail pokemon={pokemon} />;
}