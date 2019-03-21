'use strict';

var wrap = require('word-wrap');

module.exports = function (project) {
  return {
    // When a user runs `git cz`, prompter will
    // be executed. We pass you cz, which currently
    // is just an instance of inquirer.js. Using
    // this you can ask questions and get answers.
    //
    // The commit callback should be executed when
    // you're ready to send back a commit template
    // to git.
    //
    // By default, we'll de-indent your commit
    // template and will keep empty lines.
    prompter: function prompter(cz, commit) {
      // Let's ask some questions of the user
      // so that we can populate our commit
      // template.
      //
      // See inquirer.js docs for specifics.
      // You can also opt to use another input
      // collection library if you prefer.
      cz.prompt([{
        type: 'input',
        name: 'issueNum',
        message: 'Write an issue number:\n'
      }, {
        type: 'input',
        name: 'subject',
        message: 'Write a short description of the change:\n'
      }, {
        type: 'input',
        name: 'body',
        message: 'Provide a longer description of the change: (press enter to skip)\n'
      }]).then(function (answers) {
        var maxLineWidth = 72;

        var wrapOptions = {
          trim: true,
          newline: '\n',
          indent: '',
          width: maxLineWidth
        };

        // parentheses are only needed when a scope is present
        var issueNum = answers.issueNum.trim();

        // Hard limit this line
        var head = (project + '-' + issueNum + ': ' + answers.subject.trim()).slice(0, maxLineWidth);

        // Wrap these lines at 100 characters
        var body = wrap(answers.body, wrapOptions);

        commit(head + '\n\n' + body);
      });
    }
  };
};