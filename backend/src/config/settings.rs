use dotenv::dotenv;
use std::env;

pub struct Config {
    pub database_url: String,
    pub github_token: String,
    pub jwt_secret: String,
}

impl Config {
    pub fn from_env() -> Self {
        dotenv().ok();
        Self {
            database_url: env::var("DATABASE_URL").expect("DATABASE_URL must be set"),
            github_token: env::var("GITHUB_TOKEN").expect("GITHUB_TOKEN must be set"),
            jwt_secret: env::var("JWT_SECRET").expect("JWT_SECRET must be set"),
        }
    }
}
