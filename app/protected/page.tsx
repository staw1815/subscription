import FamilyData from "@/components/subscription/familyData";
import MemberData from "@/components/subscription/memberData";
import SendEmailForm from "@/components/subscription/sendMailForm";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

 // Si l'utilisateur n'est pas authentifié ou que l'email est absent, rediriger
 if (!user || !user.email) {
  return redirect("/sign-in");
}

const email = user.email; // L'email est maintenant garanti d'être une string

  return (
    <div className="flex-1 flex flex-col gap-5">
      <div className="">
          <FamilyData email={email} />
      </div>
      <div>
        <MemberData />
      </div>
    </div>
  );
}
