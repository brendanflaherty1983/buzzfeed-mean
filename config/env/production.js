'use strict';

module.exports = {
  secure: {
    ssl: true,
    privateKey: './config/sslcerts/key.pem',
    certificate: './config/sslcerts/cert.pem'
  },
  port: process.env.PORT || 8443,
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: process.env.LOG_FORMAT || 'combined',
    options: {
      // Stream defaults to process.stdout
      // Uncomment/comment to toggle the logging to a log on the file system
      stream: {
        directoryPath: process.env.LOG_DIR_PATH || process.cwd(),
        fileName: process.env.LOG_FILE || 'access.log',
        rotatingLogs: { // for more info on rotating logs - https://github.com/holidayextras/file-stream-rotator#usage
          active: process.env.LOG_ROTATING_ACTIVE === 'true' ? true : false, // activate to use rotating logs 
          fileName: process.env.LOG_ROTATING_FILE || 'access-%DATE%.log', // if rotating logs are active, this fileName setting will be used
          frequency: process.env.LOG_ROTATING_FREQUENCY || 'daily',
          verbose: process.env.LOG_ROTATING_VERBOSE === 'true' ? true : false
        }
      }
    }
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID || '875640272531364',
    clientSecret: process.env.FACEBOOK_SECRET || '219924d4ca787eed0b4a432259139965',
    callbackURL: '/api/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_KEY || '2TMxe8A7O5SqPIR4xYcx0eIRn',
    clientSecret: process.env.TWITTER_SECRET || 'oaYBigTR7LQLSkdL1EmIh5VBoZ3X9gIMO0c8tzJuHfP7Iv2viW',
    callbackURL: '/api/auth/twitter/callback'
  },
  github: {
    clientID: process.env.GITHUB_ID || '1c377d73b2c3c05b5a67',
    clientSecret: process.env.GITHUB_SECRET || 'df198221d65ee862062b2d78a27406ec3808eb78',
    callbackURL: '/api/auth/github/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID || '4517850361-hf3mr49aiuvr4kmq6b42lo9rdb47obrs.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'ER649vJXT14nxEWc8J-rD4A9',
    callbackURL: '/api/auth/google/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_ID || '78lg0hm031wo0t',
    clientSecret: process.env.LINKEDIN_SECRET || 'M8wJPrmeh2rLQTlv',
    callbackURL: '/api/auth/linkedin/callback'
  },
  paypal: {
    clientID: process.env.PAYPAL_ID || 'AQqiDg65Uav_g7HX1el_V6frppxIXo6EwnovLbhkfgejydrfzouio-hMwrONsMvdF_yLmdV0jMwWOKs9',
    clientSecret: process.env.PAYPAL_SECRET || 'EN2YatEUlKG9CQnVk0BF7hPE3W2qsX0070mUdSPNmu1ZnUf0sa7zIe_0A6BVapyhOJB83EU-aTN1EeY1',
    callbackURL: '/api/auth/paypal/callback',
    sandbox: false
  },
  mailer: {
    from: process.env.MAILER_FROM || 'MAILER_FROM',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
        pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
      }
    }
  },
  seedDB: {
    seed: process.env.MONGO_SEED === 'true' ? true : false,
    options: {
      logResults: process.env.MONGO_SEED_LOG_RESULTS === 'false' ? false : true,
      seedUser: {
        username: process.env.MONGO_SEED_USER_USERNAME || 'user',
        provider: 'local',
        email: process.env.MONGO_SEED_USER_EMAIL || 'user@localhost.com',
        firstName: 'User',
        lastName: 'Local',
        displayName: 'User Local',
        roles: ['user']
      },
      seedAdmin: {
        username: process.env.MONGO_SEED_ADMIN_USERNAME || 'admin',
        provider: 'local',
        email: process.env.MONGO_SEED_ADMIN_EMAIL || 'admin@localhost.com',
        firstName: 'Admin',
        lastName: 'Local',
        displayName: 'Admin Local',
        roles: ['user', 'admin']
      }
    }
  }
};
