import * as core from '@actions/core';
import * as core from '@actions/github';


try {
    const name = core.getInput('name');
const output_value = `Hello ${name} from Naresh!`;
core.setOutput('greeting', output_value);
}
 catch (error) {
  core.setFailed(error.message);
}