# PokeDex Svelte

Small application, that shows list of pokemons and can show extended info about one of them. Application have search, pagination and assets compression. You can try it [here](https://pokedex.katsu.moe).

## Installation

1. Fetch code from GitHub

    ```sh
    git clone https://github.com/akatsukinoyami/pokedex.git
    ```

1. Change directory to newly created

    ```sh
    cd ./pokedex
    ```

1. Install needed packages

    ```sh
    yarn
    ```

1. Application ready to run!

## Running application

### Development mode

* Run script

    ```sh
    yarn dev
    ```

### Make production-ready build

* Run script

    ```sh
    yarn build
    ```

### Make build for caprover

1. If using MacOS, you need install GNUtar

    ```sh
    brew install gnu-tar
    echo '\nexport PATH="/opt/homebrew/opt/gnu-tar/libexec/gnubin:$PATH"' >> ~/.zshrc
    ```

1. Run script

    ```sh
    yarn build:caprover
    ```

1. Drag'n'Drop `bundle.tar.gz` to the field in the CapRover field

## Used technologies

|Title|Description|
|-----|-----------|
| [Svelte](https://svelte.dev) | lightweight frontend compiler |
| [TypeScript](https://www.typescriptlang.org) | strongly typed programming language that builds on JavaScript |
| [Sass](https://sass-lang.com) | CSS extension language |
| [Bulma](https://bulma.io) | open-source and easy-to-use responsive CSS framework |
| [GraphQL](https://graphql.org) | advanced query language for APIs |
| [urQL](https://formidable.com/open-source/urql/) | customizable and versatile GraphQL client |
| [PokeAPI](https://pokeapi.co) | REST and GraphQL API interface with information about pokemons |
