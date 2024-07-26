import {heroTimeline} from "./blocks/heroTimeline.js";
import {infoTimeline} from "./blocks/infoTimeline.js";
import {takeawaysTimeline} from "./blocks/takeawaysTimeline.js";

/*TODO: Импортировать и добавить остальные блоки*/

export function createScrollAnimations() {
    heroTimeline()
    infoTimeline()
    takeawaysTimeline()
}