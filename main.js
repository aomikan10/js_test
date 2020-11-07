const scores = [10,20,30,40];

const newScores = scores.filter((value) => value >= 30);

console.log(newScores);

const members = ['本田','香川','長友'];

const member = members.find((value) => value === '長友');

console.log(member);

const userList = [10,20,30,40];

const userIdList = userList.map((value) => {
  return `user_${value}`;
});