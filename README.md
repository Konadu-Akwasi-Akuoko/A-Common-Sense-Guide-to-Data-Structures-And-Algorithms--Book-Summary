# A-Common-Sense-Guide-to-Data-Structures---Algorithms---Book-Notes

*This is my summary of **A Common Sense Guide to Data Structures And Algorithms, Second Edition** by Jay Wengrow. This summary helps me learn and serves as a quick reference. It does not replace the book, so I recommend buying and reading it if you want to understand the concepts better. Use this repository as a guide and a reference only.*

**Please send me a DM by [Twitter](https://twitter.com/akuoko_konadu) or [LinkedIn](https://www.linkedin.com/in/konaduakwasiakuoko-codedkaa/) if you are the publisher and you want this repository to be private. I will change the settings accordingly.**

Help the creator out by buying the book on [Amazon](https://www.amazon.com/Common-Sense-Guide-Structures-Algorithms-Second/dp/1680507222). Just to clarify I ain't getting any money by linking the book here.

**Contributions:** Issues, comments, and pull requests are welcome

This version here uses TypeScript. To go over to the Python version go [here](/Python/README.md).

---

## Table of Content

1. [Why Data Structures Matter](#1-why-data-structures-matter)
2. [Why Algorithms Matter](#2-why-algorithms-matter)
3. [Chapter 3](#3-chapter-3)
4. [Speeding Up Your Code With Big O](#4-speeding-up-your-code-with-big-o)
5. [Optimizing Code With or Without Big O](#5-optimizing-code-with-or-without-big-o)
6. [Optimizing for Optimistic Scenarios](#6-optimizing-for-optimistic-scenarios)

---

## 1. Why Data Structures Matter

- **Data:** it refers to all types of information down to the most basic numbers and strings.
- **Data Structures:** it is how data is organized. It is the data in an array, int, set, string, etc.
- Organization of data doesn't just matter for organization sake, but it can significantly impact how fast your code runs.

### The Array: The Foundational Data Structure

Array is the most basic data structure in CS.

The size of an array is how many data elements the array holds.

The index of an array is the number that identifies where a piece of data lives inside the array.

![An array](Assets/PNG/Chapter1/Array.png)

### Data Structure Operations

To understand the performance of any data structure we need to analyze the common ways our code might interact with the data structure.

Many data structures are used in four main ways:

1. **Reading:** Looking something up at a **particular spot** within the data structure.
2. **Searching:** Looking for a **particular value** within a data structure.
3. **Inserting:** Adding a new value to the data structure.
4. **Deleting:** Removing a value from the data structure

### Measuring Speed

When measuring the speed of a code, we measure how fast an operation takes in terms of steps it takes, not the amount of time it takes.

If operation A takes 5 steps and operation B takes 500 steps to finish the same amount of taks, we say operation A is the fastest

#### Reading

In terms of reading from an array, it's one of the fastest operations. Because computers know how to jump to a specified index at anywhere in the array at any given time.

Reading fro an array is a very efficeint operation. Because computers can read any index by jumpint to the memory address in **one step**.

- **NB:** We can say that the worst case scenario from reading from an array is 1. Where 1 is the number of operations it takes.

#### Searching

Searching means providing the computer with a value, and asking it to return the index of that value's location.

Searching is tedious, since the computer has no way to jump to a particular value.

- **NB:** A computer has immediate access to all of it's memory addresses, but it has no idea offhand what values are contained at each memory address.

**Linear Search:** it is the type of searching where the computer checks each cell one at a time to find it's target value (the value you're searching for), and the target value's index.

> What is the maximum number of steps a computer would need to perform a linear search?

- For N number of cells in an array, linear search would take a maximum of N steps. Where **mostly N is the size of the array**.
- So this means that for a 500 array, in the work case scenario a linear search would tak up to 500 steps to find the index of an element you are looking for.
- And if by chance that element is not in the array, it'll need to check every cell in the array to make sure the value you are looking for is not in the array. And that is the worst case scenario for a linear search algorithm.

The following diagrams demonstrate the process the computer would use to
search for "elderberries" within our array:

![Linear search of an ordinary array](Assets/PNG/Chapter1/Linear_Search__Ordianry_Array.png)

**NB:** Searching is less efficient than reading. Since reading takes one step, and searching can take N steps (where N is the size of the array).

### Insertion

The efficiency of inserting a new piece of data into an array depends on where within the array you're inserting.

Insetting the value at the end of an array is the best time, and inserting it at they beginning is the worst time.

**Why?** As we've seen computers always know the size of an array, and the index which it begins. So inserting a value at the last place is just adding to the size of the array.

If the array begins at memory address 1010 and is of size 5, that means its final memory address is 1014. So, to insert an item beyond that would mean adding it to the next memory address, which is 1015. Once the computer calculates which memory address to insert the new value into, it can do so in one step.

But with insertion at the beginning or in the middle of an array is where the inefficiency lies. If you want to insert a new element at the beginning of an array all the elements must shift one side to the right for the array to have space to insert the new element.

*[Picture of Inserting at the beginning of an array]*

This means that some of the values were shifted to the right to make room for the `figs`.

The worst case scenario for insertion into an array is when we insert data at the beginning of the array. This is because when inserting at the beginning of the array, we have to move all the other values one cell to the right. So we can say that the worst case scenario is **`N+1`** for an array containing `N` elements.

### Deletion

Deletion from an array is the process of elimination the value at a particular index.

Like insertion, the worst case scenario of deleting an element is deleting the very first element of the array, because now we would need to shift all values to the next left cell.

But we can say that, for an an array containing `N` elements the maximum number of steps a deletion take is **`N`** steps.

### Sets

A set is another data structure just like an array but it does not allow you to duplicate data.

Reading, searching, and deletion operations on sets is the same as it is on arrays.

But insertion is where it works differently. When inserting into a set, the set would need to do a search first (which is N, where N is the size of the array). Only is the set does not yet contain our new value is when the set would insert it.

So for the worst case scenario, it is inserting a value at the beginning of a set. The set would search it's values (N) then if the value is not found in the array, it would shift all array values to the immediate right cell (which is also N, thus it takes N steps, where N is the size of the array). After the shift has been done, it inserts the value at the beginning of the set (which also takes 1 operation). Thus we can say that the worst time of inserting into a set is **`1+2N`**. Where `2N = 1st N (Searching the array) + 2nd N (Shifting all values to the immediate right cell)`.

### Wrapping Up

Analyzing the number of steps an operation takes is the heart of understanding the performance of data structures.

## 2. Why Algorithms Matter

### I'll fill in the blanks here

## 3. Chapter 3

### I'll fill in the blanks here 2

## 4. Speeding Up Your Code with Big O

### I'll fill in the blanks here 3

### A Linear Solution

Let's talk about a clever method to find duplicate numbers in a list of numbers without relying on nested loops. Imagine you have a list like `[3, 5, 8]`, and you want to check if there are any duplicate numbers in it. This solution is linear, thus `O(N)`.

```javascript
function hasDuplicateValue(array) {
  let steps = 0;
  let existingNumbers = [];
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (existingNumbers[array[i]] === 1) {
      return true;
    } else {
      existingNumbers[array[i]] = 1;
    }
  }
  console.log(steps);
  return false;
}
```

- If we run hasDuplicateValue([1, 4, 5, 2, 9]) now, we’ll see that the output in the
JavaScript console is 5, which is the same as the size of our array. We’d find
this to be true across arrays of all sizes. This algorithm, then, is O(N).

#### How It Works

1. First, you create an empty list called `existingNumbers`.
2. Then, you loop through each number in your original list (array) one by one.
3. As you go through the numbers, you place a special marker (we'll use the number 1) in the `existingNumbers` list at the position that corresponds to the number you're examining.

For example:

- When you encounter the number 3, you put a 1 at position 3 in `existingNumbers`. It looks like this: `[undefined, undefined, undefined, 1]`.
- When you encounter the number 5, you put a 1 at position 5 in `existingNumbers`. It becomes: `[undefined, undefined, undefined, 1, undefined, 1]`.
- Finally, when you check the number 8, you put a 1 at position 8 in `existingNumbers`. It ends up like this: `[undefined, undefined, undefined, 1, undefined, 1, undefined, undefined, 1]`.

#### The Trick

Before placing a 1 in the `existingNumbers` list, you check if there's already a 1 at that position. If there is, it means you've already encountered that number before, and that's a duplicate! You then stop and say, "Hey, I found a duplicate!" If you finish checking all the numbers without finding any duplicates, you conclude, "Nope, no duplicates here."

#### Efficiency

This method is clever because it only needs to loop through the numbers once. The number of steps it takes is roughly the same as the number of numbers you have. For instance, if you have 5 numbers, it takes about 5 steps. We call this "linear time" or O(N) efficiency. It's an efficient way to find duplicates in a list!

### Wrapping Up

A strong grasp of Big O Notation helps you recognize sluggish code and choose faster algorithms among options. Yet, there are cases where Big O Notation wrongly suggests two algorithms are equally fast when one is truly quicker. In the upcoming chapter, you'll discover how to assess algorithm efficiencies, even when Big O falls short in providing nuanced insights.

## 5. Optimizing Code With or Without Big O

Big O Notation is a useful tool for comparing algorithms and choosing the best one for a situation. However, sometimes two algorithms may have the same Big O, but one is faster than the other.

### Selection Sort

Selection Sort is a sorting algorithm that works by finding the smallest value in an array and swapping it with the first element, then repeating the process for the remaining elements until the array is sorted. This is the steps to perform a selection sort algorithm:

  1. Iterate through the array from left to right, and identify the smallest value encountered in the array, store the smallest value's index in a variable. If we find a value smaller than the one indexed, we update the index to the new lowest value.
  !["Selection sort in action"](/Assets/PNG/Chapter5/selection_sort_pic1.png)
  2. After identifying the index with the lowest value, we exchange that value with the value at the starting index of the current pass. For instance, in the first pass-through we started at index 0, this involves swapping the lowest value with the value at index 0. in the second pass through we will start at index 1, so the smallest value would be swapped with the value at index 1, and in the third pass through we will start at index 2, it would be swapped with the value at index 2. Essentially, in each pass-through, the smallest value found is moved to the corresponding position based on the pass number.
  ![Alt text](/Assets/PNG/Chapter5/selection_sort_pic2.png)
  3. Repeat step 1 and step 2 until we reach a pass-through that would start at the end of the array. By then the array would have been fully sorted.

### Selection Sort in Action

A walk through of the steps of Selection Sort using this example array: `[4, 2,
7, 1, 3]`.

#### First passthrough

We begin by inspecting the value at index 0, which, being the only value encountered so far, is considered the lowest so we store its index in a variable.

![Selection sort in action](/Assets/PNG/Chapter5/selection_sort_in_action_pic1.png)

- **Step 1:** We compare the 2 with the lowest value so far (which happens to be 4), now 2 is less than 4. So the lowest value is now 2, we then store its value 2 and its index value 1:

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic2.png)

- **Step 2:**  We compare the next value 7 with the lowest value 2. 7 is greater than 2, so 2 stays our lowest value:

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic3.png)

- **Step 3:** We compare 1 with the lowest value so far which is 2. Because 1 is less than 2, now 1 becomes our lowest value and the stored index changes from 1 to 3 which is the index of the value 1:

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic4.png)

- **Step 4:** We compare 3 to the lowest value, which is now 1. But because it's bigger than 1 the lowest value still stays 1. From this point we can safely say that the lowest value in the first passthrough is 1, with an index of 3:

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic5.png)

- **Step 5:** Because 1 is the lowest value, we swap it with whatever value is at
index 0—the index we began this pass-through with:

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic6.png)

Now the lowest value is now in it's correct spot `[1,2,7,4,3]`.
Now we are ready to begin our second passthrough

#### Second passthrough

We've already sorted the cell at index 0, so this passthrough will begin at index 1. And at the start this will be our lowest value in this second passthrough, so we will store this lower value which is 2, with it's index which is 1.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic7.png)

- **Step 6:** Move to the next number, which is 7. We compare 7 and the lowest stored value, which is 2, but 7 is greater than 7 so we maintain 2 as or stored lowest value.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic8.png)

- **Step 7:** Move to the next number. Now compare 4 to 2, 4 is bigger than two, so 2 stays our lowest number.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic9.png)

- **Step 8:** Move to the next number, which is 3, now compare it to the lowest number, 2. Still 2 is our lowest value.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic10.png)

We’ve reached the end of the array. Since the lowest value from this pass-through was already in its correct spot, we don’t need to perform a swap.

#### Third passthrough

We've already sorted the cell at index 0 and index 1, so this passthrough will begin at index 2. And at the start this will be our lowest value in this second passthrough, so we will store this lower value which is 7, with it's index which is 2.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic11.png)

- **Step 9:** We compare 4 with 7, and since 4 is our new lowest value we store it's index and the value.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic12.png)

- **Step 10:** We move on to the next value 3 which is lower than 4, so we store the value and it's index.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic13.png)

- **Step 11:** At the end of the array we will now swap the lowest value which happens to be 3 with the number we started our pass through with, which happens to be index 7.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic14.png)

From here we can see that the array has been correctly sorted, but the computer doesn't know that so we must begin the fourth pass through.

#### Fourth passthrough

We start the fourth passthrough with index 3, and the lowest value so far is 4.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic15.png)

- **Step 12:** We then compare 7 with 4, and since 4 remains the lowest value, no action is taken.

At the end of this array the lowest value was 4 and it's already at the position where we started this passthrough so no need for a swap. Now because all the cells besides the last one are correctly sorted, that must mean the last cell is also in the correct order, and our entire array is properly sorted.

![Alt text](/Assets/PNG/Chapter5/selection_sort_in_action_pic16.png)

### Code Implementation: Selection Sort

```TypeScript
function selectionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
}

```

Let’s break this down line by line (cd into this file to better understand this concept: `TypeScript/Chapter5/SelectionSort.ts`):

We begin a loop that represents each pass-through. It uses the variable `i` to point to each value of the array, and goes up through the second-to-last value: `for(let i = 0; i < array.length - 1; i++) {`

It doesn’t need to run for the last value itself, since the array will be fully sorted by that point.

Next, we begin keeping track of the index containing the lowest value we encounter so far: `let lowestNumberIndex = i;`

This lowestNumberIndex will be `0` at the beginning of the first pass-through, `1` at the beginning of the second, and so on.

The reason we specifically keep track of the index is because we’ll need access to both the lowest value and its index in the rest of our code, and we can use the index to reference both. (We can check the lowest value by calling `array[lowestNumberIndex]`).

Within each pass-through, we check the remaining values of the array to see if there might be a lower value than the current lowest value: `for(let j = i + 1; j < array.length; j++) {`

Indeed, if we find a lower value, we store this new value’s index in lowestNumber Index: `if(array[j] < array[lowestNumberIndex]) { lowestNumberIndex = j; }`

By the end of the inner loop, we’ll have found the index of the lowest number from this pass-through.

If the lowest value from this pass-through is already in its correct place (which would happen when the lowest value is the first value we encounter in the passthrough), we don’t need to do anything.

But if the lowest value is not in its correct place, we need to perform a swap. Specifically, we swap the lowest value with the value at `i`, which was the index we started the pass-through with:

```TypeScript
if(lowestNumberIndex != i) {
let temp = array[i];
array[i] = array[lowestNumberIndex];
array[lowestNumberIndex] = temp;
}
```

Finally, we return the sorted array: `return array;`

### The efficiency of selection sort

A selection sort algorithm contains 2 steps, that is comparisons and swaps.

Looking back at our example which had 5 elements we had to make 10 comparisons:

|Pass through number     |Number of comparisons     |
|------------------------|--------------------------|
| 1                      | 4 comparisons            |
| 2                      | 3 comparisons            |
| 3                      | 2 comparisons            |
| 4                      | 1 comparison             |

By addition we get a total of 10 comparisons for the 5 element array.

So to put it in terms of `N`, where `N` is the number of elements in an array we can say that for an element with `N` arrays we make `(N-1) + (N-2) + (N-3) ... + 1` comparisons. And if we substitute our 5 elements array into this equation we would get: `(5-1) + (5-2) + (5-3) + 1 = 10` comparisons.

And for the swap, we only make one swap per each passthrough. This is because we will either encounter a value which is lower than what  we started the passthrough with and swap it at the end of the passthrough or we won't encounter any value which will be lower than the value we started the passthrough with. So in the worst case scenario let's say we make a swap for each comparison or passthrough that we make, that means for a 5 element array we make 4 swaps. To represent it in terms of `N`, that will be `N-1`. So based on this we can say that in a worst case scenario (an array in descending oder) the total number of steps for a selection sort algorithm with 5 elements is `10 comparisons + 4 swaps = 14 steps`.

Contrast this with a bubble sort algorithm where in a worst case scenario (an array in descending oder), we will have to make a swap each and every comparison. Here is a side by side comparison of bubble sort and selection sort algorithm:

|N Elements     |Max # of Steps in Bubble Sort Algorithm      |Max # of Steps in Selection Sort Algorithm     |
|---------------|---------------------------------------------|-----------------------------------------------|
| 5             | 20                                          | 14 (10 comparisons 4 swaps)                   |
| 10            | 90                                          | 54 (45 comparisons 9 swaps)                   |
| 20            | 380                                         | 199 (180 comparisons 19 swaps)                |
| 40            | 1560                                        | 819 (780 comparisons 39 swaps)                |
| 80            | 6320                                        | 3239 (3160 comparisons 79 swaps)              |

From this comparison, we see that selection sort takes about half the time it takes to complete a sort using bubble sort algorithm.

### Ignoring Constants

Although selection sort seems twice as fast than bubble sort, but in Big O notation they are *described in the same way*, thus O(N<sup>2</sup>). Why?

Remember Big O answers this key question: **if there are N elements hwo many steps will the algorithm take?** Bubble sort takes roughly half of N<sup>2</sup> steps, so maybe we can say that the actual steps it takes is (N<sup>2</sup>/2) right? Thus for 5 elements we have approximately `(5^2/2) = 12.5` steps, which is not so far off from 14 rather than 25 (N<sup>2</sup>) right?

Well in Big O notation a selection sort algorithm is described as O(N<sup>2</sup>). Why?

Because **Big O notation ignores constants**, thus Big O does not include regular/whole numbers which are not exponents. These numbers are simply dropped from the expression.

Big O Notation expresses the upper bound of an algorithm’s time complexity, focusing on its behavior as the input size grows. It simplifies the expression of complexity by dropping constants and lower order terms. For example, an algorithm taking N/2 steps is expressed as O(N), disregarding the division by 2. Similarly, an algorithm taking N<sup>2</sup> + 10 steps is expressed as O(N<sup>2</sup>), ignoring the constant 10.

This simplification can lead to scenarios where two algorithms have the same Big O Notation but different actual performance. For instance, both Selection Sort and Bubble Sort are O(N<sup>2</sup>) algorithms, but Selection Sort is typically twice as fast as Bubble Sort. Despite this, both are still classified under O(N<sup>2</sup>) in Big O Notation. This highlights that while Big O Notation provides a high-level understanding of algorithmic efficiency, it may not reflect the exact performance difference between algorithms.

### Big O categories

This leads us to the next concept: **Big O Notation only concerns
itself with general categories of algorithm speeds.**

Let's use physical buildings as an analogy here. There are, of course, many different types of buildings. There are one-floor single-family homes, and two-floor single-family homes, and three-floor single-family homes. There are high-rise apartment buildings with varying numbers of floors. And there are skyscrapers with various heights and shapes. If we were to compare two buildings, one of which is a single-family home
and one of which is a skyscraper, it becomes almost moot to mention how
many floors each one has. Because the two buildings are so incredibly different in their sizes and functions, we don’t need to say, “This one is a two-story home, while the other is a one-hundred-floor skyscraper.” We may as well just call one a house and the other a skyscraper. Calling them by their general categories is enough to signify their vast differences.

The same applies to algorithm efficiencies. If we compare, say, an O(N) algorithm with an O(N<sup>2</sup>) algorithm, the two efficiencies are so different that it doesn’t really matter whether the O(N) algorithm is actually O(2N), or O(N / 2) or even O(100N).

Big O Notation doesn’t care merely about the number of steps an algorithm takes. It cares about the long-term trajectory of the algorithm’s steps as the data increases. O(N) tells a story of straight growth that the steps increase in a straight line according to some proportion of the data. This is true even when the steps are 100N. O(N<sup>2</sup>) tells a different story, one of exponential growth.

Exponential growth is a completely different category compared to any form of O(N). This point is really driven home when we consider that O(N<sup>2</sup>) will, at some point in data growth, become slower than O(N) multiplied by any factor.

The following graph draws might drive home the point

![Alt text](/Assets/PNG/Chapter5/Graph.png)

Therefore, when comparing two efficiencies that belong to two different categories of Big O, it’s enough to identify them by their general category. Talking about O(2N) when compared to O(N2) is like talking about a two-story house compared to a skyscraper. We may as well just say that O(2N) is part of the general category of O(N).

All the types of Big O we’ve encountered, whether it’s O(1), O(log N), O(N), O(N<sup>2</sup>), are general categories of Big O
that are widely different from each other. Multiplying or dividing the number of steps by a regular number doesn’t make them change to another category.
However, when two algorithms fall under the same classification of Big O, it doesn’t necessarily mean that both algorithms have the same speed. After all, Bubble Sort is twice as slow as Selection Sort even though both are O(N<sup>2</sup>). So, while Big O is perfect for contrasting algorithms that fall under different classifications of Big O, when two algorithms fall under the same classification, further analysis is required to determine which algorithm is faster.

### A Practical Example

Now let's take a look at two identical functions and see why it is important to do further analysis even when 2 algorithms have the same Big O notation.

```TypeScript
function printNumbersVersionOne(upperLimit: number): void {
  let number: number = 2;
  while (number <= upperLimit) {
    if (number % 2 === 0) {
      console.log(number);
    }
    // Increase number by 1
    number += 1;
  }
}

function printNumbersVersionTwo(upperLimit: number): void {
  let number: number = 2;
  while (number <= upperLimit) {
    console.log(number);
    // Increase number by 2
    number += 2;
  }
}

```

From the above code we can see that both of these functions are printing all even numbers from 2 to the `upperLimit` number say 100. From the code it is clear that the second version is twice as fast than the first version, this is because the second version does not need to add 1 to each number and do a comparison to check if a number is even or odd. Now let's see how these algorithms are expressed in Big O.

So let's start by asking our selves: "If there are N elements how many steps will the algorithm take?" The first version takes about N steps, where N is the upper limit, thus having a time complexity of O(N). The second version is more efficient, taking only N/2 steps, but in Big O Notation, constants are dropped, so its time complexity is also O(N). Despite both algorithms having the same Big O Notation, the second version is twice as fast as the first, demonstrating that further analysis beyond Big O Notation is necessary to determine the speed of an algorithm.

### Significant Steps

Let's go back to the function `printNumbersVersionOne` again, we said it takes N steps because the loop runs N times, where N is the `upperLimit`.

But is that all the steps that the function takes?

No, if we break things down we will see that there is comparisons going on, there is logging to the console going on, and even increments going on. But these steps are not important to us, why?

Although all steps are important but in Big O we would always drop the constants to simplify the expression.

Let’s apply this here. If we count all the steps, we have N comparisons, N incrementing, and N / 2 printings. This adds up to 2.5N steps. However, because we eliminate the constant of 2.5, we express this as O(N). So, which step was significant? They all were, but by dropping the constant, we effectively focus more on the number of times the loop runs, rather than the exact details of what happens within the loop.

### Wrapping Up

In this chapter we learnt that we can use Big O to roughly determine the efficiency of an algorithm. We also learnt that when 2 or more algorithms falls within the same Big O expression, we can do further analysis to find out what can be the best algorithm among them.

## 6. Optimizing For Optimistic Scenarios

From all what we have done to this point we are always thinking of the worst case scenario. But sometimes knowing how to optimize for all scenarios can help you choose the appropriate algorithm for every
situation.

### Insertion Sort

We've learn't about bubble sort algorithm, and selection sort algorithm which both have a Big O notation of O(N<sup>2</sup>). Now let's learn about selection sort that will show you why it's important to analyze an algorithm beyond the worst case scenario.

Here are the steps of how an insertion sort alogrithm works:

- In the first pass-through, we temporarily remove the value at index 1 (the second cell) and store it in a temporary variable. This will leave a gap at that index, since it contains no value:

![Alt text](Assets/PNG/Chapter6/insertion_sort_1.png)

In subsequent pass-through, we remove the values at the subsequent indexes just as we did for the index 1.

- We then begin a shifting phase, where we take each value to the left of the gap and compare it to the value in the temporary variable:

![Alt text](Assets/PNG/Chapter6/insertion_sort_2.png)

If the **value to the left of the gap is greater than the temporary variable, we shift that value to the right**:

![Alt text](Assets/PNG/Chapter6/insertion_sort_3.png)

**As we shift values to the right, inherently the gap moves leftward. As soon as we encounter a value that is lower than the temporarily removed value, or we reach the left end of the array, this shifting phase is over.**

- We then insert the temporarily removed value into the current gap:

![Alt text](Assets/PNG/Chapter6/insertion_sort_4.png)

- Steps 1 through 3 represent a single pass-through. We repeat these pass-troughs until the pass-through begins at the final index of the array. By then, the array will have been fully sorted.

### Insertion Sort in Action

Let's  see how an insertion sort work by sorting this array `[4, 2, 7, 1, 3]`.

We begin the first pass-through by inspecting the value at index `1`. This happens to contain the value `2`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action1.png)

- **Step 1:** We temporarily remove the 2 and keep it inside a variable called `temp_value`. We represent this value by shifting it above the rest of the array

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action2.png)

- **Step 2:** We compare the `4` to the `temp_value`, which is `2`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action3.png)

- **Step 3:** Because `4` is greater than `2`, we shift the `4` to the right

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action4.png)

There’s nothing left to shift, as the gap is now at the left end of our array.

- **Step 4:** We insert the `temp_value` `(2)` into the gap at the left end of our array, completing our first pass-through

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action5.png)

Now let's begin our second pass through at index `2` which have the value of `7`, remember we started our pass through at index 1.

- **Step 5:** In our second pass-through, we temporarily remove the value at index `2`. We’ll store this in `temp_value`. In this case, the `temp_value` is `7`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action6.png)

- **Step 6:** We compare the `4` which is to the left of our `temp_value` to our `temp_value` which is `7`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action7.png)

The `4` is lower, so we won’t shift it, and since we reached a value that is less than the `temp_value`, this shifting phase is over.

**NB: The shifting phase becomes over only when we encounter a value that is less than our `temp_value` or there is no items left in the array to compare our `temp_value` to**

- **Step 7:** We insert the `temp_value` back into the gap, ending the second passthrough.

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action8.png)

We now begin the third pass-through at index `3`

- **Step 8:** We temporarily remove the `1` which have an index of `3`, and store it in `temp_value`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action9.png)

- **Step 9:** We compare the 7 to the `temp_value`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action10.png)

- **Step 10:** The 7 is greater than 1, so we shift the 7 to the right

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action11.png)

- **Step 11:** We compare the 4 to the `temp_value`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action12.png)

- **Step 12:** The 4 is greater than 1, so we shift it to the right as well

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action13.png)

- **Step 13:** We now compare the 2 to the `temp_value`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action14.png)

- **Step 14:** The 2 is greater than the `temp_value`, so we shift it to the right

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action15.png)

- **Step 15:** The gap has reached the left end of the array and there are no items left to the left side of the array, so we insert the `temp_value` into the gap, concluding this pass-through

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action16.png)

Now we begin our fourth passthrough

- **Step 16:** At the start of the 4th passthrough we temporarily remove the value from index `4`, making it our temp_value. This is the value `3`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action17.png)

- **Step 17:** We compare the 7 to the temp_value

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action18.png)

- **Step 18:** The 7 is greater than the `temp_value`, so we shift the 7 to the right

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action19.png)

- **Step 19:** We compare the 4 to the `temp_value`

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action20.png)

- **Step 20:** The 4 is greater than the 3, so we shift the 4 to the right

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action21.png)

- **Step 21:** We compare the 2 to the `temp_value`. The 2 is less than our `temp_value` which is 3, so our shifting phase is complete

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action22.png)

- **Step 22:** We insert the `temp_value` back into the gap created by our shifting

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action23.png)

And after 22 steps our 5 element array is now fully sorted

![Alt text](Assets/PNG/Chapter6/insertion_sort_in_action24.png)

### Code Implementation: Insertion Sort

Here is a TypeScript implementation of insertion sort algorithm:

```TypeScript
function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    const tempValue = array[i];
    let position = i - 1;

    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position + 1] = array[position];
        position = position - 1;
      } else {
        break;
      }
    }
    array[position + 1] = tempValue;
  }
  return array;
}
```

Let's try and understand this code step by step.

Remember we start the loop at index 1 that runs through the entire array, and each round of this loop represents a passthrough.

``` TypeScript
for (let i = 1; i < array.length; i++) {
```

For each passthrough we save the value we are removing in a variable called `tempValue`.

```TypeScript
tempValue = array[i];
```

Now we create a variable called `position` which will start immediately to the left of the index of the `tempValue`. This `position` represent the index of the value we will compare against the `tempValue`.

```TypeScript
let position = i - 1;
```

As we move through the passthrough, this `position` will keep moving leftward as we compare each value to the `tempValue`.

Then there is an inner loop which runs as long as `position` is greater than or equal to 0.

```TypeScript
while (position >= 0) {
```

We then check whether the value at `position` is greater than the `tempValue`.

```TypeScrpt
if (array[position] > tempValue) {
```

If it is then we shift that value at `position` to the right.

```TypeScript
array[position + 1] = array[position];
```

Now moving into the next round of the while loop we decrement `position` by 1.

```TypeScript
position = position - 1;
```

And if by any chance we encounter a value that is  greater than or equal to our `tempValue`, that means we must stop our passthrough, and it's time to move the `tempValue` into the gap.

```TypeScript
} else {
  break;
}
```

The final step of each passthrough is to move the `tempValue` into the gap  created. Note at this point, we have found the correct position for our tempValue in the array. However, due to the decrement in the last unsuccessful comparison `position = position - 1`, the `position` is now actually one index to the left of where `tempValue` should be. Therefore, we need to insert `tempValue` at `position + 1`.

```TypeScript
array[position + 1] = tempValue;
```

After all passthrough have completed we return the sorted array.

```TypeScript
return array;
```

### The Efficiency of Insertion Sort

In an insertion sort algorithm there are four types of steps that occur, thus removals, comparisons, shifts, and insertions. In oder to understand the efficiency of an insertion sort algorithm we need to tally all of these steps.

Let's start with comparisons. A comparison takes place each time we compare a value to the left of the gap with the `tempValue`. In a worst case scenario where the array is in reverse oder we need to compare each value when doing a passthrough with the `tempValue`. This is because in a reverse array every value to the left of `tempValue` will always be greater than the `tempValue` and a passthrough will only end when the gap reaches the left end of the array.

In a reverse array when we start the pass through at index 1 we make one comparison to the left of the `tempValue`, since there is only one value to the left of the `tempValue` when doing the first passthrough. In the second passthrough a maximum number of 2 comparisons is made, because all the values to the left of index 2 which will be our `tempValue` will be greater than our `tempValue`. In the last passthrough we need to compare the `tempValue` with every single value in the array besides the `tempValue` itself, because in a reverse oder array every value to the left of the last element will be greater than the value of the last element. From this we can say that in every last passthrough of a reverse oder array we make `(N - 1)` comparisons, so for a reverse oder array of 5 elements in the last passthrough we will make 4 comparisons.

From the above we can formulate the total number of comparisons made for a reverse oder array, and that is `1 + 2 + 3 + ... (N - 1)` comparisons. In our example array that contains 5 elements we can have `(5 - 4) + (5 - 3) + (5 - 2) + (5 -1)` which will be `1 + 2 + 3 + 4 = 10` comparisons.

In a reverse oder array of 10 elements, there would be `1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45` comparisons. And for a reverse oder array of 20 elements, there would be a total number of 190 comparisons, and so on.

By examining this pattern we can see that approximately there are N<sup>2</sup> / 2 comparisons to be made in a worst case scenario(10<sup>2</sup> / 2 is 50, and 20<sup>2</sup> / 2 is 200 which we also got  45 and 160 comparisons respectively).

Now let's analyze the steps in shifting. In a reverse array shifting occurs every time we make a comparison, thus N<sup>2</sup> / 2.

Now when we add up comparisons and shifts for a worst case scenario we get N<sup>2</sup> / 2 + N<sup>2</sup> / 2 we will get N<sup>2</sup> steps (no pun intended but half plus half is one).

In a worst case scenario of an array, insertion and removal always happens for every passthrough, and a passthrough for an array that is in descending oder is N - 1, so for a 5 element array we will do 4 passthrough, and for a 20 element array we will do 19 passthrough. And remember insertion and removal happens twice for each passthrough once respectively for insertion and removal. So we can conclude that for an array there are `N - 1` insertions and `N - 1` removals in a worst case scenario.

So now we get (**N<sup>2</sup>** comparisons and shifts combined) + (**N - 1** removals) + (**N - 1** insertions) which will give us N<sup>2</sup> + 2N + 2 steps(remember your equations).

As you already know one major rule of Big O is ignoring constants so we simplify this equation **N<sup>2</sup> + 2N + 2** to **O(N<sup>2</sup> + N)**.

But there is another major rule of Big O notations:

**Big O Notation only takes into account the highest order of N when we have multiple orders of N added together.**

Thus if we have an algorithm that takes N<sup>4</sup> + N<sup>3</sup> + N<sup>2</sup> + N steps we only consider N<sup>4</sup> to be significant and we just call it O(N<sup>4</sup>). As N increases, N<sup>4</sup> becomes so much more significant than any other order of N that the smaller orders are considered trivial.

Consider this suppose we have an array that have 100 elements when we calculate N<sup>4</sup> + N<sup>3</sup> + N<sup>2</sup> + N we get a total of 101,010,100. But we may as well round it up to  100,000,000, which can be achieved by calculation 100<sup>4</sup> or ignoring the lower oder values of N thus only calculating N<sup>4</sup>.

So applying this concept to the insertion sort algorithm we can simplify O(N<sup>2</sup> + N) to **O(N<sup>2</sup>)**. So with this it emerges that in a worst case scenario insertion sort takes as long as a selection and bubble sort algorithms. They are all O(N<sup>2</sup>) when simplified.

In previous chapters we said that the actual time complexity for a selection sort algorithm is N<sup>2</sup> / 2 (but becuase we ignore constants in Big O we ignored the `/ 2`) steps and it's faster than a bubble sort algorithm which have N<sup>2</sup> steps, and also based on this we can say that selection sort is faster than insertion sort algorithm, right? Not really.

### Average Case

We've been talking about the worst case scenario for a very long time, and yes in a wort case scenario selection sort is faster than an insertion sort and bubble sort algorithms. But we must also talk about the average case also. Because the case that happens frequently are average cases. In the real world average cases happens more often than worst and best case scenarios.

Let's examine insertion sort for all cases and see how it compares to insertion sort on the same cases.

We already know that in a worst case scenario an insertion sort algorithm takes N<sup>2</sup> steps.

And in a best case scenario-an array in ascending oder, we only make one comparison per passthrough since every value to the left of the `temporalValue` will be smaller than the temporal value, and we will get to end each passthrough early as we make those comparisons. So basically we will have N - 1 steps for the best case for an insertion sort algorithm but if we ignore the constants we will be left with N steps for a the best case scenario.

And in a random case scenario we will compare and shift some of the data but not all, so we can assume in an average case scenario we will get N<sup>2</sup> / 2 steps.

Let's see an example, let's say we have this array in a best case scenario for this 4 element `[1, 2, 3, 4]` when we use insertion sort to sort this array we will end up with 3 comparisons and 0 shifts, thus 3 steps (equivalent to `N`).

And in an average case scenario with `[1, 3, 4, 2]` array, we will make 4 comparisons and 2 shifts for a total of 6 steps, which will give us an approximately N<sup>2</sup> / 2 steps.

And we already know that in a worst case scenario an insertion sort algorithm takes N<sup>2</sup> steps. Based on this information we can say that an insertion sort algorithm varies in the number of steps or it's time complexity based on the case. For it takes N steps in the best case scenario, N<sup>2</sup> / 2 in an average case scenario, and N<sup>2</sup> in the worst case scenario. And now let's compare this with a selection sort algorithm that takes N<sup>2</sup> / 2 steps (we are not ignoring the constants) in all cases, because it doesn’t have any mechanism for ending a passthrough early at any point. Each passthrough compares every value to the right of the chosen
index no matter what the value. Check out the table below:

|**Type of Algorithm**    |**Best case**    |**Average case**     |**Worst Case**     |
|-------------------------|-----------------|---------------------|-------------------|
|Selection sort           |N<sup>2</sup> / 2|N<sup>2</sup> / 2    |N<sup>2</sup> / 2  |
|Insertion sort           |N                |N<sup>2</sup> / 2    |N<sup>2</sup>      |

So based on all this information we can say that an insertion sort algorithm is the best for a best case scenario, and a selection sort algorithm is best for a worst case scenario, and lastly we can either use a selection sort or insertion sort algorithm for the average case sceanrio.

### A practical example

Let's say we have a program that calculates the intersection between 2 arrays, thus it takes in two arrays as arguments, and check to see values that appear in both arrays and return it. Here is how we would probably implement such an algorithm:

```TypeScript
function unoptimizedIntersection(firstArray: number[], secondArray: number[]) {
  const result = [];
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        result.push(firstArray[i]);
      }
    }
  }
  return result;
}
```

From the above code you will see that the time complexity for the above code is N<sup>2</sup>, why? For the given code we are first running a loop over the first array, and for every value we would reach in the first for loop we also run a second loop that checks(does a comparison) inside the second array if there are any values matching the value of the first loop. So thus if we provide 2 arrays that does not have any identical values and each of them have 5 elements, this code will make 25 comparisons and will still not find any value that is identical. Let's try and understand it a bit. We start the code by running a loop, and since there would be 5 elements in the `firstArray` the first loop will run 5 times, and for every single passthrough we will also run a second loop on the `secondArray` that will check if the value in our `firstArray` will match any value in our `secondArray`: `if (firstArray[i] === secondArray[j]) {`, and that will also run for 5 times because the `secondArray` is also a 5 element array, therefor `5 * 5` will be 25 comparisons made.

And if by chance we find that the array contains matching values we will insert into the `results` array, and in a worst case scenario if all the values in both arrays are the same, that will take a time complexity of N, for the 5 element arrays(first and second array) we are talking about suppose they all the same element that means we will push into the `results` array 5 times. But as we know in Big O the higher oder of N is always taken into account over the lower oder of Ns so we can say that our code takes O(N<sup>2</sup>). Now that's for the worst case scenario when no values are matching, let's take a look at the best case scenario.

Let's say we have two 4 element arrays thus: `[1, 2, 3, 4]` and `[1, 2, 3, 4]`, if we call the `unoptimizedIntersection` function on these arrays it will always take N<sup>2</sup> time complexity. But let's analyze it a little bit and see if there can be any improvements when we are working in a best case scenario.

For the record we only want to see if a value appears in the `firstArray` and also appears in the `secondArray`. So let's say we are running the through the first passthrough of the first loop(so we are basically checking if there is `1` in the second array), we would immediately encounter that there is `1` in the second array, so we will push it into the `result` array: `result.push(firstArray[i]);`, and after pushing it the second loop will continue to run unless it runs out of array elements. So you see we are running into inefficiencies here, the moment we see that a value is in the `secondArray` we don't need to check for all the values remaining in the `secondArray`, because we know that that particular value in the first array has a matching value in the second array. So this means that the moment we see that there is a value in the second array we don't need to complete the passthrough.

So now let's fix it:

```TypeScript
function optimizedIntersection(firstArray: number[], secondArray: number[]) {
  const result = [];
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        result.push(firstArray[i]);
        break;
      }
    }
  }
  return result;
}
```

Now with the introduction of `break` the loop will cut short whenever the if statement finds a value that is a matching value, therefore saving us steps and time.

Although it is still true that in the worst case scenario the code will still take N<sup>2</sup> steps. But in the best case scenario where the arrays have identical values the time is reduced to N. And in an average case we will get a time complexity of somewhere between N and N<sup>2</sup>. And this is a very great improvement over running this code in N<sup>2</sup> steps in all cases.

### Wrap up
