use axum::{Router, routing::{get, post}};
use sqlx::PgPool;
use std::sync::Arc;
use tokio::net::TcpListener; // ✅ Используем TcpListener для запуска сервера

mod config;
mod db;
mod routes;

use config::settings::Config;
use db::connect_db;
use routes::{users, repositories, tasks};

#[tokio::main]
async fn main() {
    let config = Config::from_env();
    let db_pool = connect_db(&config).await;
    let db_pool = Arc::new(db_pool);

    let app = Router::new()
        // .route("/users/login", post(users::login))
        // .route("/repositories/create", post(repositories::create_repo))
        // .route("/tasks/create", post(tasks::create_task))
        .with_state(db_pool);

    let listener = TcpListener::bind("0.0.0.0:3000").await.unwrap();
    println!("🚀 Server running on {}", listener.local_addr().unwrap());

    axum::serve(listener, app.into_make_service())
        .await
        .unwrap();
}
