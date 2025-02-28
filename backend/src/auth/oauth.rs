use reqwest::Client;
use sqlx::PgPool;
use serde::{Deserialize, Serialize};
use std::env;

#[derive(Deserialize)]
struct GitHubTokenResponse {
    access_token: String,
}

pub async fn github_login(pool: &PgPool, code: &str) -> Result<String, reqwest::Error> {
    let client = Client::new();
    let github_client_id = env::var("GITHUB_CLIENT_ID").expect("GITHUB_CLIENT_ID must be set");
    let github_client_secret = env::var("GITHUB_CLIENT_SECRET").expect("GITHUB_CLIENT_SECRET must be set");

    let response = client.post("https://github.com/login/oauth/access_token")
        .form(&[
            ("client_id", github_client_id.as_str()),
            ("client_secret", github_client_secret.as_str()),
            ("code", code),
        ])
        .header("Accept", "application/json")
        .send()
        .await?
        .json::<GitHubTokenResponse>()
        .await?;

    Ok(response.access_token)
}
