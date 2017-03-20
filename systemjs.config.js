/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    transpiler: 'typescript',

    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      typescript: 'npm:typescript/lib/typescript.js',

       // angular bundles
      '@angular/core': 'npm:@angular/core',
      '@angular/common': 'npm:@angular/common',
      '@angular/compiler': 'npm:@angular/compiler',
      '@angular/platform-browser': 'npm:@angular/platform-browser',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic',
      '@angular/http': 'npm:@angular/http',
      '@angular/router': 'npm:@angular/router',
      '@angular/forms': 'npm:@angular/forms',
      '@angular/platform-webworker': 'npm:@angular/platform-webworker',
      '@angular/platform-webworker-dynamic': 'npm:@angular/platform-webworker-dynamic',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js',
      },
      '@angular/core': {
        main: '@angular/core.js',
        defaultExtension: 'js'
      },
      '@angular/common': {
        main: '@angular/common.js',
        defaultExtension: 'js'
      },
      '@angular/compiler': {
        main: '@angular/compiler.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser': {
        main: '@angular/platform-browser.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser-dynamic': {
        main: '@angular/platform-browser-dynamic.js',
        defaultExtension: 'js'
      },
      '@angular/http': {
        main: '@angular/http.js',
        defaultExtension: 'js'
      },
      '@angular/router': {
        main: '@angular/router.js',
        defaultExtension: 'js'
      },
      '@angular/forms': {
        main: '@angular/forms.js',
        defaultExtension: 'js'
      },
      '@angular/platform-webworker': {
        main: '@angular/platform-webworker.js',
        defaultExtension: 'js'
      },
      '@angular/platform-webworker-dynamic': {
        main: 'platform-webworker-dynamic.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
