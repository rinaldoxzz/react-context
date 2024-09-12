import React, { useState, createContext } from 'react';
import ContadorCliques from './ContadorCliques';

export const CliqueContext = createContext([0, () => {}]);
//Valor padrão serve quando não a um provider.

function App() {

  const [cliques, setCliques] = useState(0);

  return (
    <CliqueContext.Provider value={[cliques, setCliques]}>
      <div className="App">
        <ContadorCliques />
      </div>
    </CliqueContext.Provider>

  );
}

export default App;

//Passa como props 'cliques' e 'setCliques para a função em ContadorCliques.js'
