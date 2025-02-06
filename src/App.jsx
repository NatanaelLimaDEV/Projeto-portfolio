import { useState } from "react";
import "./App.css";
import Separador from "./componentes/separador";
import {
  AiFillCopy,
  AiFillCopyrightCircle,
  AiFillMail,
  AiOutlineCopyright,
  AiOutlineCopyrightCircle,
  AiOutlineGlobal,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiTwotoneMail,
} from "react-icons/ai";
import { LuGithub, LuGlobe, LuLinkedin } from "react-icons/lu";
import ilustracao from "./assets/ilustracao-port-linhas.png";
import projetoYF from "./assets/projetos/yf-studio.png";
import projetoBurguer from "./assets/projetos/cardapio-burguer.png";
import projetoMetas from "./assets/projetos/controle-metas.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="cabecalho">
        <section className="titulo-cabecalho">
          <p className="bv-cabecalho">Olá! Seja bem-vindo ao meu portfólio!</p>
          <div>
            <h1>Natanael Lima</h1>
            <h3>DESENVOLVEDOR FULL-STACK</h3>
          </div>
          <div className="icones-cabecalho">
            <Separador />
            <a
              href="https://www.linkedin.com/in/natanael-lima-a37353318/"
              target="_blank"
            >
              <AiOutlineLinkedin className="icon" />
            </a>
            <a href="https://github.com/NatanaelLimaDEV" target="_blank">
              <LuGithub className="icon" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5588997458919"
              target="_blank"
            >
              <AiOutlineWhatsApp className="icon" />
            </a>
            <Separador />
          </div>
        </section>
        <div className="img-cabecalho">
          <img src={ilustracao} alt="" />
        </div>
      </header>
      <main className="conteudo">
        <section className="sm-conteudo">
          <div className="titulo-sm-conteudo">
            <Separador />
            <h1>Sobre mim</h1>
            <Separador />
          </div>
          <p className="text-conteudo">
            Sou um desenvolvedor full-stack com 3 anos de experiência
            profissional na construção de aplicações web. Tenho experiência em
            JavaScript e TypeScript, Vue.js, React e Node. Experiência também em
            Python e Java. Atualmente trabalho na Compass.UOL.
          </p>
          <Separador />
        </section>
        <section className="cards-conteudo">
          <div className="titulo-sm-conteudo">
            <Separador />
            <h1>Projetos</h1>
            <Separador />
          </div>
          <div className="card">
            <a href="https://yf-studio.vercel.app/" target="_blank">
              <img src={projetoYF} alt="Projeto YF Studio" />
            </a>
            <div className="card-info">
              <div className="card-text-info">
                <div className="titulo-link-card">
                  <h3>Projeto YF Studio</h3>
                  <div className="link-card">
                    <a href="https://github.com/NatanaelLimaDEV/YFStudio" target="_blank">
                      <LuGithub className="icon icon-card" />
                    </a>
                    <a href="https://yf-studio.vercel.app/" target="_blank">
                      <LuGlobe className="icon icon-card" />
                    </a>
                  </div>
                </div>
                <p>
                  Projeto desenvolvido para facilitar o dia-a-dia de uma
                  profissional, que não possuia muito tempo para ficar
                  conferindo agendas.
                </p>
                <p>
                  Site bem intuitivo, voltado para um unico fim. Ao clicar no
                  botão agendar, um formulário é exibido na tela, onde o(a)
                  cliente adicionará as informações necessária. Após confirmar
                  será redirecionado para o WhatsApp com todas as informações,
                  além disso os dados são armazenados no banco de dados, assim o
                  dia e horário agendados, não ficarão mais disponiveis.
                </p>
              </div>
              <div className="card-tecnologias">
                <p>JavaScrip</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Node Js</p>
              </div>
            </div>
          </div>
          <div className="card">
            <a href="https://natanaellimadev.github.io/Cardapio-Burguer/" target="_blank">
              <img src={projetoBurguer} alt="Projeto Cardápio Burguer" />
            </a>
            <div className="card-info">
              <div className="card-text-info">
                <div className="titulo-link-card">
                  <h3>Projeto Cardápio Burguer</h3>
                  <div className="link-card">
                    <a href="https://github.com/NatanaelLimaDEV/Cardapio-Burguer" target="_blank">
                      <LuGithub className="icon icon-card" />
                    </a>
                    <a href="https://natanaellimadev.github.io/Cardapio-Burguer/" target="_blank">
                      <LuGlobe className="icon icon-card" />
                    </a>
                  </div>
                </div>
                <p>
                  Projeto desenvolvido para facilitar o dia-a-dia de uma
                  profissional, que não possuia muito tempo para ficar
                  conferindo agendas.
                </p>
                <p>
                  Site bem intuitivo, voltado para um unico fim. Ao clicar no
                  botão agendar, um formulário é exibido na tela, onde o(a)
                  cliente adicionará as informações necessária. Após confirmar
                  será redirecionado para o WhatsApp com todas as informações,
                  além disso os dados são armazenados no banco de dados, assim o
                  dia e horário agendados, não ficarão mais disponiveis.
                </p>
              </div>
              <div className="card-tecnologias">
                <p>JavaScrip</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Node Js</p>
              </div>
            </div>
          </div>
          <div className="card">
            <a href="https://controle-metas.vercel.app/" target="_blank">
              <img src={projetoMetas} alt="Projeto Controle de Metas" />
            </a>
            <div className="card-info">
              <div className="card-text-info">
                <div className="titulo-link-card">
                  <h3>Projeto Controle de Metas</h3>
                  <div className="link-card">
                    <a href="">
                      <LuGithub className="icon icon-card" />
                    </a>
                    <a href="https://controle-metas.vercel.app/" target="_blank">
                      <LuGlobe className="icon icon-card" />
                    </a>
                  </div>
                </div>
                <p>
                  Projeto desenvolvido para facilitar o dia-a-dia de uma
                  profissional, que não possuia muito tempo para ficar
                  conferindo agendas.
                </p>
                <p>
                  Site bem intuitivo, voltado para um unico fim. Ao clicar no
                  botão agendar, um formulário é exibido na tela, onde o(a)
                  cliente adicionará as informações necessária. Após confirmar
                  será redirecionado para o WhatsApp com todas as informações,
                  além disso os dados são armazenados no banco de dados, assim o
                  dia e horário agendados, não ficarão mais disponiveis.
                </p>
              </div>
              <div className="card-tecnologias">
                <p>JavaScrip</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Node Js</p>
              </div>
            </div>
          </div>
          <Separador />
        </section>
      </main>
      <footer className="rodape">
        <div className="titulo-sm-rodape">
          <Separador />
          <h1>Contatos</h1>
          <Separador />
        </div>
        <section className="contatos">
          <div className="card-contatos">
            <a href="mailto:natanaellimaofc@gmail.com" target="_blank">
              <div className="link-icon">
                <AiOutlineMail className="icon-contato" />
              </div>
            </a>
            <a href="mailto:natanaellimaofc@gmail.com" target="_blank">
              <p className="titulo-contato">E-mail</p>
            </a>
            <a href="mailto:natanaellimaofc@gmail.com" target="_blank">
              <p className="sec-contato">natanaellimaofc@gmail.com</p>
            </a>
          </div>
          <div className="card-contatos">
            <a
              href="https://api.whatsapp.com/send?phone=5588997458919"
              target="_blank"
            >
              <div className="link-icon">
                <AiOutlineWhatsApp className="icon-contato" />
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5588997458919"
              target="_blank"
            >
              <p className="titulo-contato">WhatsApp</p>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5588997458919"
              target="_blank"
            >
              <p className="sec-contato">(88) 99745-8919</p>
            </a>
          </div>
          <div className="card-contatos">
            <a
              href="https://www.linkedin.com/in/natanael-lima-a37353318/"
              target="_blank"
            >
              <div className="link-icon">
                <LuLinkedin className="icon-contato" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/natanael-lima-a37353318/"
              target="_blank"
            >
              <p className="titulo-contato">LinkedIn</p>
            </a>
            <a
              href="https://www.linkedin.com/in/natanael-lima-a37353318/"
              target="_blank"
            >
              <p className="sec-contato">@natanaellima</p>
            </a>
          </div>
          <div className="card-contatos">
            <a href="https://github.com/NatanaelLimaDEV" target="_blank">
              <div className="link-icon">
                <LuGithub className="icon-contato" />
              </div>
            </a>
            <a href="https://github.com/NatanaelLimaDEV" target="_blank">
              <p className="titulo-contato">Github</p>
            </a>
            <a href="https://github.com/NatanaelLimaDEV" target="_blank">
              <p className="sec-contato">@natanaellima</p>
            </a>
          </div>
        </section>
        <section className="info-rodape">
          <span>
            <AiOutlineCopyright /> 2025 - Natanael Lima
          </span>
          <span>
            <span>Feito com </span>
            <a href="https://react.dev/">React</a>
            <span> e </span>
            <a href="https://motion.dev/">Framer motion</a>
            <span>.</span>
          </span>
        </section>
      </footer>
    </>
  );
}

export default App;
