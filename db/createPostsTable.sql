CREATE TABLE posts(
    posts_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    contect TEXT,
    author_id INT REFERENCES users
)