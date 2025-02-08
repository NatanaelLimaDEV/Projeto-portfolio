import "./App.css";
import "./media-queries.css";
import "./componentes/dropdown.css";
import Separador from "./componentes/separador";
import {
  AiOutlineCopyright,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { LuFileCode, LuGithub, LuGlobe, LuLinkedin } from "react-icons/lu";
import ilustracao from "./assets/ilustracao-port-linhas.png";
import projetoYF from "./assets/projetos/yf-studio.png";
import projetoBurguer from "./assets/projetos/cardapio-burguer.png";
import projetoMetas from "./assets/projetos/controle-metas.png";
import { Button, DropdownMenu, Theme } from "@radix-ui/themes";

function App() {
  return (
    <>
      <header className="cabecalho">
        <section
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="titulo-cabecalho"
        >
          <p className="bv-cabecalho">Olá! Seja bem-vindo ao meu portfólio!</p>
          <div className="centro-cabecalho">
            <div className="img-cabecalho-mobile">
              <img src={ilustracao} alt="" />
            </div>
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
        <div 
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="img-cabecalho">
          <img src={ilustracao} alt="" />
        </div>
      </header>
      <main className="conteudo">
        <section className="sm-conteudo">
          <div className="titulo-sm-conteudo">
            <Separador />
            <h1>Sobre mim</h1>
          </div>
          <p className="text-conteudo">
            Sou um desenvolvedor full-stack em formação, dedicado à construção
            de aplicações web. Trabalho com JavaScript e TypeScript, utilizando
            React no frontend e Node.js no backend. Estou sempre buscando
            aprimorar minhas habilidades e explorar novas tecnologias.
            Atualmente, estou em busca de uma oportunidade para contribuir com
            meu conhecimento e crescer profissionalmente na área de
            desenvolvimento.
          </p>
        </section>
        <section className="cards-conteudo">
          <div className="titulo-sm-conteudo">
            <Separador />
            <h1>Projetos</h1>
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
                    <Theme accentColor="indigo">
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                          <Button className="dropdown-button" variant="soft">
                            <LuGithub className="icon icon-card" />
                          </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="dropdown-menu">
                          <DropdownMenu.Item className="dropdown-item">
                            <a
                              href="https://github.com/NatanaelLimaDEV/YFStudio"
                              target="_blank"
                            >
                              <LuFileCode />
                              <span>Frontend</span>
                            </a>
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item className="dropdown-item">
                            <a
                              href="https://github.com/NatanaelLimaDEV/agenda-yfs"
                              target="_blank"
                            >
                              <LuFileCode />
                              <span>Backend</span>
                            </a>
                          </DropdownMenu.Item>
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                    </Theme>
                    <a href="https://yf-studio.vercel.app/" target="_blank">
                      <LuGlobe className="icon icon-card" />
                    </a>
                  </div>
                </div>
                <p>
                  Projeto desenvolvido para otimizar a rotina de uma
                  profissional.
                </p>
                <p>
                  Site intuitivo e focado em um único propósito. Ao clicar no
                  botão "Agendar", um formulário é exibido para que o(a) cliente
                  preencha as informações necessárias. Após a confirmação, os
                  dados são enviados para o WhatsApp e armazenados no banco de
                  dados, garantindo que o dia e horário escolhidos não fiquem
                  mais disponíveis.
                </p>
              </div>
              <div className="card-tecnologias">
                <p>JavaScrip</p>
                <p>TypeScrip</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Node.js</p>
              </div>
            </div>
          </div>
          <div className="card">
            <a
              href="https://natanaellimadev.github.io/Cardapio-Burguer/"
              target="_blank"
            >
              <img src={projetoBurguer} alt="Projeto Cardápio Burguer" />
            </a>
            <div className="card-info">
              <div className="card-text-info">
                <div className="titulo-link-card">
                  <h3>Projeto Cardápio Burguer</h3>
                  <div className="link-card">
                    <a
                      href="https://github.com/NatanaelLimaDEV/Cardapio-Burguer"
                      target="_blank"
                    >
                      <LuGithub className="icon icon-card" />
                    </a>
                    <a
                      href="https://natanaellimadev.github.io/Cardapio-Burguer/"
                      target="_blank"
                    >
                      <LuGlobe className="icon icon-card" />
                    </a>
                  </div>
                </div>
                <p>Um projeto que simula um cardápio online.</p>
                <p>
                  Trata-se de um cardápio online com lista de produtos e
                  carrinho de compras, onde o cliente pode adicionar e remover
                  itens, ajustar quantidades, informar o endereço e escolher a
                  forma de pagamento. Ao finalizar o pedido, os dados são
                  enviados diretamente para o WhatsApp. O sistema também exibe
                  informações sobre o estabelecimento e impede pedidos fora do
                  horário de funcionamento.
                </p>
              </div>
              <div className="card-tecnologias">
                <p>JavaScrip</p>
                <p>HTML</p>
                <p>CSS</p>
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
                    <Theme>
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                          <Button className="dropdown-button" variant="soft">
                            <LuGithub className="icon icon-card" />
                          </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="dropdown-menu">
                          <DropdownMenu.Item className="dropdown-item">
                            <a
                              href="https://github.com/NatanaelLimaDEV/Web-controle-metas"
                              target="_blank"
                            >
                              <LuFileCode />
                              <span>Frontend</span>
                            </a>
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item className="dropdown-item">
                            <a
                              href="https://github.com/NatanaelLimaDEV/Metas"
                              target="_blank"
                            >
                              <LuFileCode />
                              <span>Backend</span>
                            </a>
                          </DropdownMenu.Item>
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                    </Theme>
                    <a
                      href="https://controle-metas.vercel.app/"
                      target="_blank"
                    >
                      <LuGlobe className="icon icon-card" />
                    </a>
                  </div>
                </div>
                <p>
                  Projeto desenvolvido para auxiliar no acompanhamento e
                  gerenciamento de metas semanais.
                </p>
                <p>
                  Esta aplicação permite cadastrar e gerenciar metas semanais de
                  forma eficiente. Conta com um formulário para inclusão de
                  metas, uma lista organizada de tarefas pendentes e concluídas,
                  além de uma barra de progresso para acompanhamento do
                  desempenho.
                </p>
              </div>
              <div className="card-tecnologias">
                <p>JavaScrip</p>
                <p>TypeScrip</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Node.js</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="rodape">
        <div className="titulo-sm-rodape">
          <Separador />
          <h1>Contatos</h1>
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
            <a href="https://react.dev/" target="_blank">React</a>
            <span>, </span>
            <a href="https://www.radix-ui.com/" target="_blank">Radix UI</a>
            <span> e </span>
            <a href="https://motion.dev/" target="_blank">Framer motion</a>
            <span>.</span>
          </span>
        </section>
      </footer>
    </>
  );
}

export default App;
