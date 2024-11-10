import * as sendgrid from '@sendgrid/mail';

// Configuration de l'API Key de SendGrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    // Récupérer les données envoyées dans la requête
    const { recipient, subject, text } = await req.json();

    // Préparer l'email
    const msg = {
      to: recipient,  // Adresse du destinataire
      from: process.env.EMAIL_USER, // Adresse de l'expéditeur (généralement ton adresse SendGrid vérifiée)
      subject: subject, // Sujet de l'email
      text: text, // Corps du message
    };

    // Envoi de l'email via l'API SendGrid
    const response = await sendgrid.send(msg);

    // Réponse de succès
    return new Response(JSON.stringify({ message: 'Email envoyé avec succès', response }), {
      status: 200,
    });
  } catch (error) {
    // En cas d'erreur, retourner une erreur
    return new Response(JSON.stringify({ message: 'Erreur lors de l\'envoi de l\'email', error }), {
      status: 500,
    });
  }
}
