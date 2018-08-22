import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import App from "./App.vue";
import AuthLayout from "./layouts/Auth.vue";
import DefaultLayout from "./layouts/Default.vue";
import SignIn from "./pages/SignIn.vue";
import Register from "./pages/Register.vue";
import Contacts from "./pages/Contacts.vue";
import ContactForm from "./components/ContactForm.vue";

Vue.directive("focus", {
    inserted: function(el) {
        el.focus();
    }
});

Vue.use(VueRouter);

const navRoutes = <Array<RouteConfig>>[
    {
        path: "",
        component: AuthLayout,
        children: [
            { path: "/", component: SignIn },
            { path: "/register", component: Register }
        ]
    },
    {
        path: "",
        component: DefaultLayout,
        children: [
            { path: "/contacts", component: Contacts },
            { path: "/contacts/new", component: ContactForm },
            {
                path: "/contacts/edit/:id",
                name: "editContact",
                component: ContactForm
            }
        ]
    }
]

let router = new VueRouter({
    mode: "history",
    routes: navRoutes
});

new Vue({
    el: "#app",
    router: router,
    render: h => h(App, {})
});

// Hot Module Replacement
declare var module: any;
if (module.hot) {
    module.hot.accept();
}