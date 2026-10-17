import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { FormContainer } from "./components/Form/FormContainer";
import { FormUI } from "./components/Form/FormUI";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          {/* opcional: filtro por categorias */}
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>

        <section className="container my-4">
          <h2>Formulario de contacto</h2>
          <FormContainer />
        </section>

      </main>
      
        <Footer/>
        

        
    </>
  );
}

export default App;
