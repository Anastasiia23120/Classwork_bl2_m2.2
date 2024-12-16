// console.log(null ?? 'Hello');
// console.log(undefined ?? 'Hello');
// console.log(10 ?? 'Hello');

const firstName = 'Anastasiia';
const lastName = 'Medeved';

const fullName = `${firstName ?? 'Anonymus'} ${lastName ?? 'Anonymus'}`;
console.log(fullName);
