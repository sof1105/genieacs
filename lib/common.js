/**
 * Copyright 2013-2018  Zaid Abdulla
 *
 * This file is part of GenieACS.
 *
 * GenieACS is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * GenieACS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with GenieACS.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";

const UNDEFINED_TYPE = "[object Undefined]";
const NULL_TYPE = "[object Null]";
const BOOLEAN_TYPE = "[object Boolean]";
const NUMBER_TYPE = "[object Number]";
const STRING_TYPE = "[object String]";
const ARRAY_TYPE = "[object Array]";
const OBJECT_TYPE = "[object Object]";
const REGEXP_TYPE = "[object RegExp]";
const DATE_TYPE = "[object Date]";

const typeOf = obj => Object.prototype.toString.call(obj);

function generateDeviceId(deviceIdStruct) {
  // Escapes everything except alphanumerics and underscore
  function esc(str) {
    return str.replace(/[^A-Za-z0-9_]/g, chr => {
      const buf = Buffer.from(chr, "utf8");
      let rep = "";
      for (const b of buf) rep += "%" + b.toString(16).toUpperCase();
      return rep;
    });
  }


  var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

  return MD5(esc(deviceIdStruct["SerialNumber"]));
}

function parseAlias(pattern, start, res) {
  const aliases = [];
  let i = start;
  while (i < pattern.length && pattern[i] !== "]") {
    const alias = [];
    let j = (i = parsePath(pattern, i, alias) + 1);
    while (pattern[j] !== "]" && pattern[j] !== ",") {
      if (pattern[j] === '"' && i === j) {
        ++j;
        while (pattern[j] !== '"' || pattern[j - 1] === "\\") {
          if (++j >= pattern.length)
            throw new Error("Invalid alias expression");
        }
      }
      if (++j >= pattern.length) throw new Error("Invalid alias expression");
    }

    let value = pattern.slice(i, j).trim();
    i = j;
    if (value[0] === '"') {
      try {
        value = JSON.parse(value);
      } catch (error) {
        throw new Error("Invalid alias expression");
      }
    }

    alias.push(value);
    aliases.push(alias);
    if (pattern[i] === ",") ++i;
  }

  // Sort to ensure identical expressions have idential string representation
  function srt(a, b) {
    const jMax = Math.min(a.length, b.length);
    for (let j = 0; j < jMax; j += 2) {
      const kMax = Math.min(a[j].length, b[j].length);
      for (let k = 0; k < kMax; ++k) {
        if (Array.isArray(a[j][k])) {
          if (Array.isArray(b[j][k])) return srt(a[j][k], b[j][k]);
          else if (b[j][k] == null) return -1;
          else return 1;
        } else if (a[j][k] == null) {
          if (b[j][k] == null) return 0;
          else return 1;
        } else if (b[j][k] == null || Array.isArray(b[j][k])) {
          return -1;
        } else if (a[j][k] > b[j][k]) {
          return 1;
        } else if (a[j][k] < b[j][k]) {
          return -1;
        }
      }

      if (a[j].length > b[j].length) return -1;
      else if (a[j].length < b[j].length) return 1;

      if (a[j + 1] > b[j + 1]) return -1;
      else if (a[j + 1] < b[j + 1]) return 1;
    }

    if (a.length > b.length) return -1;
    else if (a.length < b.length) return 1;

    return 0;
  }

  aliases.sort(srt);
  res.push([].concat.apply([], aliases));
  return i;
}

function parsePath(pattern, start, res) {
  const path = [];
  path.wildcard = 0;
  path.alias = 0;
  let i = start || 0;

  // Colon separator is needed for parseAlias
  if (i < pattern.length && pattern[i] !== ":") {
    for (;;) {
      if (pattern[i] === "[") {
        path.alias |= 1 << path.length;
        i = parseAlias(pattern, i + 1, path) + 1;
      } else {
        const j = i;
        while (i < pattern.length && pattern[i] !== ":" && pattern[i] !== ".")
          ++i;

        const n = pattern.slice(j, i);
        if (n === "*") path.wildcard |= 1 << path.length;
        path.push(n);
      }

      if (i >= pattern.length || pattern[i] === ":") break;
      else if (pattern[i] !== ".") throw new Error("Invalid alias expression");

      ++i;
    }
  }

  Object.freeze(path);

  if (res == null) return path;

  res.push(path);
  return i;
}

function addPathMeta(path) {
  if (path.alias != null && path.wildcard != null) return path;

  path.alias = 0;
  path.wildcard = 0;

  for (const [i, p] of path.entries()) {
    if (Array.isArray(p)) {
      path.alias |= 1 << i;
      for (let j = 0; j < p.length; j += 2) addPathMeta(p[j]);
    } else if (p === "*") {
      path.wildcard |= 1 << i;
    }
  }

  Object.freeze(path);
  return path;
}

// Source: http://stackoverflow.com/a/6969486
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}

exports.UNDEFINED_TYPE = UNDEFINED_TYPE;
exports.NULL_TYPE = NULL_TYPE;
exports.BOOLEAN_TYPE = BOOLEAN_TYPE;
exports.NUMBER_TYPE = NUMBER_TYPE;
exports.STRING_TYPE = STRING_TYPE;
exports.ARRAY_TYPE = ARRAY_TYPE;
exports.OBJECT_TYPE = OBJECT_TYPE;
exports.DATE_TYPE = DATE_TYPE;
exports.REGEXP_TYPE = REGEXP_TYPE;

exports.typeOf = typeOf;
exports.generateDeviceId = generateDeviceId;
exports.parsePath = parsePath;
exports.addPathMeta = addPathMeta;
exports.escapeRegExp = escapeRegExp;
