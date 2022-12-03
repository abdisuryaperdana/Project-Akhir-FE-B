const auth = {
  path: '/auth',
  name: 'Auth',
  children: [
    {
      path: "signin",
      name: "Signin",
      alias: "/",
      component: () => import('@/views/Auth/Signin.vue'),
    },
  ],
};

export default auth;