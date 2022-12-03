const dFinishGood = {
    path: '/dashboard-finish-good',
    name: 'dashboard-finish-good',
    children: [
      {
        path: "",
        name: "Default-FG",
        component: () => import('@/views/Dashboard-FG/Dashboard-FG.vue'),
        // meta: { auth: true },
      },
      {
        path: "delivery",
        name: "Delivery",
        children:[
          {
              path: '',
              name: 'Delivery',
              // route level code-splitting
              // this generates a separate chunk (About.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import('@/views/Dashboard-FG/Delivery/Delivery.vue'),
              // meta: { auth: true }
          },
          {
            path: 'detail-part/:id',
            name: 'detail-delivery',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/Dashboard-FG/Delivery/DetailDelivery.vue'),
            // meta: { auth: true }
        },
        ]
      },
      {
        path: "production",
        name: "Production",
        children:[
          {
              path: '',
              name: 'Production',
              // route level code-splitting
              // this generates a separate chunk (About.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import('@/views/Dashboard-FG/Production/Production.vue'),
              // meta: { auth: true }
          }
        ]
      },
    ],
  };
  
  export default dFinishGood;