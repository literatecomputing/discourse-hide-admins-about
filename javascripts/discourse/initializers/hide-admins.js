import { withPluginApi } from "discourse/lib/plugin-api";

const hidden_admins = settings.hidden_admins.split("|");

export default {
  name: "theme-javascript-initializer",
  initialize() {
    withPluginApi("0.8.30", (api) => {
      api.onPageChange((url) => {
        if (!url.endsWith("/about")) {
          return;
        }
        for (const admin of hidden_admins) {
          let element = document.querySelector(`[data-username=${admin}]`);
          if (element === null) {
            break;
          }
          element.classList.add("hide-me");
        }
      });
    });
  },
};
