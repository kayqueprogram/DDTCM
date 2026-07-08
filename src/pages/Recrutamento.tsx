import React from 'react';
import { Seo } from '../components/Seo';
import { SITE_NAME } from '../lib/site';
import { ClipboardList, Users, Languages, FileSearch, PenTool, Code } from 'lucide-react';

export const Recrutamento: React.FC = () => {
  const formUrl = 'https://forms.gle/3T6aQPAAh2NQ2hhY9';

  return (
    <>
      <Seo
        title="Recrutamento - Faça parte da Equipe"
        description="Estamos voltando com nossas atividades! Nos ajude a revisar as traduções existentes e planejar novos mods de Doki Doki Literature Club em português."
        canonicalPath="/recrutamento"
        keywords={[
          'Recrutamento DDTC',
          'Traduzir Doki Doki',
          'Vagas tradução mod',
          'Revisão DDLC PT-BR',
          'Doki Doki Translate Club',
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `Recrutamento | ${SITE_NAME}`,
          description: 'Estamos de volta! Junte-se à equipe de tradução e revisão de mods de DDLC.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://doki-doki-translate-company.vercel.app/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Recrutamento',
                item: 'https://doki-doki-translate-company.vercel.app/recrutamento',
              },
            ],
          },
        }}
      />

      {/* Header Banner */}
      <section className="normal-breadcrumb set-bg" style={{ backgroundImage: 'url(/img/label/label3.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="normal__breadcrumb__text" style={{ background: 'rgba(7, 7, 26, 0.8)', padding: '25px', borderRadius: '8px', display: 'inline-block', backdropFilter: 'blur(4px)' }}>
                <h2 style={{ color: '#ffffff', fontSize: '36px', fontWeight: 700, marginBottom: '10px' }}>Recrutamento</h2>
                <p style={{ color: '#b7b7b7', margin: 0 }}>Estamos de volta e precisamos de você para reerguer o clube!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="blog spad" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Introduction Card */}
              <div className="recrutamento__intro" style={{ background: '#121230', padding: '40px', borderRadius: '8px', marginBottom: '40px', borderTop: '4px solid #e53637' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <Users size={36} style={{ color: '#e53637' }} />
                  <h3 style={{ color: '#ffffff', fontWeight: 700, margin: 0 }}>O Clube de Tradução Está de Volta!</h3>
                </div>
                <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px', marginBottom: '20px' }}>
                  A <strong>Doki Doki Translate Company</strong> está iniciando uma nova fase. Nosso primeiro grande objetivo é <strong>revisar minuciosamente as traduções de mods já lançadas</strong> para corrigir erros gramaticais, melhorar a concordância e garantir a melhor experiência possível. 
                </p>
                <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px', marginBottom: '30px' }}>
                  Depois disso, pretendemos voltar com traduções inéditas! No entanto, para que tudo isso aconteça de forma organizada e com alta qualidade, precisamos expandir nossa equipe. Não importa se você tem anos de experiência ou quer aprender, toda ajuda é bem-vinda!
                </p>
                <div style={{ textAlign: 'center' }}>
                  <a href={formUrl} target="_blank" rel="noopener noreferrer" className="primary-btn" style={{ padding: '15px 40px', fontSize: '16px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <ClipboardList size={20} />
                    <span>Preencher Formulário de Recrutamento</span>
                  </a>
                </div>
              </div>

              {/* Roles Section */}
              <h3 style={{ color: '#ffffff', fontWeight: 700, textAlign: 'center', marginBottom: '30px' }}>Vagas Disponíveis</h3>
              
              <div className="row" style={{ gap: '20px 0' }}>
                
                {/* Role 1 */}
                <div className="col-md-6">
                  <div style={{ background: '#121230', padding: '30px', borderRadius: '8px', height: '100%', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                      <FileSearch size={24} style={{ color: '#e53637' }} />
                      <h4 style={{ color: '#ffffff', fontWeight: 700, margin: 0 }}>Revisores (Controle de Qualidade)</h4>
                    </div>
                    <p style={{ color: '#b7b7b7', fontSize: '14px', lineHeight: '24px', margin: 0 }}>
                      Sua missão será jogar os mods traduzidos à procura de erros de português, erros de digitação, falhas de pontuação ou frases que soem artificiais em português, propondo melhorias.
                    </p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="col-md-6">
                  <div style={{ background: '#121230', padding: '30px', borderRadius: '8px', height: '100%', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                      <Languages size={24} style={{ color: '#e53637' }} />
                      <h4 style={{ color: '#ffffff', fontWeight: 700, margin: 0 }}>Tradutores (Inglês → PT-BR)</h4>
                    </div>
                    <p style={{ color: '#b7b7b7', fontSize: '14px', lineHeight: '24px', margin: 0 }}>
                      Responsável por traduzir os textos dos scripts (`.rpy`) de novos mods ou de trechos que necessitem de readequação, mantendo a personalidade dos personagens de DDLC.
                    </p>
                  </div>
                </div>

                {/* Role 3 */}
                <div className="col-md-6">
                  <div style={{ background: '#121230', padding: '30px', borderRadius: '8px', height: '100%', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                      <PenTool size={24} style={{ color: '#e53637' }} />
                      <h4 style={{ color: '#ffffff', fontWeight: 700, margin: 0 }}>Editores de Imagens</h4>
                    </div>
                    <p style={{ color: '#b7b7b7', fontSize: '14px', lineHeight: '24px', margin: 0 }}>
                      Tradução visual dos mods. Você irá editar menus, logos e imagens de fundo contendo textos em inglês usando Photoshop ou similar para inseri-las no jogo de forma limpa.
                    </p>
                  </div>
                </div>

                {/* Role 4 */}
                <div className="col-md-6">
                  <div style={{ background: '#121230', padding: '30px', borderRadius: '8px', height: '100%', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                      <Code size={24} style={{ color: '#e53637' }} />
                      <h4 style={{ color: '#ffffff', fontWeight: 700, margin: 0 }}>Programadores & Portadores</h4>
                    </div>
                    <p style={{ color: '#b7b7b7', fontSize: '14px', lineHeight: '24px', margin: 0 }}>
                      Trabalhará diretamente com os scripts da engine Ren'Py. Ideal para quem quer ajudar a programar efeitos customizados, empacotar builds estáveis ou portar mods para dispositivos móveis (Android/iOS).
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Callout */}
              <div style={{ marginTop: '40px', background: 'rgba(229, 54, 55, 0.1)', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #e53637', textAlign: 'center' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '10px' }}>Tem alguma dúvida?</h4>
                <p style={{ color: '#b7b7b7', fontSize: '15px', margin: '0 0 20px 0' }}>
                  Mesmo se você não tiver certeza de qual vaga preencher, envie seu formulário! Faremos uma conversa tranquila no Discord.
                </p>
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="primary-btn" style={{ padding: '10px 25px', fontSize: '14px' }}>
                  Quero Ajudar!
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
