// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `${license}`
  // badgelink
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.projectDescription}
  ${renderLicenseBadge(data.licenseSelection)}
  ## Table of Contents
  ## Installation
  ${data.Install}
  ## Usage
  ${data.properUsage}
  ## License
  ${data.licenseSelection}
  ${renderLicenseBadge(data.licenseSelection)}
  ## Contributing
  ${data.openSource}
  ## Tests
  ${data.tests}
  ## Questions
  If you'd like to connect with the developer about ${data.title} further email them at ${data.email} 
  gitHub at @${data.username}
`;
}

module.exports = generateMarkdown;
// if picked license then choose corresponding badge mit