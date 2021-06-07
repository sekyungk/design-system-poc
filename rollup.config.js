import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    resolve(),
    commonjs(),
  ],
  output: [
    {
      dir: 'dist',
      format: 'es',
    },
  ],
  preserveModules: true,
};
