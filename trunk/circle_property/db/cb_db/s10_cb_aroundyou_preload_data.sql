-- To insert aroundyou_operation_period init data 
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("Today", "today", "1");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("Specific date", "specificdate", "1");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("A month", "month", "1");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("A week", "week", "1");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("All days", "allday", "0");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("all days, beside Monday", "2_3_4_5_6_7", "0");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("all days, beside Tuesday", "1_3_4_5_6_7", "0");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("all days, beside Wednesday", "1_2_4_5_6_7", "0");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("all days, beside Thursday", "1_2_3_5_6_7", "0");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("all days, beside Friday", "1_2_3_4_6_7", "0");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("all days, beside Saturday", "1_2_3_4_5_7", "0");
INSERT INTO `aroundyou_operation_period` (`aroundyou_operation_period__display`, `aroundyou_operation_period__type`,`aroundyou_operation_period__one_time`) VALUES ("all days, beside Sunday", "1_2_3_4_5_6", "0");

-- To insert aroundyou_company_ref init data
INSERT INTO `aroundyou_company_ref` (`prefix`, `description`,`number`) VALUES ("test-tag", "this is for test purpose", "0");
INSERT INTO `aroundyou_company_ref` (`prefix`, `description`,`number`) VALUES ("product-tag", "this is for product tag purpose", "0");
INSERT INTO `aroundyou_company_ref` (`prefix`, `description`,`number`) VALUES ("benefit-tag", "this is for benefit tag purpose", "0");
