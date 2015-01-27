# Multiples of 3 and 5

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

p Array(1..999).map {|item|
  item = 0 unless(item % 3 == 0 or item % 5 == 0)
  item
}.reduce(:+)

#ruby ruby/001.rb  0.10s user 0.09s system 19% cpu 0.966 total
