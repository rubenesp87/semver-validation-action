const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `version` input defined in action metadata file
  const version = core.getInput('version');
  console.log(`Checking version: ${version}!`);
  
  var re = new RegExp("(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(([a-z-][\da-z-]+|[\da-z-]+[a-z-][\da-z-]*|0|[1-9]\d*)(\.([a-z-][\da-z-]+|[\da-z-]+[a-z-][\da-z-]*|0|[1-9]\d*))*))?(\\+([\da-z-]+(\.[\da-z-]+)*))?$");
  if (re.exec(version) == null) {
    core.setFailed("Invalid version");
  }

} catch (error) {
  core.setFailed(error.message);
}
