// #region imports
import ttypescript from 'ttypescript'
import typescript from 'rollup-plugin-typescript2';

import pkg from '../package.json';
// #endregion imports



// #region module
const build = {
    input: 'source/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: false,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: false,
        },
    ],
    external: [
        '@plurid/plurid-themes',
    ],
    plugins: [
        typescript({
            typescript: ttypescript,
            clean: true,
        }),
    ],
};
// #endregion module



// #region exports
export default build;
// #endregion exports
