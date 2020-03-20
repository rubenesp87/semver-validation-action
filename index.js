const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `version` input defined in action metadata file
  const version = core.getInput('version');
  console.log(`Checking version: ${version}!`);
  
  var re = new RegExp("[0-9]+\.[0-9]+\.[0-9]+(-(0|[1-9]\d*|(beta|alpha).*))?$");
  if (re.exec(version) == null) {
    core.setFailed("Invalid version");
  }

} catch (error) {
  core.setFailed(error.message);
}
