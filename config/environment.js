const development = {

    name: 'development',
    port: 9000,
    asset_path: './assets',
    session_cookie_key: 'blahsomething',
    db: "codeial_development_3",
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "aruneshsingh827@gmail.com",
            pass: "abzypintqjmcrole",
        }
    },
    google_client_id: "352125659744-g78vnkv9ria05rq7q5o8eli8ngphmdf0.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:9000/users/auth/google/callback",
    jwt_secret: 'codeial',


}

const production = {
    name: process.env.CODEIAL3_ENVIRONMENT,
    asset_path: process.env.CODEIAL3_ASSET_PATH,
    port: process.env.CODEIAL3_PORT,
    session_cookie_key: process.env.CODEIAL3_SESSION_COOKIE_KEY,
    db: process.env.CODEIAL3_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.CODEIAL3_GMAIL_USERNAME,
            pass: process.env.CODEIAL3_GMAIL_PASSWORD,
        }
    },
    google_client_id: process.env.CODEIAL3_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.CODEIAL3_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.CODEIAL3_GOOGLE_CALL_BACK_URL,
    jwt_secret: process.env.CODEIAL3_JWT_SECRET,

}

// module.exports = eval(process.env.CODEIAL3_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL3_ENVIRONMENT);
module.exports = development;
// module.exports=production;