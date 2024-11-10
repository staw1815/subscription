import Link from "next/link";
import { TutorialStep } from "./tutorial-step";
import { ArrowUpRight } from "lucide-react";

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      {process.env.VERCEL_ENV === "preview" ||
      process.env.VERCEL_ENV === "production" ? (
        <TutorialStep title="Set up redirect urls">
          <p>It looks like this App is hosted on Vercel.</p>
        </TutorialStep>
      ) : null}
      <TutorialStep title="Unité Sainte Anne">
        <p>
          Bienvenue sur le site de souscription. 
        </p>
      </TutorialStep>
    </ol>
  );
}
