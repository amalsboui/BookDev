FROM python:3.9-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends gcc

COPY requirements.txt . 
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

EXPOSE 7001

CMD ["python", "app.py"]
