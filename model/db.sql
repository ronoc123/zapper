CREATE TABLE user_account (
    user_id BIGSERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(200) NOT NULL,
    user_role VARCHAR(50) NOT NULL
);


CREATE TABLE project (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(150) NOT NULL,
    createdby INT NOT NULL,
    FOREIGN KEY (createdby) REFERENCES user_account (user_id)
);


CREATE TABLE ticket (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(200) NOT NULL,
    type VARCHAR(50) NOT NULL,
    severity VARCHAR(50) NOT NULL,
    createdAt VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    createdBy INT NOT NULL,
    project_id INT NOT NULL,
    FOREIGN KEY (createdBy) REFERENCES user_account (user_id),
    FOREIGN KEY (project_id) REFERENCES project (id)
);


CREATE TABLE comment (
    id BIGSERIAL PRIMARY KEY,
    description VARCHAR(200) NOT NULL,
    ticket_id INT NOT NULL,
    user_id INT NOT NULL,
    projectID INT NOT NULL,
    creator VARCHAR(50) NOT NULL,
    createdAt VARCHAR(100) NOT NULL,
    FOREIGN KEY (ticket_id) REFERENCES ticket (id),
    FOREIGN KEY (projectID) REFERENCES project (id),
    FOREIGN KEY (user_id) REFERENCES user_account (user_id)
);

CREATE TABLE project_interactions (
    userID INT NOT NULL,
    projectID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES user_account (user_id),
    FOREIGN KEY (projectID) REFERENCES project (id),
    PRIMARY KEY (userID, projectID)
);

CREATE TABLE ticket_interactions (
    userID INT NOT NULL,
    ticketID INT NOT NULL,
    projectID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES user_account (user_id),
    FOREIGN KEY (ticketID) REFERENCES ticket (id),
    FOREIGN KEY (projectID) REFERENCES project (id),
    PRIMARY KEY (userID, ticketID, projectID)
);


SELECT * FROM ticket
SELECT user_name FROM user_account
JOIN ticket_interactions ON ticket_interactions.ticketid = ticket.id WHERE ticket_interactions.userid = 1;


