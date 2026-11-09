import { useState } from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import CardProduto from './components/CardProduto';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; }
  body { font-family: Inter, system-ui, sans-serif; color: #17232b; background: #f7f8fa; }
  button { border-radius: 0; }
`;
const Cabecalho = styled.header`
  background: #0f1424; color: #fff; padding: 24px max(24px, calc((100% - 1120px) / 2));
  display: flex; align-items: center; justify-content: space-between; gap: 20px;
  strong { font-size: 1.25rem; letter-spacing: .08em; }
  span { color: #bdc8d6; font-size: .8rem; }
  @media (max-width: 480px) { flex-direction: column; align-items: flex-start; gap: 8px; }
`;
const Main = styled.main`
  max-width: 1168px; margin: auto; padding: 56px 24px;
`;
const Intro = styled.div`
  max-width: 680px; margin-bottom: 32px;
  > span { color: #476e68; font-weight: 700; font-size: .8rem; letter-spacing: .12em; }
  h1 { margin: 12px 0 16px; font-size: clamp(2rem, 5vw, 3.25rem); line-height: 1.1; letter-spacing: -.04em; }
  p { color: #52626c; line-height: 1.7; }
`;
const Grade = styled.section`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 600px) { grid-template-columns: minmax(0, 1fr); }
`;
const Nota = styled.p`
  border-left: 3px solid #6ec5b8; padding: 16px 20px; background: #edf4f2;
  margin-top: 32px; color: #34524d; line-height: 1.6; font-size: .9rem;
`;
const produtos = [
  { id: 1, nome: 'Fone sem fio', preco: 189.9, categoria: 'Áudio', icone: '🎧', adicionado: false },
  { id: 2, nome: 'Teclado mecânico', preco: 249.9, categoria: 'Seu setup', icone: '⌨️', adicionado: true },
  { id: 3, nome: 'Mouse ergonômico', preco: 129.9, categoria: 'Acessórios', icone: '🖱️', adicionado: false },
];
export default function App() {
  // Apenas uma simulação visual, sem checkout, persistência ou carrinho real.
  const [itens, setItens] = useState(produtos);
  function alternar(id) {
    setItens(atuais => atuais.map(item => item.id === id ? { ...item, adicionado: !item.adicionado } : item));
  }
  return <>
    <GlobalStyle />
    <Cabecalho><strong>ESSENCIAL.</strong><span>Uma seleção para o seu dia a dia</span></Cabecalho>
    <Main>
      <Intro><span>CURADORIA / TECNOLOGIA</span><h1>Pequenos detalhes.<br />Um setup melhor.</h1><p>Explore nossa seleção de acessórios e escolha seus favoritos.</p></Intro>
      <Grade aria-label="Produtos"><>{itens.map(item => <CardProduto key={item.id} {...item} onAlternar={() => alternar(item.id)} />)}</></Grade>
      <Nota>Demonstração interativa: clique em um botão para alternar a seleção. Cinza indica disponível; verde indica selecionado. Clique novamente para desfazer.</Nota>
    </Main>
  </>;
}
