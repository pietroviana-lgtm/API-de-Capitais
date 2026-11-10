# Tutorial 02 — Preparação do ambiente

**Versão:** V0006  
**Projeto:** Sistema de Cadastro de Produtos  
**Editor:** Visual Studio Code (VS Code)  
**Terminal:** terminal integrado do VS Code; o PowerShell pode permanecer como padrão  
**Tecnologias:** TypeScript, Node.js, Express e npm  
**Público-alvo:** alunos iniciantes em desenvolvimento back-end

---

## 1. Objetivos de aprendizagem

Ao concluir este tutorial, você deverá ser capaz de:

- verificar se o Node.js e o npm estão instalados;
- abrir uma pasta de projeto no VS Code;
- inicializar um projeto com npm;
- instalar as dependências necessárias;
- configurar o TypeScript;
- configurar scripts para executar e compilar o projeto;
- explicar a finalidade dos principais arquivos de configuração.

Neste tutorial, vamos preparar o ambiente. **Ainda não vamos criar rotas, o Model `Produto`, o Repository, os Controllers ou as operações CRUD.**

## 2. Pré-requisitos

Você precisará de:

- Windows;
- Visual Studio Code instalado;
- Node.js instalado;
- conexão com a internet para baixar os pacotes.

Não é necessário instalar o TypeScript globalmente. Vamos instalá-lo como uma dependência de desenvolvimento do projeto.

## 3. Criar a pasta do projeto pelo Explorador de Arquivos e abrir o CMD

Antes de iniciar este tutorial, o professor ou o aluno já deverá ter uma pasta chamada `Projetos` no computador. Essa será a pasta usada para guardar os projetos de programação.

Nesta etapa, vamos criar a pasta do projeto **dentro da pasta `Projetos`**, usando o Explorador de Arquivos do Windows.

1. Abra o **Explorador de Arquivos**.
2. Entre na pasta `Projetos` que já existe no seu computador.
3. Clique na barra de endereço, na parte superior da janela, onde aparece o caminho da pasta.
4. Digite `cmd`, como mostrado na imagem de referência.
5. Pressione **Enter**.

O Prompt de Comando será aberto já apontando para a pasta `Projetos`.

Agora digite:

```bat
mkdir cadastro-produtos
cd cadastro-produtos
code .
```

O que cada comando faz:

- `mkdir cadastro-produtos`: cria a pasta do projeto dentro de `Projetos`.
- `cd cadastro-produtos`: entra na pasta recém-criada.
- `code .`: abre o VS Code na pasta do projeto. Esse comando depende de o comando `code` estar disponível no terminal. Se não funcionar, abra o VS Code pelo menu Iniciar e use **Arquivo → Abrir Pasta...**.

![cmd no terminal](./img/02-tela-troca-cmd.png)


A partir deste momento, execute todos os comandos restantes deste tutorial no **terminal integrado do VS Code**. O terminal pode usar PowerShell como padrão; não é necessário trocá-lo. Sempre que possível, os comandos de navegação continuarão sendo simples e compatíveis com CMD e PowerShell.

Para abrir o **terminal integrado do VS Code** :

1. Selecione o menu **Terminal**
2. Selecione **Novo Terminal**

![cmd no terminal](./img/02-tela-terminal.png)

**Observação:** dependendo do tamanho da janela do VS Code, o menu **Terminal** pode estar dentro do menu de três pontos (`...`). Clique nos três pontos e selecione **Terminal → Novo Terminal**.

**Observação:** se o VS Code perguntar se você confia nos arquivos da pasta que acabou de criar, confirme se você reconhece a pasta e então selecione **Confiar**.

## 4. O que vamos construir?

Ao final, a pasta do projeto terá uma estrutura semelhante a esta:

```text
cadastro-produtos/
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

O diretório `node_modules` será criado pelo npm e conterá os pacotes instalados. Não o edite manualmente.

A pasta `src/` e o arquivo `server.ts` serão criados no Tutorial 03.

## 5. Conceitos necessários

### 5.1 Node.js

O Node.js permite executar JavaScript fora do navegador. Neste projeto, será o ambiente de execução do servidor back-end.

### 5.2 npm

O npm é o gerenciador de pacotes normalmente instalado junto com o Node.js. Ele permite instalar bibliotecas e registrar as dependências do projeto.

### 5.3 TypeScript

TypeScript acrescenta recursos de tipagem ao JavaScript. Neste projeto, vamos escrever o código em TypeScript desde o início.

### 5.4 Express

Express é uma biblioteca para construir aplicações web e servidores HTTP com Node.js. Vamos instalá-la agora e configurá-la no Tutorial 03.

### 5.5 Dependências de produção e de desenvolvimento

- **Dependência de produção:** necessária para a aplicação funcionar, como o Express.
- **Dependência de desenvolvimento:** auxilia na escrita, verificação ou execução do código durante o desenvolvimento, como TypeScript e `tsx`.

## 6. Passo a passo

### Etapa 1 — Verificar o Node.js

No terminal integrado do VS Code, execute:

```bat
node --version
```

O comando deverá mostrar um número de versão, por exemplo:

```text
v22.x.x
```

O número pode ser diferente no seu computador. Use uma versão LTS do Node.js compatível com as ferramentas do projeto.

Se aparecer uma mensagem informando que `node` não é reconhecido, o Node.js pode não estar instalado ou não estar configurado na variável de ambiente `PATH`.

### Etapa 2 — Verificar o npm

Execute:

```bat
npm --version
```

O comando deverá mostrar a versão do npm.

Se o Node.js funcionar, mas o npm não, verifique a instalação do Node.js e abra um novo terminal no VS Code.


### Etapa 3 — Inicializar o projeto npm

Confirme que o terminal está na pasta `cadastro-produtos` e execute:

```bat
npm init -y
```

Esse comando cria o arquivo `package.json` com configurações iniciais. O parâmetro `-y` aceita os valores padrão.

O arquivo `package.json` deverá ter sido criado.

Exemplo de conteudo

```json
{
  "name": "cadastro-produtos",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "doc": "docs"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

### Etapa 4 — Instalar o Express

Execute:

```bat
npm install express
```

O npm instala o Express e registra a dependência no `package.json`. Também cria ou atualiza `package-lock.json`, que registra a árvore de dependências instalada.

Instalamos o Express agora porque ele faz parte das tecnologias definidas para o projeto. Vamos criar o servidor no Tutorial 03.

Verifique no Explorer do VS Code:

- A pasta `node_modules` foi criada e contém várias pastas, incluindo `express`.
- A propriedade `dependencies` do `package.json` contém `express`.

O número da versão pode ser diferente do exemplo; não altere a versão manualmente.

Trecho ilustrativo do `package.json`:

```json
"dependencies": {
  "express": "versão instalada pelo npm"
}
```

No arquivo real, o valor da versão será um número de versão válido, e não o texto ilustrativo acima. Preserve o valor gerado pelo npm.

### Etapa 5 — Instalar as ferramentas de desenvolvimento

Execute:

```bat
npm install --save-dev typescript tsx @types/node @types/express
```

Finalidade dos pacotes:

| Pacote | Finalidade |
|---|---|
| `typescript` | Fornece o compilador e as ferramentas do TypeScript. |
| `tsx` | Permite executar arquivos TypeScript durante o desenvolvimento. |
| `@types/node` | Fornece definições de tipos para APIs do Node.js. |
| `@types/express` | Fornece definições de tipos para o Express. |

O parâmetro `--save-dev` registra os pacotes em `devDependencies`.

Verifique no Explorer do VS Code:

- Dentro de `node_modules`, há pastas como `typescript` e `tsx`.
- O `package.json` contém `typescript`, `tsx`, `@types/node` e `@types/express` em `devDependencies`.

Os nomes e as versões exibidos no seu arquivo podem ser diferentes dos exemplos.

Trecho ilustrativo do `package.json`:

```json
"devDependencies": {
  "@types/express": "versão instalada pelo npm",
  "@types/node": "versão instalada pelo npm",
  "tsx": "versão instalada pelo npm",
  "typescript": "versão instalada pelo npm"
}
```

No arquivo real, cada valor será um número de versão válido gerado pelo npm. Preserve esses valores; não copie literalmente o texto `versão instalada pelo npm`.


### Etapa 6 — Criar a configuração do TypeScript

Execute:

```bat
npx tsc --init
```

O `npx` permite executar uma ferramenta disponibilizada pelos pacotes do projeto. Aqui, executa o compilador TypeScript instalado localmente.

O comando cria o arquivo `tsconfig.json`, que configura como o TypeScript analisa e compila os arquivos.

No Explorer do VS Code, abra `tsconfig.json` e substitua todo o conteúdo pelo seguinte:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

Salve com **Ctrl+S**.

Principais opções:

- `target`: define a versão de JavaScript de destino.
- `module`: configura o sistema de módulos.
- `moduleResolution`: define como os módulos importados são localizados.
- `rootDir`: indica a pasta dos arquivos TypeScript da aplicação.
- `outDir`: indica onde serão colocados os arquivos JavaScript compilados.
- `strict`: ativa verificações rigorosas de tipos.
- `esModuleInterop`: facilita a interoperabilidade com pacotes que usam formatos de módulos diferentes.
- `skipLibCheck`: evita verificar internamente os arquivos de declaração de tipos das dependências.
- `include`: indica os arquivos TypeScript que serão incluídos.
- `exclude`: exclui diretórios da busca de arquivos de entrada.

As pastas `src` e `dist` ainda não precisam existir. Vamos criar `src` no Tutorial 03; `dist` será o destino dos arquivos compilados.

### Etapa 7 — Configurar módulos ES no `package.json`

No Explorer do VS Code, abra `package.json`.

- procure a propriedade `"type"`, que neste momento deverá estar como `"commonjs"`;
- altere somente o valor `commonjs` para `module`, deixando a linha assim: `"type": "module"`;
- salve o arquivo com **Ctrl+S**.

Exemplo

package.json

```json
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "express": "^5.3.0"
  },
  ```

A propriedade `"type": "module"` informa ao Node.js que os arquivos `.js` desse projeto devem ser interpretados como módulos ES, permitindo o uso de `import` e `export`.

### Etapa 8 — Configurar os scripts

Ainda em `package.json`:
- localize a propriedade `"scripts"`. 
- Edite a propriedade existente para ficar como no exemplo

```json
"scripts": {
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```
***obs: Não se esqueça da virgula na linha dev***

Não crie uma segunda propriedade `"scripts"`. Preserve as demais propriedades do arquivo e verifique se as vírgulas do JSON estão corretas.

Os scripts serão usados assim:

- `npm run dev`: executará `src/server.ts` e observará alterações durante o desenvolvimento.
- `npm run build`: compilará os arquivos TypeScript incluídos na configuração.
- `npm start`: executará o arquivo compilado `dist/server.js`.

**Ainda não execute `npm run dev` nem `npm start`**, porque o arquivo `src/server.ts` será criado no Tutorial 03.

### Etapa 9 — Conferir a instalação

Execute:

```bat
npm ls --depth=0
```

O comando lista as dependências de primeiro nível do projeto.

Confira também a versão do TypeScript:

```bat
npx tsc --version
```

Neste ponto, a preparação do ambiente está concluída. Como ainda não criamos arquivos TypeScript na pasta `src`, não é necessário exigir que a compilação do projeto seja bem-sucedida nesta etapa. Vamos validar a compilação quando houver código no Tutorial 03.

## 7. Arquivos criados ou modificados

| Arquivo ou pasta | Finalidade |
|---|---|
| `package.json` | Registra informações, scripts e dependências do projeto. |
| `package-lock.json` | Registra versões resolvidas e a árvore de dependências. |
| `node_modules/` | Armazena os pacotes instalados pelo npm. |
| `tsconfig.json` | Configura a análise e a compilação do TypeScript. |

Não crie manualmente `package-lock.json` nem `node_modules`: o npm administra esses itens.

## 8. Como testar o resultado

Confira cada item:

1. `node --version` mostra uma versão do Node.js.
2. `npm --version` mostra uma versão do npm.
3. `npm ls --depth=0` lista as dependências instaladas.
4. `npx tsc --version` mostra a versão do TypeScript.
5. `package.json` contém Express, as ferramentas de desenvolvimento, `"type": "module"` e os scripts planejados.
6. `tsconfig.json` contém as opções de configuração apresentadas.
7. A pasta `cadastro-produtos` está aberta no VS Code.

## 9. Problemas comuns e soluções

### `node` ou `npm` não é reconhecido

- Confirme se o Node.js foi instalado.
- Feche e abra novamente o VS Code.
- Verifique se o diretório de instalação do Node.js está na variável de ambiente `PATH`.
- Execute novamente os comandos de versão.

### `npm install` apresenta erro de rede

- Confira a conexão com a internet.
- Em um laboratório, verifique se a rede ou o proxy da instituição bloqueia o acesso ao registro do npm.
- Leia a mensagem de erro antes de repetir a instalação.

### Erro de sintaxe no `package.json`

O arquivo precisa ser JSON válido. Confira se:

- cada chave e cada texto estão entre aspas duplas;
- não há vírgula sobrando depois do último item de um objeto;
- existe apenas uma propriedade `"scripts"`;
- as propriedades `"dependencies"` e `"devDependencies"` não foram apagadas.

### `npx tsc --init` diz que o comando não existe

Confira se a instalação das ferramentas terminou sem erros. Execute novamente:

```bat
npm install --save-dev typescript tsx @types/node @types/express
```

Se `tsconfig.json` já existir, edite o arquivo em vez de tentar recriá-lo.

### `npm run dev` informa que não encontra `src/server.ts`

Esse arquivo será criado no Tutorial 03. A mensagem é esperada se você tentar executar o script antes de concluir o próximo tutorial.

### O comando `mkdir` informa que a pasta já existe

A pasta pode ter sido criada anteriormente. Não é necessário criá-la de novo. Entre nela com:

```bat
cd %USERPROFILE%\Documents\cadastro-produtos
```

## 10. Exercícios para os alunos

1. Explique, com suas palavras, a diferença entre Node.js e npm.
2. Qual é a finalidade do arquivo `package.json`?
3. Qual é a diferença entre `dependencies` e `devDependencies`?
4. Para que serve o arquivo `tsconfig.json`?
5. O que o comando `npx tsc --init` faz?
6. Qual é a função do pacote `tsx`?
7. Por que não devemos editar manualmente os arquivos dentro de `node_modules`?
8. Por que ainda não devemos executar `npm run dev`?
9. Qual é a finalidade da propriedade `"type": "module"`?
10. Qual é a diferença entre `npm run build` e `npm start`?

## 11. Critérios de conclusão

- [ ] Node.js e npm respondem aos comandos de versão.
- [ ] A pasta `Projetos` já existia antes do tutorial.
- [ ] A pasta `cadastro-produtos` foi criada pelo CMD aberto na barra de endereço do Explorador de Arquivos.
- [ ] A pasta do projeto foi aberta no VS Code.
- [ ] Os comandos seguintes foram executados no terminal integrado do VS Code.
- [ ] O projeto foi inicializado com `npm init -y`.
- [ ] O Express foi instalado.
- [ ] As ferramentas de desenvolvimento foram instaladas.
- [ ] O arquivo `tsconfig.json` foi configurado.
- [ ] O `package.json` contém `"type": "module"` e os scripts planejados.
- [ ] Você consegue explicar a finalidade dos principais arquivos.

## 12. Questionário de múltipla escolha

Responda às questões sem consultar o gabarito. O professor pode apresentar uma questão por vez e aguardar as respostas antes de avançar.

### Questão 1 — Node.js

Qual é a função do Node.js neste projeto?

A) Criar automaticamente o banco de dados dos produtos.  
B) Permitir executar JavaScript fora do navegador.  
C) Substituir o npm na instalação de pacotes.  
D) Criar automaticamente todas as rotas HTTP.

### Questão 2 — npm

Para que usamos o comando `npm init -y`?

A) Para iniciar o servidor Express.  
B) Para compilar todos os arquivos TypeScript.  
C) Para criar um `package.json` inicial usando respostas padrão.  
D) Para instalar todas as bibliotecas disponíveis no npm.

### Questão 3 — Instalação do Express

Qual comando instala o Express como dependência da aplicação?

A) `npm install express`  
B) `npx tsc --init`  
C) `node --version`  
D) `npm run build`

### Questão 4 — Dependências de desenvolvimento

O que significa usar `--save-dev` ao instalar pacotes com npm?

A) O pacote só poderá ser usado no Windows.  
B) O pacote será removido quando o servidor iniciar.  
C) O pacote será registrado como dependência de desenvolvimento.  
D) O pacote será convertido automaticamente em TypeScript.

### Questão 5 — Configuração do TypeScript

Qual é a finalidade do arquivo `tsconfig.json`?

A) Armazenar os produtos cadastrados.  
B) Configurar como o TypeScript analisa e compila os arquivos.  
C) Registrar as respostas HTTP do servidor.  
D) Substituir o `package-lock.json`.

### Questão 6 — Comando `npx`

Neste tutorial, o que faz `npx tsc --init`?

A) Cria a configuração inicial do TypeScript em `tsconfig.json`.  
B) Instala o Node.js no Windows.  
C) Inicia o servidor na porta 3000.  
D) Cria a classe `Produto`.

### Questão 7 — Script de desenvolvimento

Para que foi definido o script abaixo?

```json
"dev": "tsx watch src/server.ts"
```

A) Para apagar a pasta `node_modules`.  
B) Para executar `src/server.ts` e observar alterações durante o desenvolvimento.  
C) Para criar automaticamente um banco de dados.  
D) Para publicar a aplicação na internet.

### Questão 8 — Pasta `node_modules`

Qual afirmação está correta?

A) É onde os alunos devem escrever manualmente todo o código.  
B) É o arquivo que define as rotas HTTP.  
C) É a pasta onde o npm instala os pacotes.  
D) É obrigatória para guardar os produtos cadastrados em memória.

### Questão 9 — Arquivo do servidor

Por que `npm run dev` ainda pode falhar ao final deste tutorial?

A) Porque o Express não funciona com TypeScript.  
B) Porque ainda não criamos `src/server.ts`.  
C) Porque o npm exige um banco de dados.  
D) Porque `package.json` não aceita scripts.

### Questão 10 — Módulos ES

O que informa a propriedade `"type": "module"` no `package.json`?

A) Que o projeto deve usar somente JavaScript no navegador.  
B) Que o Node.js deve tratar os arquivos `.js` do projeto como módulos ES.  
C) Que o TypeScript não precisa de configuração.  
D) Que todas as dependências serão instaladas globalmente.

### Questão 11 — Build

Qual é a função do comando `npm run build`, conforme os scripts deste tutorial?

A) Executar o arquivo compilado com Node.js.  
B) Compilar os arquivos TypeScript usando o compilador configurado.  
C) Instalar o Express.  
D) Criar a pasta `node_modules` manualmente.

### Questão 12 — Terminal do VS Code

Qual afirmação representa a orientação deste tutorial?

A) É obrigatório substituir o PowerShell pelo CMD.  
B) Não se pode usar comandos npm no PowerShell.  
C) Podemos usar o terminal integrado do VS Code e preferir comandos simples compatíveis com CMD quando possível.  
D) Todos os comandos precisam ser executados fora do VS Code.

## 13. Gabarito do professor

> **Não exibir esta seção antes de os alunos responderem às questões.** Para distribuir o tutorial aos alunos, crie uma cópia sem esta seção.

| Questão | Resposta | Justificativa |
|---|---|---|
| 1 | B | Node.js permite executar JavaScript fora do navegador. |
| 2 | C | `npm init -y` cria um `package.json` inicial com valores padrão. |
| 3 | A | `npm install express` instala e registra o Express. |
| 4 | C | `--save-dev` registra o pacote em `devDependencies`. |
| 5 | B | `tsconfig.json` configura a análise e a compilação do TypeScript. |
| 6 | A | `tsc --init` cria um arquivo de configuração inicial do TypeScript. |
| 7 | B | `tsx watch` executa o arquivo TypeScript e observa alterações. |
| 8 | C | `node_modules` armazena os pacotes instalados pelo npm. |
| 9 | B | O arquivo do servidor será criado no Tutorial 03. |
| 10 | B | `"type": "module"` define o uso de módulos ES para arquivos `.js` no projeto. |
| 11 | B | O script `build` executa `tsc`, o compilador TypeScript. |
| 12 | C | O terminal integrado pode continuar usando PowerShell, priorizando comandos compatíveis com CMD quando possível. |

## 14. Resumo e preparação para o próximo tutorial

Neste tutorial, preparamos o ambiente do projeto Cadastro de Produtos com Node.js, npm, Express e TypeScript. Também configuramos módulos ES e scripts de desenvolvimento e compilação.

Ainda não criamos funcionalidades de cadastro de produtos nem as camadas MVC.

No **Tutorial 03 — Primeiro servidor**, vamos criar `src/server.ts`, configurar o Express, iniciar o servidor HTTP e verificar se ele está funcionando.
