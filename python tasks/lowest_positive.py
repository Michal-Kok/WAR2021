def f(arr):
    pass


"""
Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
"""

assert f([3, 4, -1, 1]) == 2
assert f([1, 2, 0]) == 3
assert f([-6, 2, -3, 0]) == 1
assert f([1, 1, 2, 2, 4]) == 3
assert f([-1, -1, 0, 0, 2, 4, 1, 3]) == 5
