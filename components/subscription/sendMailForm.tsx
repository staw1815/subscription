'use client';  // Indique que ce fichier est un composant client

import { useState } from 'react';

export default function SendEmailForm() {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [emailSent, setEmailSent] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Préparer les données à envoyer
    const data = {
      recipient: recipient,
      subject: subject,
      text: text,
    };

    try {
      // Envoi de la requête POST à l'API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setEmailSent(result.message); // Affichage du message de succès
      } else {
        setError(result.error || 'Erreur inconnue'); // Affichage de l'erreur
      }
    } catch (error) {
      setError('Erreur réseau : ' + error.message); // Affichage de l'erreur réseau
    }
  };

  return (
    <div>
      <h1>Formulaire d'envoi d'email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipient">Destinataire :</label>
          <input
            type="email"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="subject">Sujet :</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="text">Message :</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>

        <button type="submit">Envoyer un email</button>
      </form>

      {/* Affichage du message de succès ou de l'erreur */}
      {emailSent && <p style={{ color: 'green' }}>{emailSent}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
