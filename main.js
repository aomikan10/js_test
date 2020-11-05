const height = 91;

//console.log(typeof height);

// if(height >= 91){
//   console.log('身長は' + height + 'cmです');
// }

// if(height < 90){
//   console.log('身長は' + height + 'cm以下です');
// }

if(height !== 90){
  console.log('身長は' + height + 'cmになりません');
}

const signal_1 = 'red';
const signal_2 = 'yellow';

if(signal_1 === 'red' || signal_2 === 'blue'){
  console.log('赤');
}

const score = 80;

const comment = score > 80? 'good' : 'not good';

console.log(comment);

const signal = 'blue';

if(signal === 'red'){
  console.log('止まれ');
} else if(signal === 'yellow'){
  console.log('一旦停止');
} else {
  console.log('進む');
}

const speed = 60;

if(signal === 'blue'){
  if(speed >= 60){
    console.log('スピード違反');
  }
}