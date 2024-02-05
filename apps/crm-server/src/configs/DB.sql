CREATE TABLE
    IF NOT EXISTS users (
        id UUID DEFAULT gen_random_uuid(),
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) PRIMARY KEY,
        password VARCHAR(255) NOT NULL,
        phone_number INT NOT NULL,
        address VARCHAR(255) NOT NULL,
        is_admin BOOLEAN DEFAULT false
    );

INSERT INTO users(full_name, email, password, phone_number, address, is_admin )
VALUES ('שמואל מחפוד', 'sm0524432584@gmail.com', 'Shmu2023', 0524432584, 'מקובר 4 בני ברק', true)