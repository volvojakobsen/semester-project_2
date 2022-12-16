import * as listeners from "./handlers/index.mjs";
import * as profileListeners from "./profile/index.mjs";


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
        case `/profile.html`:
            listeners.displayProfileListener()
            listeners.isUserLoggedIn()
            profileListeners.updateAvatarFormListener()
            return;
        case `/index.html`:
            listeners.displayItems()
            listeners.isUserLoggedIn()
            return;
    }


}
