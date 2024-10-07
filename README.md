# Alura-Flix

O **Alura-Flix** é uma aplicação web desenvolvida em **React** que permite a visualização de uma lista de vídeos, semelhante a uma plataforma de streaming. A aplicação consome dados de uma API mock criada com o **JSON Server** e hospedada no link [https://my-json-server.typicode.com/livia070303/alura-flix/](https://my-json-server.typicode.com/livia070303/alura-flix/).

## Funcionalidades

- Listagem de vídeos.
- Filtragem por categorias de vídeo.
- Exibição de detalhes de cada vídeo.
- **Possibilidade de cadastrar novos vídeos e categorias (apenas rodando localmente o JSON Server).**

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- **JSON Server** (opcional, para rodar a API localmente e permitir operações CRUD).

## Como rodar o projeto

### 1. Instalar dependências do projeto

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/alura-flix.git
   ```

2. Acesse o diretório do projeto:

```bash
cd alura-flix
```

3. Instale as dependências necessárias:

```bash
npm install
```
ou, se estiver usando yarn:

```bash
yarn install
```

### 2. Rodar a aplicação
4. Inicie o servidor de desenvolvimento:

```bash
npm start
```
ou, com yarn:

```bash
yarn start
```

5. Acesse o aplicativo no navegador:


http://localhost:3000

### 3. Rodar JSON Server Localmente (opcional)
Para suportar a criação de novos vídeos e categorias, você pode rodar o JSON Server localmente.

1. Instale o JSON Server globalmente em sua máquina:

```bash
npm install -g json-server
```

2. Utilizeo  arquivo db.json que está na raiz do projeto com os dados iniciais:

```json
{
    "videos": [
      {
        "id": 1,
        "titulo": "Conhecendo a linguagem Go | Hipsters.Talks",
        "urlVideo": "https://www.youtube.com/embed/y8FeZMv37WU",
        "urlImagem": "img/imagem1.png",
        "categoria": "Frontend",
        "corDaBorda": "6BD1FF"
      },
      {
        "id": 2,
        "titulo": "Desmistificando mobile - Linguagens e Frameworks",
        "urlVideo": "https://www.youtube.com/embed/fmu1LQvZhms",
        "urlImagem": "img/imagem2.png",
        "categoria": "Frontend",
        "corDaBorda": "6BD1FF"
      },
      {
        "id": 3,
        "titulo": "Orientação a objetos com Roberta Arcoverde | #Hipster...",
        "urlVideo": "https://www.youtube.com/embed/jpuJ1qrluoU",
        "urlImagem": "img/imagem3.png",
        "categoria": "Frontend",
        "corDaBorda": "6BD1FF"
      },
      {
        "id": 4,
        "titulo": "Linguagens e ferramentas usadas em Ciência de Dados...",
        "urlVideo": "https://www.youtube.com/embed/h83e1aAM5xQ",
        "urlImagem": "img/imagem4.png",
        "categoria": "Frontend",
        "corDaBorda": "6BD1FF"
      },
      {
        "id": 5,
        "titulo": "Reencontrando a paixão por programar: Beatriz Ramerindo",
        "descricao": "1,2 mil visualizações",
        "urlVideo": "https://www.youtube.com/embed/CnB3eLTrkn4",
        "urlImagem": "img/imagem5.png",
        "categoria": "DataScience",
        "corDaBorda": "rgba(105, 149, 59, 1)"
        
      },
    ],
    
    "categoria": [
      {
        "id": 2,
        "nome": "Data Science",
        "texto": "Coisas de R e Python que venho aprendendo",
        "cor": "#69953B",
        "codigo-seguranca": "0020"
      },

      {
        "id": 3,
        "nome": "Mobile",
        "texto": "Conteúdo que venho estudando sobre React Native e Flutter",
        "cor": "#FFBA05",
        "codigo-seguranca": "0030"
      }
    ]

  }
```

3. Inicie o JSON Server com o seguinte comando:

```bash
json-server --watch db.json --port 8000
```

4. Atualize as requisições da aplicação para apontar para http://localhost:8000 ao invés da URL hospedada no serviço de mock.

Agora você pode realizar operações de criação, leitura, atualização e deleção de vídeos e categorias.

## API Mock
A aplicação utiliza uma API mock criada com o JSON Server. Você pode acessar a API hospedada através do seguinte endpoint:

- **Base URL**: https://my-json-server.typicode.com/livia070303/alura-flix/
Os principais endpoints são:

- /videos: Retorna a lista de vídeos.
- /categorias: Retorna a lista de categorias.

## Estrutura do Projeto
O projeto segue a estrutura padrão de uma aplicação React:

- **src/**: Contém os arquivos de código-fonte.
- **components/**: Componentes reutilizáveis da interface.
- **pages/**: Páginas da aplicação.
- **App.js**: Componente principal da aplicação e que contém as configurações de Rotas.
- **index.js**: Ponto de entrada da aplicação.

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **JSON Server**: Ferramenta para simulação de APIs RESTful.
- **Material-UI (MUI)**: Biblioteca para componentes de interface prontos.
- **React Router**: Navegação entre páginas da aplicação.
