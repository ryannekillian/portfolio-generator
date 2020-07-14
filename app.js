// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }
// console.log('================');

// profileDataArr.forEach(function(profileItem) {
//   console.log(profileItem);
// });
// };

// printProfileData(profileDataArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    GitHub: ${githubName}
  `;
};
console.log(Jane, github);
console.log(generatePage(name, github));
