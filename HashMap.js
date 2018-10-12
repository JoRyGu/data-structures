class HashMap {
  constructor() {
    this.hashMap = [];
    this.movedIndex = [];
  }

  hashKey(key) {
    let convertedKey = '';

    if(typeof key === 'number') {
      convertedKey = key.toString();
    } else if (typeof key === 'string') {
      convertedKey = key;
    } else if (typeof key === 'object') {
      let firstObjectKey = key[Object.keys(key)[0]];
      if(typeof firstObjectKey === 'number') {
        convertedKey = firstObjectKey.toString();
      } else if (typeof firstObjectKey === 'string') {
        convertedKey = firstObjectKey;
      } else {
        throw new Error('Incompatible key for HashMap');
      }
    } else {
      throw new Error('Incompatible key for HashMap');
    }

    let keyDecoder = {
      'a': 0,
      'b': 1,
      'c': 2,
      'd': 3,
      'e': 4,
      'f': 5,
      'g': 6,
      'h': 7,
      'i': 8,
      'j': 9,
      'k': 10,
      'l': 11,
      'm': 12,
      'n': 13,
      'o': 14,
      'p': 15,
      'q': 16,
      'r': 17,
      's': 18,
      't': 19,
      'u': 20,
      'v': 21,
      'w': 22,
      'x': 23,
      'y': 24,
      'z': 25,
      '0': 26,
      '1': 27,
      '2': 28,
      '3': 29,
      '4': 30,
      '5': 31,
      '6': 32,
      '7': 33,
      '8': 34,
      '9': 35
    }
    return parseInt(convertedKey.split('').map(letter => keyDecoder[letter]).join(''));
  }

  set(key, value) {
    if(this.hashMap[this.hashKey(key)] !== undefined) {
      for(let i = 0; i < this.hashMap[this.hashKey(key)].length; i++) {
        if(key === this.hashMap[this.hashKey(key)][i][0]) {
          this.hashMap[this.hashKey(key)][i][1] = value;
          return;
        }
      }
      this.hashMap[this.hashKey(key)].push([key, value]);
    } else {
      this.hashMap[this.hashKey(key)] = [[key, value]];
    }
  }

  getValue(key) {
    let hashReturn = this.hashMap[this.hashKey(key)];

    if(hashReturn === undefined) {
      return undefined;
    }

    if(hashReturn.length > 1) {
      for(let i = 0; i < hashReturn.length; i++) {
        if(hashReturn[i][0] === key) {
          return hashReturn[i][1];
        }
      }
    } else {
      return hashReturn[0][1];
    }
  }

  has(key) {
    let hashedKey = this.hashKey(key);

    if(this.hashMap[hashedKey] === undefined) {
      return false;
    } else if(this.hashMap[hashedKey].length > 1) {
      for(let i = 0; i < this.hashMap[hashedKey].length; i++) {
        if(this.hashMap[hashedKey][0] === key) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }
}