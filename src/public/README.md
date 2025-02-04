O projeto foi escrito em uma máquina rodanto o sistema Ubuntu 18.4

A página foi implementa utilizando HTML5, CSS e JavaScript

Após fazer o gir clone do projeto:

Passo 1, pelo terminar entrar no diretorio do projeto.

Passo 2, entra no diretório /frontend-developer-challenge/src/public

Passo 3, no terminal executar a linha de comando: npx live-server --port=8081

Passo 4, após o navegador abrir, selecionar o arquivo: product_list.html

Agora á página está pronta para ser testada


## Sobre o desafio (Feito)

O desafio consiste no *layout* de uma *landing page* com uma grade de produtos e um formulário de *newsletter*. Seu principal objetivo é transformar este *layout* em uma página funcional.

**Link do layout**: https://xd.adobe.com/spec/aa1c5781-ecac-46c9-7032-b66139998404-dc2d/

**Endpoint da API**: https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1

### Layout (Feito)

Você terá que implementar o *layout* de acordo com esse **[mock](https://xd.adobe.com/spec/aa1c5781-ecac-46c9-7032-b66139998404-dc2d/)**. O *mock* contém a estrutura do layout e todo o estilo da página.

É importante se ater aos detalhes de tamanho e espaçamento entre os elementos da página, construindo o HTML mais semântico possível utilizando-se das tags do HTML5.

### Comportamento: (Feito)

Para preencher a página com as informações dos produtos, você terá que consultar esta **[API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)** de forma paginada, sendo que cada página consultada retornará as informações de **8 produtos** e um **link para a próxima página**.

Assim que obter os dados, você deverá implementar os seguintes pontos:

- Para cada **produto** retornado pela API, um **card de produto** com as respectivas informações deve ser criado na grade de produtos;
- Ao clicar no botão **Ainda mais produtos aqui!** a próxima página da API deve ser consultada, gerando mais **8 produtos** na grade existente, abaixo dos produtos já carregados pela primeira requisição;
- O formulário de *newsletter* com o título **Compartilhe a novidade** deve ter seus campos de *input* validados de acordo com o conteúdo (ex: O campo de email deve conter um email válido);

---

## Instruções

- Faça um **[fork](https://help.github.com/en/articles/fork-a-repo)** deste repositório e crie uma branch com o seu nome (ex: `nome-sobrenome`) que irá conter o código do seu desafio;
- Faça *commits* ao longo do seu desenvolvimento, isso nos ajudará a entender sua linha de raciocínio ;)
- Substitua este **README.md** por outro que contenha as informações de *setup* e a descrição do seu projeto;
- Suba um *live preview* do seu desafio em um dos provedores a seguir, isso nos ajudará a testar sua implementação:
    - **[Now](https://zeit.co/now)**
    - **[Heroku](https://www.heroku.com)**
    - **[Netifly](https://www.netlify.com/)**
    - Qualquer outro semelhante
- Assim que concluir o seu desafio, abra um **[pull request](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork)** para o [repositório do desafio](https://github.com/iurykrieger/frontend-developer-challenge) com suas alterações e com o link do *live preview* na descrição;

---

## Dicas (Valeu pelas dicas :)

> Crie uma estrutura de arquivos organizada para suas implementações (Feito)

> Construa o CSS de forma bem estruturada e em um arquivo separado. (Feito)

> Evite poluir o escopo global do Javascript (Feito)

> Documente suas funções e seja o mais conciso possível ao escrever seu código (Feito)

> Seu README.md deve conter as instruções necessárias para qualquer pessoa fazer seu projeto funcionar (Feito)

> Your code will be better understood in English ;) ( Okay ;] )

