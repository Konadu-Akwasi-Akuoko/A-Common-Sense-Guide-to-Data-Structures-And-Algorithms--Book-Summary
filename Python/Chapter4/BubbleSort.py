# The bubble sort algorithm takes an array of numbers as an argument
def bubble_sort(list):
    # In each passthrough of the array, the largest element bubbles to the end
    # And this variable would keep track of the index of the last element that was
    # sorted, so that we don't have to sort the already sorted elements again
    unsorted_until_index = len(list) - 1
    # At the start of each pass, we assume that the array is not sorted so it's false
    sorted = False
    # We would run a for loop to perform the passthrough for us whenever sorted is false
    while not sorted:
        # We would assume that the array is sorted at first, so it is true
        # But the moment we encounter an unsorted element, with the if statement we turn it
        # back to false.
        sorted = True
        # Perform a passthrough of the array, starting from index 0 to the last index which was
        # not sorted, thus i < unsortedUntilIndex.
        for i in range(unsorted_until_index):
            # Check to see if the current array element is greater than the next element.
            if list[i] > list[i + 1]:
                # If it is, then we swap the elements using array destructuring
                list[i], list[i + 1] = list[i + 1], list[i]
                # And we turn sorted to false, so that we can perform another pass through the array.
                sorted = False
                # And we decrease the unsortedUntilIndex by 1 at the end of each passthrough,
            #  so that we don't have to sort the already sorted elements again.
            unsorted_until_index -= 1
    # After we are done with a  thorough and continuous passthrough we return the sorted array

    return list
