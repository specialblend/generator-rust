const R = require('ramda');
const path = require('path');
const generator = require('../../src/lib/generator');

const resolveFiles = R.always([
    'Cargo.toml',
    '.travis.yml',
    'src/hello.rs',
    'src/main.rs',
    ['gitignore', '.gitignore'],
]);

function resolvePrompts() {
    return [
        {
            type: 'input',
            name: 'name',
            message: 'name',
            default: R.replace(/ /g, '-')(this.appname),
        },
        {
            type: 'input',
            name: 'author',
            message: 'author',
            default: '',
            store: true,
        },
    ];
}

module.exports = generator(path.join(__dirname, 'template'), resolveFiles, resolvePrompts);
