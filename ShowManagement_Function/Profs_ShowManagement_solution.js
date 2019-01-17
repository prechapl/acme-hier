console.clear();
const users = [
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4},
	{ id: 1, name: 'moe' },
	{ id: 7, name: 'harpo', managerId: 5},
];

function showUser(user, users, level){
  console.log(`${new Array(level).fill('-').join('')}${user.name}`);
  const reports = users.filter(u=> u.managerId === user.id);
  if(reports.length){
    level++;
    reports.forEach(report => showUser(report, users, level));
    level--;
  }
  
}
function showManagementStructure(users){
  const boss = users.find((user)=> !user.managerId);
  showUser(boss, users, 0);
}

showManagementStructure(users);