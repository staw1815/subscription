import { SubmitButton } from "../submit-button";

export default function MemberData() {
  const activeSeason = 2024;
  const nextSeason = activeSeason + 1;

  return (
    <div>
      <h2 className="font-bold text-2xl mb-2">
        Inscriptions {activeSeason}-{nextSeason}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mr-2">
      <div className="flex-1 mb-2 p-4 border-solid border border-gray-400 rounded-md">
        {/* Contenu */}
        <div className="">
          <h2 className="font-bold text-xl">Hughes
          </h2>
          <p className="text-gray-700 text-xs mb-1">16/01/1989</p>

          {/* Ligne contenant Chef Unité et Validé */}
          {/* <p className="text-gray-700 text-sm font-semibold flex justify-between items-center">
            <span>Chef Unité</span>
          </p> */}
          <p className="mt-1 bg-green-300 text-green-800 text-xs font-semibold py-1 px-3 rounded-lg">
          Chef Unité
            </p>
        </div>
      </div>

      <div className="p-4 mb-2 border-solid border border-gray-400 rounded-md">
        {/* Contenu */}
        <div className="">
          <h2 className="font-bold text-xl">Alex
          </h2>
          <p className="text-gray-700 text-xs mb-1">18/04/2012</p>
          {/* <p className="text-gray-700 text-sm  font-semibold flex justify-between items-center">
            <span>Animé MDS Louveteaux garçons</span>
          </p> */}
          <p className="mt-1 bg-orange-300 text-orange-800 text-xs font-semibold py-1 px-3 rounded-lg">
              Animé MDS Loups garçons (en demande)
            </p>
            
        </div>
      </div>

      <div className="p-4 mb-2 border-solid border border-red-600 rounded-md bg-red-600 text-white">
        {/* Contenu */}
        <div className="">
          <h2 className="font-bold text-xl">Albertine</h2>
          <p className="text-gray-100 text-xs mb-1">18/04/2012</p>
          <button className="bg-white text-red-600 text-base font-bold py-1 px-3 rounded hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500">
            Inscrire
          </button>
        </div>
      </div>

      <div className="p-4 mb-2 border-solid border border-red-600 rounded-md bg-red-600 text-white">
        {/* Contenu */}
        <div className="">
          <h2 className="font-bold text-xl">Aline</h2>
          <p className="text-gray-100 text-xs mb-1">18/04/2012</p>
          <button className="bg-white text-red-600 text-base font-bold py-1 px-3 rounded hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500">
            Inscrire
          </button>
        </div>
      </div>




      <div className="">
        {/* Bouton d'action */}
        <div className="mb-5">
        <SubmitButton pendingText="Modifications en cours..." formAction="" className="text-xs flex items-center">
  <span className="text-3xl mr-2">+</span> {/* Grosse taille du "+" */}
  Ajouter un membre à la famille
</SubmitButton>
        </div>
      </div>
      </div>

    </div>
  );
}
