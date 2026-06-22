CREATE TABLE framework_assessments (
    id UUID PRIMARY KEY,
    audit_cycle_id UUID NOT NULL,
    framework_code VARCHAR(100),
    compliance_status VARCHAR(50),
    score DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
