import { SystemItemData } from "./item-data";

export class SystemItem extends Item<SystemItemData> {
    constructor(item: any) {
        super(item);
        if (this.img === 'icons/svg/mystery-man.svg') {
            this.useDefaultImg();
        }
    }
    useDefaultImg = () => {
        switch(this.data.type) {
            case 'pokeball':
                this.data.img = "systems/ptu/assets/icons/p.png";
                break;
            case 'berry':
                this.data.img = "systems/ptu/assets/icons/b.png";
                break;
            case 'healing':
                this.data.img = "systems/ptu/assets/icons/h.png";
                break;
            case 'feat':
                this.data.img = "systems/ptu/assets/icons/f.png";
                break;
            case 'class':
                this.data.img = "systems/ptu/assets/icons/c.png";
                break;
            case 'edge':
                this.data.img = "systems/ptu/assets/icons/e.png";
                break;
            case 'pokeEdge':
                this.data.img = "systems/ptu/assets/icons/e.png";
                break;
            case 'status':
                this.data.img = "systems/ptu/assets/icons/s.png";
                break;
            case 'ability':
                this.data.img = "systems/ptu/assets/icons/a.png";
                break;
            case 'keyword':
                this.data.img = "systems/ptu/assets/icons/k.png";
                break;
            case 'move':
                this.data.img = "systems/ptu/assets/icons/m.png";
                break;
            case 'type':
                this.data.img = "systems/ptu/assets/icons/t.png";
                break;
            case 'species':
                this.data.img = "systems/ptu/assets/icons/s.png";
                break;
            case 'held':
                this.data.img = "systems/ptu/assets/icons/h.png";
                break;
            case 'nature':
                this.data.img = "systems/ptu/assets/icons/n.png";
                break;
        }
    }
}