#!/usr/bin/env bash
python backend/app.py > /dev/null &
nosetests --with-coverage
