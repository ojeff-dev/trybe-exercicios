import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;

/* 
Responda:

1. Qual é o nome do componente declarado acima?

Resposta: O nome do componente declarado se chama 'Image'.

2. Chame o componente Image dentro do componente App, de forma que seja mostrada a imagem do gato (cat-2083492_1280) ou o texto: 'Cute cat staring', caso a imagem não consiga ser carregada.

Resposta: OK!

*/
