const postalCode = '123-45007';

const postal = {

  checkPostalCode(string){
    const replaced = string.replace('-','');
    const length = replaced.length;

    if(length === 7){
      return true;
    }
    return false;
  }
};

console.log(postal.checkPostalCode(postalCode));