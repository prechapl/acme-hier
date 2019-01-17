const users = [

	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4},
  { id: 1, name: 'moe' },
	{ id: 7, name: 'harpo', managerId: 5}
  
];

function showManagementStructure(users){
  users.forEach(usrObj => {
    let prefix = ' - ';
    let space = ' ';

    if (!usrObj.managerId){
      //this usr is head manager
      console.log(usrObj.name)
    } else if (usrObj.managerId === 1){
      //this usr is lvl 2
      console.log(prefix + usrObj.name)
    } else if (usrObj.managerId > 1){
      //must be lvl 3
      console.log(space + prefix + usrObj.name)
    }
  })
}

showManagementStructure(users)

/*
moe
 - larry
	 - curly
 - shep
	 - groucho
*/