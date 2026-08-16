import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy'

const typescriptOptions = {
    exclude: ["tests/**/*"],
    compilerOptions: { declaration: false },
};

const copyOptions = {
    targets: [
        //{ src: 'src/Types/*', dest: 'dist/esm/Types' },
        
        { src: 'src/Type/*', dest: 'dist/cjs/Type' },
        { src: 'src/Dto/*', dest: 'dist/cjs/Dto' },
    ]
};

export default [
    {
        external: ["typeorm", "sinon"],
        input: "src/index.ts",
        output: { file: "dist/cjs/index.js", format: "cjs" },
        plugins: [typescript( typescriptOptions ), copy( copyOptions )],
    },
];
