require('./console');

const R = require('ramda');
const chalk = require('chalk');
const Generator = require('yeoman-generator');

module.exports = (root, resolveFiles = R.always([]), resolvePrompts = R.always([])) => {
    return class extends Generator {
        constructor(...props) {
            super(...props);
            this.context = {};
        }
        async prompting() {
            if (R.is(Function, resolvePrompts)) {
                const prompts = resolvePrompts.bind(this)();
                if (R.is(Array, prompts)) {
                    if (!R.isEmpty(prompts)) {
                        console.debug(`found (${prompts.length}) prompts`);
                        this.context = await this.prompt(prompts);
                    }
                    console.warn('empty prompts');
                    return;
                }
                console.error('invalid prompts');
                return;
            }
            console.warn('no prompts');
        }
        initializing() {
            console.log('initializing generator');
            this.sourceRoot(root);
        }
        writing() {
            const files = resolveFiles.bind(this)();
            if (R.is(Array, files)) {
                if (!R.isEmpty(files)) {
                    console.info('copying template files');
                    files.map(
                        file => {
                            if (Array.isArray(file)) {
                                const [src, dest] = file;
                                this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), this.context);
                                return;
                            }
                            this.fs.copyTpl(this.templatePath(file), this.destinationPath(file), this.context);
                        },
                    );
                    return;
                }
                console.warn('no template files to copy');
                return;
            }
            console.error('invalid files');
        }
        end() {
            console.success('Done!');
            console.log(chalk.hex('#b88a5c')(`Thanks for using the ${chalk.hex('#ffc66d')('@specialblend/rust')} generator`));
            console.info('https://github.com/specialblend/generator-rust');
        }
    };
};
