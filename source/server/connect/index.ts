import * as alt from "alt-server";

type EventType = {
    name: string;
    isActive: boolean;
}

export default class ConnectSystem {
    static events: Array<EventType> = new Array({name: "playerConnect", isActive: false});


    static registerEvents(): void {
        for(let event of ConnectSystem.events) {
            if(event.isActive) continue;

            alt.on(event.name, ConnectSystem.playerConnect);
            event.isActive = true;

            console.log(`~g~Event ${event.name} activated`)
        }
    }
    
    static unRegisterEvents(): void {
        for(let event of ConnectSystem.events) {
            if(!event.isActive) continue;

            alt.off(event.name, ConnectSystem.playerConnect);
            event.isActive = false;
        }
    }

    static playerConnect(player: alt.Player): void {
        console.log(`${player.name} has connected.`)

        player.model = 'mp_m_freemode_01';
        player.spawn(813, -279, 66);
    }
}