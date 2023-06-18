
<p align="center">
  <img alt="Github Actions" src="https://github.com/dimeleone/pokedex/actions/workflows/main.yaml/badge.svg" />

  <a href="https://github.com/dimeleone/pokedex/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dimeleone/pokedex">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<h4 align="center">
	✅ Pokedex ✅
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-estrutura-de-arquivos">Estrutura de arquivos</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autores">Autores</a> •
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

Pokedex - é uma aplicação que lista os pokemons da primeira geração, com a possibilidade de ver os detalhes de cada um deles. Foi desenvolvida com o intuito de praticar os conhecimentos da disciplina C214-Lab.

Você pode acessar o projeto através [desse link](https://snack.expo.dev/@dimeleone/github.com-dimeleone-pokedex).

---

## ⚙️ Funcionalidades

    - [x] Listar pokemons da primeira geração
    - [x] Ver detalhes de cada pokemon
    - [ ] Pesquisar pokemon por nome
---

## 🎨 Layout

<p align="center">
  <img alt="Locus Cadastro e Login - ios" src="https://github.com/dimeleone/pokedex/blob/master/docs/pokedex-video.gif?raw=true" width="30%;">
</p>

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) (18.x), [Expo Go](https://expo.io/client) no seu smartphone ou emulador Android/iOS.

#### 🧭 Executando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/dimeleone/pokedex.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd pokedex

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npx expo start

# No terminal irá aparecer um QR Code, basta escanear com o Expo Go no seu smartphone ou emulador Android/iOS.
```

---

## 📁 Estrutura de arquivos

```
pokedex
├─ .github
│  └─ workflows
│     └─ main.yaml
├─ .gitignore
├─ App.js
├─ app.json
├─ babel.config.js
├─ docs
│  └─ pokedex-video.gif
├─ eas.json
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ adaptive-icon.png
│  │  ├─ favicon.png
│  │  ├─ icon.png
│  │  ├─ json
│  │  │  └─ empty-pokemon.json
│  │  ├─ poke-empty.png
│  │  └─ splash.png
│  ├─ components
│  │  ├─ common
│  │  │  ├─ PokeCard.js
│  │  │  ├─ PokeDetail.js
│  │  │  └─ PokeList.js
│  │  └─ screens
│  │     ├─ DetailScreen.js
│  │     └─ HomeScreen.js
│  ├─ constants
│  │  └─ colorConstants.js
│  ├─ navigation
│  │  └─ AppNavigator.js
│  ├─ services
│  │  └─ pokemonService.js
│  └─ utils
│     └─ helper.js
└─ tests
   ├─ assets
   │  └─ mock
   │     ├─ pokemon.json
   │     └─ pokemons.json
   ├─ components
   │  ├─ common
   │  │  ├─ PokeCard.test.js
   │  │  ├─ PokeDetail.test.js
   │  │  └─ PokeList.test.js
   │  └─ screens
   │     └─ HomeScreen.test.js
   └─ utils
      └─ helper.test.js

```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Mobile** ([React Native](http://www.reactnative.com/) + [Expo](https://expo.io/))

- **[React Navigation](https://reactnavigation.org/)**
- **[React Native Paper](https://callstack.github.io/react-native-paper/)**
- **[Jest](https://jestjs.io/)**

> Veja o arquivo [package.json](https://github.com/dimeleone/pokedex/blob/master/package.json)

---


## 🦸 Autores

<table>
  <tr>
    <td align="center"><a href="https://github.com/dimeleone/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/93099038?s=400&u=e5aba1f8173319b66b22c2394c569e56a5641d04&v=4" width="100px;" alt=""/><br /><sub><b>Dimitri Leone</b></sub></a></td>
  </tr>
</table>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).