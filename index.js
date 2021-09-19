function Introduction(name) {
    console.log(`The value is are ${name}.`);
  }
  function introductionWithLanguage (name, language) {
    console.log(`The two values are ${name} and ${language}.`);
    return "Hi, my name is [name] and I am learning to program in [language]"
  }
  
  function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }

  function introductionWithLanguageOptional (name, language) {
    console.log(`The two values are ${name} and ${JavaScript}.`);
    return "Hi, my name is [name] and I am learning to program in [language]"
  }