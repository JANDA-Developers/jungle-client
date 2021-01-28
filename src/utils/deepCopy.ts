var cloneDeep = require('lodash.clonedeep');

export function cloneObject<T>(obj:T):T {
  return cloneDeep(obj);
}

