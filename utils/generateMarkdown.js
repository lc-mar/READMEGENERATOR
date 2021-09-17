
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache': return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD': return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'IBM': return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'MIT': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla': return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    default: return '';
  }
}

function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license)
  return `# ${data.title}
  ${badge}

  Table of Contents |
  ----------------- |
  [Description](#description) |
  [Installation](#installation) |
  [Usage](#usage) |
  [Contributors](#contribution) |
  [Tests](#tests) |
  [License](#license) |
  [Questions](#questions) |
`;
}

module.exports = generateMarkdown;
