import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
  ],
  output: [
    {
      dir: 'dist',
      format: 'es',
    },
  ],
  preserveModules: true,
};