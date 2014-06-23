diag-service
============

```
IN="mainiak/diag-service"
CN="diag_service"
docker pull $IN
docker run --name="$CN" -p 9000:8000 -d $IN
# http://<docker_ip>:9000/
docker stop $CN
```
