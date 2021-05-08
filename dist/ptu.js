import { SystemActor } from "./module/actors/actor.js";
import { ptu } from "./module/config.js";
import { SystemItem } from "./module/items/item.js";
import PTUItemSheet from "./module/sheets/PTUItemSheet.js";
Hooks.once("init", () => {
    console.log("ptu | Initialising Pokemon Tabletop United System");
    CONFIG.ptu = ptu;
    CONFIG.Actor.entityClass = SystemActor;
    CONFIG.Item.entityClass = SystemItem;
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("ptu", PTUItemSheet);
});
