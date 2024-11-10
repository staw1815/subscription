"use client"; // Marquer ce fichier comme un composant client

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { SubmitButton } from "@/components/submit-button";

interface FamilyDataProps {
  email: string;
}

export default function FamilyData({ email }: FamilyDataProps) {
  const [familyData, setFamilyData] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from("vfamily") // Nom de la table
        .select("*") // Sélectionner toutes les colonnes
        .eq("email", email); // Filtrer par email

      if (error) {
        console.error("Error fetching family data:", error);
      } else {
        setFamilyData(data); // Mettre à jour l'état avec les données récupérées
      }
    };

    getData();
  }, [email]);

  if (!familyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="font-bold text-2xl mb-2">Famille</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Vérification que familyData est un tableau non vide */}
        {Array.isArray(familyData) && familyData.length > 0 ? (
          familyData.map((family) => (
            <div
              key={family.userid}
              className="flex-1 mb-2 p-4 border-solid border border-gray-400 rounded-md bg-white"
            >
              {/* Affichage des informations de la famille */}
              <div className="mt-1 mb-2">
                <span className="font-bold text-3xl">{family.name}</span>
              </div>
              <div className="mb-4">
                <span className="text-sm">
                  {" "}
                  {family.street} {family.streetnumber}, {family.zip}{" "}
                  {family.city}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-sm">
                  {family.representative1role}:
                </span>{" "}
                <span className="text-sm">
                  {family.representative1email} {family.representative1gsm}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-semibold  text-sm">
                  {family.representative2role}:
                </span>{" "}
                <span className="text-sm">
                  {family.representative2email} {family.representative2gsm}
                </span>
              </div>
              {family.skills && (
                <div className="mb-2">
                  <span className="font-semibold  text-sm">Compétences:</span>{" "}
                  <span className="text-sm">{family.skills}</span>
                </div>
              )}

              {/* Bouton d'action */}
              <div className="mt-4">
                <SubmitButton
                  pendingText="Modifications en cours..."
                  formAction=""
                  className="text-xs"
                >
                  Modifier mes données
                </SubmitButton>
              </div>
            </div>
          ))
        ) : (
          <div>Aucune donnée disponible.</div>
        )}

        {/* Deuxième cadre */}
        <div className="flex-1 mb-2 mr-2 p-4 border-solid border border-gray-400 rounded-md bg-white">
          <p>
            <span className="inline-flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
              2
            </span>{" "}
            membres inscrits
          </p>
          <p className="font-bold text-2xl mt-4 mb-1">310 euros
        
          </p>
          
          <p className="">
          BExx xxxx xxxx xxxx xx avec la communication :
            <span className="font-bold text-l"> Gilot 7781</span>
          </p>
          <img
            src="/images/qr-code.png" // Chemin relatif vers l'image dans le dossier public
            alt="Logo"
            className="mt-2 size-32" // Utilisation de Tailwind pour définir la largeur et la hauteur
          />
          <span className="mt-1 text-xs"> Scanner moi à partir de votre application bancaire</span>
        </div>
      </div>
    </div>
  );
}
