import React from 'react';

interface Member {
  name: string;
  role: string;
  description: string;
  github?: string;
  badge: string;
  avatar: string;
}

const team: Member[] = [
  {
    name: 'Kayque de Jesus',
    role: 'Mantenedor & Desenvolvedor Web',
    badge: 'Ativo',
    description: 'Responsável por reescrever o site em React + TypeScript, otimizar a responsividade para todos os tamanhos de tela, integrar novas mecânicas de layout e gerenciar o repositório moderno.',
    github: 'https://github.com/kayqueprogram',
    avatar: 'https://github.com/kayqueprogram.png'
  },
  {
    name: 'Drack',
    role: 'Criador Original & Administrador',
    badge: 'Idealizador',
    description: 'Criador e administrador da Doki Doki Translate Club original, idealizou o repositório histórico e unificou a comunidade brasileira de traduções de DDLC.',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Drack'
  },
  {
    name: 'Sakaki Leonard',
    role: 'Ajudante & Colaborador Técnico',
    badge: 'Colaborador',
    description: 'Prestou suporte técnico essencial durante os primeiros anos da DDTC, auxiliando na portabilidade e na catalogação das modificações do clube de literatura.',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sakaki'
  },
  {
    name: 'Miki',
    role: 'Colaborador & Tradutor de Mods',
    badge: 'Tradutor',
    description: 'Traduziu grandes modificações do universo de DDLC para português (como Monika After Story, Forever & Ever, Act 5, etc.) e ajudou a impulsionar as Visual Novels da equipe.',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Miki'
  }
];

export const Equipe: React.FC = () => {
  return (
    <>
      {/* Breadcrumb section */}
      <div className="breadcrumb-option" style={{ background: '#0b0c2a', padding: '35px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <a href="/" style={{ color: '#b7b7b7', fontSize: '15px', fontWeight: 600 }}><i className="fa fa-home"></i> Home</a>
                <span style={{ color: '#b7b7b7', fontSize: '15px' }}>&gt;</span>
                <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600 }}>Equipe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team main content */}
      <section className="team-page spad" style={{ padding: '80px 0', background: '#0b0c2a' }}>
        <div className="container">
          {/* Header Title */}
          <div className="row justify-content-center" style={{ marginBottom: '50px' }}>
            <div className="col-lg-8 text-center">
              <div className="section-title" style={{ marginBottom: '15px' }}>
                <h2 style={{ color: '#ffffff', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Conheça nossa equipe
                </h2>
              </div>
              <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px', maxWidth: '600px', margin: '0 auto' }}>
                As pessoas por trás da criação, desenvolvimento e preservação do acervo da Doki Doki Translate Club Memorial.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row" style={{ rowGap: '35px' }}>
            {team.map((member, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div 
                  className="team-card" 
                  style={{
                    background: '#121230',
                    padding: '35px',
                    borderRadius: '8px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 16px 34px rgba(0, 0, 0, 0.28)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div>
                    {/* Header info */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <div 
                          style={{ 
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '3px solid #e53637',
                            boxShadow: '0 0 15px rgba(229, 54, 55, 0.4)',
                            background: '#1d1d3d',
                            flexShrink: 0
                          }}
                        >
                          <img 
                            src={member.avatar} 
                            alt={member.name} 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }} 
                          />
                        </div>
                        <div>
                          <h4 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, margin: '0 0 5px 0' }}>
                            {member.name}
                          </h4>
                          <span style={{ color: '#e53637', fontSize: '14px', fontWeight: 600 }}>
                            {member.role}
                          </span>
                        </div>
                      </div>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          fontWeight: 700, 
                          color: '#ffffff', 
                          background: '#e53637', 
                          padding: '4px 12px', 
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {member.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{ color: '#b7b7b7', fontSize: '15px', lineHeight: '26px', margin: '0 0 25px 0' }}>
                      {member.description}
                    </p>
                  </div>

                  {/* Actions / Links */}
                  {member.github && (
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginTop: 'auto' }}>
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="watch-btn"
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          padding: '8px 18px', 
                          fontSize: '12px',
                          borderRadius: '4px'
                        }}
                      >
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline' }}>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>Ver Perfil GitHub</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
