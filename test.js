import('./vite.config.ts').catch(e => {
  import('fs').then(fs => fs.writeFileSync('vite_test_error.txt', String(e.stack || e)));
});
