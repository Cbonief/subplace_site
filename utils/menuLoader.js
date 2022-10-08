import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import { getData , child, databaseRef, getFileURL} from './firebase';

async function getMenus(){
    const menuDatabase = await getData(child(databaseRef, 'Menus/')).catch((error) => { console.error(error)})
    var menus = menuDatabase.val().sort((a, b) => {
        return a.position - b.position;
    });
    return menus
}

async function getMenuImages(items){

    var image_promise = [];
    items.map((item) =>{
        image_promise.push(getFileURL(item.image_name));
    });
    //Each image is a promise that results in the image url.
    return Promise.all(image_promise);
}

export {getMenus, getMenuImages};