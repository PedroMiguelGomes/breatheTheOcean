import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import { Card, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import boneco from '../assets/img/pro.png';
import boneco2 from '../assets/img/thanks fito.png'
import gif from '../assets/img/esquema.gif'
import video1 from '../assets/img/video1.mp4'
import video2 from '../assets/img/video2.mp4'
import video3 from '../assets/img/video3.mp4'
import logo from "../assets/img/Logo_fundotransparente-03.png"

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


  return (
    <>
      <div className="wrapper">
        <div className="parteBranca"><span class="dot2"></span><Image src={logo} className="logoR"></Image></div>
        
        <LandingPageHeader />

        <div className="conteudo section-team text-center">
          <Container>
            <Row>
              <Col md="1"></Col>
              <Col md="10">
                <h3 className="curiusidades">A maioria das pessoas pensa que as florestas são o grande pulmão do planeta. O Breathe the Ocean é um movimento que pretende mostrar a importância do oceano na grande tarefa de regular os níveis de oxigénio na atmosfera e combater as alterações climáticas.</h3>
                <h3 className="pink">Estás curioso? Então vem connosco que explicamos tudo.</h3>
              </Col>
              <Col md="1"></Col>
            </Row>
          </Container>
        </div>

        <div className="rowYellow">
          <Container>
            <Row>
              <Col md="6" sm="6">
                <h2 className="title margemTitulo">Pelo menos metade do oxigénio da Terra vem do oceano.</h2>
              </Col>
              <Col md="6" sm="6">
                <p className="fito">Na verdade, cerca de <span className="pink2">55% do oxigénio</span> existente na atmosfera terrestre tem origem no oceano. A maior parte desta produção é feita por organismos aquáticos microscópicos que têm capacidade de fazer a fotossíntese: o fitoplâncton. <span className="pink2">O fitoplâncton é a “relva” do mar e já faz a fotossíntese</span> muito antes do aparecimento das plantas terrestres, das árvores e das florestas: <span className="pink2">pelo menos há 3,5 bilhões de anos.</span></p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="crazy">
          <Container>
            <Row style={{ 'padding-top': '50px' }}>
              <Col md="4">
                <Image src={boneco} style={{ 'position': 'absolute', 'left': '120px', 'top': '-50px', 'z-index': '1', 'width': '120%', 'height': '150%' }}></Image>
              </Col>
              <Col md="8">
                <div className="square">
                  <Container style={{ 'padding': '30px' }}>
                    <Row>
                      <Col md="1"></Col><Col><h3 style={{ 'font-weight': 'bold' }}>A cianobactéria <i>Prochlorococcus</i> é o mais pequeno organismo conhecido capaz de fazer a fotossíntese.</h3></Col><Col md="1"></Col>
                    </Row>
                    <Row>
                      <h5 style={{ 'text-align': 'left' }}>Apesar de incrivelmente pequena, esta espécie produz 20% do oxigénio de toda a biosfera, uma percentagem mais alta do que o conjunto de todas as florestas tropicais.</h5>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="7"></Col>
              <Col md="5">
                <span class="dot">!</span>
                <div className="rect">
                  <Container style={{ 'padding': '0px' }}>
                    <Row>
                      <Col md="1"></Col><Col><h4 style={{ 'font-weight': 'bold', 'margin-top': '35px' }}>A <i>Prochlorococcus</i> fornece todo o oxigénio para uma em cada cinco respirações que fazemos.</h4></Col><Col md="1"></Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="azulinho">
          <Container>
            <Row>
              <h5 className="title2">25% das emissões de CO2 de origem humana são absorvidas pelo oceano.</h5>
            </Row>
            <Row>
              <Col md="7">
                <p className="textoAzul">
                  Ao mesmo tempo que nos fornece oxigénio, a fotossíntese converte o dióxido de carbono e a luz solar em açúcares que os organismos podem usar como energia. <span className="yellow">Neste processo o fitoplâncton absorve 25% das emissões de dióxido de carbono que emitimos,</span> permitindo controlar o nível de gases de efeito estufa na atmosfera. É, por isso, um grande aliado no combate às alterações climáticas.
                </p>
              </Col>
              <Col md="5">
                <Image src={boneco2} style={{ 'position': 'absolute', 'left': '90px', 'top': '-120px', 'z-index': '1' }}></Image>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="tiktoks">
          <Container>
            <Row>
              <Col>
                <Card className="card">
                  <Card.Body>
                    <ReactPlayer url={video1} width="300px" controls="true" />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card">
                  <Card.Body>
                    <ReactPlayer url={video2} width="300px" controls="true" />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card">
                  <Card.Body>
                    <ReactPlayer url={video3} width="300px" controls="true" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col><h5 className="title4" style={{ 'text-align': 'center' }}>Acompanha-nos nas redes sociais:</h5></Col>
            </Row>
            <Row>
              <Col md="4"></Col>
              <Col>
                <SocialIcon className="icon1" url="https://www.instagram.com/breathe_theocean/" bgColor="white"/>
                <SocialIcon className="icon2" url="https://www.tiktok.com/@breathe.the.ocean?" bgColor="white"/>
              </Col>
            </Row>
            <Row className="arrow">
              <Col><i className="fas fa-chevron-down"></i></Col>
            </Row>
          </Container>
        </div>

        <div className="folego">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title3">Pode o oceano ficar sem fôlego?</h2>
              </Col>
            </Row>
            <Row>
              <Col md="8">
                <p className="textoAzul">Sim, pode. Muitos fatores afectam a "respiração" do oceano. Perturbações em qualquer um dos processos físicos, químicos e biológicos do oceano podem <span className="yellow">resultar em alterações climáticas.</span> Por exemplo, a temperatura do oceano afeta a quantidade de fitoplâncton e, por consequência, a absorção de dióxido de carbono e produção de oxigénio. A resposta está nas correntes térmicas, que são responsáveis pela <span className="yellow">circulação de nutrientes entre as várias camadas do oceano.</span> Há também áreas em que a quantidade de oxigénio no oceano é demasiado baixa para sustentar a vida. Chamam-se <span className="yellow">zonas de hipoxia ou “zonas mortas”.</span> Originam-se quando há um crescimento excessivo, seguido de morte, de certas espécies de algas, normalmente devido à poluição por nutrientes.</p>
              </Col>
              <Col md="4">
                <Image src={gif}></Image>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container style={{ 'padding-bottom': '60px' }}>
            <Row>
              <Col md="2"></Col>
              <Col md="8" className="last">
                <h5 style={{ 'text-align': 'center' }}>Toda a vida na Terra depende do oceano. Podemos contar com ele para a qualidade do ar que respiramos, a regulação do clima mas também como fonte de alimento, energia, entre tantos outros benefícios. Participa no movimento breathe the ocean</h5>
              </Col>
              <Col md="2"></Col>
            </Row>
          </Container>
        </div>

        <div className="relacionado text-center" style={{ 'background-color': '#FC7C5C' }}>
          <Container>
            <h2 className="title" style={{ 'text-align': 'left' }}>Queres saber mais?</h2>
            <Row>
              <Col lg="4" md="6">
                <Card className="card card2">
                  <Button className="botao" href="https://earthobservatory.nasa.gov/global-maps/MY1DMM_CHLORA/MOD17A2_M_PSN" color="link" variant>
                    <Card.Body>
                      <Card.Title className="saberMais" style={{'padding-top': '15px'}}>
                        Podes acompanhar o processo de fotossíntese e estimar a quantidade de oxigénio produzido no oceano através de imagens satélite
                      </Card.Title>
                    </Card.Body>
                  </Button>
                </Card>
              </Col>
              <Col className="text-center" lg="4" md="6">
                <Card className="card card2">
                  <Button className="botao" href="https://ocean.si.edu/ocean-life/plankton/every-breath-you-take-thank-ocean" color="link" variant="primary">
                    <Card.Body>
                      <Card.Title className="saberMais" style={{'padding-top': '40px'}}>Agradece ao Oceano “Every Breath You Take” </Card.Title>
                    </Card.Body>
                  </Button>
                </Card>
              </Col>
              <Col className="text-center" lg="4" md="6">
                <Card className="card card2">
                  <Button className="botao" href="https://ocean-climate.org/en/awareness/the-ocean-a-carbon-sink/" color="link" variant="primary">
                    <Card.Body>
                      <Card.Title className="saberMais" style={{'padding-top': '40px'}}>Tudo sobre as “Zonas Mortas” do Oceano:</Card.Title>
                    </Card.Body>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="text-center" lg="4" md="6">
                <Card className="card card2">
                  <Button className="botao" href="https://ocean-climate.org/en/awareness/the-ocean-a-carbon-sink/" color="link" variant="primary">
                    <Card.Body>
                      <Card.Title className="saberMais" style={{'padding-top': '55px'}}>Um Armazém de Carbono: </Card.Title>
                    </Card.Body>
                  </Button>
                </Card>
              </Col>
              <Col className="text-center" lg="4" md="6">
                <Card className="card card2">
                  <Button className="botao" href="https://earthobservatory.nasa.gov/images/87465/oxygen-factories-in-the-southern-ocean" color="link" variant="primary">
                    <Card.Body>
                      <Card.Title className="saberMais" style={{'padding-top': '55px'}}>Fábricas de Oxigénio:</Card.Title>
                    </Card.Body>
                  </Button>
                </Card>
              </Col>
              <Col className="text-center" lg="4" md="6">
                <Card className="card card2">
                  <Button className="botao" href="https://www.whoi.edu/multimedia/ocean-earth-oxygen-bank/" color="link" variant="primary">
                    <Card.Body>
                      <Card.Title className="saberMais" style={{'padding-top': '40px'}}>Depósitos no “banco” de oxigénio do planeta:</Card.Title>
                    </Card.Body>
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <DefaultFooter />
      </div >
    </>
  );
}

export default LandingPage;
