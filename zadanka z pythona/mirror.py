def mirror(text):
    return


"""
Your task is to write a mirror function, that will reverse given string and print it like in the example:

ETSEAI ROF EHT NIW

**********
* IAESTE *
* FOR    *
* THE    *
* WIN    *
**********

Align text to the right.
"""

assert mirror('ETSEAI ROF EHT NIW') == '''**********
* IAESTE *
* FOR    *
* THE    *
* WIN    *
**********'''
assert mirror('eW deen uoy') == '''********
* We   *
* need *
* you  *
********'''
assert mirror('Mary plays the piano') == '''*********
* yraM  *
* syalp *
* eht   *
* onaip *
*********'''
assert mirror('yraM syalp eht onaip') == '''*********
* Mary  *
* plays *
* the   *
* piano *
*********'''
assert mirror('ehT weiv morf eht esuohthgil deticxe neve eht tsom denosaes relevart') == '''**************
* The        *
* view       *
* from       *
* the        *
* lighthouse *
* excited    *
* even       *
* the        *
* most       *
* seasoned   *
* traveler   *
**************'''



print('noice')
