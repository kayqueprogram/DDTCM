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
    name: 'Derik Fernando',
    role: 'Tradutor & Revisor',
    badge: 'Colaborador',
    description: 'Responsável pela tradução e revisão técnica de diversas modificações do catálogo, garantindo a fidelidade e a qualidade do texto em português.',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Derik'
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
          <div className="row justify-content-center" style={{ marginBottom: '60px' }}>
            <div className="col-lg-8 text-center">
              <div className="section-title" style={{ marginBottom: '15px' }}>
                <h2 style={{ color: '#ffffff', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Conheça o time
                </h2>
              </div>
              <p style={{ color: '#b7b7b7', fontSize: '16px', lineHeight: '28px', maxWidth: '600px', margin: '0 auto' }}>
                As pessoas por trás do desenvolvimento e preservação do acervo da Doki Doki Translate Club Memorial.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row justify-content-center" style={{ rowGap: '35px' }}>
            {team.map((member, index) => (
              <div key={index} className="col-lg-6 col-md-12">
                <div 
                  className="team-card-row" 
                  style={{
                    background: '#121230',
                    padding: '35px',
                    borderRadius: '8px',
                    height: '100%',
                    display: 'flex',
                    gap: '30px',
                    alignItems: 'center',
                    boxShadow: '0 16px 34px rgba(0, 0, 0, 0.28)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  {/* Left Column: Avatar */}
                  <div style={{ flexShrink: 0 }}>
                    <div 
                      style={{ 
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid #e53637',
                        boxShadow: '0 0 20px rgba(229, 54, 55, 0.35)',
                        background: '#1d1d3d'
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
                  </div>

                  {/* Right Column: Text Metadata & Socials */}
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ color: '#b7b7b7', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {member.role}
                      </span>
                      <span 
                        style={{ 
                          fontSize: '10px', 
                          fontWeight: 700, 
                          color: '#ffffff', 
                          background: '#e53637', 
                          padding: '2px 8px', 
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {member.badge}
                      </span>
                    </div>

                    <h4 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, margin: 0 }}>
                      {member.name}
                    </h4>

                    <p style={{ color: '#b7b7b7', fontSize: '15px', lineHeight: '24px', margin: '4px 0 12px 0' }}>
                      {member.description}
                    </p>

                    {/* Social Row at Bottom */}
                    <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                      {member.github ? (
                        <a 
                          href={member.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            color: '#ffffff',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background 0.3s, color 0.3s',
                            border: '1px solid rgba(255,255,255,0.1)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#e53637';
                            e.currentTarget.style.borderColor = '#e53637';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          }}
                          aria-label="GitHub Profile"
                        >
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS adjustments for mobile styling of the row card */}
      <style>{`
        @media (max-width: 575px) {
          .team-card-row {
            flex-direction: column !important;
            text-align: center !important;
            padding: 25px !important;
          }
          .team-card-row div {
            align-items: center !important;
            justify-content: center !important;
          }
          .team-card-row div div {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .team-card-row .download-actions, 
          .team-card-row div[style*="display: flex"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
};
