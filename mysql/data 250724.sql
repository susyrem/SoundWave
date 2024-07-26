INSERT INTO artists (nameArtist, gender) VALUES
('The Beatles', 'Rock'),
('Adele', 'Pop'),
('Daft Punk', 'Electronic'),
('Shakira', 'Pop'),
('Juanes', 'Rock');

-- Insert data into the Albums table
INSERT INTO albums (title, releaseDate, artistId) VALUES
('Abbey Road', '1969-09-26', 1),
('25', '2015-11-20', 2),
('Random Access Memories', '2013-05-17', 3),
('Laundry Service', '2001-11-13', 4),
('Fíjate Bien', '2000-11-21', 5);

-- Insert data into the Songs table
INSERT INTO songs (title, duration, albumId) VALUES
('Come Together', '00:04:20', 1),
('Hello', '00:03:45', 2),
('Get Lucky', '00:06:09', 3),
('Hips Don\'t Lie', '00:03:38', 4),
('A Dios le Pido', '00:04:05', 5);

-- Insert data into the Users table
INSERT INTO users (nameUser, email, password) VALUES
('Carlos González', 'carlos.gonzalez@example.com', 'password123'),
('Laura Martínez', 'laura.martinez@example.com', 'password456'),
('Miguel Fernández', 'miguel.fernandez@example.com', 'password789'),
('Sofía López', 'sofia.lopez@example.com', 'password101'),
('Pedro Sánchez', 'pedro.sanchez@example.com', 'password202');

-- Insert data into the Playlists table
INSERT INTO playlists (nameList, userId) VALUES
('My Favorites', 1),
('Classic Rock', 2),
('Pop Hits', 3),
('Electro Party', 4),
('Latin Vibes', 5);

-- Insert data into the PlaylistDetails table
INSERT INTO details (playlistId, SongId) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 5),
(3, 2),
(3, 4),
(4, 3),
(4, 4),
(5, 5);