ALTER TABLE users
DROP COLUMN password;

ALTER TABLE users
ADD COLUMN user_password TEXT;