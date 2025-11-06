'use client';

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { ShoppingCartIcon } from 'lucide-react';

export const WidgetsGrid = () => {

  const isCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <SimpleWidget title={isCart.toString()} subtitle={"Items agregados"} label="Contador" icon={<ShoppingCartIcon />} />
      {/* <SimpleWidget /> */}
    </div>
  )
}