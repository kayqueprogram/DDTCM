import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Mod } from '../types/mod';
import modsDataRaw from '../data/mods.json';
import { Heart, Clock, Grid as GridIcon, Eye, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Seo } from '../components/Seo';
import { SITE_ALTERNATE_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site';


const modsData: Mod[] = modsDataRaw as Mod[];

// Let's find favorite mods by their slug or filename
const FAVORITE_SLUGS = [
  'doki-doki-literature-club',
  'monika-after-story',
  'doki-doki-blue-skies',
  'foverer-ever', // original misspelling
  'just-natsuki',
  'doki-doki-fallen-angel',
  'ddlc-salvation',
  'ddlc-summertime',
  'ddlc-starry-eyed'
];

// Let's find recently added mods by their slug
const RECENT_SLUGS = [
  'a-date-with-natsuki',
  'sayori-date',
  'ddlc-esquizofrenia',
  'not-oki-doki',
  'doki-doki-the-yuri-parable',
  'doki-doki-yandere-club'
];

interface Slide {
  bg: string;
  label: string;
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
}

const slides: Slide[] = [
  {
    bg: '/img/label/label1.jpg',
    label: 'ESTAMOS DE VOLTA!',
    title: 'A Doki Doki Translate Company Retorna!',
    description: 'O que antes era apenas um memorial agora volta a ganhar vida. Iniciamos uma nova fase para resgatar e revisar traduções de mods de Doki Doki Literature Club.',
    actionText: 'Ver lista de mods',
    actionLink: '/mods'
  },
  {
    bg: '/img/label/label2.jpg',
    label: 'Foco Inicial',
    title: 'Revisão das Traduções Existentes',
    description: 'Para garantir o máximo de fidelidade e qualidade, estamos revisando minuciosamente todas as traduções de mods já lançadas. E você pode nos ajudar!',
    actionText: 'Saiba como ajudar',
    actionLink: '/recrutamento'
  },
  {
    bg: '/img/label/label3.jpg',
    label: 'RECRUTAMENTO ABERTO!',
    title: 'Junte-se ao Nosso Clube de Tradução',
    description: 'Procuramos revisores, tradutores, editores de imagens e programadores. Quer fazer parte dessa nova jornada conosco?',
    actionText: 'Quero me candidatar',
    actionLink: '/recrutamento'
  },
  {
    bg: '/img/label/label4.jpg',
    label: 'Explore o Acervo',
    title: 'Conheça Nossos Projetos',
    description: 'Enquanto nos organizamos, navegue pelos favoritos da comunidade e pelos mods já disponíveis em português.',
    actionText: 'Ver todos os mods',
    actionLink: '/mods'
  }
];

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeViewTab, setActiveViewTab] = useState<'day' | 'week' | 'month' | 'year'>('day');

  // Autoplay slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const getModBySlug = (slug: string): Mod | undefined => {
    return modsData.find(m => m.slug === slug);
  };

  const favoriteMods = FAVORITE_SLUGS.map(slug => getModBySlug(slug)).filter((m): m is Mod => !!m);
  const recentMods = RECENT_SLUGS.map(slug => getModBySlug(slug)).filter((m): m is Mod => !!m);

  // Top Views mock lists from original page
  const topViewsData = {
    day: [
      { slug: 'monika-after-story', ep: 'Infinita', view: '9.8k', title: 'Monika After Story', image: '/lista/img/monika-after-story.jpg' },
      { slug: 'doki-doki-literature-club', ep: 'Base', view: '8.7k', title: 'Doki Doki Literature Club', image: '/lista/img/Doki_Doki_Literature_Club.png' },
      { slug: 'ddlc-salvation', ep: 'PC & Mobile', view: '7.4k', title: 'DDLC Salvation', image: '/lista/img/salvation.png' }
    ],
    week: [
      { slug: 'doki-doki-blue-skies', ep: 'Romance', view: '21k', title: 'Doki Doki Blue Skies', image: '/lista/img/weclub.jpg' },
      { slug: 'doki-doki-fallen-angel', ep: 'Drama', view: '18k', title: 'Doki Doki Fallen Angel', image: '/lista/img/fallen-angel.png' },
      { slug: 'ddlc-summertime', ep: 'Felicidade', view: '16k', title: 'DDLC Summertime', image: '/lista/img/summertimee.jpg' }
    ],
    month: [
      { slug: 'just-natsuki', ep: 'Infinita', view: '42k', title: 'Just Natsuki', image: '/lista/img/Just_Natsuki.jpg' },
      { slug: 'foverer-ever', ep: 'PC & Mobile', view: '39k', title: 'Forever & Ever', image: '/lista/img/Forever-Ever.png' },
      { slug: 'ddlc-starry-eyed', ep: 'Mistério', view: '33k', title: 'DDLC Starry Eyed', image: '/lista/img/starry-eyed.png' }
    ],
    year: [
      { slug: 'monika-after-story', ep: 'Clássico', view: '120k', title: 'Monika After Story', image: '/lista/img/monika-after-story.jpg' },
      { slug: 'doki-doki-literature-club', ep: 'Base', view: '114k', title: 'Doki Doki Literature Club', image: '/lista/img/Doki_Doki_Literature_Club.png' },
      { slug: 'ddlc-salvation', ep: 'Drama', view: '98k', title: 'DDLC Salvation', image: '/lista/img/salvation.png' }
    ]
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <Seo
        title="Doki Doki Translate Club Memorial"
        description={SITE_DESCRIPTION}
        canonicalPath="/"
        keywords={[
          'Doki Doki Translate Club',
          SITE_ALTERNATE_NAME,
          'Doki Doki Translate Club Memorial',
          'DDTC',
          'DDLC PT-BR',
          'visual novels traduzidas',
          'mods de DDLC',
        ]}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            alternateName: SITE_ALTERNATE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/img/logo.png`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            alternateName: SITE_ALTERNATE_NAME,
            url: SITE_URL,
          },
        ]}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="sr-only">
            Doki Doki Translate Company e acervo de traduções de DDLC
          </h1>
          <div className="hero__slider-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`hero__items ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.bg})`,
                  display: index === currentSlide ? 'block' : 'none',
                  transition: 'opacity 0.8s ease-in-out',
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  padding: '120px 0 120px 0',
                }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero__text" style={{ background: 'rgba(7, 7, 26, 0.75)', padding: '30px', borderRadius: '8px', backdropFilter: 'blur(4px)' }}>
                      <div className="label">{slide.label}</div>
                      <h2 style={{ fontSize: '38px', color: '#ffffff', fontWeight: 700, lineHeight: '48px', marginBottom: '15px' }}>
                        {slide.title}
                      </h2>
                      <p className="hero__lead" style={{ color: '#b7b7b7', fontSize: '15px', marginBottom: '25px' }}>
                        {slide.description}
                      </p>
                      {slide.actionText && slide.actionLink && (
                        <div className="hero__actions" style={{ display: 'flex', gap: '15px' }}>
                          <Link to={slide.actionLink} className="primary-btn">
                            <span>{slide.actionText}</span> <ArrowRight size={16} style={{ marginLeft: '5px', display: 'inline' }} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slider Controls */}
            <div className="slider-controls" style={{ position: 'absolute', bottom: '20px', right: '30px', display: 'flex', gap: '10px', zIndex: 10 }}>
              <button onClick={handlePrevSlide} className="btn-arrow" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={handleNextSlide} className="btn-arrow" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }}>
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Dots */}
            <div className="slider-dots" style={{ position: 'absolute', bottom: '20px', left: '30px', display: 'flex', gap: '8px', zIndex: 10 }}>
              {slides.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  style={{
                    display: 'inline-block',
                    width: i === currentSlide ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: i === currentSlide ? '#e53637' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview/Quick Links */}
      <section className="overview" style={{ padding: '40px 0 20px 0' }}>
        <div className="container">
          <div className="overview__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <Link to="/mods" className="overview__item" style={{ background: '#1d1d3d', padding: '25px', borderRadius: '8px', display: 'block', color: '#fff', transition: 'all 0.3s' }}>
              <GridIcon size={32} style={{ color: '#e53637', marginBottom: '15px' }} />
              <strong style={{ display: 'block', fontSize: '18px', marginBottom: '5px' }}>Lista Completa</strong>
              <p style={{ color: '#b7b7b7', fontSize: '14px', margin: 0 }}>Encontre visual novels, mods e traduções reunidos em um só lugar.</p>
            </Link>
            <a href="#favoritos" className="overview__item" style={{ background: '#1d1d3d', padding: '25px', borderRadius: '8px', display: 'block', color: '#fff', transition: 'all 0.3s' }}>
              <Heart size={32} style={{ color: '#e53637', marginBottom: '15px' }} />
              <strong style={{ display: 'block', fontSize: '18px', marginBottom: '5px' }}>Favoritos</strong>
              <p style={{ color: '#b7b7b7', fontSize: '14px', margin: 0 }}>Comece pelos projetos mais lembrados pela comunidade.</p>
            </a>
            <a href="#recentes" className="overview__item" style={{ background: '#1d1d3d', padding: '25px', borderRadius: '8px', display: 'block', color: '#fff', transition: 'all 0.3s' }}>
              <Clock size={32} style={{ color: '#e53637', marginBottom: '15px' }} />
              <strong style={{ display: 'block', fontSize: '18px', marginBottom: '5px' }}>Recentes</strong>
              <p style={{ color: '#b7b7b7', fontSize: '14px', margin: 0 }}>Veja os mods que entraram por último no memorial.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Product Section */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Favoritos */}
              <div className="trending__product" id="favoritos" style={{ marginBottom: '50px' }}>
                <div className="row align-items-center" style={{ marginBottom: '20px' }}>
                  <div className="col-8">
                    <div className="section-title" style={{ margin: 0 }}>
                      <h4 style={{ color: '#ffffff', fontWeight: 600, textTransform: 'uppercase', position: 'relative', paddingLeft: '20px' }}>
                        <span style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '100%', backgroundColor: '#e53637' }} />
                        Favoritos da Comunidade
                      </h4>
                    </div>
                  </div>
                  <div className="col-4 text-right">
                    <div className="btn__all">
                      <Link to="/mods" className="primary-btn" style={{ padding: '8px 16px', fontSize: '12px' }}>
                        Ver todos <ArrowRight size={12} style={{ display: 'inline', marginLeft: '5px' }} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ marginTop: '20px' }}>
                  {favoriteMods.map((mod) => (
                    <div key={mod.slug} className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product__item">
                        <Link to={`/mod/${mod.slug}`}>
                          <div
                            className="product__item__pic set-bg"
                            style={{
                              backgroundImage: `url(${mod.image})`,
                              backgroundPosition: 'center center',
                              backgroundSize: 'cover',
                              height: '280px',
                              borderRadius: '4px',
                              position: 'relative'
                            }}
                          >
                            {mod.mobile && (
                              <div className="ep" style={{ background: '#e53637', color: '#ffffff', fontSize: '10px', padding: '2px 10px', borderRadius: '4px', position: 'absolute', left: '10px', top: '10px', fontWeight: 700 }}>
                                Mobile
                              </div>
                            )}
                          </div>
                        </Link>
                        <div className="product__item__text" style={{ paddingTop: '15px' }}>
                          <ul style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '8px', padding: 0 }}>
                            {mod.category.split(',').map((cat, i) => (
                              <li key={i} style={{ listStyle: 'none', background: 'rgba(255,255,255,0.1)', color: '#b7b7b7', fontSize: '10px', padding: '2px 8px', borderRadius: '4px' }}>
                                {cat.trim()}
                              </li>
                            ))}
                          </ul>
                          <h5 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>
                            <Link to={`/mod/${mod.slug}`} style={{ color: '#ffffff', transition: '0.3s' }}>
                              {mod.title}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recentes */}
              <div className="recent__product" id="recentes" style={{ marginBottom: '30px' }}>
                <div className="row" style={{ marginBottom: '20px' }}>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4 style={{ color: '#ffffff', fontWeight: 600, textTransform: 'uppercase', position: 'relative', paddingLeft: '20px' }}>
                        <span style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '100%', backgroundColor: '#e53637' }} />
                        Adicionados Recentemente
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ marginTop: '20px' }}>
                  {recentMods.map((mod) => (
                    <div key={mod.slug} className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product__item">
                        <Link to={`/mod/${mod.slug}`}>
                          <div
                            className="product__item__pic set-bg"
                            style={{
                              backgroundImage: `url(${mod.image})`,
                              backgroundPosition: 'center center',
                              backgroundSize: 'cover',
                              height: '280px',
                              borderRadius: '4px',
                              position: 'relative'
                            }}
                          >
                            {mod.mobile && (
                              <div className="ep" style={{ background: '#e53637', color: '#ffffff', fontSize: '10px', padding: '2px 10px', borderRadius: '4px', position: 'absolute', left: '10px', top: '10px', fontWeight: 700 }}>
                                {mod.mobile}
                              </div>
                            )}
                          </div>
                        </Link>
                        <div className="product__item__text" style={{ paddingTop: '15px' }}>
                          <ul style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '8px', padding: 0 }}>
                            {mod.category.split(',').map((cat, i) => (
                              <li key={i} style={{ listStyle: 'none', background: 'rgba(255,255,255,0.1)', color: '#b7b7b7', fontSize: '10px', padding: '2px 8px', borderRadius: '4px' }}>
                                {cat.trim()}
                              </li>
                            ))}
                          </ul>
                          <h5 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>
                            <Link to={`/mod/${mod.slug}`} style={{ color: '#ffffff', transition: '0.3s' }}>
                              {mod.title}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credits */}
              <div className="product__sidebar__comment" style={{ background: '#121230', padding: '25px', borderRadius: '8px', marginTop: '30px' }}>
                <div className="section-title" style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Créditos</h5>
                </div>
                <div className="product__sidebar__comment__item" style={{ marginBottom: '15px' }}>
                  <div className="product__sidebar__comment__item__text">
                    <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      Criador do site: <a href="https://github.com/kayqueprogram" target="_blank" rel="noopener noreferrer" style={{ color: '#e53637', textDecoration: 'underline' }}>Kayque de Jesus</a>
                    </h5>
                  </div>
                </div>
                <div className="product__sidebar__comment__item">
                  <div className="product__sidebar__comment__item__text">
                    <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      Colaboradores: <span style={{ color: '#e53637' }}>Derik Fernando & Miki</span>
                    </h5>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="product__sidebar">
                
                {/* Anúncios Panel */}
                <div className="product__sidebar__view" style={{ background: '#121230', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
                  <div className="section-title" style={{ marginBottom: '20px' }}>
                    <h5 style={{ color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', position: 'relative', paddingLeft: '15px' }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '100%', backgroundColor: '#e53637' }} />
                      Anúncios
                    </h5>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {/* Apoia.se Card */}
                    <a
                      href="https://apoia.se/ddtc"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#e53637',
                        borderRadius: '6px',
                        padding: '30px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#ffffff',
                        textDecoration: 'none',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                      }}
                      className="announcement-card"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(229, 54, 55, 0.35)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                      }}
                    >
                      <span style={{ fontSize: '26px', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.5px' }}>APOIA.se</span>
                      <span style={{ fontSize: '15px', fontWeight: 600, marginTop: '10px' }}>Nosso Apoia-se!</span>
                    </a>

                    {/* Discord Card */}
                    <a
                      href="https://discord.gg/mirai-translations-603325287832354855"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#5865F2',
                        borderRadius: '6px',
                        padding: '30px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#ffffff',
                        textDecoration: 'none',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                      }}
                      className="announcement-card"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(88, 101, 242, 0.35)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                      }}
                    >
                      <svg width="48" height="36" viewBox="0 0 127.14 96.36" fill="currentColor" style={{ marginBottom: '10px' }}>
                        <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.43-5c.87-.64,1.71-1.32,2.51-2a75.46,75.46,0,0,0,72.76,0c.8,0.71,1.64,1.38,2.51,2a68.43,68.43,0,0,1-10.43,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129.82,49.82,123.63,26.91,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.86,46,53.86,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.1,46,96.1,53,91,65.69,84.69,65.69Z"/>
                      </svg>
                      <span style={{ fontSize: '15px', fontWeight: 600 }}>Confira nosso Discord</span>
                    </a>
                  </div>
                </div>

                {/* Top Views Panel */}
                <div className="product__sidebar__view top-views" style={{ background: '#121230', padding: '25px', borderRadius: '8px', marginBottom: '30px', position: 'relative' }}>
                  <div className="section-title" style={{ marginBottom: '20px' }}>
                    <h5 style={{ color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Top Views</h5>
                  </div>
                  <ul className="filter__controls top-views__tabs" style={{ display: 'flex', gap: '10px', padding: 0, listStyle: 'none', marginBottom: '45px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
                    {(['day', 'week', 'month', 'year'] as const).map((tab) => (
                      <li
                        key={tab}
                        onClick={() => setActiveViewTab(tab)}
                        className={activeViewTab === tab ? 'active' : ''}
                        style={{
                          color: activeViewTab === tab ? '#ffffff' : '#b7b7b7',
                          cursor: 'pointer',
                          fontWeight: 700,
                          fontSize: '13px',
                          textTransform: 'uppercase',
                          padding: '2px 10px',
                          borderRadius: '4px',
                          backgroundColor: activeViewTab === tab ? '#e53637' : 'transparent',
                          transition: '0.3s'
                        }}
                      >
                        {tab === 'day' ? 'Dia' : tab === 'week' ? 'Semana' : tab === 'month' ? 'Mês' : 'Ano'}
                      </li>
                    ))}
                  </ul>

                  <div className="top-views__panel active" style={{ marginTop: '35px' }}>
                    {topViewsData[activeViewTab].map((item, index) => (
                      <Link
                        key={index}
                        to={`/mod/${item.slug}`}
                        className="product__sidebar__view__item set-bg"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                          height: '190px',
                          display: 'block',
                          position: 'relative',
                          borderRadius: '4px',
                          marginBottom: '20px',
                          color: '#fff'
                        }}
                      >
                        <div className="ep" style={{ background: '#e53637', color: '#fff', fontSize: '10px', padding: '2px 10px', borderRadius: '4px', position: 'absolute', left: '10px', top: '10px', fontWeight: 700 }}>
                          {item.ep}
                        </div>
                        <div className="view" style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '10px', padding: '2px 10px', borderRadius: '4px', position: 'absolute', right: '10px', top: '10px' }}>
                          <Eye size={12} style={{ display: 'inline', marginRight: '5px' }} /> {item.view}
                        </div>
                        <h5>{item.title}</h5>
                      </Link>
                    ))}

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
