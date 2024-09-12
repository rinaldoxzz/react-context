import React, {useContext} from 'react';
import { CliqueContext } from './App';


//Recebe as props de App.js
const ContadorCliques = () => {

    const [cliques,setCliques] = useContext(CliqueContext);

    return (
        <div>
             <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
             <br/>
             <label>{cliques} cliques efetuados...</label>
        </div>
    );

};

export default ContadorCliques;

//useContext é um hook q permite passar contextos para componestes filhos.