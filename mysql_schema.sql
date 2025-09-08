-- Create database (if not exists)
CREATE DATABASE IF NOT EXISTS isms;
USE isms;

-- =========================
-- Users Table (for login & role management)
-- =========================
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin','staff','student') NOT NULL DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- Students Table (admissions)
-- =========================
CREATE TABLE IF NOT EXISTS students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    admission_no VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    gender ENUM('Male','Female','Other'),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    address TEXT,
    course VARCHAR(100),
    admission_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- Fees Table
-- =========================
CREATE TABLE IF NOT EXISTS fees (
    fee_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    due_date DATE,
    status ENUM('pending','paid') DEFAULT 'pending',
    paid_on DATE,
    receipt_no VARCHAR(50) UNIQUE,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);

-- =========================
-- Hostel Allocation
-- =========================
CREATE TABLE IF NOT EXISTS hostel (
    hostel_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    room_no VARCHAR(10) NOT NULL,
    allocation_date DATE NOT NULL,
    status ENUM('allocated','vacated') DEFAULT 'allocated',
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);

-- =========================
-- Exams Table
-- =========================
CREATE TABLE IF NOT EXISTS exams (
    exam_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    subject VARCHAR(100) NOT NULL,
    exam_date DATE NOT NULL,
    marks_obtained INT,
    max_marks INT NOT NULL,
    grade VARCHAR(5),
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);

-- =========================
-- Sample Admin User (default login)
-- Password should be hashed in real usage
-- =========================
INSERT INTO users (username, password, role)
VALUES ('admin', 'admin123', 'admin')
ON DUPLICATE KEY UPDATE username=username;
