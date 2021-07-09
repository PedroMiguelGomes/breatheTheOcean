/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Evento{" "}
            <a
              href=""
              target="_blank"
            >
              EMERGENCE@UPorto
            </a>
            . Grupo{" "}
            <a
              href=""
              target="_blank"
            >
              Bolha
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
