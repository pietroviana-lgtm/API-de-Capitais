# Tutorial 03 --- Primeiro servidor

**Projeto:** Cadastro de Produtos\
**Versão:** V0001\
**Arquivo:** `03-primeiro-servidor-V0001.md`\
**Tecnologias:** Node.js, TypeScript e Express\
**Editor:** Visual Studio Code (VS Code)\
**Público-alvo:** alunos iniciantes em desenvolvimento back-end

------------------------------------------------------------------------

## 1. Objetivos de aprendizagem

Ao concluir este tutorial, você deverá ser capaz de:

-   explicar, de forma introdutória, o papel do Node.js e do Express;
-   identificar o arquivo de entrada de uma aplicação;
-   criar uma aplicação Express;
-   configurar uma porta para o servidor;
-   iniciar e interromper o servidor pelo terminal;
-   verificar se o servidor está em execução.

## 2. Pré-requisitos

Antes de começar, verifique se você:

-   concluiu o Tutorial 02 --- Preparação do ambiente;
-   possui o Node.js e o npm instalados;
-   possui o projeto `cadastro-produtos` criado;
-   instalou as dependências do projeto, incluindo Express, TypeScript e
    `tsx`;
-   consegue abrir o projeto no VS Code.

Neste tutorial, considere que a pasta do projeto está em:

``` text
Projetos\cadastro-produtos
```

Abra essa pasta no VS Code. Todas as próximas operações serão realizadas
no terminal integrado do editor.

> **Importante:** se o projeto ainda não estiver preparado, volte ao
> Tutorial 02. Não crie outro projeto nem reinstale as dependências sem
> necessidade.

## 3. O que será construído

Vamos criar o primeiro servidor HTTP do projeto.

Ele será capaz de:

1.  iniciar uma aplicação Express;
2.  aguardar conexões na porta `3000`;
3.  informar no terminal quando começar a funcionar.

Neste momento, o servidor ainda não terá rotas. A criação e o estudo das
rotas HTTP serão realizados no Tutorial 04.

## 4. Conceitos necessários

### 4.1 O que é um servidor?

Um servidor é um programa que fica em execução aguardando solicitações
de outros programas, chamados clientes.

Em uma aplicação web, o navegador ou um cliente HTTP pode enviar uma
requisição ao servidor. O servidor recebe essa solicitação e, quando
estiver preparado, devolve uma resposta.

Exemplo simplificado:

-   **Cliente:** navegador ou Postman.
-   **Servidor:** nossa aplicação Node.js com Express.
-   **Requisição:** mensagem enviada pelo cliente.
-   **Resposta:** mensagem devolvida pelo servidor.

### 4.2 Qual é o papel do Node.js?

O Node.js permite executar código JavaScript fora do navegador. Neste
projeto, ele será o ambiente responsável por executar a aplicação
escrita em TypeScript, por meio da ferramenta `tsx` durante o
desenvolvimento.

O TypeScript será utilizado para escrever o código. O Node.js será o
ambiente de execução.

### 4.3 Qual é o papel do Express?

O Express é um framework para aplicações web em Node.js. Ele oferece
recursos para criar servidores HTTP e, posteriormente, organizar rotas,
receber requisições e enviar respostas.

Neste primeiro contato, utilizaremos somente o necessário para iniciar o
servidor.

### 4.4 O que é uma porta?

Uma porta identifica um ponto de comunicação de um computador. Um
servidor pode ficar aguardando conexões em uma porta específica.

Neste projeto, utilizaremos a porta `3000`.

A URL local correspondente será:

``` text
http://localhost:3000
```

`localhost` representa o próprio computador.

### 4.5 O que significa manter o servidor em execução?

Depois de iniciado, o servidor permanece ativo e aguardando conexões. O
terminal fica ocupado pelo processo do servidor.

Para encerrá-lo, utilizaremos `Ctrl + C` no terminal em que ele foi
iniciado.

## 5. Visão geral do funcionamento

``` mermaid
flowchart TD
    A[Iniciar comando no terminal] --> B[Node.js executa server.ts com tsx]
    B --> C[Aplicação Express é criada]
    C --> D[Servidor começa a escutar na porta 3000]
    D --> E[Servidor aguarda conexões]
    E --> F[Cliente tenta acessar localhost:3000]
```

O diagrama apresenta apenas o início do servidor. O tratamento de
caminhos e requisições será estudado no próximo tutorial.

## 6. Passo a passo

### Etapa 1 --- Abrir o terminal integrado

1.  Abra o VS Code com a pasta `cadastro-produtos`.
2.  No menu superior, selecione **Terminal → Novo Terminal**.
3.  Observe o terminal que será aberto na parte inferior do editor.
4.  Confira se o terminal está na pasta raiz do projeto.

Para verificar o diretório atual no CMD, utilize:

``` cmd
cd
```

O resultado deve indicar a pasta `cadastro-produtos`.

Confira também os arquivos existentes:

``` cmd
dir
```

Você deverá encontrar, entre outros arquivos, `package.json` e
`tsconfig.json`.

> O terminal integrado pode utilizar PowerShell como padrão. Os comandos
> `cd` e `dir` também funcionam nele.

### Etapa 2 --- Criar a pasta `src`

O código-fonte da aplicação ficará dentro da pasta `src`.

No terminal integrado, execute:

``` cmd
mkdir src
```

Se a pasta já existir, não é necessário criá-la novamente.

A estrutura ficará assim:

``` text
cadastro-produtos/
├── src/
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Etapa 3 --- Criar o arquivo `server.ts`

No Explorador de Arquivos do VS Code:

1.  Localize a pasta `src`.
2.  Clique com o botão direito sobre ela.
3.  Selecione **Novo Arquivo**.
4.  Digite o nome:

``` text
server.ts
```

O arquivo `server.ts` será o ponto de entrada da aplicação. É nele que
vamos configurar e iniciar o servidor neste primeiro momento.

A estrutura agora será:

``` text
cadastro-produtos/
├── src/
│   └── server.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Etapa 4 --- Importar o Express

Abra `src/server.ts` e escreva:

``` typescript
import express from "express";
```

Essa instrução importa o Express para que possamos utilizar seus
recursos.

Observe que estamos utilizando a sintaxe de módulos `import`, coerente
com a configuração do projeto preparada no Tutorial 02.

### Etapa 5 --- Criar a aplicação Express

Abaixo da importação, escreva:

``` typescript
const app = express();
```

A função `express()` cria uma aplicação Express.

A variável `app` será utilizada para configurar a aplicação. Nos
próximos tutoriais, também será utilizada para trabalhar com as rotas.

### Etapa 6 --- Definir a porta

Abaixo da criação da aplicação, escreva:

``` typescript
const PORT = 3000;
```

Criamos uma constante chamada `PORT` para guardar o número da porta
utilizada pelo servidor.

Utilizar uma constante facilita a identificação e a manutenção desse
valor no código.

### Etapa 7 --- Iniciar o servidor

Abaixo da constante, escreva:

``` typescript
app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
```

O método `listen()` inicia o servidor e faz com que ele aguarde conexões
na porta informada.

O segundo argumento é uma função de callback. Ela será executada quando
o servidor começar a escutar na porta.

O `console.log()` apresenta uma mensagem no terminal para informar que o
servidor foi iniciado.

## 7. Código completo

Ao final das etapas, o arquivo `src/server.ts` deverá conter exatamente:

``` typescript
import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
```

Confira se:

-   o nome do arquivo é `server.ts`;
-   o arquivo está dentro de `src`;
-   a importação utiliza `express`;
-   a porta está definida como `3000`;
-   o método `listen()` está sendo chamado.

## 8. Entendendo o código

Vamos analisar cada parte.

  Código                             Responsabilidade
  ---------------------------------- ---------------------------------------
  `import express from "express";`   Importa o framework Express.
  `const app = express();`           Cria a aplicação Express.
  `const PORT = 3000;`               Define a porta do servidor.
  `app.listen(...)`                  Inicia o servidor e aguarda conexões.
  `console.log(...)`                 Exibe uma mensagem no terminal.

### 8.1 Por que utilizar `const`?

Utilizamos `const` para declarar variáveis cuja referência não será
reatribuída neste código.

-   `app` guarda a aplicação Express.
-   `PORT` guarda o número da porta.

### 8.2 O que é uma callback?

Uma callback é uma função passada como argumento para outra função, para
ser executada em determinado momento.

No nosso exemplo:

``` typescript
() => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
}
```

Essa função é passada para `app.listen()`. Ela será executada quando o
servidor estiver pronto para receber conexões.

### 8.3 O servidor já possui uma rota?

Não.

Até aqui, criamos e iniciamos o servidor, mas ainda não definimos
caminhos para atender às requisições.

Essa separação é intencional. No Tutorial 04, vamos estudar o conceito
de rota e criar nossos primeiros caminhos HTTP.

## 9. Executar o servidor

Com o arquivo salvo, volte ao terminal integrado do VS Code.

Na raiz do projeto `cadastro-produtos`, execute:

``` cmd
npx tsx src/server.ts
```

O `npx` permite executar uma ferramenta instalada nas dependências do
projeto. Neste caso, utilizamos o `tsx` para executar o arquivo
TypeScript.

Se tudo estiver correto, deverá aparecer:

``` text
Servidor executando em http://localhost:3000
```

O terminal permanecerá ocupado. Isso é esperado: o servidor continua
aguardando conexões.

> Não feche o terminal enquanto estiver realizando os testes.

## 10. Como testar

### Teste 1 --- Conferir a mensagem no terminal

Verifique se a mensagem abaixo apareceu:

``` text
Servidor executando em http://localhost:3000
```

Se apareceu, o método `listen()` iniciou o servidor e executou a
callback.

### Teste 2 --- Acessar pelo navegador

1.  Mantenha o servidor em execução.
2.  Abra o navegador.
3.  Digite o endereço:

``` text
http://localhost:3000
```

Como ainda não criamos nenhuma rota, o Express poderá apresentar:

``` text
Cannot GET /
```

Isso é esperado neste tutorial. Essa mensagem indica que o servidor
recebeu a solicitação, mas ainda não existe uma rota configurada para
atender ao caminho `/`.

Não tente corrigir essa mensagem criando uma rota agora. Esse será o
assunto do Tutorial 04.

### Teste 3 --- Encerrar o servidor

1.  Volte ao terminal integrado em que o servidor está executando.
2.  Pressione `Ctrl + C`.
3.  Confirme que o processo foi interrompido.

Se acessar novamente o endereço `http://localhost:3000`, o navegador não
conseguirá estabelecer conexão com o servidor, pois ele foi encerrado.

## 11. Problemas comuns e soluções

### 11.1 Erro: Cannot find module 'express'

**Possível causa:** o Express não foi instalado no projeto ou as
dependências não estão disponíveis.

**Verificação:** na raiz do projeto, execute:

``` cmd
npm list express
```

Se o pacote não estiver instalado, volte ao Tutorial 02 e confira a
instalação das dependências.

### 11.2 Erro: Cannot find package 'tsx'

**Possível causa:** o `tsx` não está instalado nas dependências de
desenvolvimento.

**Verificação:**

``` cmd
npm list tsx
```

Confira a preparação realizada no Tutorial 02 antes de instalar qualquer
pacote novamente.

### 11.3 Erro: Cannot use import statement outside a module

**Possível causa:** divergência entre a sintaxe de módulos utilizada no
código e a configuração do projeto.

**Verificação:**

1.  Abra o `package.json`.
2.  Confira se a propriedade `"type"` está definida como `"module"`.
3.  Abra o `tsconfig.json`.
4.  Confira a configuração `"module": "NodeNext"`.

Essas configurações fazem parte das decisões registradas no Tutorial 02.
Não altere outras propriedades sem identificar a causa do problema.

### 11.4 Erro: Address already in use ou porta ocupada

**Possível causa:** outro processo já está utilizando a porta `3000`.

**Solução inicial:**

1.  Verifique se existe outro terminal com uma execução anterior do
    servidor.
2.  Se existir, volte a esse terminal e pressione `Ctrl + C`.
3.  Tente iniciar novamente.

### 11.5 A mensagem de inicialização não aparece

Confira:

-   se o arquivo foi salvo;
-   se o terminal está na raiz do projeto;
-   se o caminho `src/server.ts` está correto;
-   se as dependências foram instaladas;
-   se apareceu alguma mensagem de erro antes da mensagem esperada.

## 12. Exercícios para os alunos

### Exercício 1 --- Identificação do servidor

Explique, com suas palavras, qual é a função do arquivo `server.ts` no
projeto.

### Exercício 2 --- Alteração da porta

Altere a constante `PORT` para `4000`.

Execute novamente o servidor e confira se a mensagem apresenta:

``` text
http://localhost:4000
```

Acesse esse endereço no navegador. Depois, retorne a porta para `3000`.

### Exercício 3 --- Mensagem de inicialização

Altere a mensagem do `console.log()` para:

``` text
Sistema de Cadastro de Produtos iniciado!
```

Execute novamente e verifique o resultado.

Ao terminar, retorne o código ao padrão apresentado na seção 7.

### Exercício 4 --- Compreensão do fluxo

Explique a sequência de acontecimentos desde a execução do comando
`npx tsx src/server.ts` até a apresentação da mensagem no terminal.

## 13. Questionário de múltipla escolha

Responda às questões sequencialmente. Leia uma questão, escolha uma
alternativa e registre sua resposta antes de avançar para a próxima.

### Questão 1

Qual é a função principal do Node.js neste projeto?

A)  Armazenar os produtos em um banco de dados.\
B)  Permitir executar código JavaScript fora do navegador.\
C)  Criar automaticamente as rotas HTTP.\
D)  Substituir o TypeScript.

### Questão 2

Qual é a função do Express?

A)  Gerenciar os arquivos do projeto.\
B)  Compilar o TypeScript para PDF.\
C)  Oferecer recursos para construir aplicações web em Node.js.\
D)  Substituir o npm.

### Questão 3

O que acontece ao executar `const app = express();`?

A)  O servidor começa a escutar na porta 3000.\
B)  Uma aplicação Express é criada.\
C)  O navegador é aberto.\
D)  Uma conexão com o banco de dados é estabelecida.

### Questão 4

Qual é a finalidade do método `app.listen()`?

A)  Criar um objeto Produto.\
B)  Instalar o Express.\
C)  Iniciar o servidor para aguardar conexões.\
D)  Criar uma pasta no projeto.

### Questão 5

O que representa a constante `PORT` no código?

A)  O nome do servidor.\
B)  O número da porta utilizada pelo servidor.\
C)  O endereço IP do aluno.\
D)  O nome do arquivo principal.

### Questão 6

Qual comando foi utilizado para executar o servidor neste tutorial?

A)  `npm create server`\
B)  `node install express`\
C)  `npx tsx src/server.ts`\
D)  `tsc express`

### Questão 7

Por que o terminal permanece ocupado depois que o servidor é iniciado?

A)  Porque o VS Code travou.\
B)  Porque o servidor continua em execução aguardando conexões.\
C)  Porque o TypeScript está sendo instalado.\
D)  Porque o navegador está aberto.

### Questão 8

Qual é a forma de interromper o servidor pelo terminal integrado?

A)  Pressionar `Ctrl + C`.\
B)  Fechar o arquivo `server.ts`.\
C)  Pressionar `Ctrl + S`.\
D)  Excluir a pasta `src`.

### Questão 9

Ao acessar `http://localhost:3000` neste tutorial, por que pode aparecer
`Cannot GET /`?

A)  Porque o Node.js não está instalado.\
B)  Porque a porta 3000 não existe.\
C)  Porque ainda não foi criada uma rota para o caminho `/`.\
D)  Porque o Express não permite acesso pelo navegador.

### Questão 10

Qual assunto será trabalhado no Tutorial 04?

A)  Instalação do Node.js.\
B)  Criação da classe Produto.\
C)  Implementação do Repository.\
D)  Introdução às rotas HTTP.

## 14. Gabarito --- Uso exclusivo do professor

> **Atenção:** esta seção deve ser removida ou separada antes de
> disponibilizar a versão do questionário aos alunos.

  Questão   Resposta   Justificativa
  --------- ---------- -------------------------------------------------------------
  1         B          Node.js permite executar JavaScript fora do navegador.
  2         C          Express oferece recursos para aplicações web em Node.js.
  3         B          `express()` cria a aplicação Express.
  4         C          `listen()` inicia o servidor para aguardar conexões.
  5         B          `PORT` armazena o número da porta.
  6         C          O comando utiliza `tsx` para executar o arquivo TypeScript.
  7         B          O processo permanece ativo aguardando conexões.
  8         A          `Ctrl + C` interrompe o processo no terminal.
  9         C          Não foi criada uma rota para atender ao caminho `/`.
  10        D          O Tutorial 04 introduzirá as rotas HTTP.

## 15. Critérios de conclusão

O tutorial estará concluído quando o aluno conseguir:

-   [ ] identificar a pasta raiz do projeto no terminal;
-   [ ] criar a pasta `src`;
-   [ ] criar o arquivo `src/server.ts`;
-   [ ] importar e instanciar o Express;
-   [ ] definir a porta `3000`;
-   [ ] iniciar o servidor utilizando `npx tsx src/server.ts`;
-   [ ] identificar a mensagem de inicialização;
-   [ ] acessar o servidor pelo navegador e compreender a mensagem
    `Cannot GET /`;
-   [ ] interromper o servidor utilizando `Ctrl + C`;
-   [ ] explicar a função básica de Node.js, Express, porta e
    `listen()`.

## 16. Resumo e preparação para o próximo tutorial

Neste tutorial, criamos o primeiro servidor do Sistema de Cadastro de
Produtos.

A aplicação agora utiliza o Express e consegue aguardar conexões HTTP na
porta `3000`.

Ainda não criamos rotas, Controllers, Models ou Repository. Essas
responsabilidades serão introduzidas gradualmente.

### Próximo tutorial --- 04: Introdução às rotas HTTP

No próximo tutorial, vamos:

-   compreender o conceito de rota;
-   conhecer os métodos HTTP;
-   criar rotas simples de demonstração;
-   responder a requisições utilizando JSON;
-   compreender parâmetros de rota e códigos de status;
-   testar as rotas criadas.

**Estado esperado do projeto ao final deste tutorial:**

``` text
cadastro-produtos/
├── src/
│   └── server.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

O arquivo `server.ts` deverá iniciar o servidor Express sem implementar
ainda as operações do cadastro de produtos.
