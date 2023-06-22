-- creates trigger to reset valid_email when email is changed

DELIMITER //

CREATE TRIGGER UPDATE_VALID_EMAIL AFTER UPDATE ON USERS
FOR EACH ROW BEGIN
	IF NEW.email != OLD.email THEN SET NEW.valid_email = 0;
	END IF;
	END//


DELIMITER ;