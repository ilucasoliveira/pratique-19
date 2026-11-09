import { styled } from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #fff;
  border: 1px solid #dce1e6;
`;
export const Ilustracao = styled.div`
  display: grid;
  place-items: center;
  height: 180px;
  background: #eef2f3;
  font-size: 4.5rem;
  border-bottom: 1px solid #dce1e6;
`;
export const Conteudo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
  gap: 14px;
`;
export const Categoria = styled.p`
  color: #52626c;
  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .12em;
`;
export const Nome = styled.h2`
  font-size: 1.3rem;
  line-height: 1.35;
`;
export const Preco = styled.p`
  font-size: 1.8rem;
  font-weight: 750;
  margin-bottom: 8px;
`;
export const Status = styled.p`
  color: #46545d;
  font-size: .875rem;
  margin-top: auto;
`;
// A prop continua se chamando adicionado. O filtro impede que ela vire
// um atributo HTML inválido no elemento <button>.
export const Botao = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'adicionado',
})`
  background-color: ${({ adicionado }) => adicionado ? '#198754' : '#6c757d'};
  color: #fff;
  border: 0;
  padding: 14px 12px;
  min-height: 48px;
  width: 100%;
  font: inherit;
  font-weight: 650;
  cursor: pointer;
  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 3px solid #0f1424; outline-offset: 4px; }
`;
