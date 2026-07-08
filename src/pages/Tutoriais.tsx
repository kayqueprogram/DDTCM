import React, { useState } from 'react';
import { Seo } from '../components/Seo';
import { 
  AlertCircle,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Info
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  content: React.ReactNode;
}

export const Tutoriais: React.FC = () => {
  const [activeArticleId, setActiveArticleId] = useState<string>('pc-install');

  const articles: Article[] = [
    {
      id: 'pc-install',
      category: 'install',
      categoryLabel: 'Instalação de Mods',
      title: 'Como Instalar no PC (Steam & Standalone)',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, marginBottom: '5px' }}>Instalação de Mods no PC</h1>
          <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px' }}>
            Doki Doki Literature Club possui uma comunidade gigante de modificações. Instalar esses mods no seu computador é simples, mas requer a estrutura de pastas correta para funcionar sem erros.
          </p>

          <div style={{ background: 'rgba(229, 54, 55, 0.1)', borderLeft: '4px solid #e53637', padding: '16px', borderRadius: '4px', margin: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e53637', fontWeight: 700, marginBottom: '8px', fontSize: '15px' }}>
              <AlertCircle size={20} />
              <span>CUIDADO COM A VERSÃO DA STEAM</span>
            </div>
            <p style={{ margin: 0, color: '#e2d3d3', fontSize: '14.5px', lineHeight: '24px' }}>
              Não recomendamos instalar mods diretamente na pasta do jogo da Steam. A Steam sincroniza arquivos constantemente e pode apagar ou corromper a tradução. Use sempre uma cópia limpa do jogo (Standalone).
            </p>
          </div>

          <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginTop: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Passo 1: Baixar a versão limpa do DDLC</h3>
          <p style={{ color: '#b7b7b7', lineHeight: '26px' }}>
            Baixe a versão original para computadores direto do site oficial da Team Salvato: <a href="https://ddlc.moe" target="_blank" rel="noopener noreferrer" style={{ color: '#e53637', textDecoration: 'underline', fontWeight: 600 }}>ddlc.moe</a>. O jogo é gratuito.
          </p>

          <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginTop: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Passo 2: Extrair o jogo original</h3>
          <p style={{ color: '#b7b7b7', lineHeight: '26px' }}>
            Extraia o arquivo baixado em um diretório fora das pastas protegidas do sistema (evite colar na pasta <code>C:\Arquivos de Programas</code> para não haver problemas de permissões de administrador). Um bom local é <code>C:\Jogos\DDLC\</code>.
          </p>

          <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginTop: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Passo 3: Instalar o mod</h3>
          <ol style={{ paddingLeft: '20px', color: '#b7b7b7', lineHeight: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Baixe o mod/tradução desejado do nosso acervo.</li>
            <li>Extraia o mod usando o WinRAR ou 7-Zip.</li>
            <li>Copie todos os arquivos extraídos do mod.</li>
            <li>Cole-os <strong>dentro da pasta <code>game</code></strong> localizada na raiz da pasta do seu DDLC limpo.</li>
            <li>Quando o Windows perguntar, confirme a substituição dos arquivos originais.</li>
          </ol>

          <div style={{ background: 'rgba(54, 162, 235, 0.1)', borderLeft: '4px solid #36a2eb', padding: '16px', borderRadius: '4px', margin: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#36a2eb', fontWeight: 700, marginBottom: '8px', fontSize: '15px' }}>
              <Info size={20} />
              <span>DICA DE EXECUÇÃO</span>
            </div>
            <p style={{ margin: 0, color: '#d3e2ee', fontSize: '14.5px', lineHeight: '24px' }}>
              Após colar os arquivos, inicie o jogo pelo arquivo executável principal da pasta raiz (<code>DDLC.exe</code> no Windows). Nunca tente abrir o jogo por atalhos antigos da Steam.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'android-install',
      category: 'install',
      categoryLabel: 'Instalação de Mods',
      title: 'Como Instalar no Android (APK)',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, marginBottom: '5px' }}>Portes para Android (APK)</h1>
          <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px' }}>
            Para que você possa jogar em qualquer lugar, nossa equipe faz o porte de vários mods de DDLC para celular, compilando-os como aplicativos Android (<code>.apk</code>).
          </p>

          <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginTop: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Como Instalar:</h3>
          <ol style={{ paddingLeft: '20px', color: '#b7b7b7', lineHeight: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Acesse a página do mod e toque no botão <strong>Download APK (Android)</strong>.</li>
            <li>Aguarde o download do arquivo no seu celular.</li>
            <li>Abra o gerenciador de arquivos do celular ou os downloads do navegador e toque no arquivo APK.</li>
            <li>Toque em <strong>Instalar</strong>.</li>
          </ol>

          <div style={{ background: 'rgba(229, 54, 55, 0.1)', borderLeft: '4px solid #e53637', padding: '16px', borderRadius: '4px', margin: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e53637', fontWeight: 700, marginBottom: '8px', fontSize: '15px' }}>
              <AlertCircle size={20} />
              <span>PERMISSÕES DE FONTES DESCONHECIDAS</span>
            </div>
            <p style={{ margin: 0, color: '#e2d3d3', fontSize: '14.5px', lineHeight: '24px' }}>
              Se for a sua primeira vez instalando um arquivo baixado fora da Play Store, o Android pedirá que você ative a permissão de "Fontes Desconhecidas" nas configurações de segurança do aparelho ou autorize o navegador a instalar apps.
            </p>
          </div>

          <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginTop: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Aviso do Google Play Protect</h3>
          <p style={{ color: '#b7b7b7', lineHeight: '26px' }}>
            Por se tratar de um aplicativo independente (criado por fãs usando a engine Ren'Py), o Google Protect pode mostrar uma tela amarela ou vermelha com o aviso "App desconhecido bloqueado". 
            Basta clicar em <strong>"Mais detalhes"</strong> e em seguida em <strong>"Instalar assim mesmo"</strong>. Garantimos que os portes de tradução são livres de vírus ou scripts nocivos ao aparelho.
          </p>
        </div>
      )
    },
    {
      id: 'glossary',
      category: 'translation',
      categoryLabel: 'Tradução & Estilo',
      title: 'Glossário Padronizado (Termos Oficiais)',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, marginBottom: '5px' }}>Glossário de Termos de DDLC</h1>
          <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px' }}>
            Para garantir consistência linguística e imersão em todo o nosso acervo de traduções, os membros da Doki Doki Translate Company devem adotar obrigatoriamente a seguinte padronização de termos:
          </p>

          <div style={{ overflowX: 'auto', marginTop: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#b7b7b7', fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#ffffff' }}>
                  <th style={{ padding: '12px 15px', textAlign: 'left' }}>Inglês (Original)</th>
                  <th style={{ padding: '12px 15px', textAlign: 'left' }}>Português (Oficial)</th>
                  <th style={{ padding: '12px 15px', textAlign: 'left' }}>Notas e Contexto</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 15px', fontWeight: 700, color: '#ffffff' }}>Literature Club</td>
                  <td style={{ padding: '12px 15px', color: '#e53637', fontWeight: 600 }}>Clube de Literatura</td>
                  <td style={{ padding: '12px 15px' }}>Sempre usar letras iniciais maiúsculas.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 15px', fontWeight: 700, color: '#ffffff' }}>Clubroom</td>
                  <td style={{ padding: '12px 15px', color: '#e53637', fontWeight: 600 }}>Sala do clube</td>
                  <td style={{ padding: '12px 15px' }}>Refere-se à sala onde as garotas se reúnem.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 15px', fontWeight: 700, color: '#ffffff' }}>Cupcake</td>
                  <td style={{ padding: '12px 15px', color: '#e53637', fontWeight: 600 }}>Cupcake</td>
                  <td style={{ padding: '12px 15px' }}>Manter a palavra em inglês devido à fixação cultural do termo.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 15px', fontWeight: 700, color: '#ffffff' }}>Poem Panic</td>
                  <td style={{ padding: '12px 15px', color: '#e53637', fontWeight: 600 }}>Pânico dos Poemas</td>
                  <td style={{ padding: '12px 15px' }}>Música tema da discussão entre Natsuki e Yuri.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 15px', fontWeight: 700, color: '#ffffff' }}>Festival</td>
                  <td style={{ padding: '12px 15px', color: '#e53637', fontWeight: 600 }}>Festival</td>
                  <td style={{ padding: '12px 15px' }}>Geralmente grafado em minúsculo, exceto em títulos de eventos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'style-guide',
      category: 'translation',
      categoryLabel: 'Tradução & Estilo',
      title: 'Guia de Estilo de Escrita e Pontuação',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, marginBottom: '5px' }}>Guia de Estilo de Escrita</h1>
          <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px' }}>
            Cada integrante do Clube de Literatura possui uma personalidade e uma forma única de falar. A tradução deve manter essa essência viva.
          </p>

          <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginTop: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Estilo das Falas:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '15px', borderRadius: '6px', borderLeft: '3px solid #ffb7c5' }}>
              <span style={{ color: '#ffb7c5', fontWeight: 700, display: 'block', marginBottom: '5px', fontSize: '15px' }}>Sayori:</span>
              <p style={{ margin: 0, color: '#b7b7b7', fontSize: '14px', lineHeight: '24px' }}>
                Falas animadas e informais. Usa exclamações frequentemente (<code>!</code>) e pontuações hesitantes como reticências (<code>...</code>) quando está tímida ou triste. Ex: *"Eba! Fico tão feliz por você ter vindo!"*
              </p>
            </div>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '15px', borderRadius: '6px', borderLeft: '3px solid #f3a3b2' }}>
              <span style={{ color: '#f3a3b2', fontWeight: 700, display: 'block', marginBottom: '5px', fontSize: '15px' }}>Natsuki:</span>
              <p style={{ margin: 0, color: '#b7b7b7', fontSize: '14px', lineHeight: '24px' }}>
                Tom defensivo, impaciente e tsundere. Usa frases curtas, exclamações rápidas e gaguejos (<code>m-mas</code>, <code>o-o quê?</code>). Em momentos de raiva, use caixa alta conforme o original. Ex: *"Eu NÃO sou fofa!"*
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '15px', borderRadius: '6px', borderLeft: '3px solid #a3a3d6' }}>
              <span style={{ color: '#a3a3d6', fontWeight: 700, display: 'block', marginBottom: '5px', fontSize: '15px' }}>Yuri:</span>
              <p style={{ margin: 0, color: '#b7b7b7', fontSize: '14px', lineHeight: '24px' }}>
                Vocabulário requintado, culto e formal. Evite gírias modernas. Uso correto de mesóclises e pronomes de tratamento. Expressa hesitação longa. Ex: *"Peço desculpas... Meu comportamento foi um tanto quanto inadequado."*
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '15px', borderRadius: '6px', borderLeft: '3px solid #2ecc71' }}>
              <span style={{ color: '#2ecc71', fontWeight: 700, display: 'block', marginBottom: '5px', fontSize: '15px' }}>Monika:</span>
              <p style={{ margin: 0, color: '#b7b7b7', fontSize: '14px', lineHeight: '24px' }}>
                Madura, articulada e confiante. Foca no jogador/MC com empatia e carisma. Tom de liderança intelectual. Ex: *"Lembre-se de salvar o jogo com frequência, tudo bem?"*
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq-1',
      category: 'faq',
      categoryLabel: 'Perguntas Frequentes',
      title: 'As traduções são oficiais?',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, marginBottom: '5px' }}>Oficialidade das Traduções</h1>
          <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px' }}>
            Esta é uma das perguntas mais comuns que recebemos na comunidade.
          </p>

          <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginTop: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Diretrizes da Team Salvato:</h3>
          <p style={{ color: '#b7b7b7', lineHeight: '26px' }}>
            Nenhum dos mods listados em nosso acervo é oficial ou filiado à Team Salvato. Todos os mods e suas traduções são criados estritamente por fãs voluntários e sem fins lucrativos.
          </p>
          <p style={{ color: '#b7b7b7', lineHeight: '26px' }}>
            Nós seguimos rigorosamente a <strong>IP Guidelines (Diretrizes de Propriedade Intelectual) da Team Salvato</strong>, o que significa que nunca cobramos downloads e apenas traduzimos mods que exigem o jogo original limpo para funcionar, preservando os direitos autorais oficiais.
          </p>
        </div>
      )
    },
    {
      id: 'faq-2',
      category: 'faq',
      categoryLabel: 'Perguntas Frequentes',
      title: 'Como reportar erros ou sugerir melhorias?',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, marginBottom: '5px' }}>Sugestões e Reportes de Erros</h1>
          <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px' }}>
            Sua ajuda é crucial para mantermos o acervo com a maior qualidade de tradução possível!
          </p>

          <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginTop: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Métodos de Envio:</h3>
          <ul style={{ paddingLeft: '20px', color: '#b7b7b7', lineHeight: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>
              <strong>Pelo Chatbot (MoniBot):</strong> Clique no ícone de chat no canto inferior direito do site em qualquer página e selecione **"📝 Reportar erro de revisão"**. Siga as etapas rápidas.
            </li>
            <li>
              <strong>Pela Página do Mod:</strong> Vá na página do mod em que encontrou um erro e clique no botão **"Sugerir Revisão"** ao lado dos downloads. A MoniBot já abrirá sabendo o nome do mod automaticamente.
            </li>
            <li>
              <strong>Pelo Discord:</strong> Entre no nosso servidor e poste um print/sugestão no canal de discussões ou abra um ticket.
            </li>
          </ul>
        </div>
      )
    }
  ];

  const currentArticleIndex = articles.findIndex(a => a.id === activeArticleId);
  const currentArticle = articles[currentArticleIndex] || articles[0];

  const nextArticle = currentArticleIndex < articles.length - 1 ? articles[currentArticleIndex + 1] : null;
  const prevArticle = currentArticleIndex > 0 ? articles[currentArticleIndex - 1] : null;

  // Group articles by category for the sidebar
  const categoriesMap = articles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = {
        label: article.categoryLabel,
        items: []
      };
    }
    acc[article.category].items.push(article);
    return acc;
  }, {} as Record<string, { label: string; items: Article[] }>);

  return (
    <>
      <Seo 
        title={`${currentArticle.title} - Central de Guias`}
        description={`Guia de ${currentArticle.title} no memorial da Doki Doki Translate Company.`}
        canonicalPath={`/tutoriais`}
      />

      <div style={{ display: 'flex', background: '#0b0c2a', minHeight: 'calc(100vh - 96px)', color: '#ffffff' }}>
        
        {/* LEFT SIDEBAR (Discord Guide TOC style) */}
        <aside 
          style={{
            width: '280px',
            background: '#07071a',
            borderRight: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '30px 20px',
            position: 'sticky',
            top: '96px',
            height: 'calc(100vh - 96px)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            flexShrink: 0
          }}
          className="discord-guide-sidebar"
        >
          {Object.entries(categoriesMap).map(([catId, cat]) => (
            <div key={catId} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Category Header */}
              <div 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.4)', 
                  fontWeight: 800, 
                  fontSize: '11px', 
                  letterSpacing: '1.5px', 
                  textTransform: 'uppercase',
                  paddingLeft: '10px',
                  marginBottom: '4px'
                }}
              >
                {cat.label}
              </div>

              {/* Links under category */}
              {cat.items.map((art) => (
                <button
                  key={art.id}
                  onClick={() => setActiveArticleId(art.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    background: activeArticleId === art.id ? 'rgba(229, 54, 55, 0.1)' : 'transparent',
                    color: activeArticleId === art.id ? '#e53637' : '#b7b7b7',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 12px',
                    fontSize: '13.5px',
                    fontWeight: activeArticleId === art.id ? 700 : 500,
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (activeArticleId !== art.id) {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeArticleId !== art.id) {
                      e.currentTarget.style.color = '#b7b7b7';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginRight: '5px' }}>
                    {art.title}
                  </span>
                  {activeArticleId === art.id && <ChevronRight size={14} style={{ flexShrink: 0 }} />}
                </button>
              ))}
            </div>
          ))}
        </aside>

        {/* MAIN CONTENT AREA */}
        <main 
          style={{
            flex: 1,
            padding: '40px 60px 80px 60px',
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* Breadcrumbs */}
          <nav 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '13px', 
              color: 'rgba(255, 255, 255, 0.4)',
              fontWeight: 500 
            }}
          >
            <span>Central de Guias</span>
            <ChevronRight size={12} />
            <span>{currentArticle.categoryLabel}</span>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>{currentArticle.title}</span>
          </nav>

          {/* Document Content */}
          <article style={{ minHeight: '350px', marginTop: '10px' }}>
            {currentArticle.content}
          </article>

          {/* Next/Previous Article Navigation */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              borderTop: '1px solid rgba(255,255,255,0.08)', 
              paddingTop: '30px', 
              marginTop: '40px',
              gap: '20px'
            }}
          >
            {prevArticle ? (
              <button
                onClick={() => setActiveArticleId(prevArticle.id)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  color: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#e53637';
                  e.currentTarget.style.background = 'rgba(229, 54, 55, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <ArrowLeft size={18} style={{ color: '#e53637', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Anterior</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{prevArticle.title}</div>
                </div>
              </button>
            ) : <div style={{ flex: 1 }} />}

            {nextArticle ? (
              <button
                onClick={() => setActiveArticleId(nextArticle.id)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '15px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  color: '#ffffff',
                  textAlign: 'right',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#e53637';
                  e.currentTarget.style.background = 'rgba(229, 54, 55, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Próximo</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{nextArticle.title}</div>
                </div>
                <ArrowRight size={18} style={{ color: '#e53637', flexShrink: 0 }} />
              </button>
            ) : <div style={{ flex: 1 }} />}
          </div>
        </main>
      </div>
    </>
  );
};
