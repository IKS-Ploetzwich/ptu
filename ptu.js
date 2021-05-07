import PTUItemSheet from "./module/sheets/PTUItemSheet.js";
import { ptu } from "./module/config.js";

Hooks.once("init", () => {
    console.log("ptu | Initialising Pokemon Tabletop United System");

    CONFIG.ptu = ptu;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("ptu", PTUItemSheet);

});