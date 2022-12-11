import * as listeners from "./handlers/index.mjs";


/**
 * switches listeners based on the users location path
 * @returns {function} what listener should be active
 * @example 
 * ```js
 * //the user is at location: "./login.html"
 * switch (path) {
 *     case `/login.html`:
 *          listeners.setLoginFormListener()
 *          return;
 * // the listeners.setLoginFormListener() function will now be active.
 * ```
 */
export default function router() {
    const path = location.pathname;

    switch (path) {
        case `/`:
            listeners.displayItems()
            listeners.isUserLoggedIn()
            return;
        case `/register.html`:
            listeners.setRegisterFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/login.html`:
            listeners.setLoginFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/createItem.html`:
            listeners.setCreateItemFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/updateItem.html`:
            listeners.setUpdateItemListener()
            listeners.isUserLoggedIn()
            return;
        case `/removeItem.html`:
            listeners.setDeleteItemListener()
            listeners.isUserLoggedIn()
            return;
        case `/singleItem.html`:
            listeners.displayItemListener()
            listeners.bidOnItemFormListener()
            listeners.isUserLoggedIn()
            return;
    }


}
