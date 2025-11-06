import { PokemonGrid } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: ''
}

export default async function FavoritesPage() {
  return (
    <section>
      <h2>Pokemons favoritos <small className="text-blue-400">Global state</small></h2>
      <PokemonGrid pokemons={[]} />
    </section>
  )
}