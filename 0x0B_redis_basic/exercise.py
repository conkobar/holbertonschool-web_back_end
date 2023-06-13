#!/usr/bin/env python3
"""
redis client
"""


import redis
from typing import Union
import uuid


class Cache():
    """ redis cache """

    def __init__(self) -> None:
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """ store to redis """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key
