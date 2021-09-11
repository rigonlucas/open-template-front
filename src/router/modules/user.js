
export default [
    {
        path: "/conta",
        name: "conta",
        component: () => import("@/views/UserAccount/UserAccount"),
        meta: {
            isProtected: true,
            permissions: [
                "TI",
            ],
        },
        children: [
            {
                path: "meusdados",
                name: "conta-meusdados",
                component: () => import("@/views/UserAccount/Views/AddressPage"),
            },
        ],
    },
]