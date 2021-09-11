
export default [
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Auth/components/Register"),
        meta: {
            onlyGuest: true,
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Auth/components/Login"),
        meta: {
            onlyGuest: true,
        },
    },
]