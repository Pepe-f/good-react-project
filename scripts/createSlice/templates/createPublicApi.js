const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const firstCharLowerCase = require('../firstCharLowerCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${firstCharLowerCase(sliceName)}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';
`,
    );
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};
