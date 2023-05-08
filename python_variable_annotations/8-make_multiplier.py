#!/usr/bin/env python3
"""
    takes a float as an argument and returns a function
    that multiples a float by a given multiplier
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ calls a multiplier function """
    def multiply(x: float) -> float:
        """ funkception """
        return x * multiplier
    return multiply
