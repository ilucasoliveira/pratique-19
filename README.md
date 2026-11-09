# CardProduto — React + Styled Components

Exercício de CSS-in-JS com Vite, React e Styled Components. Interface responsiva com bordas retas, três produtos estáticos e um componente reutilizável.

## Executar

Instale Node.js 22.12 ou superior. Dentro desta pasta:

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Requisitos atendidos

- `CardProduto` recebe nome, preço e a prop booleana `adicionado`.
- Botão com texto “Adicionar ao carrinho”.
- Toda a estilização usa template literals de Styled Components; não há arquivo CSS nem estilos inline.
- `adicionado={true}`: fundo `#198754`.
- `adicionado={false}`: fundo `#6c757d`.
- Grade com três, duas ou uma coluna conforme a largura.
- Foco de teclado visível, estado `aria-pressed` e status textual.
- Estado inicial: primeiro e terceiro botões cinza; segundo verde.

## Organização

- `src/components/CardProduto/index.jsx`: estrutura e props do componente.
- `src/components/CardProduto/styles.js`: todos os estilos do card e botão.
- `src/App.jsx`: dados estáticos, estado de demonstração e layout da página.
- `src/main.jsx`: ponto de entrada React.

## Estilo dinâmico

```jsx
export const Botao = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'adicionado',
})`
  background-color: ${({ adicionado }) => adicionado ? '#198754' : '#6c757d'};
`;
```

A prop `adicionado` chega ao botão estilizado e controla a cor. `shouldForwardProp` evita enviá-la ao HTML como um atributo inválido. Referência: https://styled-components.com/docs/api#shouldforwardprop

O componente é controlado: o estado fica em `App` e a ação é recebida via `onAlternar`. O clique alterna apenas o estado visual; não há carrinho real, checkout ou armazenamento. O texto do botão permanece igual ao exigido pelo enunciado; o status ao lado informa a seleção.

Exemplo de uso dentro de um componente com estado:

```jsx
const [adicionado, setAdicionado] = useState(false);
<CardProduto
  nome="Fone sem fio"
  preco={189.9}
  adicionado={adicionado}
  onAlternar={() => setAdicionado(valor => !valor)}
/>
```

## Publicar no GitHub

1. No GitHub, crie um repositório chamado `card-produto-styled-components` e selecione **Public**. Deixe desmarcada a criação de README, licença e .gitignore: os arquivos locais serão enviados.
2. Abra o terminal dentro desta pasta extraída e execute:

```bash
git init
git add .
git commit -m "Implementa CardProduto com Styled Components"
git branch -M main
git remote add origin https://github.com/ilucasoliveira/card-produto-styled-components.git
git push -u origin main
```

Se `origin` já existir, use este comando no lugar de `git remote add`:

```bash
git remote set-url origin https://github.com/ilucasoliveira/card-produto-styled-components.git
```

Se usar outra conta, substitua `ilucasoliveira` pelo seu usuário. O GitHub poderá solicitar autenticação. Envie o link do repositório público na plataforma do curso após o push.

## Conferência manual

1. Abra a página: confirme os dois estados iniciais.
2. Clique em cada botão: somente seu card deve alternar entre cinza e verde.
3. Clique novamente: o estado anterior deve ser restaurado.
4. Navegue com Tab e ative com Enter ou Espaço.
5. Reduza a janela a 375 px: os cards devem aparecer em uma coluna sem rolagem horizontal.

O ZIP contém o código-fonte e o lockfile; `node_modules` e `dist` são gerados localmente e não fazem parte da entrega.
