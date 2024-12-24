-- Tạo bảng Users
CREATE TABLE users (
    id SERIAL PRIMARY KEY, -- ID tăng tự động
    full_name VARCHAR(255),
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    bio TEXT,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    location VARCHAR(255),
    date_of_birth DATE,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    role VARCHAR(50) DEFAULT 'user'
);

-- Tạo bảng Genres
CREATE TABLE genres (
    id SERIAL PRIMARY KEY, -- ID tăng tự động
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng Poems
CREATE TABLE poems (
    id SERIAL PRIMARY KEY, -- ID tăng tự động
    user_id INT NOT NULL,
    genre_id INT NOT NULL,
    prompt TEXT NOT NULL,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Thiết lập quan hệ với bảng Users
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    -- Thiết lập quan hệ với bảng Genres
    CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genres (id) ON DELETE SET NULL
);

-- Tạo bảng Collections
CREATE TABLE collections (
    poem_id INT REFERENCES poems(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY (poem_id, user_id),
    CONSTRAINT unique_collection UNIQUE (poem_id, user_id)
);
