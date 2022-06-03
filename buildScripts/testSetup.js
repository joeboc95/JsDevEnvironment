// This file ins't transpiled, so must use CommonJs and Es5

//Register babel to transpile before out tests run.
require('@babel/register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
