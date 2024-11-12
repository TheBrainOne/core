import * as alt from "alt-server";

/**
 * Импорт систем
*/
import "./connect/index.js";

import ConnectSystem from "./connect/index.js";
import { Database } from "./database/index.js";

class Startup {
    static async start() {
        await Database.start()
        .then(() => console.log("~g~Database connection success."))
        .catch((e) => {
            alt.log("~r~Database connection failed. Reason: ", e);
        });

        ConnectSystem.registerEvents();
    }
}

Startup.start();
