CREATE TABLE findings (
    id UUID PRIMARY KEY,
    audit_cycle_id UUID NOT NULL,
    client_id UUID NOT NULL,
    finding_code VARCHAR(100),
    severity VARCHAR(50),
    title TEXT,
    description TEXT,
    status VARCHAR(50) DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
