importScripts('node_modules/zone.js/dist/zone.js');
importScripts('node_modules/reflect-metadata/Reflect.js');
importScripts('node_modules/systemjs/dist/system.src.js');

importScripts('systemjs.config.js');
System.import('app').catch(function(err){ console.error(err); });
