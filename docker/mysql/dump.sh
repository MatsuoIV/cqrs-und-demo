#!/bin/bash

mysqldump -u root -p1234 mdb_apt_jobs > /docker-entrypoint-initdb.d/schema.sql
chmod 777 /docker-entrypoint-initdb.d/schema.sql