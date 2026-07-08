import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: { label: string; value: string }[];
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState<string>('start');
  const [suggestionData, setSuggestionData] = useState<{
    type?: string;
    userName?: string;
    modName?: string;
    description?: string;
    screenshot?: string;
    contact?: string;
    ticketId?: string;
  }>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const addBotMessage = (text: string, options?: { label: string; value: string }[], delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          text,
          timestamp: formatTime(),
          options,
        },
      ]);
    }, delay);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: 'user',
        text,
        timestamp: formatTime(),
      },
    ]);
  };

  // Listen for the custom "ddtc-open-chat" event to pre-fill Mod details
  useEffect(() => {
    const handleOpenChatEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ type: string; modName: string }>;
      const { type, modName } = customEvent.detail;

      // Anti-spam check
      const lastTime = localStorage.getItem('ddtc_last_ticket_time');
      if (lastTime && Date.now() - Number(lastTime) < 120000) {
        setIsOpen(true);
        setCurrentStep('start');
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: 'bot',
            text: 'Desculpe, mas você enviou um ticket recentemente! Para evitar spam, por favor aguarde 2 minutos antes de enviar outra sugestão. 🛑',
            timestamp: formatTime(),
            options: [{ label: 'Voltar ao início', value: 'go_start' }],
          },
        ]);
        return;
      }

      setIsOpen(true);
      setSuggestionData({ type, modName });
      setCurrentStep('ask_user_name');

      setMessages([
        {
          id: Math.random().toString(),
          sender: 'bot',
          text: `Olá! Vi que você quer sugerir uma ${type.toLowerCase()} para o mod "${modName}". \n\nPara começarmos, como gostaria de ser chamado(a) (seu nome ou nickname)?`,
          timestamp: formatTime(),
        },
      ]);
    };

    window.addEventListener('ddtc-open-chat', handleOpenChatEvent);
    return () => {
      window.removeEventListener('ddtc-open-chat', handleOpenChatEvent);
    };
  }, []);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          sender: 'bot',
          text: 'Olá! Seja bem-vindo à Doki Doki Translate Company. Eu sou a MoniBot, assistente virtual do clube. Como posso ajudar você hoje?',
          timestamp: formatTime(),
          options: [
            { label: '💡 Sugerir tradução de Mod', value: 'suggest_translation' },
            { label: '📝 Reportar erro de revisão', value: 'suggest_review' },
            { label: '🙋 Dúvidas sobre Recrutamento', value: 'recrutamento_info' },
            { label: '💬 Falar com a equipe', value: 'contact_team' },
          ],
        },
      ]);
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleOptionClick = (value: string, label: string) => {
    addUserMessage(label);

    if (value === 'suggest_translation' || value === 'suggest_review') {
      // Anti-spam check
      const lastTime = localStorage.getItem('ddtc_last_ticket_time');
      if (lastTime && Date.now() - Number(lastTime) < 120000) {
        addBotMessage('Desculpe, mas você enviou um ticket recentemente! Para evitar spam, por favor aguarde 2 minutos antes de enviar outra sugestão. 🛑', [
          { label: 'Voltar ao início', value: 'go_start' },
        ]);
        return;
      }
    }

    if (value === 'suggest_translation') {
      setSuggestionData({ type: 'Tradução' });
      setCurrentStep('ask_user_name');
      addBotMessage('Que legal! Antes de começarmos, por favor, me diga qual é o seu nome ou nickname.');
    } else if (value === 'suggest_review') {
      setSuggestionData({ type: 'Revisão' });
      setCurrentStep('ask_user_name');
      addBotMessage('Entendido! Antes de detalhar o erro, por favor, me diga qual é o seu nome ou nickname.');
    } else if (value === 'recrutamento_info') {
      addBotMessage(
        'Estamos recrutando ativamente revisores, tradutores, editores de imagem e programadores! Você pode ler todos os detalhes e se candidatar na nossa página de Recrutamento.',
        [
          { label: 'Acessar página de Recrutamento', value: 'go_to_recrutamento' },
          { label: 'Voltar ao menu inicial', value: 'go_start' },
        ]
      );
    } else if (value === 'contact_team') {
      addBotMessage(
        'Você pode falar diretamente com nossos administradores no nosso servidor oficial do Discord. Venha bater um papo conosco!',
        [
          { label: 'Entrar no Discord', value: 'go_to_discord' },
          { label: 'Voltar ao menu', value: 'go_start' },
        ]
      );
    } else if (value === 'go_to_recrutamento') {
      window.open('/recrutamento', '_blank');
      addBotMessage('Página de recrutamento aberta! Precisa de mais alguma ajuda?', [
        { label: 'Voltar ao início', value: 'go_start' },
      ]);
    } else if (value === 'go_to_discord') {
      window.open('https://discord.gg/mirai-translations-603325287832354855', '_blank');
      addBotMessage('Discord aberto! Precisa de mais alguma coisa?', [
        { label: 'Voltar ao início', value: 'go_start' },
      ]);
    } else if (value === 'go_start') {
      setCurrentStep('start');
      addBotMessage('Como posso ajudar você agora?', [
        { label: '💡 Sugerir tradução de Mod', value: 'suggest_translation' },
        { label: '📝 Reportar erro de revisão', value: 'suggest_review' },
        { label: '🙋 Dúvidas sobre Recrutamento', value: 'recrutamento_info' },
        { label: '💬 Falar com a equipe', value: 'contact_team' },
      ]);
    }
  };

  const handleSendText = () => {
    if (!inputVal.trim()) return;
    const text = inputVal.trim();
    addUserMessage(text);
    setInputVal('');

    if (currentStep === 'ask_user_name') {
      setSuggestionData((prev) => ({ ...prev, userName: text }));
      if (suggestionData.modName) {
        setCurrentStep('ask_details');
        addBotMessage(`Prazer em conhecer você, ${text}! Como já sabemos que o mod é o "${suggestionData.modName}", por favor detalhe a sua sugestão ou o erro de revisão encontrado:`);
      } else {
        setCurrentStep('ask_mod_name');
        addBotMessage(`Prazer em conhecer você, ${text}! Qual é o nome do mod de DDLC em questão?`);
      }
    } else if (currentStep === 'ask_mod_name') {
      setSuggestionData((prev) => ({ ...prev, modName: text }));
      setCurrentStep('ask_details');
      addBotMessage(`Registrado o mod "${text}". Agora, por favor, detalhe a sua sugestão ou o erro de revisão encontrado:`);
    } else if (currentStep === 'ask_details') {
      setSuggestionData((prev) => ({ ...prev, description: text }));
      setCurrentStep('ask_screenshot');
      addBotMessage('Registrado! Você tem algum print (screenshot) do erro ou imagem de referência? Se sim, envie o link aqui. Se não, digite "não" para prosseguir:');
    } else if (currentStep === 'ask_screenshot') {
      const isNoImg = text.toLowerCase() === 'não' || text.toLowerCase() === 'nao';
      const screenshotVal = isNoImg ? 'Nenhum' : text;
      setSuggestionData((prev) => ({ ...prev, screenshot: screenshotVal }));
      setCurrentStep('ask_contact');
      addBotMessage('Certo! Se quiser que a nossa equipe possa te dar um retorno sobre a sua sugestão, digite seu Discord ou e-mail (ou digite "não" para enviar anonimamente):');
    } else if (currentStep === 'ask_contact') {
      const isAnon = text.toLowerCase() === 'não' || text.toLowerCase() === 'nao' || text.toLowerCase() === 'anônimo' || text.toLowerCase() === 'anonimo';
      const contactVal = isAnon ? 'Anônimo' : text;
      
      const ticketNum = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `#DDTC-${ticketNum}`;

      const finalData = { 
        ...suggestionData, 
        contact: contactVal,
        ticketId
      };
      setSuggestionData(finalData);
      setCurrentStep('finished_suggestion');
      setIsTyping(true);

      const isDev = import.meta.env.DEV;
      const localWebhook = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

      let fetchPromise;

      if (isDev && localWebhook) {
        // Envio direto via client side em desenvolvimento local
        const isValidUrl = (string: string) => {
          try {
            new URL(string);
            return true;
          } catch (_) {
            return false;  
          }
        };

        const embed: any = {
          title: `🎫 Ticket ${ticketId} - Sugestão de ${finalData.type || 'Sugestão'}`,
          color: finalData.type === 'Tradução' ? 15021623 : 5793010,
          author: {
            name: finalData.userName || 'Anônimo'
          },
          fields: [
            { name: '🎮 Mod', value: finalData.modName || 'Não especificado', inline: true },
            { name: '📞 Contato', value: contactVal, inline: true },
            { name: '💡 Detalhes / Correção', value: finalData.description || 'Não especificado' }
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: 'Enviado via MoniBot 🎀'
          }
        };

        if (finalData.screenshot && finalData.screenshot !== 'Nenhum') {
          if (isValidUrl(finalData.screenshot)) {
            embed.image = { url: finalData.screenshot };
          } else {
            embed.fields.push({ name: '🖼️ Imagem / Print', value: finalData.screenshot });
          }
        }

        fetchPromise = fetch(localWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ embeds: [embed] })
        });
      } else {
        // Envio seguro por API Serverless em produção
        fetchPromise = fetch('/api/submit-suggestion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: finalData.type,
            modName: finalData.modName,
            details: finalData.description,
            userName: finalData.userName,
            contact: contactVal,
            ticketId: ticketId,
            screenshot: finalData.screenshot
          }),
        });
      }

      fetchPromise
        .then((res) => {
          setIsTyping(false);
          if (res.ok) {
            // Save rate limit timestamp
            localStorage.setItem('ddtc_last_ticket_time', Date.now().toString());

            addBotMessage(
              `Tudo certo! Criei o Ticket **${ticketId}** e enviei diretamente para a equipe no Discord de forma automática! 🚀\n\nAgradecemos muito pela sua contribuição!`,
              [
                { label: 'Abrir nosso Discord', value: 'go_to_discord' },
                { label: 'Voltar ao início', value: 'go_start' },
              ]
            );
          } else {
            throw new Error('Falha no envio');
          }
        })
        .catch(() => {
          setIsTyping(false);
          addBotMessage(
            `Criado o Ticket **${ticketId}**! Porém, como ocorreu uma falha no envio automático, envie no nosso Discord copiando as informações:\n\n------------------\n🎫 TICKET: ${ticketId}\n👤 AUTOR: ${finalData.userName || 'Anônimo'}\n📝 SUGESTÃO: ${finalData.type || ''}\n🎮 MOD: ${finalData.modName || ''}\n🖼️ IMAGEM: ${finalData.screenshot || 'Nenhuma'}\n📞 CONTATO: ${contactVal}\n💡 DETALHES: ${finalData.description || ''}\n------------------`,
            [
              { label: 'Abrir nosso Discord', value: 'go_to_discord' },
              { label: 'Voltar ao início', value: 'go_start' },
            ]
          );
        });
    } else {
      // General user text typing
      addBotMessage('Desculpe, eu sou apenas uma assistente de auxílio rápido. Por favor, selecione uma das opções abaixo para que eu possa te ajudar melhor:', [
        { label: '💡 Sugerir tradução de Mod', value: 'suggest_translation' },
        { label: '📝 Reportar erro de revisão', value: 'suggest_review' },
        { label: '🙋 Dúvidas sobre Recrutamento', value: 'recrutamento_info' },
        { label: '💬 Falar com a equipe', value: 'contact_team' },
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendText();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          background: '#e53637',
          color: '#ffffff',
          border: 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(229, 54, 55, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 9999,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        aria-label="Chatbot de suporte"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Mini Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '95px',
            right: '25px',
            width: '360px',
            height: '480px',
            background: '#121230',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9998,
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: '#07071a',
              padding: '15px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/avatar/monika.jpg"
                alt="MoniBot Avatar"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 2px 8px rgba(229, 54, 55, 0.3)',
                }}
              />
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px', lineHeight: '1.2' }}>MoniBot</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#b7b7b7', marginTop: '2px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ecc71', display: 'inline-block', boxShadow: '0 0 6px #2ecc71' }} />
                  Suporte Online
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#b7b7b7', cursor: 'pointer', display: 'flex', padding: '4px' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div
            style={{
              flex: 1,
              padding: '20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            {messages.map((msg) => (
              <div key={msg.id} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                {/* Bubble */}
                <div
                  style={{
                    background: msg.sender === 'user' ? '#e53637' : 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    padding: '12px 16px',
                    borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                    fontSize: '13.5px',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.text}
                </div>

                {/* Bubble Timestamp */}
                <div
                  style={{
                    fontSize: '10px',
                    color: '#b7b7b7',
                    marginTop: '4px',
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                  }}
                >
                  {msg.timestamp}
                </div>

                {/* Action Options */}
                {msg.options && msg.options.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt.value, opt.label)}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#ffffff',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '12.5px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(229, 54, 55, 0.1)';
                          e.currentTarget.style.borderColor = '#e53637';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', background: 'rgba(255, 255, 255, 0.05)', padding: '12px 16px', borderRadius: '14px 14px 14px 2px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                <span className="dot" style={{ width: '6px', height: '6px', background: '#b7b7b7', borderRadius: '50%', animation: 'bounce 1.4s infinite' }} />
                <span className="dot" style={{ width: '6px', height: '6px', background: '#b7b7b7', borderRadius: '50%', animation: 'bounce 1.4s infinite 0.2s' }} />
                <span className="dot" style={{ width: '6px', height: '6px', background: '#b7b7b7', borderRadius: '50%', animation: 'bounce 1.4s infinite 0.4s' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div
            style={{
              padding: '12px 15px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              background: '#07071a',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={currentStep !== 'start' ? 'Digite sua resposta...' : 'Responda a mensagem...'}
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: '#ffffff',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSendText}
              disabled={!inputVal.trim()}
              style={{
                background: inputVal.trim() ? '#e53637' : 'rgba(255, 255, 255, 0.05)',
                color: inputVal.trim() ? '#ffffff' : '#b7b7b7',
                border: 'none',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: inputVal.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s',
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
