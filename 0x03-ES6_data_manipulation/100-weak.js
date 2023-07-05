export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let queryCount = weakMap.get(endpoint) || 0;
  queryCount++;
  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
