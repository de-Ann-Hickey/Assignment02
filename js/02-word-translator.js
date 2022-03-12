// Word Translator
let language = prompt('What language do you speak? (English, Spanish, German, French)');

if (language.toUpperCase() === 'SPANISH') {
    console.log('Hello World translated in Spanish is: Que Onda');
} else if (language.toUpperCase() === 'GERMAN') {
    console.log('Hello World translated in German is: Hallo Welt');
} else if (language.toUpperCase() === 'FRENCH') {
    console.log('Hello World translated in French is: Bonjour le monde');
} else {
    console.log('Hello World');
}