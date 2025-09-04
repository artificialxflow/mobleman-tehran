const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/workflows/agency-management/page.tsx',
  'app/workflows/automated-reporting/page.tsx',
  'app/workflows/human-resources/page.tsx',
  'app/workflows/after-sales/page.tsx',
  'app/workflows/production/page.tsx',
  'app/workflows/inventory-management/page.tsx',
  'app/workflows/order-management/page.tsx',
  'app/workflows/page.tsx',
  'app/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join('mobleman-tehran', filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix Layout import - use @/ alias
    content = content.replace(
      /import Layout from '\.\.\/\.\.\/components\/Layout';/g,
      'import Layout from \'@/components/Layout\';'
    );
    
    // Fix Dashboard import (only for app/page.tsx)
    if (filePath === 'app/page.tsx') {
      content = content.replace(
        /import Dashboard from '\.\.\/components\/Dashboard';/g,
        'import Dashboard from \'@/components/Dashboard\';'
      );
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All imports fixed!');