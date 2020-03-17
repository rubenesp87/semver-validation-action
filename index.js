const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `version` input defined in action metadata file
  const version = core.getInput('version');
  console.log(`Checking version: ${version}!`);
  
  var isValid = false;
  var re = new RegExp('[0-9]+\.[0-9]+\.[0-9]+(-(0|[1-9]\d*|(beta|alpha).*))?$');
  if (re.exec(version) != null) {
    isValid = true;
  }
  core.setOutput("is-valid", isValid);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
