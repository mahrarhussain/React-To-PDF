import PdfGenerator from "./components/PDFGenerator";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <PdfGenerator />
    </div>
  );
}

export default App;
