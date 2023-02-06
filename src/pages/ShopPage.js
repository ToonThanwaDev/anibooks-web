import Card from "../components/Card";
import CategorySearchbar from "../components/CategorySearchbar";
import Container from "../layouts/Container";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function ShopPage() {
  return (
    <>
      <Header />
      <Container>
        <CategorySearchbar />
        <hr className="border-white mt-5"></hr>
      </Container>
      <Container>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 py-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
