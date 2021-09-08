import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import User from "../views/User";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/:username",
		name: "Preview",
		component: User,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
