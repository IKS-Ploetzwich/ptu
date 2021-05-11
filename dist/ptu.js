var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    preloadHandlebarsTemplates();
});
const preloadHandlebarsTemplates = () => __awaiter(void 0, void 0, void 0, function* () {
    const templatePaths = [
        'systems/ptu/templates/sheets/shared/item-header.hbs'
    ];
    return loadTemplates(templatePaths);
});
