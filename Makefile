OK_COLOR=\033[32;01m
NO_COLOR=\033[0m

.PHONY: lambda

lambda: clean lambda-docker lambda-package

clean:
	@rm -rf dist/

lambda-docker:
	@echo "$(OK_COLOR)==> Building lambda docker container$(NO_COLOR)"
	docker build -t blockie-proxy:lambda -f Dockerfile.lambda .

lambda-package:
	@echo "$(OK_COLOR)==> Creating lambda package$(NO_COLOR)"
	docker run -v ${PWD}/dist:/dist -it blockie-proxy:lambda /bin/bash -c "zip dist/package -q -r node_modules *.js"
