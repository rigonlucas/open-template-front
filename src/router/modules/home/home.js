
export default [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home"),
        meta: {
            isProtected: true,
        },

    },
]
