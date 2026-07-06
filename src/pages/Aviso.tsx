import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export const Aviso: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-option" style={{ padding: '20px 0 15px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/"><i className="fa fa-home"></i> Home</Link>
                <span>Aviso / Comunidade ({currentPage} de 3)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="anime-details spad" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="anime__details__content" style={{ background: '#121230', padding: '40px', borderRadius: '8px' }}>
            <div className="row">
              
              {/* Sidebar Image */}
              <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
                <div
                  className="anime__details__pic set-bg"
                  style={{
                    backgroundImage: `url(${
                      currentPage === 3 ? '/lista/img/Rance.jpg' : '/lista/img/Accelerator.jpeg'
                    })`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    height: '350px',
                    borderRadius: '8px',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                />
              </div>

              {/* Nota / Text Content */}
              <div className="col-lg-9 col-md-8">
                <div className="anime__details__text">
                  <div className="anime__details__title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <AlertCircle size={24} style={{ color: '#e53637' }} />
                    <h3 style={{ color: '#ffffff', fontSize: '26px', fontWeight: 700, margin: 0 }}>
                      Nota Oficial (Parte {currentPage})
                    </h3>
                  </div>

                  {/* Page 1 */}
                  {currentPage === 1 && (
                    <div style={{ color: '#b7b7b7', fontSize: '15px', lineHeight: '26px' }}>
                      <p style={{ fontWeight: 700, color: '#fff', fontSize: '16px' }}>Opa pessoal, Miki aqui.</p>
                      <p>
                        Infelizmente meu primeiro projeto onde tinha em vista continuar com as traduções de DDLC fracassou, por mais que esteja na ativa
                        as coisas já fugiram e muito do controle, as pessoas que deixei a frente do projeto, no meio do caminho tiveram seus imprevistos e traições,
                        mas pelo novo "inicio" deles pressionando uma das responsáveis por ela ter seus problemas e não tá 24 horas presente, quanto ao outro apenas deixar o
                        esgoto ir se espalhando e colocando um terceiro no comando, chutando a principal do projeto e ele assumindo, e transformando o servidor em um lugar esquisito e podre 
                        ao mesmo tempo que queria torna-lo infantil, criava um habitante onde tudo bem mensagens com teor sexual, desde que tivesse marcado como spoiler, como se qualquer um não pudesse
                        clicar e ler, apesar dessas red flags estranhas, apenas deixei de lado após todo ocorrido, até que chegamos no ponto onde o grupinho se junto para espalhar mentiras e imputar crimes 
                        tanto a mim quanto e a o Rance, inacreditavelmente sobre coisas absurdas e pesadas, o próprio ex-dono lá espalhava no privado da equipe onde boa parte foi conivente com a podridão
                        só chegando ao meu conhecimento por um membro da equipe que queria entender a fundo o que aconteceu, apesar que no caminho houveram tentativas de resolver ambos o lado se entenderem
                        foi da boca pra fora e continuaram a propagar mentiras, tantas que criticaram o principal lider deles atualmente, por falar nele, era o segundo no comando, no qual confiei e apenas apoiou tudo
                        que aconteceu, mesmo que o seu grande amigo e escolhido para ajuda-lo, seja um criminosode caráter horrível, o mesmo decidiu deixar seu lado neutro e apoia-lo, até ser pressionado e ter que bani-lo, afinal era bem grave.
                      </p>
                      
                      <div style={{ margin: '30px 0', textAlign: 'center' }}>
                        <img src="/Mods/segredinhos/sequencia.jpg" alt="Treta sequencia" style={{ maxWidth: '100%', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }} />
                      </div>

                      <p>
                        E sobre mais uma coisa em si, já que vale a citação, já pela equipe ser conivente com a situação merda que envolveu nossa equipe e a seria acusação falsa
                        já que o mesmo que era o dono e manda e desmanda no servidor, compartilhava mentiras sérias no privado do demais colegas de equipe, uma delas sendo
                        a tal acusação de pedofilia, que no fim das contas serviu para sua retirada da equipe, pelo menos foi isso que passaram para a gente, lembrando que isso seria após
                        a tentativa de resolver a situação chata das mentiras espalhadas, a primeiro momento tinha tudo se resolvido, porém o dono, pelo seu ego ferido enorme, não ficou feliz com o resultado
                        já que é o mesmo fez questão de me acusar falsamente de algo, da maneira mais idiota que já vi na vida, então para garantir que ninguém iria mais interagir mais com a gente???? Eu sei, é idiota
                        mas não esperava muito de alguém como ele, só deixando claro que até onde sabemos o mesmo foi convidado a se retirar, sim da maneira mais educada do mundo afinal, amizade é passar pano né, Onix.
                      </p>
                      
                      <div style={{ margin: '30px 0', textAlign: 'center' }}>
                        <img src="/Mods/segredinhos/2.png" alt="Provas" style={{ maxWidth: '100%', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }} />
                      </div>

                      <p>
                        O motivo de ter organizado e feito esse daqui é para aproveitar o nossas antigas traduções, infelizmente não são todos, pois queremos distância daquele do antigo tradutor da nossa equipe 
                        tendo isso em vista, jamais usaria conteúdo que não são meus, diferentes de certas pessoas, então aqui será armazenado a traduções da Mirai Translations, que atualmente estamos seguindo o rumo 
                        mais amplo para demais jogos, afinal, variedade é algo que todos queremos e precisamos, jogar apenas um jogo em repetidas fórmulas, só é divertido algumas vezes, por isso quero ter um memorial para o meu projeto 
                        que após esse pequeno fracasso em meses, encerro por enquanto, não tenho a menor vontade de continuar alguns projetos, mesmo que eles estejam quase concluídos, apenas aqueles que já dei minha palavra, então provavelmente venha pra cá 
                        só não criem expectativas, apenas tentaria novamente com o projeto caso algo muito incrível entre os mods surgisse ou algum tradutor queira seguir por esse caminho, darei total apoio
                        então caso queira me procurar, recomendo no discord procura por mikimwk, lá trato melhor os detalhes, porém por enquanto me despeço do meu pequeno projeto, foi bom enquanto durou.
                      </p>
                    </div>
                  )}

                  {/* Page 2 */}
                  {currentPage === 2 && (
                    <div style={{ color: '#b7b7b7', fontSize: '15px', lineHeight: '26px' }}>
                      <p style={{ fontWeight: 700, color: '#fff', fontSize: '16px' }}>Heya, Miki aqui novamente.</p>
                      <div style={{ margin: '20px 0', textAlign: 'center' }}>
                        <img src="/Mods/segredinhos/8.png" alt="Contexto 8" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                      </div>
                      <p>
                        É, infelizmente li aquele pdf mal-feito pelo Barão Luke, vamos para o primeiro ponto, é completamente mentira que a ideia partiu do Onix ou Tosha, os únicos
                        convidados para o projeto idealizado e montando por mim, foram a antiga dona e o Onix, pela confiança que tinha neles, o próprio Tosha que foi convidado do Onix
                        assume que deu um golpe na antiga dona para que fosse passada a coroa do servidor, sobre o ocorrido da antiga dona, acho bem justo, mas não atacamos eles, fui ao servidor saber do ocorrido 
                        quem quiser ler, tá lá, após saber disso, até fiquei meio chateado pela minha amiga, mas apenas conversei com o Onix sobre o ocorrido, após saber da palhaçada de vocês xingando a gente 
                        e por algum motivo querendo upar nossas traduções no servidor de vocês sem mais nem menos, fomos resolver o problema, mas foi tão difícil do grandioso Tosholas aparecer, que ficamos lá esperando e questionando 
                        mas claro, o Luke com embasamento e prints não relacionadas a nós, sabe de tudo, nunca houve menção alguma de raid da nossa parte.
                      </p>

                      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', margin: '30px 0', justifyContent: 'center' }}>
                        <img src="/Mods/segredinhos/6.jpg" alt="Conversa" style={{ maxWidth: '45%', borderRadius: '4px' }} />
                        <img src="/Mods/segredinhos/4.jpg" alt="Conversa 2" style={{ maxWidth: '45%', borderRadius: '4px' }} />
                      </div>

                      <p>
                        E lá vai o Sir Luke sem contexto de novo, pois é, chegou no nosso conhecimento o que mesmo? Há sim, que seu Staff, que nem uma semana tinha na época, tava espalhando murmurinhos da gente 
                        staff esse que permaneceu no cargo firme e forte, mesmo fazendo merda atrás de merda, como intimidar uma pessoa fragilizada no chat de DESABAFOS, mas enfim, quem sou pra tá falando né,
                        sobre o potoe, um dos poucos staffs decentes que passou por lá, é estranho que o servidor de 4 meses tenha tantos problemas assim ou tantos ex-staffs, mas apenas comentou comigo as injustiça sofridas lá
                        inclusive quis entender melhor já que como resposta final deles era banir a gente e ocultar isso, explicamos todo o ocorrido e ele falou o que o dono deles dizia do Rance, atitude que o Luke reprova
                        afinal se te acusam de um crime desses que coloca em risco sua vida, você se cala e espera o pior acontecer, mesmo TODOS cientes, não houve pronunciamento, já que não foi só pro Potoe
                        e Kay sabia disso, então é bem suposto que o Diavologg estivesse falando isso por ai, o que me leva, essas duas prints dele são de membros normais que ao receber essa mensagem comentaram com o Rance 
                        nada suspeito devo dizer, então no fim das contas era mais do que necessário o pronunciamento vindo da Mirai, afinal quem se cala diante dessas acusações?
                      </p>

                      <div style={{ margin: '30px 0', textAlign: 'center' }}>
                        <img src="/Mods/segredinhos/5.jpg" alt="Conversa 3" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                      </div>

                      <p>
                        Dito pelo Supremo absoluto senhor Bobalhão ou Luke como chamam, tentaram diversas vezes resolver como adultos, porém quando se desculparam e atenderam nosso pedido, foi apagado, podem olhar nos anuncios
                        descobriram com o acordo e nosso nome continua sendo jogado na lama até nos dias de hoje, pelos membros de sua própria equipe, tendo isso em vista, apenas espelhei, mas como ele disse, somos insignificantes
                        but até hoje eles tão de olho no nosso querido servidor, afinal sabem de tudo que rola, inclusive respondendo na base do álcool nosso pronunciamento, estou vendo Luke, o quanto vocês não se importam kkkk
                        é o que eu digo por ai, o alcoolismo é um problema enorme da humanidade, só explicando, pois duvido da sua capacidade, só tô zoando, mas sei que bebeu enquanto fazia esse documento isso explica
                        o motivo de parecer feito nas coxas, mas duvido que faria melhor em condições decentes.
                      </p>

                      <div style={{ margin: '30px 0', textAlign: 'center' }}>
                        <img src="/Mods/segredinhos/1.jpg" alt="Conversa 4" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                      </div>

                      <p>
                        Não, nunca mesmo, vocês nunca falaram da gente né, imagina o que falavam no chat da staff, talvez esse compilado te lembre melhor Suprema Deidade Luke, mas te lembrando melhor das coisas 
                        foi no dia seguinte, não no dia do gartic, que por sinal, é sério mesmo que vocês acham que um jogo para ADULTOS, seja um tema bom para crianças? Enfim, nosso banimento foi em base de porra nenhuma
                        conversamos normalmente nesse dia, falamos de diversas coisas, até que o Tosha se irritou e mandou você ir latindo pra gente, apenas questionamos vocês e do nada começaram com um monte de merda
                        então continuamos sua discussão, afinal, nem fazia sentido seu aviso ridículo, teu dono pode espalhar acusações por ai, mas a gente não pode rebater vocês? Tanto que os logs foram apagados, mensagens do saídas apagadas
                        pois configurei para diferenciar saída e banimento/expulsão, se fosse mesmo por a gente ter feito algo, estaria no log de punições, apagaram por a comunidade ter se divertido e não gostaram da nossa popularidade lá 
                        tanto que seu staff ficou espalhando mentiras, não foi? Poxa, quem diria que vocês iriam MENTIR de novo.
                      </p>

                      <div style={{ margin: '30px 0', textAlign: 'center' }}>
                        <img src="/Mods/segredinhos/7.jpg" alt="Conversa 5" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                      </div>

                      <p>
                        Sim, raramente eles erram mesmo, só rolou ontem e depois foi apagado para depois justificarem melhor a opressão deles, simplesmente não se pode fazer nenhuma piada lá 
                        mesmo que seja com tag ou não, vai da avaliação dos grandes adms que não erram, afinal de contas, espalhar mentiras por ai, é supernormal e toda pessoa decente anda por ai
                        praticando, então realmente, nunca erraram, só quase toda vida, não é a primeira e nem vai ser a última punição ridícula ou exagerada por cima de PIADAS, que eu lembre bem 
                        só quem intimidava pessoas por isso era governos ditadores e opressores, mas do que eu sei perante a grande equipe que eu criei e se tornou a maior falha do meu legado na internet.
                      </p>
                    </div>
                  )}

                  {/* Page 3 */}
                  {currentPage === 3 && (
                    <div style={{ color: '#b7b7b7', fontSize: '15px', lineHeight: '26px' }}>
                      <p style={{ fontWeight: 700, color: '#fff', fontSize: '16px' }}>Opa sarve gente, aqui é o Rance.</p>
                      <p>
                        Essa parte aqui é para dar voz ao pessoal do outro servidor que eles citaram no PDF deles, sim um servidor que não tem nada a ver com a treta, 
                        um servidor entre amigos que só queriam jogar, conversar, e se divertir, Luke simplesmente os jogou fogo cruzado, 
                        praticamente mostrando vários e vários prints desses mesmos membros, falando de maneira grossa, desaforada, COM RAZÃO, 
                        afinal eles tinham acabados de serem banidos do servidor, por um motivo que em minha visão, foi besta.
                        e eles estavam desabafando com razão, é correto eles terem xingado, não, não é correto, mas usar um momento em que estavam de cabeça quente, e acabaram desabafando para tentar tacar todo o hate em cima deles, foi sim um golpe baixo.
                      </p>

                      <p>
                        Os dois primeiros prints é ele explicando do PQ fez o servidor a parte, e do pq colocou os APKs no servidor, um servidor onde apenas amigos estão lá, 
                        não é um servidor de tradução, um servidor "Concorrentes do DDTC" apenas um servidor onde apenas amigos próximos estão, e eles não estão envolvidos nessa treta de servidores, 
                        não tinha nem motivo deles estarem sendo citados, ja que, repetindo, é um servidor entre amigos, um servidor feito para eles conversarem, jogarem.
                        Onde é sim, covardia jogar um servidor de amigos no meio do fogo cruzado, eles são alvos faceis ne não Luke?
                        O 3 print é praticamente ele confirmando que sim, quem discordar da staff, pode levar warn, mute e ate ban, mas de acordo com o Luke, eles aceitam as críticas sim, até parece que eu e Miki fomos banidos, pq questionamos as atitudes estranhas deles... não pera.
                      </p>

                      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', margin: '30px 0', justifyContent: 'center' }}>
                        <img src="/Mods/segredinhos/D1.jpg" alt="Discussao" style={{ maxWidth: '45%', borderRadius: '4px' }} />
                        <img src="/Mods/segredinhos/D2.jpg" alt="Discussao 2" style={{ maxWidth: '45%', borderRadius: '4px' }} />
                      </div>

                      <p>
                        Sobre o print onde estou ofendendo os membros do DDTC, não vou mentir, e nem esconder, pois diferente deles, assumo os meus erros, 
                        e sim nesse ponto eu estou errado, eu estava de cabeça quente, e falei demais, 
                        não deveria ter falado daquele jeito, então peço perdão se eu acabei ofendendo pessoas que não tem nada a ver, 
                        mas explicando com mais calma o que eu quis dizer é:
                        Os "baba-ovo" que eu quis dizer, eu estou falando de pessoas que, levam um tapa na cara, um soco no estômago e um chute no saco, e ainda uma cuspida na cara, e ainda por cima falam: 
                        "Nossa muito obrigado, muito obrigado por me bater! vc é incrível" são dessas pessoas que falei, mas obviamente, eles pegaram isso, jogaram pra vcs, para falarem "Olha só, ele ta xingando vcs em"
                        alem de ser uma tentativa de usar um espantalho, é uma forma bem suja, de fugir do argumento, afinal, pra que argumentar, se posso simplesmente jogar uma frase infeliz que ele disse, e falar "Olha ele xingou vcs em".
                      </p>

                      <div style={{ margin: '30px 0', textAlign: 'center' }}>
                        <img src="/Mods/segredinhos/R.png" alt="Zueira" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                      </div>

                      <p>
                        E pra finalizar, só uma dica de parceiro mano, de amigo, antes de cobrar, ou zuar que a gente usa google tradutor, certifique-se de arrumar todos os erros que o google tradutor deixa, ta bom meu anjo 😉 
                        E olha que esse foi só o mod mais recente, eu não olhei os outros mods, até pq tenho mais o que fazer da vida, do que ficar olhando mod por mod, procurando erros de Google tradutor.
                      </p>

                      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', margin: '30px 0', justifyContent: 'center' }}>
                        <img src="/Mods/segredinhos/DD1.png" alt="Erro 1" style={{ maxWidth: '45%', borderRadius: '4px' }} />
                        <img src="/Mods/segredinhos/DD2.png" alt="Erro 2" style={{ maxWidth: '45%', borderRadius: '4px' }} />
                      </div>

                      <p>
                        Enfim, vou finalizar aqui, e só pra deixar claro essa é a <strong>ULTIMA VEZ</strong> que vamos falar disso, mesmo se fizerem um PDF com 69 páginas, caguei, não vou responder, vão falar sozinhos.
                        Já deu essa treta, tô velho demais pra essa porra.
                      </p>
                    </div>
                  )}

                  {/* Original video embedded (rendered as simple link or embedded media player if supported) */}
                  {currentPage === 1 && (
                    <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                      <h5 style={{ color: '#fff', marginBottom: '15px' }}>Vídeo Anexo (Mirai Kisaragi)</h5>
                      <div className="embed-responsive" style={{ position: 'relative', paddingBottom: '42%', height: 0, overflow: 'hidden' }}>
                        <iframe
                          src="https://player.vimeo.com/video/943339831?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '4px' }}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                          title="Mirai_Kisaragi"
                        />
                      </div>
                    </div>
                  )}

                  {currentPage === 2 && (
                    <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                      <h5 style={{ color: '#fff', marginBottom: '15px' }}>Vídeo Anexo (Discussão)</h5>
                      <div className="embed-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                        <iframe
                          src="https://www.youtube.com/embed/yt1VjV4a2Dg?si=vK64jtbMWacZ450n"
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '4px' }}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          title="YouTube video player"
                        />
                      </div>
                    </div>
                  )}

                  {/* Pagination / Page Switching */}
                  <div className="product__pagination" style={{ display: 'flex', gap: '8px', marginTop: '40px', justifyContent: 'center' }}>
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        style={{
                          width: '40px',
                          height: '40px',
                          border: 'none',
                          borderRadius: '4px',
                          background: page === currentPage ? '#e53637' : '#1d1d3d',
                          color: '#fff',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                      >
                        {page}
                      </button>
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
