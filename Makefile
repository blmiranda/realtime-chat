run: run-ios run-android

run-ios:
	cd app && npm run ios -- --simulator="iPhone 15 Pro Max"
	
run-android:
	cd app && npm run android

server:
	. ./api/.venv/bin/activate && cd api && python manage.py runserver

redis:
	redis-server
