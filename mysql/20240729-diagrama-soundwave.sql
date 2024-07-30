-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema soundwave
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema soundwave
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `soundwave` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `soundwave` ;

-- -----------------------------------------------------
-- Table `soundwave`.`friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundwave`.`friends` (
  `idFriends` BIGINT NOT NULL AUTO_INCREMENT,
  `accept` INT NULL DEFAULT NULL,
  `idSend` BIGINT NULL DEFAULT NULL,
  `idReceive` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`idFriends`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundwave`.`notifications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundwave`.`notifications` (
  `idNotifications` BIGINT NOT NULL AUTO_INCREMENT,
  `commented` VARCHAR(350) NOT NULL,
  `published` VARCHAR(350) NOT NULL,
  `notificationscol` VARCHAR(45) NULL DEFAULT NULL,
  `idSend` BIGINT NULL DEFAULT NULL,
  `idReceive` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`idNotifications`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundwave`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundwave`.`posts` (
  `idPost` BIGINT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(350) NOT NULL,
  `date_post` DATETIME NOT NULL,
  `idUser` BIGINT NOT NULL,
  PRIMARY KEY (`idPost`, `idUser`),
  INDEX `posts_has_user_idx` (`idUser` ASC) VISIBLE,
  CONSTRAINT `posts_has_comments`
    FOREIGN KEY (`idPost`)
    REFERENCES `soundwave`.`comments` (`idComments`),
  CONSTRAINT `posts_has_notifications`
    FOREIGN KEY (`idPost`)
    REFERENCES `soundwave`.`notifications` (`idNotifications`),
  CONSTRAINT `posts_has_user`
    FOREIGN KEY (`idUser`)
    REFERENCES `soundwave`.`users` (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundwave`.`profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundwave`.`profile` (
  `idProfile` BIGINT NOT NULL AUTO_INCREMENT,
  `user_img` VARCHAR(195) NULL DEFAULT NULL,
  `birthday_date` TIMESTAMP NULL DEFAULT NULL,
  `idUser` BIGINT NOT NULL,
  `location` VARCHAR(150) NULL,
  PRIMARY KEY (`idProfile`),
  INDEX `profile_has_post_idx` (`idUser` ASC) VISIBLE,
  CONSTRAINT `profile_has_post`
    FOREIGN KEY (`idUser`)
    REFERENCES `soundwave`.`posts` (`idPost`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundwave`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundwave`.`users` (
  `idUser` BIGINT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `created_at` DATE NULL DEFAULT NULL,
  `password` VARCHAR(150) NOT NULL,
  `idGender` BIGINT NULL DEFAULT NULL,
  `idLocation` BIGINT NOT NULL,
  PRIMARY KEY (`idUser`),
  CONSTRAINT `user_has_friends`
    FOREIGN KEY (`idUser`)
    REFERENCES `soundwave`.`friends` (`idFriends`),
  CONSTRAINT `user_has_profile`
    FOREIGN KEY (`idUser`)
    REFERENCES `soundwave`.`profile` (`idProfile`),
  CONSTRAINT `user_has_notifications`
    FOREIGN KEY (`idUser`)
    REFERENCES `soundwave`.`notifications` (`idNotifications`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundwave`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundwave`.`comments` (
  `idComments` BIGINT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(350) NULL DEFAULT NULL,
  `date_comment` DATETIME NULL DEFAULT NULL,
  `commentscol` VARCHAR(45) NULL DEFAULT NULL,
  `idUser` BIGINT NOT NULL,
  PRIMARY KEY (`idComments`),
  INDEX `comments_has_user_idx` (`idUser` ASC) VISIBLE,
  CONSTRAINT `comments_has_user`
    FOREIGN KEY (`idUser`)
    REFERENCES `soundwave`.`users` (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
