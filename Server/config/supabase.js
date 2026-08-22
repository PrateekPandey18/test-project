const { createClient } = require('@supabase/supabase-js');

// Ensure environment variables are loaded if this file is called early
require('dotenv').config(); 

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Fail fast if the environment variables are missing
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file.');
}

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    // Disable automatic token refresh since we are managing sessions manually via JWTs
    autoRefreshToken: false,
    persistSession: false,
  }
});

module.exports = supabase;