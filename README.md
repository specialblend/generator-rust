# @specialblend/generator-rust

[Yeoman](https://yeoman.io/) generator for Rust projects (crates and Docker microservice) with cargo, clippy, travis-ci and Justfile

### Installation

- Make sure you have `yo` installed: `npm install -g yo`

- Install this generator: `npm install -g @specialblend/generator-rust`

- Clone an empty repo, create a new directory or cd into existing project

- From inside project root, run `yo @specialblend/rust` or just `yo` and select the `@specialblend/rust` template

:warning: For existing projects, `Cargo.toml` will be modified.

### Templates

#### crate (default): Rust crate
`yo @specialblend/rust` or `yo @specialblend/rust:crate`
- `main.rs`, `hello.rs` with unit tests
- Preset TravisCI configuration (`.travis.yml`)

#### docker: Dockerized rust microservice
`yo @specialblend/rust:docker`

optional: `cargo install just`
- `main.rs`, `hello.rs` with unit tests
- Preset `Dockerfile` and `docker-compose.yml`
- Preset TravisCI configuration (`.travis.yml`)
- Justfile with `just build`, `just run`, `just start`
