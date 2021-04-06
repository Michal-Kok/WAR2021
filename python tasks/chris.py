def name_in_str(sentence, name):
    return


"""
Simple as that, your task is to find name within given sentence, like in the example:

Across the rivers. --- chris
 c      h  ri   s

Make it case sensitive.

Letters must appear in the right order.
"""

assert name_in_str("Across the rivers", "chris") is True
assert name_in_str("Next to a lake", "chris") is False
assert name_in_str("Under a sea", "chris") is False
assert name_in_str("A crew that boards the ship", "chris") is False
assert name_in_str("A live son", "Allison") is False
assert name_in_str("Just enough nice friends", "Jennifer") is False
assert name_in_str("thomas", "Thomas") is True
assert name_in_str("pippippi", "Pippi") is True
assert name_in_str("pipipp", "Pippi") is False
assert name_in_str("ppipip", "Pippi") is False

print('noice')
