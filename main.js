console.log('テスト');

const member = {
  'name': '本田',
  'height': 170,
  'hobby': 'サッカー'
};

console.log(member.hobby);

const member_2 = {
  '本田':{
    'height':170,
    'hobby':'サッカー'
  },
  '香川':{
    'height':165,
    'hobby':'サッカー'
  }
};

console.log(member_2['香川']['height']);

const member_3 = {
  '1kumi':{
    '本田':{
      'height':170,
      'hobby':'サッカー'
    },
    '香川':{}
  },
  '2kumi':{}
};

console.log(member_3);