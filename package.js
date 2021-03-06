Package.describe({
  name: 'roadshr:yunpian',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'yunpian api for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zuizuihao/meteor-yunpian',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('http');
  api.export('YunPianAPI');
  api.addFiles('yunpian.js', 'server');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('http');
  api.use('roadshr:yunpian', 'server');
  api.mainModule('yunpian-tests.js', 'server');
});
