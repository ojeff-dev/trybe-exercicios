import './App.css';
import Image from './Image';

function App() {
  return (
    <div className="App">
      {/* 🚀 Exercício - criando um componente de imagem */}
      <Image 
        source='./cat-2083492_1280.jpg'
        alternativeText='um gato olhando para o alto'
      />
    </div>
  );
}

export default App;
