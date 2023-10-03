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

1. Drag'n'Drop `bundle.tar.gz` to the special field in the CapRover

## Used technologies

|                                                                                                                                   | Title                                            | Description                                                    |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------- |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png" height="16" />     | [Svelte](https://svelte.dev)                     | Lightweight frontend compiler                                  |
| <img src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp" height="16" />                          | [TypeScript](https://www.typescriptlang.org)     | Strongly typed programming language that builds on JavaScript  |
| <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" height="16" />                                                 | [Sass](https://sass-lang.com)                    | CSS extension language                                         |
| <img src="https://static-00.iconduck.com/assets.00/bulma-icon-352x512-b0faxtog.png" height="16" />                                | [Bulma](https://bulma.io)                        | Open-source and easy-to-use responsive CSS framework           |
| <img src="https://blog.knoldus.com/wp-content/uploads/2019/06/graphql.png" height="16" />                                         | [GraphQL](https://graphql.org)                   | Advanced query language for APIs                               |
| <img src="https://raw.githubusercontent.com/FormidableLabs/urql-devtools/master/src/assets/icon.svg?sanitize=true" height="16" /> | [urQL](https://formidable.com/open-source/urql/) | Customizable and versatile GraphQL client                      |
| <img src="https://user-images.githubusercontent.com/9741252/81717987-83b84000-947b-11ea-9ac9-5ad1d59adf7a.png" height="16" />     | [PokeAPI](https://pokeapi.co)                    | REST and GraphQL API interface with information about pokemons |
| <img src="https://static-00.iconduck.com/assets.00/docker-icon-512x438-ga1hb37h.png" height="16" />                               | [Docker](https://www.docker.com)                 | Container building, storing and running engine                 |
| <img src="https://static-00.iconduck.com/assets.00/nginx-icon-444x512-0meva297.png" height="16" />                                | [Nginx](https://www.nginx.com)                   | The most common open source web server                         |
| <img src="https://caprover.com/img/logo-padded.png" height="16" />                                                                | [Caprover](https://caprover.com)                 | Open Source PaaS (for deployment)                              |
