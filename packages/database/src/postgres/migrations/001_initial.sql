-- Initial migration for SAFE AI PostgreSQL database
-- This is a secure, encrypted database for sensitive security data

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Incidents table (encrypted for security)
CREATE TABLE incidents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  incident_code VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  
  -- Location (encrypted)
  location JSONB,
  encrypted_location BYTEA,
  
  -- Classification
  incident_type VARCHAR(50) NOT NULL,
  severity VARCHAR(20) NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'investigating', 'resolved', 'closed')),
  
  -- People involved
  reporter_id UUID NOT NULL,
  officer_id UUID,
  victim_id UUID,
  suspect_id UUID,
  
  -- Evidence (stored as encrypted references to external storage)
  evidence JSONB,
  encrypted_evidence_references BYTEA,
  
  -- Timestamps
  incident_time TIMESTAMP WITH TIME ZONE NOT NULL,
  reported_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  resolved_at TIMESTAMP WITH TIME ZONE,
  
  -- Security metadata
  encryption_key_id VARCHAR(100),
  access_level VARCHAR(20) DEFAULT 'restricted',
  
  -- Indexes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Officers table (law enforcement personnel)
CREATE TABLE officers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  badge_number VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  rank VARCHAR(50),
  station_id UUID,
  
  -- Contact (encrypted)
  encrypted_contact_info BYTEA,
  
  -- Authentication
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  mfa_secret VARCHAR(255),
  
  -- Status
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'retired')),
  last_login TIMESTAMP WITH TIME ZONE,
  
  -- Security
  failed_login_attempts INTEGER DEFAULT 0,
  locked_until TIMESTAMP WITH TIME ZONE,
  password_changed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  -- Audit
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_by UUID,
  updated_by UUID
);

-- Cases table (criminal cases)
CREATE TABLE cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  case_number VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  
  -- Classification
  case_type VARCHAR(50) NOT NULL,
  priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  status VARCHAR(20) DEFAULT 'open' CHECK (status IN ('open', 'investigating', 'closed', 'archived')),
  
  -- Assignment
  lead_officer_id UUID,
  assigned_team JSONB,
  
  -- Related incidents
  incident_ids UUID[],
  
  -- Evidence (encrypted references)
  evidence_references JSONB,
  encrypted_evidence_references BYTEA,
  
  -- Court information
  court_case_number VARCHAR(100),
  next_court_date TIMESTAMP WITH TIME ZONE,
  
  -- Statistics
  persons_of_interest UUID[],
  suspects UUID[],
  witnesses UUID[],
  
  -- Timelines
  opened_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  closed_at TIMESTAMP WITH TIME ZONE,
  estimated_completion_date TIMESTAMP WITH TIME ZONE,
  
  -- Audit
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Evidence table (secure evidence management)
CREATE TABLE evidence (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  evidence_number VARCHAR(50) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  
  -- Classification
  evidence_type VARCHAR(50) NOT NULL,
  category VARCHAR(50),
  
  -- Storage location
  storage_location VARCHAR(255),
  encrypted_storage_path BYTEA,
  
  -- Chain of custody
  collected_by UUID NOT NULL,
  collected_at TIMESTAMP WITH TIME ZONE NOT NULL,
  custody_chain JSONB NOT NULL,
  
  -- Security
  integrity_hash VARCHAR(255),
  encryption_key_id VARCHAR(100),
  access_level VARCHAR(20) DEFAULT 'restricted',
  
  -- Status
  status VARCHAR(20) DEFAULT 'stored' CHECK (status IN ('collected', 'analyzing', 'stored', 'returned', 'destroyed')),
  
  -- Related records
  incident_id UUID,
  case_id UUID,
  
  -- Audit
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Criminal records database (facial recognition, fingerprints, etc.)
CREATE TABLE criminal_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  person_id UUID NOT NULL,
  
  -- Biometric data (encrypted)
  encrypted_biometric_data BYTEA,
  biometric_type VARCHAR(50),
  
  -- Criminal history
  offenses JSONB,
  sentences JSONB,
  arrest_count INTEGER DEFAULT 0,
  
  -- Status
  is_wanted BOOLEAN DEFAULT false,
  warning_level VARCHAR(20) DEFAULT 'none' CHECK (warning_level IN ('none', 'low', 'medium', 'high')),
  
  -- Security
  access_level VARCHAR(20) DEFAULT 'restricted',
  encryption_key_id VARCHAR(100),
  
  -- Audit
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_updated_by UUID
);

-- Patrol logs (officer activity tracking)
CREATE TABLE patrol_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  officer_id UUID NOT NULL,
  
  -- Patrol details
  patrol_area JSONB NOT NULL,
  patrol_type VARCHAR(50),
  
  -- Timings
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE,
  
  -- Activity log
  activities JSONB,
  incidents_responded UUID[],
  miles_travelled DECIMAL(5,2),
  
  -- Equipment check
  equipment_check JSONB,
  
  -- Status
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'aborted')),
  
  -- Audit
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Analytics tables for crime pattern detection
CREATE TABLE crime_patterns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pattern_name VARCHAR(255) NOT NULL,
  description TEXT,
  
  -- Pattern data
  incident_types JSONB NOT NULL,
  location_pattern JSONB,
  time_pattern JSONB,
  suspect_pattern JSONB,
  
  -- Statistics
  confidence_score DECIMAL(3,2) CHECK (confidence_score >= 0 AND confidence_score <= 1),
  occurrence_count INTEGER DEFAULT 0,
  last_occurrence TIMESTAMP WITH TIME ZONE,
  
  -- Prediction
  predicted_next_occurrence TIMESTAMP WITH TIME ZONE,
  predicted_locations JSONB,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  verified BOOLEAN DEFAULT false,
  
  -- Audit
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_by UUID
);

-- Audit trail (immutable log of all actions)
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  user_id UUID,
  officer_id UUID,
  
  -- Event details
  action VARCHAR(100) NOT NULL,
  resource_type VARCHAR(50) NOT NULL,
  resource_id UUID,
  
  -- Changes (encrypted)
  encrypted_changes BYTEA,
  change_summary TEXT,
  
  -- Context
  ip_address INET,
  user_agent TEXT,
  location JSONB,
  
  -- Security
  session_id VARCHAR(255),
  request_id VARCHAR(255),
  
  -- Indexes
  INDEX idx_audit_event_time (event_time),
  INDEX idx_audit_user (user_id),
  INDEX idx_audit_resource (resource_type, resource_id)
) WITH (fillfactor = 70);

-- Create indexes for performance
CREATE INDEX idx_incidents_status ON incidents(status);
CREATE INDEX idx_incidents_type ON incidents(incident_type);
CREATE INDEX idx_incidents_time ON incidents(incident_time);
CREATE INDEX idx_incidents_location ON incidents USING GIN(location);

CREATE INDEX idx_officers_badge ON officers(badge_number);
CREATE INDEX idx_officers_status ON officers(status);
CREATE INDEX idx_officers_station ON officers(station_id);

CREATE INDEX idx_cases_status ON cases(status);
CREATE INDEX idx_cases_number ON cases(case_number);
CREATE INDEX idx_cases_officer ON cases(lead_officer_id);

CREATE INDEX idx_evidence_status ON evidence(status);
CREATE INDEX idx_evidence_type ON evidence(evidence_type);
CREATE INDEX idx_evidence_case ON evidence(case_id);
CREATE INDEX idx_evidence_incident ON evidence(incident_id);

CREATE INDEX idx_patrols_officer ON patrol_logs(officer_id);
CREATE INDEX idx_patrols_time ON patrol_logs(start_time);

CREATE INDEX idx_patterns_active ON crime_patterns(is_active);
CREATE INDEX idx_patterns_confidence ON crime_patterns(confidence_score DESC);

-- Create functions for automatic updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_incidents_updated_at 
  BEFORE UPDATE ON incidents 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_officers_updated_at 
  BEFORE UPDATE ON officers 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cases_updated_at 
  BEFORE UPDATE ON cases 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_evidence_updated_at 
  BEFORE UPDATE ON evidence 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_criminal_records_updated_at 
  BEFORE UPDATE ON criminal_records 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_patrol_logs_updated_at 
  BEFORE UPDATE ON patrol_logs 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_crime_patterns_updated_at 
  BEFORE UPDATE ON crime_patterns 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create encryption functions
CREATE OR REPLACE FUNCTION encrypt_sensitive_data(data TEXT, key_id VARCHAR)
RETURNS BYTEA AS $$
BEGIN
  RETURN pgp_sym_encrypt(data, key_id);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION decrypt_sensitive_data(encrypted_data BYTEA, key_id VARCHAR)
RETURNS TEXT AS $$
BEGIN
  RETURN pgp_sym_decrypt(encrypted_data, key_id);
END;
$$ LANGUAGE plpgsql;

-- Create view for active incidents
CREATE VIEW active_incidents AS
SELECT 
  i.id,
  i.incident_code,
  i.title,
  i.incident_type,
  i.severity,
  i.status,
  i.incident_time,
  i.reported_at,
  o.first_name || ' ' || o.last_name as reporting_officer
FROM incidents i
LEFT JOIN officers o ON i.reporter_id = o.id
WHERE i.status IN ('pending', 'investigating');

-- Create view for case statistics
CREATE VIEW case_statistics AS
SELECT 
  c.case_type,
  COUNT(*) as total_cases,
  COUNT(CASE WHEN c.status = 'open' THEN 1 END) as open_cases,
  COUNT(CASE WHEN c.status = 'closed' THEN 1 END) as closed_cases,
  AVG(EXTRACT(EPOCH FROM (c.closed_at - c.opened_at))/86400) as avg_days_to_close
FROM cases c
GROUP BY c.case_type;

-- Insert initial admin officer (password should be changed on first login)
INSERT INTO officers (badge_number, first_name, last_name, email, password_hash, rank)
VALUES (
  'ADMIN001',
  'System',
  'Administrator',
  'admin@safeai.gov.ng',
  crypt('ChangeMe123!', gen_salt('bf', 10)),
  'Commissioner'
) ON CONFLICT (email) DO NOTHING;

COMMENT ON TABLE incidents IS 'Security incidents with encrypted sensitive data';
COMMENT ON TABLE officers IS 'Law enforcement officers with secure authentication';
COMMENT ON TABLE cases IS 'Criminal investigation cases';
COMMENT ON TABLE evidence IS 'Secure evidence management with chain of custody';
COMMENT ON TABLE criminal_records IS 'Encrypted criminal records database';
COMMENT ON TABLE patrol_logs IS 'Officer patrol activity tracking';
COMMENT ON TABLE crime_patterns IS 'AI-detected crime patterns for predictive policing';
COMMENT ON TABLE audit_logs IS 'Immutable audit trail for security and accountability';