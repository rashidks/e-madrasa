from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str
    jwt_secret_key: str
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 10080  # 7 days
    app_env: str = "development"

    class Config:
        env_file = ".env"
        case_sensitive = False


settings = Settings()
