

build:
	docker image build -t express-and-s .

run:
	docker container run -e postgres://sights_and_sounds_user:F6MXRPskRjthgJY6rWNvxRxeXkbANwjt@dpg-ce5632g2i3mjq979hhi0-a.oregon-postgres.render.com/sights_and_sounds -d -p 3001:3001 --rm --name express-and-s express-and-s:latest

tag:
	docker tag express-and-s:latest corykitchens/express-and-s:latest

publish: tag
	docker image push corykitchens/express-and-s:latest

rm:
	docker container kill express-and-s