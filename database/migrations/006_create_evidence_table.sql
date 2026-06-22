CREATE TABLE evidence (
    id UUID PRIMARY KEY,
    finding_id UUID,
    audit_cycle_id UUID,
    filename VARCHAR(255),
    storage_path TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
