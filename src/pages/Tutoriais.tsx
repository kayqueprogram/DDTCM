import React, { useState } from 'react';
import { Seo } from '../components/Seo';
import { SITE_NAME } from '../lib/site';
import { 
  BookOpen, 
  Laptop, 
  Settings, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  AlertCircle 
} from 'lucide-react';

interface TutorialItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  items: TutorialItem[];
}

export const Tutoriais: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('install');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories: Category[] = [
    {
      id: 'install',
      name: 'Instalação de Mods',
      icon: <Laptop size={24} />,
      description: 'Como instalar e jogar mods de DDLC em computadores e celulares.',
      items: [
        {
          id: 'pc-install',
          title: 'Como Instalar Mods no PC (Steam & Standalone)',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>Instalar mods de Doki Doki Literature Club no computador é muito simples, mas requer atenção a alguns detalhes para evitar conflitos de arquivos.</p>
              
              <div style={{ background: 'rgba(229, 54, 55, 0.1)', borderLeft: '4px solid #e53637', padding: '15px', borderRadius: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e53637', fontWeight: 700, marginBottom: '8px' }}>
                  <AlertCircle size={18} />
                  <span>IMPORTANTE</span>
                </div>
                <p style={{ margin: 0, color: '#ffffff', fontSize: '14px' }}>Não recomendamos usar a pasta da Steam diretamente para rodar os mods. A Steam costuma sincronizar e resetar arquivos originais, o que pode quebrar as traduções.</p>
              </div>

              <h6 style={{ color: '#ffffff', fontWeight: 700, marginTop: '10px' }}>Passo a Passo (Recomendado):</h6>
              <ol style={{ paddingLeft: '20px', color: '#b7b7b7', lineHeight: '26px' }}>
                <li style={{ marginBottom: '8px' }}>Baixe o jogo original limpo direto do site oficial: <a href="https://ddlc.moe" target="_blank" rel="noopener noreferrer" style={{ color: '#e53637', textDecoration: 'underline' }}>ddlc.moe</a> (é 100% gratuito).</li>
                <li style={{ marginBottom: '8px' }}>Extraia o jogo limpo em uma nova pasta de sua preferência (ex: <code>C:\Jogos\DDLC_Limpo\</code>).</li>
                <li style={{ marginBottom: '8px' }}>Baixe o arquivo de tradução/mod aqui no nosso acervo (geralmente em formato <code>.zip</code> ou <code>.rar</code>).</li>
                <li style={{ marginBottom: '8px' }}>Extraia o mod baixado.</li>
                <li style={{ marginBottom: '8px' }}>Copie todos os arquivos extraídos do mod e cole-os <strong>dentro da pasta "game"</strong> da pasta onde você extraiu o DDLC original limpo.</li>
                <li style={{ marginBottom: '8px' }}>Substitua qualquer arquivo existente quando o sistema solicitar.</li>
                <li style={{ marginBottom: '8px' }}>Execute o jogo através do executável principal do DDLC (<code>DDLC.exe</code> no Windows ou <code>DDLC.sh</code> no Linux/Mac). Pronto!</li>
              </ol>
            </div>
          )
        },
        {
          id: 'android-install',
          title: 'Como Instalar e Jogar no Android (APK)',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>Muitos dos nossos mods contam com versões portadas para celulares Android. O processo de instalação é simples, por meio de arquivos APK.</p>
              
              <h6 style={{ color: '#ffffff', fontWeight: 700 }}>Passo a Passo para Celular:</h6>
              <ol style={{ paddingLeft: '20px', color: '#b7b7b7', lineHeight: '26px' }}>
                <li style={{ marginBottom: '8px' }}>Acesse a página do mod desejado e procure pelo botão <strong>Download APK (Android)</strong>.</li>
                <li style={{ marginBottom: '8px' }}>Baixe o arquivo APK diretamente no seu celular ou transfira-o do computador.</li>
                <li style={{ marginBottom: '8px' }}>Antes de abrir o arquivo, verifique se o seu Android permite instalar aplicativos de fontes desconhecidas (você pode ativar isso nas configurações de segurança do celular ou dar permissão ao navegador).</li>
                <li style={{ marginBottom: '8px' }}>Abra o arquivo APK baixado e toque em <strong>Instalar</strong>.</li>
                <li style={{ marginBottom: '8px' }}>Aguarde a conclusão do processo. O ícone do jogo aparecerá no seu menu de aplicativos.</li>
              </ol>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '15px', borderRadius: '4px', borderLeft: '4px solid #b7b7b7' }}>
                <h6 style={{ color: '#ffffff', fontWeight: 700, display: 'block', marginBottom: '5px' }}>Problemas Comuns (Instalação bloqueada):</h6>
                <p style={{ margin: 0, fontSize: '13.5px' }}>Caso o Google Play Protect mostre um aviso dizendo que o app é desconhecido, clique em <strong>"Mais detalhes"</strong> e depois em <strong>"Instalar assim mesmo"</strong>. Os portes são criados de forma segura por fãs e não contêm riscos ao aparelho.</p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'translation',
      name: 'Tradução & Estilo',
      icon: <BookOpen size={24} />,
      description: 'Documentações para tradutores e revisores da Doki Doki Translate Company.',
      items: [
        {
          id: 'glossary',
          title: 'Glossário Padronizado (Termos Oficiais)',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>Para manter a fidelidade e a imersão nos mods de DDLC, adotamos uma padronização na tradução de nomes, locais e expressões icônicas. Todos os membros do clube devem seguir estas regras:</p>
              
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#b7b7b7', fontSize: '14.5px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#ffffff' }}>
                      <th style={{ padding: '10px', textAlign: 'left' }}>Termo Original (Inglês)</th>
                      <th style={{ padding: '10px', textAlign: 'left' }}>Tradução Oficial</th>
                      <th style={{ padding: '10px', textAlign: 'left' }}>Contexto / Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px', fontWeight: 600, color: '#ffffff' }}>Literature Club</td>
                      <td style={{ padding: '10px' }}>Clube de Literatura</td>
                      <td style={{ padding: '10px' }}>Sempre grafado com iniciais maiúsculas.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px', fontWeight: 600, color: '#ffffff' }}>Festival</td>
                      <td style={{ padding: '10px' }}>Festival</td>
                      <td style={{ padding: '10px' }}>Refere-se ao festival escolar. Inicia em minúsculo exceto em títulos.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px', fontWeight: 600, color: '#ffffff' }}>Cupcake</td>
                      <td style={{ padding: '10px' }}>Cupcake</td>
                      <td style={{ padding: '10px' }}>Mantemos o termo em inglês devido à popularidade (especialmente os da Natsuki).</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px', fontWeight: 600, color: '#ffffff' }}>Poem Panic</td>
                      <td style={{ padding: '10px' }}>Pânico dos Poemas</td>
                      <td style={{ padding: '10px' }}>Mantém a sonoridade e o tom cômico original.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px', fontWeight: 600, color: '#ffffff' }}>Clubroom</td>
                      <td style={{ padding: '10px' }}>Sala do clube</td>
                      <td style={{ padding: '10px' }}>Pode ser traduzido como sala do clube ou sala de aula onde o clube se reúne.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        },
        {
          id: 'style-guide',
          title: 'Guia de Estilo de Escrita e Pontuação',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>Nossa equipe foca em traduzir de forma que os personagens preservem suas personalidades originais expressadas na pontuação. Siga estas diretrizes críticas:</p>
              
              <ul style={{ paddingLeft: '20px', color: '#b7b7b7', lineHeight: '26px' }}>
                <li style={{ marginBottom: '10px' }}><strong>Sayori (Energética/Indecisa)</strong>: Costuma usar muitas exclamações (<code>!</code>) e reticências (<code>...</code>) frequentes quando está nervosa. Preserve essa pontuação.</li>
                <li style={{ marginBottom: '10px' }}><strong>Natsuki (Tsundere/Defensiva)</strong>: Fala de forma assertiva e direta. Usa muito travessão e exclamações curtas. Tende a usar letras maiúsculas ocasionais para ênfase e gritos (se estiver no original).</li>
                <li style={{ marginBottom: '10px' }}><strong>Yuri (Formal/Tímida)</strong>: Vocabulário sofisticado e polido. Frases mais longas com pontuações corretas. Evite gírias modernas ao traduzir as falas dela.</li>
                <li style={{ marginBottom: '10px' }}><strong>Monika (Líder/Confiante)</strong>: Tom caloroso, amigável e maduro. Pontuação equilibrada e estrutura de frases clara.</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      id: 'faq',
      name: 'FAQ (Dúvidas Frequentes)',
      icon: <HelpCircle size={24} />,
      description: 'Perguntas e respostas sobre o acervo e a comunidade.',
      items: [
        {
          id: 'faq-1',
          title: 'As traduções e os mods são oficiais da Team Salvato?',
          content: (
            <p style={{ color: '#b7b7b7', lineHeight: '26px', margin: 0 }}>
              Não. Todo o conteúdo disponível no site é produzido de fãs para fãs. Doki Doki Literature Club é propriedade intelectual da Team Salvato. Nós apenas traduzimos os mods criados pela comunidade mundial com base nas diretrizes de trabalho de fãs da própria Team Salvato.
            </p>
          )
        },
        {
          id: 'faq-2',
          title: 'Encontrei um bug em algum mod ou tradução. O que devo fazer?',
          content: (
            <p style={{ color: '#b7b7b7', lineHeight: '26px', margin: 0 }}>
              Você pode usar o nosso chatbot **MoniBot** no canto inferior direito do site e clicar na opção **"📝 Reportar erro de revisão"**. Alternativamente, você pode ir diretamente à página de detalhes do mod e clicar no botão **"Sugerir Revisão"** ao lado dos downloads. A mensagem será enviada na hora para a equipe analisar e corrigir.
            </p>
          )
        },
        {
          id: 'faq-3',
          title: 'Quero ajudar a traduzir ou portar mods. Como posso participar?',
          content: (
            <p style={{ color: '#b7b7b7', lineHeight: '26px', margin: 0 }}>
              Estamos sempre à procura de novos membros! Vá até o nosso menu superior e clique em **"Recrutamento"** para ler sobre as vagas de tradução, revisão, edição de imagem e programação, preenchendo o formulário de candidatura.
            </p>
          )
        }
      ]
    }
  ];

  return (
    <>
      <Seo 
        title="Tutoriais e Documentação"
        description={`Central de ajuda da ${SITE_NAME}. Tutoriais de instalação de mods de DDLC para PC e Android, glossários de termos de tradução e FAQ.`}
        canonicalPath="/tutoriais"
        keywords={['tutoriais', 'como instalar mods ddlc', 'ddlc android apk', 'manual de tradução ddtc', 'ajuda']}
      />

      <section className="normal-breadcrumb set-bg" style={{ backgroundImage: `url('/img/normal-breadcrumb.jpg')`, backgroundPosition: 'center center', backgroundSize: 'cover', padding: '60px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="normal__breadcrumb__text">
                <h2 style={{ color: '#ffffff', fontWeight: 800, fontSize: '36px', textTransform: 'uppercase' }}>Central de Guias & Ajuda</h2>
                <p style={{ color: '#b7b7b7', fontSize: '16px', marginTop: '10px' }}>Tudo o que você precisa saber para jogar os mods e colaborar conosco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section spad" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="row">
            
            {/* Sidebar Navigation */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="blog__sidebar" style={{ background: '#121230', padding: '30px', borderRadius: '8px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Settings style={{ color: '#e53637' }} /> Categorias
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setExpandedItems({});
                      }}
                      style={{
                        background: activeCategory === category.id ? '#e53637' : 'rgba(255, 255, 255, 0.03)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '15px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      onMouseEnter={(e) => {
                        if (activeCategory !== category.id) {
                          e.currentTarget.style.background = 'rgba(229, 54, 55, 0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeCategory !== category.id) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        }
                      }}
                    >
                      <div style={{ color: activeCategory === category.id ? '#ffffff' : '#e53637' }}>
                        {category.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '15px' }}>{category.name}</div>
                        <div style={{ fontSize: '12px', color: activeCategory === category.id ? 'rgba(255,255,255,0.7)' : '#b7b7b7', marginTop: '2px', lineHeight: '1.4' }}>
                          {category.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tutorials List Content */}
            <div className="col-lg-8">
              <div style={{ background: '#121230', padding: '40px', borderRadius: '8px', minHeight: '400px' }}>
                
                {categories.filter(cat => cat.id === activeCategory).map((cat) => (
                  <div key={cat.id}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '20px', marginBottom: '30px' }}>
                      <div style={{ color: '#e53637' }}>{cat.icon}</div>
                      <h3 style={{ color: '#ffffff', fontWeight: 700, margin: 0 }}>{cat.name}</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {cat.items.map((item) => {
                        const isExpanded = !!expandedItems[item.id];
                        return (
                          <div 
                            key={item.id} 
                            style={{ 
                              background: 'rgba(255, 255, 255, 0.02)', 
                              border: '1px solid rgba(255, 255, 255, 0.05)', 
                              borderRadius: '8px', 
                              overflow: 'hidden',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            {/* Card Accordion Trigger */}
                            <button
                              onClick={() => toggleExpand(item.id)}
                              style={{
                                width: '100%',
                                background: 'transparent',
                                border: 'none',
                                padding: '20px',
                                textAlign: 'left',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                color: '#ffffff'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <FileText size={18} style={{ color: '#e53637' }} />
                                <span style={{ fontSize: '16px', fontWeight: 700 }}>{item.title}</span>
                              </div>
                              <div style={{ color: '#b7b7b7' }}>
                                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                              </div>
                            </button>

                            {/* Collapsible Content */}
                            {isExpanded && (
                              <div 
                                style={{ 
                                  padding: '0 20px 20px 20px', 
                                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                  color: '#b7b7b7',
                                  fontSize: '14.5px',
                                  lineHeight: '26px',
                                  animation: 'slideDown 0.2s ease-out'
                                }}
                              >
                                <div style={{ paddingTop: '15px' }}>
                                  {item.content}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
