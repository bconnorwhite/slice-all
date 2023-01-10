
type Context = {
  left: string;
  retval: string[];
};

function unconcat(left: string, array: string[]) {
  if(left) {
    return [left].concat(array);
  } else {
    return array;
  }
}

export default function sliceAll(string: string, indexes: number[]) {
  const result = indexes.reduceRight(({ left, retval }, index) => ({
    left: left.slice(0, index),
    retval: unconcat(left.slice(index), retval)
  }), {
    left: string,
    retval: []
  } as Context);
  return unconcat(result.left, result.retval);
}
