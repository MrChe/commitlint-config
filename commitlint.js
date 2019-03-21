'use strict';

module.exports = function (project) {
  return {
    parserPreset: {
      parserOpts: {
        headerPattern: /^(\w*)-(\d*)\:\s(.*)$/
      }
    },
    rules: {
      'body-leading-blank': [1, 'always'],
      'footer-leading-blank': [1, 'always'],
      'header-max-length': [2, 'always', 72],
      'scope-case': [0],
      'scope-empty': [2, 'never'],
      'subject-case': [0],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'type-case': [0],
      'type-empty': [2, 'never'],
      'type-enum': [2, 'always', [project]]
    }
  };
};