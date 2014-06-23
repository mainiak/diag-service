diag-service
============

Simple web service, returning JSON with host details. Usefull for fixing networking issues within Docker.

```
IN="mainiak/diag-service"
CN="diag_service"
docker pull $IN
docker run --name="$CN" -p 9000:8000 -d $IN
# http://<docker_ip>:9000/
docker stop $CN
```

See https://registry.hub.docker.com/u/mainiak/diag-service/
