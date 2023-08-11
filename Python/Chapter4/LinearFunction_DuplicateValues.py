# Define a function named hasDuplicateValueLinear that takes a list as a parameter
def hasDuplicateValueLinear(array):
    # Declare a variable named steps and initialize it to 0
    steps = 0
    # Declare a list named existingNumbers and initialize it to the length of the array
    existingNumbers = [0] * (max(array) + 1)
    print("Length existingNumb: " + str(len(existingNumbers)))
    # Use a for loop to iterate over the elements of the array parameter
    for i in range(len(array)):
        # Increment the steps variable by 1 for each iteration
        print(i)
        steps += 1
        print(i)
        # Check if the element at index i of the array parameter is already in the existingNumbers list
        if existingNumbers[array[i]] == 1:
            # If yes, return true, indicating that the array parameter has a duplicate value
            return True
        else:
            # If no, add the element at index i of the array parameter to the existingNumbers list with a value of 1
            existingNumbers[array[i]] = 1
    # After the loop, print the value of steps to the console
    print(steps)
    # Return false, indicating that the array parameter does not have a duplicate value
    return False


# Call the function with an example list
hasDuplicateValueLinear(
    [
        1,
        5,
        3,
        9,
        6,
        4,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
    ]
)

# The function hasDuplicateValueLinear takes a list as a parameter and checks if it
# has any duplicate values. It does this by creating another list called
# existingNumbers and using its indexes to store 1s for each number encountered
# in the given list. If the function finds a 1 at the index corresponding to
# the current number, it means that number has already been seen before and is
# a duplicate. In that case, the function returns true. Otherwise, it returns
# false after completing the loop.
