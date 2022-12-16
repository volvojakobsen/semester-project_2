import * as listeners from "./handlers/index.mjs";
import * as profileListeners from "./profile/index.mjs";


export default function router() {
    const path = location.pathname;

    switch (path) {
        case `/semester-project_2`:
            listeners.displayItems()
            listeners.isUserLoggedIn()

            return;
        case `/semester-project_2/register.html`:
            listeners.setRegisterFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/login.html`:
            listeners.setLoginFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/createItem.html`:
            listeners.setCreateItemFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/updateItem.html`:
            listeners.setUpdateItemListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/removeItem.html`:
            listeners.setDeleteItemListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/singleItem.html`:
            listeners.displayItemListener()
            listeners.bidOnItemFormListener()
            listeners.isUserLoggedIn()
            return;
        case `/semester-project_2/profile.html`:
            listeners.displayProfileListener()
            listeners.isUserLoggedIn()
            profileListeners.updateAvatarFormListener()
            return;
        case `/semester-project_2/index.html`:
            listeners.displayItems()
            listeners.isUserLoggedIn()
            return;
    }


}
