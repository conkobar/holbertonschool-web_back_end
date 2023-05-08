#!/usr/bin/env python3
"""
    function was given to be annotated
"""


from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ element_length function declaration"""
    return [(i, len(i)) for i in lst]
