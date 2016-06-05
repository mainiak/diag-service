#!/bin/sh
set -ex

#OPT="--no-cache"
docker build $OPT -t mainiak/diag-service .
