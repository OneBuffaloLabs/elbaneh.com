import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Container className="main-content">
          <Row className="shadow-lg mt-3 p-3 bg-body rounded">
            <Col lg={8} className="mx-auto">
              Hello, I&apos;m Andrew Elbaneh, a full-stack software engineer
              hailing from the heart of Buffalo, NY. Since 2014, I&apos;ve been
              immersed in professional development, building upon a lifelong
              passion for coding. My expertise spans the entire software stack,
              driven by a deep curiosity for technology and a love for creating
              innovative solutions. When I&apos;m not coding, you&apos;ll find
              me cheering on the Buffalo Bills, exploring the vibrant culture of
              my hometown, or diving into the latest video games and tech
              advancements. I bring a blend of technical skill and genuine
              enthusiasm to every project, rooted in my love for both technology
              and the spirit of Buffalo.
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
