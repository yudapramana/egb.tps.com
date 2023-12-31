import { createWebHistory, createRouter } from "vue-router";

// lazy-loaded
const AppContainer = () => import("./App.vue")
const DashboardContainer = () => import("./containers/Dashboard.vue")
const LandingContainer = () => import("./containers/Landing.vue")

const Profile = () => import("./components/Profile.vue")
const Dashboard = () => import("./components/Dashboard.vue")
const Login = () => import("./components/Login.vue")
const Register = () => import("./components/Register.vue")
const Landing = () => import("./components/Landing.vue")
const Thanks = () => import("./components/Thanks.vue")
const DaftarTamu = () => import("./components/DaftarTamu.vue")
const Tentang = () => import("./components/Tentang.vue")
const Kontak = () => import("./components/Kontak.vue")
const DataUser = () => import("./components/user-role/DataUser.vue")
const DataRole = () => import("./components/user-role/DataRole.vue")

const routes = [
    {
        path: "/admin",
        name: "",
        redirect: "dashboard",
        component: DashboardContainer,
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "/profile",
                name: "Profile",
                component: Profile,
            },
            {
                path: "/data-user",
                name: "DataUser",
                component: DataUser,
            },
            {
                path: "/data-role",
                name: "DataRole",
                component: DataRole,
            },
        ],
    },
    {
        path: "/",
        name: "",
        redirect: "landing",
        component: LandingContainer,
        children: [
            {
                path: "/login",
                name: "Login",
                component: Login,
            },
            {
                path: "/register",
                name: "Register",
                component: Register,
            },
            {
                path: "/landing",
                name: "Landing",
                component: Landing,
            },
            {
                path: "/thanks",
                name: "Thanks",
                component: Thanks,
            },
            {
                path: "/daftar-tamu",
                name: "DaftarTamu",
                component: DaftarTamu,
            },
            {
                path: "/tentang",
                name: "Tentang",
                component: Tentang,
            },
            {
                path: "/kontak",
                name: "Kontak",
                component: Kontak,
            },
        ],
    },
    
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: Login,

    // },
    // {
    //     path: "/register",
    //     name: "Register",
    //     component: Register
    // },
    // {
    //     path: "/landing",
    //     name: "Landing",
    //     component: Landing
    // },
    // {
    //     path: "/thanks",
    //     name: "Thanks",
    //     component: Thanks
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/landing', '/thanks', '/daftar-tamu', '/tentang', '/kontak'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;