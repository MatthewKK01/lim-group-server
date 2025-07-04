export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  auth:{
     secret: env('JWT_SECRET'), 
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});
