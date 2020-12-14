//Generator
function generateMarkdown(data) {
  return `<h1>${data.title}</h1>

  
  ![License](https://img.shields.io/badge/License-${data.license}.svg)

## Description
${data.desc}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## License
Licensed by ${data.license}
## Questions
${data.questions}
* GitHub: [${data.username}](https://github.com/${data.username})
* Email: ${data.email}
`;
}

module.exports = generateMarkdown;