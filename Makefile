NODE_IMAGE = strapi-node-app:1.0

up:
	clear && \
	docker compose up -d

down:
	clear && \
	docker compose down

install:
	clear && \
	docker build -f .docker/node/Dockerfile -t ${NODE_IMAGE} . && \
	docker run -it -v ./app:/app ${NODE_IMAGE} /bin/sh -c "npm update"