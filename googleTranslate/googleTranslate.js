// // Imports the Google Cloud client library
// const Translate = require('@google-cloud/translate');
// const apiKey = require('../apiKey');
// const projId = require('../apiKey').projId;
// // Your Google Cloud Platform project ID
// const projectId = projId;
//
// // Instantiates a client
// const translate = new Translate({
//   projectId: projectId,
// });
//
// // The text to translate
// const text = 'Hello, world!';
// // The target language
// const target = 'ru';
//
// function translateTo(input, target) {
//   translate
//   .translate(text, target)
//   .then(results => {
//     const translation = results[0];
//
//     console.log(`Text: ${text}`);
//     console.log(`Translation: ${translation}`);
//     return translation
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });
// }
//   // Translates some text into Russian
//
// module.exports.Translate = Translate;
//
// // Imports the Google Cloud client library
// // const Translate = require('@google-cloud/translate');
// // const apiKey = require('../apiKey');
// // const projId = require('../apiKey').projId;
// // // Your Google Cloud Platform project ID
// // const projectId = projId;
// //
// // // Instantiates a client
// // const translate = new Translate({
// //   projectId: projectId,
// // });
// //
// // // The text to translate
// // const text = 'Hello, world!';
// // // The target language
// // const target = 'ru';
// //
// // // Translates some text into Russian
// // translate
// //   .translate(text, target)
// //   .then(results => {
// //     const translation = results[0];
// //
// //     console.log(`Text: ${text}`);
// //     console.log(`Translation: ${translation}`);
// //     return translation
// //   })
// //   .catch(err => {
// //     console.error('ERROR:', err);
// //   });
// //
// // module.exports.Translate = Translate;
