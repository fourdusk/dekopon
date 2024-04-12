module.exports = {
  '*.{js,ts}': [() => 'tsc --noEmit --skipLibCheck', 'biome check --apply'],
  '*.{json,md}': 'biome check --apply'
}
