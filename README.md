# @specialblend/generator-rust

[Yeoman](https://yeoman.io/) generator for Rust projects (supports crates and, soon, Docker services) with cargo, clippy and TravisCI

### Installation

- Make sure you have `yo` installed: `npm install -g yo`

- Install this generator: `npm install -g @specialblend/generator-rust`

- Clone an empty repo, create a new directory or cd into existing project

- From inside project root, run `yo @specialblend/rust` or just `yo` and select the `@specialblend/rust` template

:warning: For existing projects, `Cargo.toml` will be modified.

### Templates

#### crate (default):
`yo @specialblend/rust` or `yo @specialblend/rust:crate`
- `main.rs`, `hello.rs` with unit tests
- Preset TravisCI configuration (`.travis.yml`)
