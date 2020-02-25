module.exports = {
  apps : [{
    name: 'gg',
    script: './bin/www',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
  
    watch: false,
    
    env: {
      "NODE_ENV": "development",
      "PORT": 4000
    },
    
  }],
};
