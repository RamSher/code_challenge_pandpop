# DO NOT MODIFY
target: run_api run_frontend

run_api:
	cd backend \
	&& pip3 install -r requirements.txt \
	&& python3 -m backend

run_frontend:
	cd frontend \
	&& npm install \
	&& npm run dev
