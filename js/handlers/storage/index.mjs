/**
 * stores a key and value in local storage.
 * @param {string} key for value being stored
 * @param {string} value being stored
 * @example 
 *```js
 * save(key, value)
 * // does this
 * localStorage.setItem(key, JSON.stringify(value));
 * // stores the key and a json stringified value in local storage
 *
 *```
 */
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
/**
 * gets value from local storage
 * @param {string} key stored
 * @returns {value} stored value.
 */
export function load(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch (error) {
        console.log(error);
    }

}
/**
 * deletes value in local storage.
 * @param {string} key being deleted
 */
export function remove(key) {
    localStorage.removeItem(key);
}