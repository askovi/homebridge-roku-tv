import { API } from "homebridge";

import { PLATFORM_NAME } from "./settings";
import { RokuTvPlatform } from "./roku-tv-platform";

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, RokuTvPlatform);
};
