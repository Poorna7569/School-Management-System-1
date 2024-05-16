const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL database connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'school_app',
  password: 'poorna',
  port: 5432,
});

// Middleware for parsing application/json
app.use(bodyParser.json());

// Middleware for parsing multipart/form-data (file uploads)
const upload = multer();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for handling form submissions
app.post('/submit-form', upload.single('student_photo'), async (req, res) => {
  const {
    class_name,
    first_name,
    last_name,
    gender,
    dob,
    mobile_number,
    email,
    father_name,
    mother_name,
    guardian_type,
    guardian_name,
    guardian_relation,
    guardian_email,
    guardian_phone,
    guardian_occupation,
    guardian_address,
    current_address,
    permanent_address,
    national_identification_number,
    local_identification_number,
    previous_school_details,
  } = req.body;

  // Get the student photo file if uploaded
  const studentPhoto = req.file ? req.file.buffer : null;

  try {
    // Insert the form data into the database
    await pool.query(
      'INSERT INTO admission_form (class_name, first_name, last_name, gender, dob, mobile_number, email, student_photo, father_name, mother_name, guardian_type, guardian_name, guardian_relation, guardian_email, guardian_phone, guardian_occupation, guardian_address, current_address, permanent_address, national_identification_number, local_identification_number, previous_school_details) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)',
      [
        class_name,
        first_name,
        last_name,
        gender,
        dob,
        mobile_number,
        email,
        studentPhoto,
        father_name,
        mother_name,
        guardian_type,
        guardian_name,
        guardian_relation,
        guardian_email,
        guardian_phone,
        guardian_occupation,
        guardian_address,
        current_address,
        permanent_address,
        national_identification_number,
        local_identification_number,
        previous_school_details,
      ]
    );

    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, message: 'Failed to submit form' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
