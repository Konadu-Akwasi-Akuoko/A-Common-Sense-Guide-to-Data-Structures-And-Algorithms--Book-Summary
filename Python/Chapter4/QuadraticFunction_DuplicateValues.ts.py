def has_duplicate_value(array):
    steps = 0  # declare a variable to count the number of steps
    for i in range(len(array)):
        # start a loop from 0 to the length of the array
        for j in range(len(array)):
            # start another loop from 0 to the length of the array
            steps += 1  # increment the steps variable by one
            if i != j and array[i] == array[j]:
                # check if the current element is equal to any other element in the array, except itself
                return True  # if yes, return true and exit the function
            print(steps)  # if no, print the current value of steps
    return False  # if the loops finish without finding any duplicates, return false


print(
    has_duplicate_value(
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
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
        ]
    )
)  # call the function with an example array and print the result

# This is a quadratic function because the number of steps is proportional to the square of the input size.
# For example, if the input size is n, then the number of steps is n * n or n^2.
# This is because for each element in the outer loop, the inner loop will run n times.
# Therefore, the total number of times the inner loop runs is n + n + ... + n = n * n.
# This means that as the input size increases, the number of steps increases quadratically.
