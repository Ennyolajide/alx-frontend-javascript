export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const queryCount = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, queryCount + 1);
  
  if (queryCount >= 4) {
    throw new Error('Endpoint load is high');
  }
}
