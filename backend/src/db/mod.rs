use sqlx::PgPool;
use crate::config::settings::Config;

pub async fn connect_db(config: &Config) -> PgPool {
    PgPool::connect(&config.database_url).await.expect("Failed to connect to database")
}
