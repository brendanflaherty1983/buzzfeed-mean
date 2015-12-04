'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean-test',
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
        directoryPath: process.cwd(),
        fileName: 'access.log',
        rotatingLogs: { // for more info on rotating logs - https://github.com/holidayextras/file-stream-rotator#usage
          active: false, // activate to use rotating logs 
          fileName: 'access-%DATE%.log', // if rotating logs are active, this fileName setting will be used
          frequency: 'daily',
          verbose: false
        }
      }
    }
  },
  port: process.env.PORT || 3001,
  app: {
    title: defaultEnvConfig.app.title + ' - Test Environment'
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
    sandbox: true
  },
  mailer: {
    from: process.env.MAILER_FROM || 'buzzfeedmean@gmail.com',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'buzzfeedmean@gmail.com',
        pass: process.env.MAILER_PASSWORD || 'c8QUc8uh'
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
  },
  // This config is set to true during grunt coverage
  coverage: process.env.COVERAGE || false
};
