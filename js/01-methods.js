// console.log(null ?? 'Hello');
// console.log(undefined ?? 'Hello');
// console.log(10 ?? 'Hello');

// const firstName = 'Anastasiia';
// const lastName = 'Medeved';

// const fullName = `${firstName ?? 'Anonymus'} ${lastName ?? 'Anonymus'}`;

// console.log(fullName);

//* part 1
// const firstName = 'Anastasiia';

// const result = firstName.slice(2, 5);

// console.log(firstName);
// console.log(result);

//* part 2
// const firstName = 'Anastasiia';

// const result = firstName.toLowerCase();
// // const result = firstName.toUpperCase();

// console.log(firstName);
// console.log(result);

//* part 3
// const firstName = 'Anastasiia';

// const result = firstName.includes('Ana');

// console.log(firstName);
// console.log(result);

//* part 4
// const firstName = 'Anastasiia';

// const result = firstName.startsWith('Ana');

// console.log(firstName);
// console.log(result);

//* part 5
// const firstName = 'Anastasiia';

// const result = firstName.endsWith('a');

// console.log(firstName);
// console.log(result);

//* part 6
// const firstName = 'Anastasiia';

// const result = firstName.indexOf('i');
// // const result = firstName.indexOf('Ana');
// // const result = firstName.indexOf('stasiia');

// console.log(firstName);
// console.log(result);

//* part 7
// const fullName = '    Anastasiia Medved  ';

// const result = fullName.trim();

// console.log(fullName);
// console.log(result);

//* task 1
// const answer = 'ECMAScript';
// let userInput = prompt('Яка "офіційна" назва JavaScript?');

// if (userInput.toLowerCase() === answer.toLowerCase()) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

//* task 2
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);

//* task 3
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

//* task 4
//*(повна версія функції)

// function isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2) {
//   const normalizedStr = string.toLowerCase();

//   const result = normalizedStr.includes(blacklistedWord1) || normalizedStr.includes(blacklistedWord2);

//   return result;
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));

//*(скорочена версія функції)

// function isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2) {
//   return string.toLowerCase().includes(blacklistedWord1) || string.toLowerCase().includes(blacklistedWord2);
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));
