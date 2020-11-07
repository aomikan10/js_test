const globalVariable = 'グローバル';

function checkScope(){
  const localVariable = 'ローカル';

  console.log(localVariable);
}

console.log(globalVariable);

checkScope();