import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { Mod } from '../types/mod';
import modsDataRaw from '../data/mods.json';
import { Search, X, Laptop, Smartphone } from 'lucide-react';

const modsData: Mod[] = modsDataRaw as Mod[];
const MODS_PER_PAGE = 12;

export const ModList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract all unique categories/genres
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    modsData.forEach(mod => {
      mod.category.split(',').forEach(c => {
        const cleaned = c.trim();
        if (cleaned) cats.add(cleaned);
      });
    });
    return Array.from(cats).sort();
  }, []);

  // Filter logic
  const filteredMods = useMemo(() => {
    return modsData.filter(mod => {
      // Search text query match
      const textMatch = 
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.translator.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter match
      const catMatch = selectedCategory === 'All' || mod.category.toLowerCase().includes(selectedCategory.toLowerCase());

      // Platform filter match
      let platformMatch = true;
      if (selectedPlatform === 'PC') {
        platformMatch = !!mod.pcDownload;
      } else if (selectedPlatform === 'Mobile') {
        platformMatch = !!mod.mobile || !!mod.apkDownload;
      }

      return textMatch && catMatch && platformMatch;
    });
  }, [searchQuery, selectedCategory, selectedPlatform]);

  // Reset pagination when filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedPlatform]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredMods.length / MODS_PER_PAGE);
  const displayedMods = useMemo(() => {
    const startIndex = (currentPage - 1) * MODS_PER_PAGE;
    return filteredMods.slice(startIndex, startIndex + MODS_PER_PAGE);
  }, [filteredMods, currentPage]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-option" style={{ padding: '20px 0 15px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/"><i className="fa fa-home"></i> Home</Link>
                <span>Lista das Visual Novels traduzidas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main product page */}
      <section className="product-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product__page__content">
                
                {/* Header title */}
                <div className="product__page__title" style={{ marginBottom: '30px' }}>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="section-title" style={{ margin: 0 }}>
                        <h4 style={{ color: '#ffffff', fontWeight: 600, textTransform: 'uppercase', position: 'relative', paddingLeft: '20px' }}>
                          <span style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '100%', backgroundColor: '#e53637' }} />
                          Todas as Traduções ({filteredMods.length})
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filters & Search Panel */}
                <div className="filters-panel" style={{ background: '#121230', padding: '25px', borderRadius: '8px', marginBottom: '35px' }}>
                  <div className="row gap-y">
                    
                    {/* Search Field */}
                    <div className="col-lg-4 col-md-12 mb-3 mb-lg-0">
                      <label style={{ color: '#fff', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                        Pesquisar
                      </label>
                      <div className="search-input-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <Search size={18} style={{ position: 'absolute', left: '15px', color: '#b7b7b7' }} />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Digite nome, desenvolvedor ou gênero..."
                          style={{
                            width: '100%',
                            background: '#1d1d3d',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            padding: '10px 40px 10px 45px',
                            color: '#fff',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border 0.3s'
                          }}
                        />
                        {searchQuery && (
                          <button onClick={clearSearch} style={{ position: 'absolute', right: '15px', background: 'transparent', border: 'none', color: '#b7b7b7', padding: 0, cursor: 'pointer' }}>
                            <X size={16} />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Platform Filter */}
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                      <label style={{ color: '#fff', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                        Plataforma
                      </label>
                      <select
                        value={selectedPlatform}
                        onChange={(e) => setSelectedPlatform(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#1d1d3d',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '4px',
                          padding: '10px 15px',
                          color: '#fff',
                          fontSize: '14px',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="All">Todas</option>
                        <option value="PC">Apenas PC (Computador)</option>
                        <option value="Mobile">Apenas Mobile (Android / APK)</option>
                      </select>
                    </div>

                    {/* Category Filter */}
                    <div className="col-lg-5 col-md-6">
                      <label style={{ color: '#fff', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                        Gênero / Categoria
                      </label>
                      <div className="categories-list" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxHeight: '110px', overflowY: 'auto', paddingRight: '5px' }}>
                        <button
                          onClick={() => setSelectedCategory('All')}
                          style={{
                            padding: '6px 14px',
                            fontSize: '11px',
                            fontWeight: 700,
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            background: selectedCategory === 'All' ? '#e53637' : '#1d1d3d',
                            color: '#fff'
                          }}
                        >
                          Tudo
                        </button>
                        {allCategories.map(cat => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                              padding: '6px 14px',
                              fontSize: '11px',
                              fontWeight: 700,
                              borderRadius: '4px',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.3s',
                              background: selectedCategory === cat ? '#e53637' : '#1d1d3d',
                              color: '#fff'
                            }}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mod Cards List */}
                {displayedMods.length === 0 ? (
                  <div style={{ padding: '60px 0', textAlign: 'center', background: '#121230', borderRadius: '8px' }}>
                    <p style={{ color: '#b7b7b7', fontSize: '16px', margin: 0 }}>Nenhum mod encontrado correspondente aos seus filtros.</p>
                  </div>
                ) : (
                  <div className="row">
                    {displayedMods.map((mod) => (
                      <div key={mod.slug} className="col-lg-3 col-md-4 col-sm-6">
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
                              <div className="ep" style={{ background: '#e53637', color: '#ffffff', fontSize: '10px', padding: '2px 10px', borderRadius: '4px', position: 'absolute', left: '10px', top: '10px', fontWeight: 700 }}>
                                {mod.duration}
                              </div>
                              
                              <div className="platform-badges" style={{ position: 'absolute', right: '10px', top: '10px', display: 'flex', gap: '5px' }}>
                                {mod.pcDownload && (
                                  <span style={{ background: 'rgba(7, 7, 26, 0.8)', padding: '4px', borderRadius: '4px', color: '#fff' }} title="Disponível para PC">
                                    <Laptop size={12} />
                                  </span>
                                )}
                                {(mod.mobile || mod.apkDownload) && (
                                  <span style={{ background: 'rgba(7, 7, 26, 0.8)', padding: '4px', borderRadius: '4px', color: '#fff' }} title="Disponível para Android">
                                    <Smartphone size={12} />
                                  </span>
                                )}
                              </div>

                            </div>
                          </Link>
                          <div className="product__item__text" style={{ paddingTop: '15px' }}>
                            <ul style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '8px', padding: 0 }}>
                              {mod.category.split(',').slice(0, 3).map((cat, i) => (
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
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="product__pagination" style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '40px' }}>
                    {Array.from({ length: totalPages }).map((_, idx) => {
                      const pageNum = idx + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          style={{
                            width: '40px',
                            height: '40px',
                            border: 'none',
                            borderRadius: '4px',
                            background: pageNum === currentPage ? '#e53637' : '#1d1d3d',
                            color: '#fff',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
