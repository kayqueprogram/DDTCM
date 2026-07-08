import React from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Mod } from '../types/mod';
import modsDataRaw from '../data/mods.json';
import { AlertTriangle, ArrowLeft, Laptop, Smartphone, Star } from 'lucide-react';
import { Seo } from '../components/Seo';
import { SITE_NAME, SITE_URL } from '../lib/site';

const modsData: Mod[] = modsDataRaw as Mod[];

export const ModDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const mod = modsData.find(m => m.slug === slug);

  if (!mod) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <Seo
          title="Mod não encontrado"
          description="O mod solicitado não existe ou foi removido do memorial."
          canonicalPath={`/mod/${slug ?? ''}`}
          noindex
        />
        <AlertTriangle size={48} style={{ color: '#e53637', marginBottom: '20px' }} />
        <h3 style={{ color: '#fff', marginBottom: '15px' }}>Mod não encontrado</h3>
        <p style={{ color: '#b7b7b7', marginBottom: '30px' }}>O mod que você está procurando não existe ou foi removido.</p>
        <Link to="/mods" className="primary-btn">
          <ArrowLeft size={16} style={{ display: 'inline', marginRight: '8px' }} /> Voltar para a lista
        </Link>
      </div>
    );
  }

  // Generate star ratings elements (static 5 stars or custom based on design)
  const renderStars = () => {
    return (
      <div className="rating" style={{ display: 'flex', gap: '4px', color: '#e53637', marginBottom: '15px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
    );
  };

  return (
    <>
      <Seo
        title={mod.title}
        description={mod.description.join(' ')}
        canonicalPath={`/mod/${mod.slug}`}
        image={mod.image}
        keywords={[
          mod.title,
          mod.developer,
          mod.translator,
          mod.category,
          SITE_NAME,
          'DDLC PT-BR',
          'visual novel',
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'VideoGame',
          name: mod.title,
          description: mod.description.join(' '),
          image: mod.image.startsWith('http') ? mod.image : `${SITE_URL}${mod.image}`,
          url: `${SITE_URL}/mod/${mod.slug}`,
          genre: mod.category,
          author: {
            '@type': 'Organization',
            name: mod.developer,
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
          },
        }}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb-option" style={{ padding: '20px 0 15px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/"><i className="fa fa-home"></i> Home</Link>
                <Link to="/mods">Mods</Link>
                <span>{mod.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="anime-details spad" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="anime__details__content" style={{ background: '#121230', padding: '40px', borderRadius: '8px' }}>
            <div className="row">
              
              {/* Cover Image */}
              <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
                <div
                  className="anime__details__pic set-bg"
                  style={{
                    backgroundImage: `url(${mod.image})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    height: '380px',
                    borderRadius: '8px',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                />
              </div>

              {/* Text Info */}
              <div className="col-lg-9 col-md-8">
                <div className="anime__details__text">
                  <div className="anime__details__title" style={{ marginBottom: '10px' }}>
                    <h1 style={{ color: '#ffffff', fontSize: '30px', fontWeight: 700 }}>{mod.title}</h1>
                  </div>
                  
                  {renderStars()}

                  {/* Description Paragraphs */}
                  <div className="description-content" style={{ color: '#b7b7b7', fontSize: '15px', lineHeight: '26px', marginBottom: '30px' }}>
                    {mod.description.map((para, idx) => (
                      <p key={idx} style={{ marginBottom: '15px' }}>{para}</p>
                    ))}
                  </div>

                  {/* Metadata Grid */}
                  <div className="anime__details__widget" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '25px', marginBottom: '30px' }}>
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <ul style={{ padding: 0 }}>
                          <li style={{ listStyle: 'none', color: '#b7b7b7', fontSize: '14px', marginBottom: '12px' }}>
                            <span style={{ color: '#ffffff', fontWeight: 700, width: '130px', display: 'inline-block' }}>Duração:</span> {mod.duration}
                          </li>
                          <li style={{ listStyle: 'none', color: '#b7b7b7', fontSize: '14px', marginBottom: '12px' }}>
                            <span style={{ color: '#ffffff', fontWeight: 700, width: '130px', display: 'inline-block' }}>Gênero:</span> {mod.category}
                          </li>
                          <li style={{ listStyle: 'none', color: '#b7b7b7', fontSize: '14px', marginBottom: '12px' }}>
                            <span style={{ color: '#ffffff', fontWeight: 700, width: '130px', display: 'inline-block' }}>Status:</span> {mod.status}
                          </li>
                          <li style={{ listStyle: 'none', color: '#b7b7b7', fontSize: '14px', marginBottom: '12px' }}>
                            <span style={{ color: '#ffffff', fontWeight: 700, width: '130px', display: 'inline-block' }}>Desenvolvedor:</span> {mod.developer}
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <ul style={{ padding: 0 }}>
                          <li style={{ listStyle: 'none', color: '#b7b7b7', fontSize: '14px', marginBottom: '12px' }}>
                            <span style={{ color: '#ffffff', fontWeight: 700, width: '130px', display: 'inline-block' }}>Tradutor:</span> {mod.translator}
                          </li>
                          <li style={{ listStyle: 'none', color: '#b7b7b7', fontSize: '14px', marginBottom: '12px' }}>
                            <span style={{ color: '#ffffff', fontWeight: 700, width: '130px', display: 'inline-block' }}>Revisor:</span> {mod.revisor}
                          </li>
                          {mod.mobile && (
                            <li style={{ listStyle: 'none', color: '#b7b7b7', fontSize: '14px', marginBottom: '12px' }}>
                              <span style={{ color: '#ffffff', fontWeight: 700, width: '130px', display: 'inline-block' }}>Port Mobile:</span> {mod.mobile}
                            </li>
                          )}
                          {mod.mobileCredits && (
                            <li style={{ listStyle: 'none', color: '#b7b7b7', fontSize: '14px', marginBottom: '12px' }}>
                              <span style={{ color: '#ffffff', fontWeight: 700, width: '130px', display: 'inline-block' }}>Créditos Port:</span> {mod.mobileCredits}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions / Downloads */}
                  <div className="download-actions" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {mod.pcDownload ? (
                      <a
                        href={mod.pcDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 30px' }}
                      >
                        <Laptop size={18} />
                        <span>Download (PC)</span>
                      </a>
                    ) : (
                      <button disabled className="watch-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 30px', opacity: 0.5, cursor: 'not-allowed' }}>
                        <Laptop size={18} />
                        <span>PC Indisponível</span>
                      </button>
                    )}

                    {mod.apkDownload ? (
                      <a
                        href={mod.apkDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 30px' }}
                      >
                        <Smartphone size={18} />
                        <span>Download APK (Android)</span>
                      </a>
                    ) : mod.mobile ? (
                      <button disabled className="watch-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 30px', opacity: 0.5, cursor: 'not-allowed' }}>
                        <Smartphone size={18} />
                        <span>APK Indisponível</span>
                      </button>
                    ) : null}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
