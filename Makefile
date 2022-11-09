kill:
	sudo fuser -k 3000/tcp 
pg:
	sudo -u postgres psql
dev:
	nodemon		
migrate:
	npx sequelize-cli db:migrate
undo:
	npx sequelize-cli db:migrate:undo	
	

