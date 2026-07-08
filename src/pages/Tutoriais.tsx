import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Seo } from '../components/Seo';
import {
  Callout, Steps, CodeBlock, CharacterCard, SectionHeading, P
} from '../components/DocsComponents';
import '../styles/docs.css';
import {
  Search, ChevronRight, ArrowLeft, ArrowRight,
  Clock, ThumbsUp, ThumbsDown, BookOpen,
  Smartphone, Laptop, HelpCircle, PenLine, Hash
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
interface TocEntry { id: string; label: string; }

interface Article {
  id: string;
  category: string;
  categoryLabel: string;
  categoryIcon: React.ReactNode;
  title: string;
  keywords: string;
  readingTime: number; // minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  toc: TocEntry[];
  content: React.ReactNode;
}

// ─────────────────────────────────────────────────────────────
// ARTICLES DATA
// ─────────────────────────────────────────────────────────────
const ARTICLES: Article[] = [
  // ────────── 1. INSTALAÇÃO PC ──────────
  {
    id: 'pc-install',
    category: 'install',
    categoryLabel: 'Instalação de Mods',
    categoryIcon: <Laptop size={14} />,
    title: 'Como instalar mods no PC (Steam & Standalone)',
    keywords: 'instalacao pc steam standalone game pasta game ddlc.exe windows linux mac extrair zip rar winrar 7zip',
    readingTime: 6,
    difficulty: 'beginner',
    toc: [
      { id: 'pc-intro', label: 'Introdução' },
      { id: 'pc-download', label: '1 — Baixar o DDLC original' },
      { id: 'pc-extract', label: '2 — Extrair o jogo' },
      { id: 'pc-install-mod', label: '3 — Instalar o mod' },
      { id: 'pc-steam', label: 'E se eu usar a Steam?' },
      { id: 'pc-linux', label: 'Linux / macOS' },
    ],
    content: (
      <>
        <SectionHeading id="pc-intro">Introdução</SectionHeading>
        <P>
          Instalar um mod de <strong>Doki Doki Literature Club</strong> no computador é um processo simples — basicamente você baixa
          o jogo original limpo e substitui alguns arquivos dentro da pasta <code>game/</code>. Siga cada passo com atenção para
          garantir que não haja conflitos com salvamentos anteriores.
        </P>

        <Callout type="danger" title="Não instale sobre saves antigos">
          Se você já jogou o DDLC original antes, existe um arquivo <code>firstrun</code> que precisa ser deletado para que o mod
          inicie corretamente. Se não fizer isso, o jogo pode pular a introdução do mod ou apresentar bugs.
        </Callout>

        {/* ─── PASSO 1 ─── */}
        <SectionHeading id="pc-download">Passo 1 — Baixar o DDLC original</SectionHeading>
        <P>
          O Doki Doki Literature Club é gratuito e disponibilizado pela Team Salvato em dois lugares oficiais:
        </P>
        <ul style={{ color: '#9ba3b5', fontSize: '15px', lineHeight: '1.9', paddingLeft: '22px', marginBottom: '16px' }}>
          <li>
            <a href="https://ddlc.moe" target="_blank" rel="noopener noreferrer"
               style={{ color: '#e53637', fontWeight: 600 }}>ddlc.moe</a> — download direto (Standalone), <strong>recomendado para mods</strong>
          </li>
          <li>
            <a href="https://store.steampowered.com/app/698780/Doki_Doki_Literature_Club/" target="_blank" rel="noopener noreferrer"
               style={{ color: '#e53637', fontWeight: 600 }}>Steam</a> — funciona, mas requer cuidados extras (veja abaixo)
          </li>
        </ul>
        <Callout type="tip" title="Use sempre a versão Standalone para mods">
          Baixe o ZIP do site ddlc.moe. Isso garante uma cópia limpa sem interferência da sincronização da Steam.
        </Callout>

        {/* ─── PASSO 2 ─── */}
        <SectionHeading id="pc-extract">Passo 2 — Extrair o jogo</SectionHeading>
        <P>
          Extraia o arquivo ZIP em um local acessível. Recomendamos criar uma pasta dedicada:
        </P>
        <CodeBlock lang="texto">{`C:\\Jogos\\DDLC\\`}</CodeBlock>
        <Callout type="warning" title="Evite Arquivos de Programas">
          Não extraia em <code>C:\Arquivos de Programas\</code> — essa pasta requer permissão de administrador para cada modificação
          de arquivo, o que pode gerar erros silenciosos durante a instalação do mod.
        </Callout>
        <P>A estrutura final de pastas deve ficar assim:</P>
        <CodeBlock lang="árvore">{`DDLC/
├── game/           ← arquivos do jogo (aqui vão os mods)
│   ├── audio/
│   ├── images/
│   ├── scripts/
│   └── ...
├── lib/
├── renpy/
└── DDLC.exe        ← executável principal`}</CodeBlock>

        {/* ─── PASSO 3 ─── */}
        <SectionHeading id="pc-install-mod">Passo 3 — Instalar o mod</SectionHeading>
        <Steps items={[
          {
            title: 'Baixe o arquivo do mod',
            body: 'Acesse a página do mod desejado aqui no acervo e clique no botão de download. O arquivo normalmente vem como .zip ou .rar.'
          },
          {
            title: 'Extraia o conteúdo do mod',
            body: (
              <>
                Use o <strong>WinRAR</strong> ou <strong>7-Zip</strong> para extrair. Você verá uma pasta ou um conjunto de arquivos com extensões <code>.rpy</code>, <code>.rpyc</code> e possivelmente imagens.
              </>
            )
          },
          {
            title: 'Copie para dentro da pasta game/',
            body: (
              <>
                Selecione todos os arquivos extraídos do mod e cole-os <strong>dentro de <code>DDLC/game/</code></strong>.
                Quando o Windows perguntar sobre substituição, confirme clicando em <strong>"Substituir os arquivos no destino"</strong>.
              </>
            )
          },
          {
            title: '(Opcional) Delete o arquivo firstrun',
            body: (
              <>
                Se você já jogou antes, delete o arquivo <code>DDLC/game/saves/firstrun</code> para que o mod inicie a partir do zero.
              </>
            )
          },
          {
            title: 'Inicie o jogo',
            body: (
              <>
                Abra o <code>DDLC.exe</code> na raiz da pasta. <strong>Nunca abra pela Steam</strong> — isso pode sobrescrever seus arquivos modificados.
              </>
            )
          }
        ]} />

        <Callout type="info" title="Verificando se o mod instalou corretamente">
          Ao abrir o jogo, o título da janela ou o menu inicial terão o nome do mod, e não "Doki Doki Literature Club". Se ainda mostrar o jogo original, verifique se os arquivos foram copiados para a pasta <code>game/</code> correta.
        </Callout>

        {/* ─── STEAM ─── */}
        <SectionHeading id="pc-steam">E se eu usar a versão da Steam?</SectionHeading>
        <P>
          É possível instalar mods na versão da Steam, mas com um cuidado extra: você precisa <strong>desabilitar a sincronização
          na nuvem</strong> para o DDLC. Caso contrário, a Steam pode restaurar os arquivos originais na próxima vez que você abrir.
        </P>
        <Steps items={[
          {
            title: 'Desabilite o Cloud Save do DDLC',
            body: (
              <>
                Clique com o botão direito em DDLC na sua biblioteca Steam → <strong>Propriedades</strong> → aba <strong>"Geral"</strong> →
                desmarque <em>"Manter jogos sincronizados na Nuvem Steam para Doki Doki Literature Club!"</em>.
              </>
            )
          },
          {
            title: 'Localize a pasta do jogo',
            body: (
              <>
                No Steam: botão direito no jogo → <strong>Gerenciar</strong> → <strong>Procurar arquivos locais</strong>.
                A pasta se abrirá no Windows Explorer.
              </>
            )
          },
          {
            title: 'Copie os arquivos do mod para game/',
            body: 'O processo é idêntico ao da versão Standalone. Substitua os arquivos quando solicitado.'
          },
          {
            title: 'Inicie pelo executável, não pela Steam',
            body: (
              <>
                Abra o <code>DDLC.exe</code> diretamente na pasta do jogo. Abrir pela Steam pode triggerar verificação de arquivos e reverter o mod.
              </>
            )
          },
        ]} />

        {/* ─── LINUX/MAC ─── */}
        <SectionHeading id="pc-linux">Linux e macOS</SectionHeading>
        <P>
          O processo é o mesmo, apenas os nomes de arquivos e executáveis diferem:
        </P>
        <CodeBlock lang="bash">{`# Linux — executável na raiz
chmod +x ./DDLC.sh
./DDLC.sh

# macOS — abre o app bundle
open DDLC.app`}</CodeBlock>
        <Callout type="tip" title="Permissões no Linux">
          Se o jogo não abrir, tente tornar o executável executável manualmente com <code>chmod +x DDLC.sh</code> no terminal.
        </Callout>
      </>
    )
  },

  // ────────── 2. INSTALAÇÃO ANDROID ──────────
  {
    id: 'android-install',
    category: 'install',
    categoryLabel: 'Instalação de Mods',
    categoryIcon: <Smartphone size={14} />,
    title: 'Como instalar portes no Android (APK)',
    keywords: 'porte android apk celular mobile smartphone fontes desconhecidas play protect seguranca instalar app',
    readingTime: 4,
    difficulty: 'beginner',
    toc: [
      { id: 'apk-intro', label: 'O que é um porte APK?' },
      { id: 'apk-steps', label: 'Passo a passo de instalação' },
      { id: 'apk-protect', label: 'Aviso do Play Protect' },
      { id: 'apk-faq', label: 'Dúvidas comuns sobre APKs' },
    ],
    content: (
      <>
        <SectionHeading id="apk-intro">O que é um porte APK?</SectionHeading>
        <P>
          Os mods de DDLC são feitos com a engine <strong>Ren'Py</strong>, que suporta exportação nativa para Android. Nossa equipe
          compila os mods e os disponibiliza como arquivos <code>.apk</code> — aplicativos instaláveis diretamente no celular,
          sem necessidade de Root ou emulador.
        </P>
        <Callout type="info" title="Compatibilidade">
          Os portes são compatíveis com Android 8.0 (Oreo) ou superior. A experiência é idêntica ao PC, incluindo áudio, imagens e
          todas as rotas do mod.
        </Callout>

        <SectionHeading id="apk-steps">Passo a passo de instalação</SectionHeading>
        <Steps items={[
          {
            title: 'Encontre o mod desejado',
            body: 'Na página do mod no nosso acervo, procure pelo botão "📱 Download APK (Android)". Nem todo mod possui porte — verifique a disponibilidade antes.'
          },
          {
            title: 'Baixe o APK',
            body: (
              <>
                O download pode ser feito direto pelo navegador do celular ou por computador (você transfere via cabo USB depois).
                O arquivo tem extensão <code>.apk</code> e geralmente pesa entre 200MB e 800MB.
              </>
            )
          },
          {
            title: 'Autorize fontes desconhecidas',
            body: (
              <>
                Ao tocar no arquivo APK pela primeira vez, o Android pedirá para ativar instalação de fontes externas. Siga:
                <br /><br />
                <strong>Android 8+:</strong> <em>Configurações → Aplicativos → Seu navegador → Instalar apps desconhecidos → Permitir</em>
                <br />
                <strong>Android 7 ou inferior:</strong> <em>Configurações → Segurança → Fontes desconhecidas → Ativar</em>
              </>
            )
          },
          {
            title: 'Instale o APK',
            body: 'Toque no arquivo .apk, confirme as permissões solicitadas e aguarde a conclusão. O ícone do mod aparecerá na tela inicial do seu celular.'
          },
          {
            title: 'Jogue!',
            body: 'Abra o mod pelo ícone como qualquer outro aplicativo. O salvamento é armazenado localmente no aparelho.'
          },
        ]} />

        <SectionHeading id="apk-protect">Aviso do Google Play Protect</SectionHeading>
        <P>
          O Google Play Protect pode exibir um alerta vermelho ou laranja dizendo <em>"App potencialmente prejudicial bloqueado"</em>.
          Isso acontece porque qualquer app fora da Play Store é tratado como desconhecido, <strong>independente de seu conteúdo</strong>.
        </P>
        <P>
          Para prosseguir com a instalação com segurança:
        </P>
        <Steps items={[
          {
            title: 'Toque em "Mais detalhes" ou "Saiba mais"',
            body: 'O botão normalmente aparece no rodapé do alerta em vermelho.'
          },
          {
            title: 'Selecione "Instalar assim mesmo"',
            body: 'Confirme que deseja instalar o aplicativo. O sistema concluirá a instalação normalmente.'
          }
        ]} />
        <Callout type="tip" title="Sobre a segurança dos APKs">
          Todos os nossos portes são gerados diretamente dos arquivos-fonte do mod usando a engine Ren'Py oficial, sem adicionar
          código externo. Não existe risco ao aparelho — o aplicativo só acessa armazenamento para salvar o jogo.
        </Callout>

        <SectionHeading id="apk-faq">Dúvidas comuns sobre APKs</SectionHeading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            {
              q: 'O porte consome muito espaço?',
              a: 'Varia por mod. Em média, os portes ocupam entre 200MB e 900MB, dependendo da quantidade de assets de áudio e imagem incluídos.'
            },
            {
              q: 'Meu progresso no PC é transferível para o Android?',
              a: 'Não diretamente. Os arquivos de save têm formatos diferentes entre plataformas e não são compatíveis entre si.'
            },
            {
              q: 'Posso desinstalar e reinstalar sem perder saves?',
              a: 'Isso depende da versão do Android e de como o jogo armazena o save. Para garantir, faça backup manual da pasta de saves antes de desinstalar.'
            }
          ].map((item, i) => (
            <details
              key={i}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '14px 18px',
                cursor: 'pointer'
              }}
            >
              <summary style={{ color: '#ffffff', fontWeight: 700, fontSize: '14.5px', userSelect: 'none', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {item.q}
                <span style={{ color: '#e53637', fontSize: '20px', lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ color: '#9ba3b5', fontSize: '14px', lineHeight: '1.75', marginTop: '10px', marginBottom: 0 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </>
    )
  },

  // ────────── 3. GLOSSÁRIO ──────────
  {
    id: 'glossary',
    category: 'translation',
    categoryLabel: 'Tradução & Estilo',
    categoryIcon: <PenLine size={14} />,
    title: 'Glossário padronizado de DDLC',
    keywords: 'glossario termos padronizacao literatura clubroom cupcake festival poem panic tradução oficial ddtc',
    readingTime: 5,
    difficulty: 'intermediate',
    toc: [
      { id: 'glos-intro', label: 'Por que padronizar?' },
      { id: 'glos-table', label: 'Tabela de termos' },
      { id: 'glos-nomes', label: 'Nomes próprios e lugares' },
      { id: 'glos-proibidos', label: 'Termos proibidos' },
    ],
    content: (
      <>
        <SectionHeading id="glos-intro">Por que padronizar termos?</SectionHeading>
        <P>
          Quando vários tradutores trabalham em projetos diferentes (ou diferentes capítulos do mesmo projeto), é natural
          que os mesmos termos recebam traduções diferentes. Isso quebra a imersão e causa confusão ao jogador que joga
          mais de um mod.
        </P>
        <P>
          Para evitar isso, a DDTC mantém este glossário como <strong>referência obrigatória</strong>. Todos os tradutores
          e revisores devem consultá-lo antes de iniciar qualquer projeto.
        </P>
        <Callout type="warning" title="Atualizações do Glossário">
          Este glossário é atualizado periodicamente. Antes de iniciar um novo projeto, confirme com o coordenador de tradução
          se houve mudanças recentes nos termos listados.
        </Callout>

        <SectionHeading id="glos-table">Tabela de termos</SectionHeading>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Inglês (Original)</th>
              <th>Português (Oficial)</th>
              <th>Contexto / Regras</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Literature Club', 'Clube de Literatura', 'Iniciais maiúsculas sempre. Nunca abreviar para "CL".'],
              ['Clubroom', 'Sala do clube', 'Minúsculo. Não traduzir como "sala de reuniões".'],
              ['Cupcake', 'Cupcake', 'Manter em inglês. Alterar seria culturalmente impreciso.'],
              ['Poem Panic', 'Pânico dos Poemas', 'Título da música de confronto Natsuki/Yuri.'],
              ['Festival', 'Festival', 'Minúsculo exceto no início de títulos ou frases.'],
              ['MC / Player', 'protagonista / jogador', 'Contextual. Em falas formais, use "protagonista".'],
              ['Route', 'rota', 'Ex: "rota da Sayori". Minúsculo.'],
              ['Bad Ending', 'Fim Alternativo', 'Nunca usar "fim ruim" — o termo é confuso fora do contexto.'],
              ['True Ending', 'Desfecho verdadeiro', 'Capitalizar apenas em contexto de título.'],
              ['Doki Doki', 'Doki Doki', 'Não traduzir. É uma onomatopeia japonesa icônica.'],
            ].map(([en, pt, note], i) => (
              <tr key={i}>
                <td><code>{en}</code></td>
                <td className="highlight">{pt}</td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <SectionHeading id="glos-nomes">Nomes próprios e lugares</SectionHeading>
        <P>
          Nomes dos personagens e do jogo <strong>nunca são traduzidos</strong>. Qualquer nome próprio que o mod original
          apresente (de outros personagens) deve ser mantido no idioma original, exceto em casos onde o próprio criador
          do mod disponibilizou uma versão traduzida.
        </P>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Original</th>
              <th>Uso correto</th>
              <th>Uso incorreto</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Sayori', 'Sayori', '"Sayori" ou qualquer variação'],
              ['Natsuki', 'Natsuki', '"Natsuki-chan" (sufixos japoneses não são adicionados)'],
              ['Yuri', 'Yuri', '"Yuri" (não confundir com o gênero "yuri")'],
              ['Monika', 'Monika', '"Monica" (com "c" é grafia errada)'],
              ['Team Salvato', 'Team Salvato', '"Equipe Salvato" ou "Salvato Studios"'],
            ].map(([orig, correct, incorrect], i) => (
              <tr key={i}>
                <td><strong>{orig}</strong></td>
                <td><span className="check">✓ {correct}</span></td>
                <td><span className="cross">✗ {incorrect}</span></td>
              </tr>
            ))}
          </tbody>
        </table>

        <SectionHeading id="glos-proibidos">Termos proibidos</SectionHeading>
        <P>
          Alguns termos são especificamente proibidos nas traduções da DDTC por causarem confusão ou por serem considerados
          inadequados ao tom do jogo original:
        </P>
        <ul style={{ color: '#9ba3b5', fontSize: '15px', lineHeight: '2', paddingLeft: '22px' }}>
          <li><strong>"Anime girl"</strong> — usar "personagem" ou o nome próprio da garota</li>
          <li><strong>"Suicídio"</strong> — usar "morte de Sayori" ou abordar de forma indireta conforme o contexto</li>
          <li><strong>"Glitch"</strong> — usar "falha", "corrupção" ou "distorção" dependendo do contexto</li>
          <li><strong>"Waifu"</strong> — evitar em diálogos formais; apenas em contextos claramente humorísticos</li>
        </ul>
      </>
    )
  },

  // ────────── 4. GUIA DE ESTILO ──────────
  {
    id: 'style-guide',
    category: 'translation',
    categoryLabel: 'Tradução & Estilo',
    categoryIcon: <PenLine size={14} />,
    title: 'Guia de estilo, voz e pontuação',
    keywords: 'guia estilo voz escrita personalidade sayori natsuki yuri monika pontuacao tsundere gaguejo exclamacao virgula',
    readingTime: 8,
    difficulty: 'intermediate',
    toc: [
      { id: 'style-intro', label: 'Filosofia de tradução' },
      { id: 'style-chars', label: 'Voz de cada personagem' },
      { id: 'style-punct', label: 'Regras de pontuação' },
      { id: 'style-typos', label: 'Gaguejos e ênfases' },
      { id: 'style-examples', label: 'Exemplos antes/depois' },
    ],
    content: (
      <>
        <SectionHeading id="style-intro">Filosofia de tradução da DDTC</SectionHeading>
        <P>
          Nossa filosofia é baseada na tradução <strong>idiomática com fidelidade de tom</strong>. Isso significa que buscamos
          capturar <em>como a personagem soa</em>, não apenas o que ela diz. Uma tradução literal muitas vezes perde nuances de
          personalidade que são essenciais para a experiência emocional do jogador.
        </P>
        <Callout type="info" title="Regra de Ouro">
          Se ao ler a tradução em voz alta você não conseguir imaginar a personagem dizendo aquilo, reescreva até conseguir.
        </Callout>

        <SectionHeading id="style-chars">Voz de cada personagem</SectionHeading>
        <CharacterCard name="Sayori" badge="Animada / Hesitante" badgeColor="#ffb7c5" borderColor="#ffb7c5">
          <strong>Registro:</strong> Informal, calorosa, entusiasmada. Usa contrações e expressões populares.
          <br /><br />
          <strong>Pontuação característica:</strong> Exclamações frequentes em momentos de animação (<code>!</code>). Reticências (<code>...</code>) 
          quando está triste, hesitante ou ansiosa. Nunca usa ponto-e-vírgula.
          <br /><br />
          <strong>Erros intencionais:</strong> O original ocasionalmente tem erros de digitação leves para reforçar sua natureza
          distraída. Se aparecer no original, mantenha equivalente em português.
          <br /><br />
          <em>Ex: "Eba, você veio mesmo! Eu... eu ia te esperar até fechar o clube, sabe?"</em>
        </CharacterCard>

        <CharacterCard name="Natsuki" badge="Tsundere / Defensiva" badgeColor="#f3a3b2" borderColor="#f3a3b2">
          <strong>Registro:</strong> Direto, curto, por vezes agressivo. Frases longas são raras.
          <br /><br />
          <strong>Pontuação característica:</strong> Exclamações em sequência (<code>!!</code>, <code>?!</code>). Pausas bruscas
          indicadas por travessão (<code>—</code>). Em momentos de raiva, use <strong>CAIXA ALTA</strong> conforme o original inglês.
          <br /><br />
          <strong>Gaguejos:</strong> Em momentos de vulnerabilidade, ela gagueja: <code>E-eu não me importo com você!</code>. Mantenha
          o hífen entre a sílaba repetida e a próxima.
          <br /><br />
          <em>Ex: "Q-que foi?! Não precisa ficar me olhando assim! Eu NÃO sou fofa, tá?!"</em>
        </CharacterCard>

        <CharacterCard name="Yuri" badge="Formal / Intelectual" badgeColor="#a3a3d6" borderColor="#a3a3d6">
          <strong>Registro:</strong> Culto, rebuscado, preciso. Usa vocabulário menos comum e estruturas sintáticas complexas.
          <br /><br />
          <strong>Pontuação característica:</strong> Pontuação rigorosamente correta. Vírgulas de aposto, dois pontos para
          explicações. Hesitações são longas e elaboradas (<code>...aliás...</code>).
          <br /><br />
          <strong>Proibições:</strong> Gírias modernas, abreviações, frases sem verbo. O vocabulário de Yuri deve soar
          ligeiramente mais formal do que a fala cotidiana brasileira.
          <br /><br />
          <em>Ex: "Peço que me perdoe... Meu comportamento de agora há pouco foi, de certa forma, inadequado para a ocasião."</em>
        </CharacterCard>

        <CharacterCard name="Monika" badge="Confiante / Empática" badgeColor="#a8d8a8" borderColor="#2ecc71">
          <strong>Registro:</strong> Maduro, articulado, acolhedor. Fala diretamente com o jogador; tom de mentora.
          <br /><br />
          <strong>Pontuação característica:</strong> Equilibrada. Usa exclamações com moderação. Prefere perguntas retóricas
          para criar conexão. Parênteses ocasionais para inserir pensamentos laterais.
          <br /><br />
          <strong>Contexto 4th wall:</strong> Nas partes em que Monika fala diretamente com o jogador (quebrando a 4ª parede),
          o tom se torna ainda mais íntimo e pessoal. Adapte para soar como alguém falando com um amigo próximo.
          <br /><br />
          <em>Ex: "Seja bem-vindo ao Clube de Literatura! (Ou seria bem-vinda? Não importa, tudo bem assim.)"</em>
        </CharacterCard>

        <SectionHeading id="style-punct">Regras de pontuação</SectionHeading>
        <table className="docs-table">
          <thead>
            <tr><th>Situação</th><th>Correto</th><th>Errado</th></tr>
          </thead>
          <tbody>
            {[
              ['Hesitação leve', '"Eu... não sei."', '"Eu não sei."'],
              ['Hesitação de Yuri', '"Eu... ou melhor... não..."', '"Eu não..."'],
              ['Grito / Raiva (Natsuki)', '"Isso é RIDÍCULO!"', '"Isso é ridículo!"'],
              ['Gaguejo', '"E-eu não quero!"', '"Eu-eu não quero!"'],
              ['Exclamação + Surpresa', '"O quê?!"', '"O quê?!?"'],
              ['Frase interrompida', '"Eu ia dizer que—"', '"Eu ia dizer que..."'],
            ].map(([sit, ok, bad], i) => (
              <tr key={i}>
                <td>{sit}</td>
                <td className="check">{ok}</td>
                <td className="cross">{bad}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <SectionHeading id="style-typos">Gaguejos e ênfases</SectionHeading>
        <P>
          Gaguejos devem ser construídos com hífen separando a sílaba inicial da palavra completa:
        </P>
        <CodeBlock lang="exemplo">{`# CORRETO
"E-eu não me importo com isso!"
"N-não é o que você está pensando!"

# ERRADO
"Eu eu não me importo com isso!"
"N... não é o que está pensando!"`}</CodeBlock>

        <SectionHeading id="style-examples">Exemplos antes/depois</SectionHeading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              char: 'Sayori',
              color: '#ffb7c5',
              original: '"Hey, I was waiting for you! I thought maybe you weren\'t going to show up..."',
              wrong: '"Ei, eu estava te esperando! Eu pensei que talvez você não fosse aparecer..."',
              right: '"Eba, eu tava esperando por você! Eu achei que você não ia aparecer..."',
              note: 'Mais coloquial, contração de "estava", tom animado mas com hesitação no final.'
            },
            {
              char: 'Yuri',
              color: '#a3a3d6',
              original: '"I... apologize. That was rather uncouth of me."',
              wrong: '"Eu... me desculpo. Isso foi grosseiro da minha parte."',
              right: '"Peço... desculpa. Comportar-me de tal maneira foi, de certa forma, descortês."',
              note: '"Descortês" é mais fiel ao tom culto de Yuri do que "grosseiro".'
            },
          ].map((ex, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: '10px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  padding: '10px 18px',
                  background: `rgba(255,255,255,0.03)`,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  color: ex.color,
                  fontWeight: 700,
                  fontSize: '13px'
                }}
              >
                {ex.char}
              </div>
              <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.3)' }}>Original EN</span>
                  <p style={{ color: '#9ba3b5', margin: '4px 0 0', fontSize: '14px', fontStyle: 'italic' }}>{ex.original}</p>
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#e53637' }}>✗ Incorreto</span>
                  <p style={{ color: '#c07070', margin: '4px 0 0', fontSize: '14px' }}>{ex.wrong}</p>
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#2ecc71' }}>✓ Correto</span>
                  <p style={{ color: '#80c88e', margin: '4px 0 0', fontSize: '14px' }}>{ex.right}</p>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', margin: 0, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '8px' }}>
                  💬 {ex.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  },

  // ────────── 5. PROCESSO DE REVISÃO ──────────
  {
    id: 'review-process',
    category: 'translation',
    categoryLabel: 'Tradução & Estilo',
    categoryIcon: <PenLine size={14} />,
    title: 'Processo de revisão e QA',
    keywords: 'revisao qa quality assurance qualidade processo etapas pr pull request aprovacao equipe',
    readingTime: 5,
    difficulty: 'intermediate',
    toc: [
      { id: 'qa-overview', label: 'Visão geral do processo' },
      { id: 'qa-stages', label: 'Etapas de revisão' },
      { id: 'qa-checklist', label: 'Checklist do revisor' },
    ],
    content: (
      <>
        <SectionHeading id="qa-overview">Visão geral do processo</SectionHeading>
        <P>
          Todo mod traduzido pela DDTC passa por um processo de revisão em múltiplas etapas antes de ser publicado no acervo.
          Nenhuma tradução é publicada diretamente pelo tradutor — ela sempre precisa da aprovação de pelo menos um revisor.
        </P>

        <SectionHeading id="qa-stages">Etapas de revisão</SectionHeading>
        <Steps items={[
          {
            title: 'Tradução inicial (Translator)',
            body: 'O tradutor trabalha nos scripts .rpy, traduzindo todas as strings marcadas. Ao concluir, abre um Pull Request (PR) no repositório do projeto para revisão.'
          },
          {
            title: 'Revisão linguística (Language Reviewer)',
            body: 'Um revisor de idioma lê toda a tradução buscando erros gramaticais, inconsistências com o glossário e quebra de voz dos personagens. Os comentários são feitos diretamente no PR.'
          },
          {
            title: 'QA de jogo (Game QA)',
            body: (
              <>
                Um testador instala a versão em revisão e joga o mod completo, verificando:
                <ul style={{ marginTop: '10px', paddingLeft: '20px', color: '#9ba3b5', lineHeight: '2' }}>
                  <li>Textos que ultrapassam a caixa de diálogo</li>
                  <li>Erros de encoding (caracteres estranhos ou ??)</li>
                  <li>Linhas que ficaram em inglês por acidente</li>
                  <li>Sincronização de áudio com lipsync (quando aplicável)</li>
                </ul>
              </>
            )
          },
          {
            title: 'Aprovação e publicação',
            body: 'Com o PR aprovado por pelo menos um Language Reviewer e um Game QA sem erros pendentes, o coordenador mergea o PR e o mod é adicionado ao acervo do site.'
          }
        ]} />

        <SectionHeading id="qa-checklist">Checklist do revisor</SectionHeading>
        <P>Use esta lista ao revisar qualquer tradução:</P>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          {[
            'Todos os termos do glossário estão sendo usados corretamente?',
            'A voz de cada personagem está preservada (registro, pontuação, vocabulário)?',
            'Gaguejos e ênfases estão formatados corretamente (hífen, CAIXA ALTA)?',
            'Não há nenhuma linha que ficou em inglês acidentalmente?',
            'Reticências usam três pontos literais (...) e não o caractere Unicode (…)?',
            'Nomes próprios (personagens, jogo, empresa) estão corretos?',
            'A tradução não adiciona informação que não existe no original?',
            'Piadas ou referências culturais foram adaptadas de forma compreensível para o PT-BR?',
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                color: '#9ba3b5',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              <span style={{
                width: '20px',
                height: '20px',
                border: '2px solid rgba(229,54,55,0.4)',
                borderRadius: '4px',
                flexShrink: 0,
                marginTop: '1px'
              }} />
              {item}
            </div>
          ))}
        </div>
      </>
    )
  },

  // ────────── 6. FAQ ──────────
  {
    id: 'faq',
    category: 'faq',
    categoryLabel: 'Perguntas Frequentes',
    categoryIcon: <HelpCircle size={14} />,
    title: 'FAQ — Dúvidas mais comuns',
    keywords: 'faq duvidas perguntas frequentes oficiais salvato copyright monibot bug erro sugestao discord',
    readingTime: 4,
    difficulty: 'beginner',
    toc: [
      { id: 'faq-official', label: 'As traduções são oficiais?' },
      { id: 'faq-report', label: 'Como reportar erros?' },
      { id: 'faq-join', label: 'Como entrar para a equipe?' },
      { id: 'faq-request', label: 'Posso pedir um mod para traduzir?' },
    ],
    content: (
      <>
        <SectionHeading id="faq-official">As traduções são oficiais?</SectionHeading>
        <P>
          Não. A Doki Doki Translate Company é um grupo de fãs voluntários, sem afiliação ou endosso da Team Salvato.
          Todo o conteúdo é criado exclusivamente por e para a comunidade, sem fins lucrativos.
        </P>
        <P>
          Seguimos rigorosamente as <strong>IP Guidelines da Team Salvato</strong>:
        </P>
        <ul style={{ color: '#9ba3b5', fontSize: '15px', lineHeight: '2', paddingLeft: '22px' }}>
          <li>Nenhuma tradução é vendida ou monetizada</li>
          <li>Todos os mods requerem o jogo original para funcionar</li>
          <li>Não criamos conteúdo que contradiga o conteúdo canônico da Team Salvato</li>
        </ul>

        <SectionHeading id="faq-report">Como reportar erros ou sugerir melhorias?</SectionHeading>
        <P>Existem três formas de enviar um reporte:</P>
        <table className="docs-table">
          <thead>
            <tr><th>Canal</th><th>Quando usar</th><th>Tempo de resposta</th></tr>
          </thead>
          <tbody>
            {[
              ['MoniBot (chatbot)', 'Erros pontuais em tradução, sugestões rápidas', '24–48h'],
              ['Página do mod', 'Erros específicos de um mod com contexto', '24–72h'],
              ['Servidor do Discord', 'Discussões gerais, sugestões complexas, bugs de APK', 'Variável'],
            ].map(([canal, quando, tempo], i) => (
              <tr key={i}>
                <td><strong>{canal}</strong></td>
                <td>{quando}</td>
                <td style={{ color: '#ffb13c' }}>{tempo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <SectionHeading id="faq-join">Como entrar para a equipe?</SectionHeading>
        <P>
          Estamos sempre recrutando novos membros! Acesse a página de <strong>Recrutamento</strong> no menu superior para
          ver as vagas abertas. As posições disponíveis geralmente incluem:
        </P>
        <ul style={{ color: '#9ba3b5', fontSize: '15px', lineHeight: '2', paddingLeft: '22px' }}>
          <li><strong>Tradutor</strong> — tradução de scripts .rpy do inglês para PT-BR</li>
          <li><strong>Revisor</strong> — revisão linguística e QA de jogo</li>
          <li><strong>Porteiro Android</strong> — compilação de APKs com Ren'Py</li>
          <li><strong>Designer Gráfico</strong> — criação de banners, thumbnails e assets</li>
        </ul>
        <Callout type="tip" title="Dica para candidatos">
          Candidatos com experiência em Ren'Py, Japanese-to-English fan translations ou familiaridade com o canon de DDLC
          têm prioridade, mas iniciantes comprometidos são igualmente bem-vindos!
        </Callout>

        <SectionHeading id="faq-request">Posso pedir um mod para traduzir?</SectionHeading>
        <P>
          Sim! Use o MoniBot (opção "💡 Sugerir mod para tradução") ou abra um ticket no Discord. A equipe avalia cada
          sugestão com base em critérios como popularidade do mod, viabilidade técnica e disponibilidade de tradutores.
          Não garantimos que todo mod sugerido será traduzido, mas todas as sugestões são registradas e consideradas.
        </P>
      </>
    )
  }
];

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export const Tutoriais: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(ARTICLES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTocId, setActiveTocId] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, 'yes' | 'no' | null>>({});
  const mainRef = useRef<HTMLElement>(null);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const el = mainRef.current;
      if (!el) return;
      const scrollTop = window.scrollY - (el.offsetTop - 96);
      const total = el.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / total) * 100)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  // Highlight active TOC entry on scroll
  useEffect(() => {
    const article = ARTICLES.find(a => a.id === activeId);
    if (!article || !article.toc.length) return;
    const handleScroll = () => {
      const ids = article.toc.map(t => t.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveTocId(ids[i]);
          return;
        }
      }
      setActiveTocId(ids[0]);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  const navigateTo = useCallback((id: string) => {
    setActiveId(id);
    setActiveTocId('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter articles by search query
  const filtered = ARTICLES.filter(a => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      a.title.toLowerCase().includes(q) ||
      a.categoryLabel.toLowerCase().includes(q) ||
      a.keywords.toLowerCase().includes(q)
    );
  });

  // Group filtered articles by category
  const groups = filtered.reduce((acc, art) => {
    if (!acc[art.category]) acc[art.category] = { label: art.categoryLabel, icon: art.categoryIcon, items: [] };
    acc[art.category].items.push(art);
    return acc;
  }, {} as Record<string, { label: string; icon: React.ReactNode; items: Article[] }>);

  // Determine current article (might be filtered out)
  const currentArticle = filtered.find(a => a.id === activeId) || filtered[0] || null;

  // Prev / Next (from full list, not filtered)
  const allIdx = ARTICLES.findIndex(a => a.id === currentArticle?.id);
  const prevArticle = allIdx > 0 ? ARTICLES[allIdx - 1] : null;
  const nextArticle = allIdx < ARTICLES.length - 1 ? ARTICLES[allIdx + 1] : null;

  const difficultyLabel = { beginner: 'Iniciante', intermediate: 'Intermediário', advanced: 'Avançado' };

  return (
    <>
      <Seo
        title={currentArticle ? `${currentArticle.title} — Central de Guias` : 'Central de Guias & Documentação'}
        description="Central de tutoriais, guias de instalação de mods e documentação da Doki Doki Translate Company."
        canonicalPath="/tutoriais"
      />

      {/* Reading progress bar */}
      <div className="docs-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div className="docs-layout">
        {/* ═══════════════ LEFT SIDEBAR ═══════════════ */}
        <aside className="docs-sidebar">
          {/* Search */}
          <div className="docs-search-wrapper">
            <Search size={15} className="docs-search-icon" />
            <input
              type="text"
              className="docs-search-input"
              placeholder="Pesquisar guias..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          {filtered.length === 0 ? (
            <div className="docs-empty">Nenhum guia encontrado para<br /><strong>"{searchQuery}"</strong></div>
          ) : (
            Object.entries(groups).map(([catId, cat]) => (
              <div key={catId}>
                <div className="docs-category-header">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    {cat.icon} {cat.label}
                  </span>
                </div>
                {cat.items.map(art => (
                  <button
                    key={art.id}
                    className={`docs-nav-link ${currentArticle?.id === art.id ? 'active' : ''}`}
                    onClick={() => navigateTo(art.id)}
                  >
                    <span className="docs-nav-link-text">{art.title}</span>
                    {currentArticle?.id === art.id && <ChevronRight size={13} style={{ flexShrink: 0 }} />}
                  </button>
                ))}
              </div>
            ))
          )}
        </aside>

        {/* ═══════════════ MAIN CONTENT ═══════════════ */}
        <main className="docs-main" ref={mainRef}>
          {!currentArticle ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.35)' }}>
              <BookOpen size={42} style={{ marginBottom: '18px', opacity: 0.3 }} />
              <h3 style={{ color: '#ffffff' }}>Nenhum artigo encontrado</h3>
              <p>Tente um termo diferente na busca.</p>
            </div>
          ) : (
            <>
              {/* Breadcrumb */}
              <nav className="docs-breadcrumb">
                <span>Central de Guias</span>
                <ChevronRight size={12} />
                <span>{currentArticle.categoryLabel}</span>
                <ChevronRight size={12} />
                <span style={{ color: 'rgba(255,255,255,0.75)' }}>{currentArticle.title}</span>
              </nav>

              {/* Article Header */}
              <h1 className="docs-article-title">{currentArticle.title}</h1>
              <div className="docs-article-meta">
                <span className={`docs-article-tag category`}>
                  {currentArticle.categoryIcon} {currentArticle.categoryLabel}
                </span>
                <span className="docs-article-tag time">
                  <Clock size={12} /> {currentArticle.readingTime} min de leitura
                </span>
                <span className={`docs-article-tag difficulty-${currentArticle.difficulty}`}>
                  {difficultyLabel[currentArticle.difficulty]}
                </span>
              </div>

              <div className="docs-divider" />

              {/* Article Content */}
              <article>{currentArticle.content}</article>

              {/* Feedback */}
              <div className="docs-feedback">
                <span className="docs-feedback-label">
                  {feedbackGiven[currentArticle.id]
                    ? feedbackGiven[currentArticle.id] === 'yes'
                      ? '🎉 Obrigado pelo feedback positivo!'
                      : '😔 Obrigado! Vamos melhorar este guia.'
                    : 'Este guia foi útil?'}
                </span>
                {!feedbackGiven[currentArticle.id] && (
                  <>
                    <button
                      className="docs-feedback-btn yes"
                      onClick={() => setFeedbackGiven(f => ({ ...f, [currentArticle.id]: 'yes' }))}
                    >
                      <ThumbsUp size={14} /> Sim
                    </button>
                    <button
                      className="docs-feedback-btn no"
                      onClick={() => setFeedbackGiven(f => ({ ...f, [currentArticle.id]: 'no' }))}
                    >
                      <ThumbsDown size={14} /> Não
                    </button>
                  </>
                )}
              </div>

              {/* Pagination */}
              <div className="docs-pagination">
                {prevArticle ? (
                  <button className="docs-pagination-btn" onClick={() => navigateTo(prevArticle.id)}>
                    <ArrowLeft size={17} style={{ color: '#e53637', flexShrink: 0 }} />
                    <div>
                      <div className="docs-pagination-label">Anterior</div>
                      <div className="docs-pagination-title">{prevArticle.title}</div>
                    </div>
                  </button>
                ) : <div style={{ flex: 1 }} />}

                {nextArticle ? (
                  <button className="docs-pagination-btn next" onClick={() => navigateTo(nextArticle.id)}>
                    <div>
                      <div className="docs-pagination-label">Próximo</div>
                      <div className="docs-pagination-title">{nextArticle.title}</div>
                    </div>
                    <ArrowRight size={17} style={{ color: '#e53637', flexShrink: 0 }} />
                  </button>
                ) : <div style={{ flex: 1 }} />}
              </div>
            </>
          )}
        </main>

        {/* ═══════════════ RIGHT TOC ═══════════════ */}
        {currentArticle && currentArticle.toc.length > 0 && (
          <nav className="docs-right-toc">
            <div className="docs-right-toc-header">
              <Hash size={10} style={{ display: 'inline', marginRight: '4px' }} />
              Nesta página
            </div>
            {currentArticle.toc.map(entry => (
              <button
                key={entry.id}
                className={`docs-toc-link ${activeTocId === entry.id ? 'active' : ''}`}
                onClick={() => {
                  const el = document.getElementById(entry.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setActiveTocId(entry.id);
                }}
              >
                {entry.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </>
  );
};
