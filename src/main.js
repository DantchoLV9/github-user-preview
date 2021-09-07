import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

library.add(faGlobe, faTwitter);

createApp(App)
	.component("fa", FontAwesomeIcon)
	.mount("#app");
