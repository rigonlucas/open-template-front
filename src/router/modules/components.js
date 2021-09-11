
export default [
    {
        path: "/Components",
        name: "components-index",
        component: () => import("@/views/ComponentsExamples/Exemplo"),
        meta: {
            isProtected: true,
            permissions: [
                "TI",
            ],
        },
        children: [
            {
                path: "forms-validation",
                name: "Components-form-validation",
                component: () => import("@/views/ComponentsExamples/Views/FormsValidation"),
            },
        ],
    },
]