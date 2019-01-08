.DEFAULT:GOAL	:= help
.PHONY: deploy

OWNER			= und
SERVICE_NAME	= cqrs-demo

TAG_DEV			= dev
TAG_MYSQL		= mysql
ENV				?= dev

PROJECT_NAME	= $(OWNER)-$(ENV)-$(SERVICE_NAME)
CONTAINER_NAME	= $(PROJECT_NAME)_backend
IMAGE_DEV		= $(PROJECT_NAME):$(TAG_DEV)
IMAGE_MYSQL		= ${PROJECT_NAME}:${TAG_MYSQL}

build: ## Build docker image: make build
	docker build -f docker/dev/Dockerfile -t $(IMAGE_DEV) docker/dev/
	docker build -f docker/mysql/Dockerfile -t ${IMAGE_MYSQL} docker/mysql/

install-dev:
	docker run --rm -v $(PWD)/app:/home/node/app:rw --entrypoint="yarn" $(IMAGE_DEV) install

up:
	docker-compose up -d
	make attach

attach:
	docker attach $(CONTAINER_NAME)

help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"); {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3)'