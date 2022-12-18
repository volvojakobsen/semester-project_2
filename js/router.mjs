import * as listeners from "./handlers/index.mjs";
import * as profileListeners from "./profile/index.mjs";


export default function router() {
    const path = location.pathname;

    switch (path) {
        case `/index.html`:
        case `/`:
        case `/semester-project_2/`:
        case `/semester-project_2/index.html`:
            listeners.displayItems()
            listeners.isUserLoggedIn()

            return;
        case `/register.html`:
        case `/semester-project_2/register.html`:
            listeners.setRegisterFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/login.html`:
        case `/semester-project_2/login.html`:
            listeners.setLoginFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/createItem.html`:
        case `/createItem.html`:
            listeners.setCreateItemFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/updateItem.html`:
        case `/updateItem.html`:
            listeners.setUpdateItemListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/removeItem.html`:
        case `/removeItem.html`:
            listeners.setDeleteItemListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/singleItem.html`:
        case `/singleItem.html`:
            listeners.displayItemListener()
            listeners.bidOnItemFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/profile.html`:
        case `/profile.html`:
            listeners.displayProfileListener()
            listeners.isUserLoggedIn()
            profileListeners.updateAvatarFormListener()
            return;
    }


}
