import { CoffeeIcon } from "lucide-react"


export const SimpleWidget = () => {
  return (
    <div className="bg-neutral-700 shadow-xl p-3 sm:min-w-[25%] min-w-full rounded-2xl border border-gray-500 mx-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-100 text-center">Contador</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              <CoffeeIcon />
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">Titulo</h4>
              <p className="text-xs text-gray-200">Subtitulo</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <a href="#" className="text-indigo-200 text-xs font-medium">Más</a>
        </div>
        
      </div>
    </div>
  )
}