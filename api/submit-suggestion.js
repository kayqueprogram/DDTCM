export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, modName, details, userName, contact, ticketId, screenshot } = req.body;
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.VITE_DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return res.status(500).json({ error: 'Discord Webhook URL is not configured on the server.' });
  }

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;  
    }
  };

  const embed = {
    title: `🎫 Ticket ${ticketId || ''} - Sugestão de ${type}`,
    color: type === 'Tradução' ? 15021623 : 5793010, // 0xe53637 or 0x5865f2
    author: {
      name: userName || 'Anônimo'
    },
    fields: [
      { name: '🎮 Mod', value: modName || 'Não especificado', inline: true },
      { name: '📞 Contato', value: contact || 'Não informado', inline: true },
      { name: '💡 Detalhes / Correção', value: details || 'Não especificado' }
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Enviado via MoniBot 🎀'
    }
  };

  if (screenshot && screenshot !== 'Nenhum') {
    if (isValidUrl(screenshot)) {
      embed.image = { url: screenshot };
    } else {
      embed.fields.push({ name: '🖼️ Imagem / Print', value: screenshot });
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ embeds: [embed] })
    });

    if (!response.ok) {
      throw new Error(`Discord API returned status ${response.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
