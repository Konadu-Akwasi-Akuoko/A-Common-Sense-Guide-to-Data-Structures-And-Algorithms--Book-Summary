things = ["apples", "baboons", "cribs", "dulcimers"]
for thing in things:
    print("Here's a thing: %s" % thing)


def is_prime(number):
    for i in range(2, number):
        print(i)
        if number % i == 0:
            return False
    return True

is_prime(101)
