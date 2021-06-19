function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language) {

    if (language === "Python") {
        return `Hi, my name is ${name} and I am learning to program in Python.`;
    } else {
        language = "JavaScript";
        return `Hi, my name is ${name} and I am learning to program in ${language}.`
    }
   
}