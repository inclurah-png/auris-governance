CREATE TABLE audit_cycles (
    id UUID PRIMARY KEY,
    client_id UUID NOT NULL,
    cycle_label VARCHAR(255),
    status VARCHAR(50) DEFAULT 'draft',
    composite_score DECIMAL(5,2),
    audit_badge VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
