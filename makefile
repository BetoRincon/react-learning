.PHONY: build-test
build-test: build test

.PHONY: build
build:
	docker-compose up --build -d

.PHONY: test
test:
	docker-compose run --rm webapp npm run test

.PHONY: start
start:
	docker-compose up --build