import { useId } from 'react';
import { Card, Ilustracao, Conteudo, Categoria, Nome, Preco, Status, Botao } from './styles';

const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

/** Componente controlado: o pai fornece o estado visual e a ação. */
export default function CardProduto({ nome, preco, categoria = 'Produto', icone = '📦', adicionado = false, onAlternar }) {
  const tituloId = useId();
  return (
    <Card aria-labelledby={tituloId}>
      <Ilustracao aria-hidden="true">{icone}</Ilustracao>
      <Conteudo>
        <Categoria>{categoria}</Categoria>
        <Nome id={tituloId}>{nome}</Nome>
        <Preco>{moeda.format(preco)}</Preco>
        <Status aria-live="polite">{adicionado ? '✓ Produto selecionado' : 'Disponível para adicionar'}</Status>
        <Botao type="button" adicionado={adicionado} aria-pressed={adicionado} onClick={onAlternar}>
          Adicionar ao carrinho
        </Botao>
      </Conteudo>
    </Card>
  );
}
