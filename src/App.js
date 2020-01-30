import React from "react";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Container from "./components/container";
import Items from "./components/items/items";
import ItemDetail from "./components/items/itemdetail";
import Footer from "./components/footer/footer";
import CartPage from "./components/cart/cartpage";
import { Route } from "react-router-dom";
import { ApplicationContextProvider } from "./components/cartProvider/cartProvider";

function App() {
  return (
    <Container
      display="df"
      style={{ flexDirection: "column", alignItems: "center" }}
    >
      <ApplicationContextProvider>
        <Route exact path="/" component={Header} />
        <Route exact path="/itemDetail/:id" component={Header} />
        <Route exact path="/" component={Slider} />
        <Container
          wsize="full"
          hsize="full"
          display="df"
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px"
          }}
        >
          <Route exact path="/cartpage" component={CartPage} />
          <Route exact path="/" component={Items} />
          <Route path="/itemDetail/:id" component={ItemDetail} />
        </Container>
      </ApplicationContextProvider>
      <Footer />
    </Container>
  );
}

export default App;
