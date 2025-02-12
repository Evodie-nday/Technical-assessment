// function countRoles(users) {
//   const roleCounts = {};

//   for (let i = 0; i < users.length; i++) {
//     const role = users[i].role;

//     if (roleCounts[role]) {
//       roleCounts[role]++;
//     } else {
//       roleCounts[role] = 1;
//     }
//   }

//   return roleCounts;
// }
// const users = [
//   { name: 'Evan', role: 'admin' },
//   { name: 'Samantha', role: 'student' },
//   { name: 'Elsie', role: 'admin' },
//   { name: 'Loryn', role: 'instructor' },
//   { name: 'Lilian', role: 'student' },
//   { name: 'Josiane', role: 'student' },
//   { name: 'Grace', role: 'student' },
//   { name: 'Rosine', role: 'student' },
// ]
// console.log(countRoles(users));

function findAdmins(users) {
  return users
    .filter(user => user.role === 'admin')
    // .map(user => user.name);
}


const users = [
  { name: 'Evan', role: 'admin' },
  { name: 'Samantha', role: 'student' },
  { name: 'Elsie', role: 'admin' },
  { name: 'Loryn', role: 'instructor' },
  { name: 'Lilian', role: 'student' },
  { name: 'Josiane', role: 'student' },
  { name: 'Grace', role: 'student' },
  { name: 'Rosine', role: 'student' }
];

console.log(findAdmins(users));
