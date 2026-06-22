-- AURIS Governance
-- Clients Table

CREATE TABLE clients (
    id UUID PRIMARY KEY,
    organisation_id UUID,
    name VARCHAR(255) NOT NULL,
    industry VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
