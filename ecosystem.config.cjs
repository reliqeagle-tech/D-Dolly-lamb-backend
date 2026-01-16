module.exports = {
  apps: [
    {
      name: "ddollylamb",
      script: "./server.js",         // Your entry file
      instances: 1,                  // Or "max" for all CPU cores
      exec_mode: "fork",             // "cluster" also works
      watch: false,                  // Never watch in production
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      },
      error_file: "./logs/error.log",
      out_file: "./logs/output.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss"
    }
  ]
};
