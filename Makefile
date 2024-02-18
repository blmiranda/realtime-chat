run: run-ios run-android

run-ios:
	cd app && npm run ios -- --simulator="iPhone 15 Pro Max"
	
run-android:
	cd app && npm run android

run-server:
	cd api && node index.ts
