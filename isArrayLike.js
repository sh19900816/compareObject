/**
 * Created by Administrator on 2017/3/15.
 */
function isArrayLike(value) { // test
  return value != null && typeof value == 'object' && value instanceof Array
}

export default isObjectLike
