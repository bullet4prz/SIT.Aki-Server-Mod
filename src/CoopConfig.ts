import fs from "fs";
import path from "path";

export class CoopConfig {

    public protocol: string;
    public externalIP: string;
    public webSocketPort: number;
    public useExternalIPFinder: boolean;

    constructor() {
        this.protocol = "http";
        this.externalIP = "127.0.0.1";
        this.webSocketPort = 6970;
        this.useExternalIPFinder = true;

        console.log(`COOP MOD: Coop Config Loading >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
        var coopConfigFilePath = path.join(__dirname, "..", "config", "coopConfig.json");
        // console.log(coopConfigFilePath);
        if(!fs.existsSync(coopConfigFilePath)) {
            console.warn(`Coop Config doesn't exist, creating default config.`);
            console.warn(`BE AWARE! ExternalIPFinder is ACTIVE! The externalIP config value is ignored!`);
            const coopcfgString = JSON.stringify(this, null, 4);
            fs.writeFileSync(coopConfigFilePath, coopcfgString);
        }
        else {
            Object.assign(this, JSON.parse(fs.readFileSync(coopConfigFilePath).toString()))
            console.log(`COOP MOD: Coop Config loaded.`);
            if(this.useExternalIPFinder) {
                console.log(`COOP MOD: BE AWARE! ExternalIPFinder is ACTIVE!`);
            }
        }
        // console.log(this);
    }

}
